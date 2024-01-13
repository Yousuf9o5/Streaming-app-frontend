import FormLeftSide from "components/FormLeftSideSide";
import SignupForm from "components/signupForm";
import Container from "layouts/Container";
import React from "react";

function register() {
  return (
    <Container className="!grid grid-cols-2 border m-[5vw] p-4 rounded-[2rem] overflow-hidden">
      <FormLeftSide />
      <SignupForm />
    </Container>
  );
}

export default register;
