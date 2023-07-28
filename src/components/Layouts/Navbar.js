import logo from "@/assets/images/logo.png";
import {
  HomeOutlined,
  MenuOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Layout, Menu, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const { Header } = Layout;

const ResponsiveNav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="">
      <Header style={{ padding: 0, backgroundColor: "transparent" }}>
        <Row
          justify={{
            xs: "none",
            lg: "space-between",
          }}
          align="middle"
        >
          <Col xs={20} sm={20} md={4}>
            <div className="logo" style={{ color: "", paddingLeft: "20px" }}>
              <Image src={logo} alt="Nano Builds" width={100} height={80} />
            </div>
          </Col>
          <Col xs={0} sm={0} md={20}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link href="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="3" icon={<SettingOutlined />}>
                Settings
              </Menu.Item>
              <Menu.Item key="4">
                <Button type="primary" style={{ marginRight: "10px" }}>
                  Sign in
                </Button>
                <Button>Sign up</Button>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          open={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="4">
              <Button type="primary" style={{ marginRight: "10px" }}>
                Sign in
              </Button>
              <Button>Sign up</Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </div>
  );
};

export default ResponsiveNav;
