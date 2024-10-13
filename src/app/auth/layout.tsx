import { Button, Card } from "antd";
import type { Metadata } from "next";
import Link from "next/link";

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
    <div>
        <Card>{children}</Card>
        <Button><Link href="/">Go back home</Link></Button>
    </div>
  );
}
