import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMH | Login",
  description: "BMH description",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center h-screen">
      <div className="m-auto w-96">
        <h3 className="text-center text-xl font-semibold mb-6">Login</h3>
        <div className="border border-gray-100 rounded-md p-10">{children}</div>
      </div>
    </div>
  );
}
