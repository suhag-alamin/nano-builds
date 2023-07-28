import { Layout, theme } from "antd";
import Link from "next/link";
import Navbar from "./Navbar";
const { Content, Footer } = Layout;
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const RootLayout = ({ children }) => {
  const breakpoints = useBreakpoint();

  const isMobile = !breakpoints.md;
  return (
    <>
      <Navbar />
      <Content style={{ padding: isMobile ? "0 20px" : "0 50px" }}>
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
