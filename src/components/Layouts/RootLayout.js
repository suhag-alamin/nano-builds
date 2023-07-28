import { Layout, theme } from "antd";
import Link from "next/link";
import Navbar from "./Navbar";
const { Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>
        <div
          style={{
            marginTop: "40px",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        NanoBuilds ©2023 Created by{" "}
        <Link href="https://suhag.me" target="_blank">
          Suhag
        </Link>
      </Footer>
    </>
  );
};
export default RootLayout;
