import { Col, Grid, Row } from "antd";
import cpu from "@/assets/images/cpu-tower.png";
import others from "@/assets/images/keyboard-and-mouse.png";
import monitor from "@/assets/images/monitor.png";
import motherboard from "@/assets/images/motherboard.png";
import psu from "@/assets/images/psu.png";
import ram from "@/assets/images/ram.png";
import ssd from "@/assets/images/ssd.png";
import Image from "next/image";
import Link from "next/link";

const { useBreakpoint } = Grid;

const featuredCategories = [
  {
    _id: "1",
    name: "CPU / Processor",
    icon: cpu,
    link: "/cpu",
  },
  {
    _id: "2",
    name: "Motherboard",
    icon: motherboard,
    link: "/motherboard",
  },
  {
    _id: "3",
    name: "RAM",
    icon: ram,
    link: "/ram",
  },
  {
    _id: "4",
    name: "Power Supply Unit",
    icon: psu,
    link: "/psu",
  },
  {
    _id: "5",
    name: "Storage Device",
    icon: ssd,
    link: "/storage",
  },
  {
    _id: "6",
    name: "Monitor",
    icon: monitor,
    link: "/monitor",
  },
  {
    _id: "7",
    name: "Others",
    icon: others,
    link: "/others",
  },
];

const FeaturedCategory = () => {
  const breakpoints = useBreakpoint();

  const isMobile = !breakpoints.md;
  return (
    <div
      style={{
        padding: "20px 0",
      }}
    >
      <h3
        style={{
          fontSize: isMobile ? 20 : 36,
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Featured Category
      </h3>
      <Row gutter={[16, 16]}>
        {featuredCategories?.map((category) => (
          <Col
            key={category?._id}
            xs={{
              span: 24,
            }}
            sm={{
              span: 12,
            }}
            lg={{
              span: 6,
            }}
          >
            <Link href={`/category${category?.link}`}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #ddd",
                  borderRadius: 5,
                  padding: 20,
                  height: 200,
                }}
              >
                <Image
                  src={category?.icon}
                  alt={category?.name}
                  width={100}
                  height={100}
                />
                <h3
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    margin: "20px 0",
                  }}
                >
                  {category?.name}
                </h3>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedCategory;
