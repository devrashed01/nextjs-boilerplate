"use client";

import { Button, Form, Input, Typography } from "antd";


const { Title } = Typography;

export default function page() {
  const handleSubmit = (values:string) => {
    console.log(values)
  };

  return (
    <Form onFinish={handleSubmit}>
      <Title level={3} style={{ marginBottom: 0 }}>
            Ant Design (With Sub Components)
          </Title>
      <Input
        name="username"
        placeholder="Username"
      />
      <Input
        name="email"
        placeholder="Email"
      />
      <Button>Login button</Button>
    </Form>
  );
}
