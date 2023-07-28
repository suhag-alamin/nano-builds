import pcBuild from "@/assets/images/pc-build.jpg";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Hero = () => (
  <div
    style={{
      padding: "50px 0",
    }}
  >
    <Row gutter={20} align="middle">
      <Col
        lg={{
          span: 12,
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: 10 }}>
          Build your own <br /> PC with us.
        </h1>

        <p style={{ fontSize: "20px" }}>
          Build your own PC with our easy to use PC Builder. Choose from
          1000&apos;s of components and get the best price for your build.
        </p>
        <Button type="primary" style={{ margin: "20px 0" }}>
          <Link href="/pc-builder">Build Now</Link>
        </Button>
      </Col>

      <Col
        lg={{
          span: 12,
        }}
        style={contentStyle}
      >
        <Image
          src={pcBuild}
          alt="Pc build"
          layout="responsive"
          style={{ borderRadius: 10 }}
        />
      </Col>
    </Row>
  </div>
);
export default Hero;
