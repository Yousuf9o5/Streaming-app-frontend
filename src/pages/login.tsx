import LoginForm from "components/LoginForm";
import FormLeftSide from "components/FormLeftSideSide";
import Container from "layouts/Container";
import React from "react";

function Login() {
  return (
    <Container className="!grid grid-cols-2 border my-[5vw] mx-[10vw] p-4 rounded-[2rem] overflow-hidden">
      <FormLeftSide />
      <LoginForm />
    </Container>
  );
}

export default Login;
