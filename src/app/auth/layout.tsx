import AuthLayoutWrapper from "@/components/layouts/AuthLayout";
import { Card } from "antd";
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
    <AuthLayoutWrapper>
      <Card>{children}</Card>
    </AuthLayoutWrapper>
  );
}
