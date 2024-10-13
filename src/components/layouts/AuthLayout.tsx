"use client";

import { Center } from "./style";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayoutWrapper({ children }: AuthLayoutProps) {
  return (
    <Center>
      <div>{children}</div>
    </Center>
  );
}
