import { Button } from "antd";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <Button><Link href="/auth/login">Login</Link></Button>
    </div>
  );
}
