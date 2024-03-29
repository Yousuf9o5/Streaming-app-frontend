import Header from "components/Header";
import Introduction from "components/Introduction";
import Features from "components/Features";
import Container from "layouts/Container";
import React from "react";

function Index() {
  return (
    <Container className="!grid m-auto justify-center w-[min(100%,_65rem)] overflow-hidden">
      <Header />
      <Introduction />
      <Features />
    </Container>
  );
}

export default Index;
