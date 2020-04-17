import React, { useState } from "react";
import Step1 from "./Step1";

const Signup = () => {
  const [stage, setStage] = useState(1);

  return <>{stage === 1 && <Step1 />}</>;
};

export default Signup;
