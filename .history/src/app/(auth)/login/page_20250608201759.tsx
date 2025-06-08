import LoginComponent from "@/features/login/LoginComponent";
import React from "react";
import Layout from "./layout";
import Slider from "@/features/login/Slider";

const Login = () => {
  return (
    <Layout slider={<Slider />}>
      <LoginComponent />
    </Layout>
  );
};

export default Login;
