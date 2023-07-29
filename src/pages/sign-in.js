import RootLayout from "@/components/Layouts/RootLayout";
import LoginForm from "@/components/Login/LoginForm";
import Header from "@/lib/Header";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  console.log(router.query.callbackUrl);
  return (
    <div>
      <Header title="Login" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            width: "100%",
            maxWidth: 400,
            padding: "40px 20px",
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            <strong>Login</strong> to your account
          </h3>
          <div>
            <Button
              style={{
                width: "100%",
              }}
              type="primary"
              icon={<GoogleOutlined />}
              size="large"
              onClick={() =>
                signIn("google", {
                  callbackUrl: router.query.callbackUrl || "/",
                })
              }
            >
              Login with Google
            </Button>
          </div>
          <Divider />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
