import LoginForm from "components/LoginForm";
import LoginImageSide from "components/LoginImageSide";
import Container from "layouts/Container";
import React from "react";

function Login() {
  return (
    <Container className="!grid grid-cols-2 border m-[5vw] p-4 rounded-lg overflow-hidden">
      <LoginImageSide />
      <LoginForm />
    </Container>
  );
}

export default Login;
