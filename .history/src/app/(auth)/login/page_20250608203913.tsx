import LoginComponent from "@/features/login/LoginComponent";
import React from "react";
import Layout from "./layout";
import Sliders from "@/features/login/Slider";

const Login = () => {
  return (
    <Layout slider={<Sliders />}>
      <LoginComponent />
    </Layout>
  );
};

export default Login;
