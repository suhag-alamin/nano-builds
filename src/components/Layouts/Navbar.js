import logo from "@/assets/images/logo.png";
import { HomeOutlined, LaptopOutlined, MenuOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
  theme,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    key: "1",
    label: <Link href="/category/cpu">CPU / Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/category/motherboard">Motherboard</Link>,
  },
  {
    key: "3",
    label: <Link href="/category/ram">RAM</Link>,
  },
  {
    key: "4",
    label: <Link href="/category/psu">PSU</Link>,
  },
  {
    key: "5",
    label: <Link href="/category/storage">Storage</Link>,
  },
  {
    key: "6",
    label: <Link href="/category/monitor">Monitor</Link>,
  },
  {
    key: "7",
    label: <Link href="/category/others">Others</Link>,
  },
];

const { Header } = Layout;

const ResponsiveNav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const {
    token: { colorInfo },
  } = theme.useToken();

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
          <Col xs={0} sm={0} md={12}>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link href="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<LaptopOutlined />}>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Space>Categories</Space>
                </Dropdown>
              </Menu.Item>

              <Menu.Item key="4">
                <Button type="primary" style={{ backgroundColor: colorInfo }}>
                  <Link href="/pc-builder">PC Builder</Link>
                </Button>
              </Menu.Item>
              <Menu.Item key="5">
                <Button type="primary" style={{ marginRight: "10px" }}>
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button>
                  <Link href="/sign-up">Sign up</Link>
                </Button>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item onClick={onClose} key="1" icon={<HomeOutlined />}>
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                dropdownRender={(menu) => (
                  <div onClick={onClose} style={{ padding: "10px" }}>
                    {menu}
                  </div>
                )}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Categories</Space>
                </a>
              </Dropdown>
            </Menu.Item>

            <Menu.Item onClick={onClose} key="4">
              <Button type="primary" style={{ backgroundColor: colorInfo }}>
                <Link href="/pc-builder">PC Builder</Link>
              </Button>
            </Menu.Item>
            <Menu.Item onClick={onClose} key="5">
              <Button type="primary" style={{ marginRight: "10px" }}>
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button>
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </div>
  );
};

export default ResponsiveNav;
