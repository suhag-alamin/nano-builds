import RootLayout from "@/components/Layouts/RootLayout";
import Header from "@/lib/Header";
import { Button, Divider, Grid, theme } from "antd";

import cpu from "@/assets/images/cpu-tower.png";
import others from "@/assets/images/keyboard-and-mouse.png";
import monitor from "@/assets/images/monitor.png";
import motherboard from "@/assets/images/motherboard.png";
import psu from "@/assets/images/psu.png";
import ram from "@/assets/images/ram.png";
import ssd from "@/assets/images/ssd.png";
import { removeFromPc } from "@/redux/features/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const featuredCategories = [
  {
    _id: "1",
    name: "CPU / Processor",
    icon: cpu,
    path: "cpu",
  },
  {
    _id: "2",
    name: "Motherboard",
    icon: motherboard,
    path: "motherboard",
  },
  {
    _id: "3",
    name: "RAM",
    icon: ram,
    path: "ram",
  },
  {
    _id: "4",
    name: "Power Supply Unit",
    icon: psu,
    path: "psu",
  },
  {
    _id: "5",
    name: "Storage Device",
    icon: ssd,
    path: "storage",
  },
  {
    _id: "6",
    name: "Monitor",
    icon: monitor,
    path: "monitor",
  },
  {
    _id: "7",
    name: "Others",
    icon: others,
    path: "others",
  },
];

const { useBreakpoint } = Grid;

const PCBuilder = () => {
  const dispatch = useDispatch();

  const pcComponents = useSelector((state) => state.pcBuilder.pc);

  const breakpoints = useBreakpoint();
  const isMobile = !breakpoints.md;
  const {
    token: { colorInfo, colorPrimary, colorError },
  } = theme.useToken();
  return (
    <div>
      <Header title="PC Builder" />
      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? 20 : 30,
            color: colorPrimary,
            marginBottom: "10px",
          }}
        >
          PC Builder - Build your own PC here!
        </h1>
        <Divider />
        <div>
          <h3
            style={{
              fontSize: isMobile ? 18 : 24,
              color: colorInfo,
              marginBottom: "40px",
            }}
          >
            Components
          </h3>
          <div>
            {featuredCategories?.map((category) => (
              <div
                style={{
                  margin: "10px 0",
                  border: "1px solid #ddd",
                  borderRadius: 5,
                  padding: 20,
                }}
                key={category?._id}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <Image
                      src={category?.icon}
                      alt={category?.name}
                      width={isMobile ? 30 : 50}
                      height={isMobile ? 30 : 50}
                    />
                    <h3
                      style={{
                        fontSize: isMobile ? 12 : 16,
                        textAlign: "center",
                      }}
                    >
                      {category?.name}
                    </h3>
                  </div>
                  <div>
                    <Button>
                      <Link href={`/pc-builder/choose/${category.path}`}>
                        Choose
                      </Link>
                    </Button>
                  </div>
                </div>
                <div
                  style={{
                    margin: "10px 0",
                  }}
                >
                  {pcComponents?.[category.path]?.name && (
                    <>
                      <Divider />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 14,
                          margin: 20,
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                          }}
                        >
                          <Image
                            src={pcComponents?.[category.path]?.image}
                            alt={pcComponents?.[category.path]?.name}
                            width={isMobile ? 20 : 40}
                            height={isMobile ? 20 : 40}
                          />
                          <h3
                            style={{
                              fontSize: isMobile ? 10 : 14,
                              textAlign: "center",
                            }}
                          >
                            {pcComponents?.[category.path]?.name}
                          </h3>
                        </div>
                        <Button
                          onClick={() =>
                            dispatch(removeFromPc({ category: category.path }))
                          }
                          style={{
                            backgroundColor: !isMobile && colorError,
                            fontSize: isMobile ? 10 : 14,
                          }}
                          type={isMobile ? "text" : "primary"}
                        >
                          Remove
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            {Object.keys(pcComponents).length === 7 &&
              Object.values(pcComponents).every(
                (component) => component?.name
              ) && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: colorInfo,
                    }}
                    type="primary"
                    onClick={() => alert("Successfully built PC!")}
                  >
                    Complete Build
                  </Button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
