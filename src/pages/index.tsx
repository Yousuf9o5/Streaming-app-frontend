import Header from "components/Header";
import Introduction from "components/Introduction";
import Features from "components/Features";
import Container from "layouts/Container";
import React from "react";
import VideoStream from "./stream";

function Index() {
  return (
    <Container className="!grid m-auto justify-center w-[min(100%,_65rem)] overflow-hidden">
      <Header />
      <Introduction />
      <VideoStream/>
      <Features />
    </Container>
  );
}

export default Index;
