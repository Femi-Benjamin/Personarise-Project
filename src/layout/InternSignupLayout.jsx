import React from "react";
import { SignupContainer } from "../components";

const InternSignupLayout = () => {
  return (
    <>
      <SignupContainer
        title="Sign up to find work you love"
        link="employer"
        connection="Connect as Founder"
        nextText="Want to employ Interns? "
        isEmployer={false}
      />
    </>
  );
};

export default InternSignupLayout;
