import { Layout, theme } from "antd";
import Navbar from "./Navbar";
const { Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </>
  );
};
export default RootLayout;
