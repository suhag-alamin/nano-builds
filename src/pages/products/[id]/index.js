import RootLayout from "@/components/Layouts/RootLayout";
import { apiLink } from "@/lib/config";
import { UserOutlined } from "@ant-design/icons";
import { Col, Divider, Grid, Rate, Row, theme } from "antd";
import Image from "next/image";
const { useBreakpoint } = Grid;

const ProductDetails = ({ product }) => {
  console.log(product);

  const {
    token: { colorInfo, colorPrimary },
  } = theme.useToken();

  const breakpoints = useBreakpoint();

  const isMobile = !breakpoints.md;

  return (
    <div
      style={{
        padding: isMobile ? "20px 0px" : "50px 0px",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <Image
            src={product?.image}
            width={500}
            height={500}
            layout="responsive"
            alt="news image"
          />
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? 24 : 30,
              color: colorPrimary,
              marginBottom: "10px",
            }}
          >
            {product?.name}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <h4 style={{ color: colorInfo }}>
              Price: <span>${product?.price}</span>
            </h4>
            <h4 style={{ color: colorInfo }}>
              Category: <span>{product?.category}</span>
            </h4>
            <h4 style={{ color: colorInfo }}>
              Status: <span>{product?.status}</span>
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginBottom: "5px",
            }}
          >
            <Rate disabled allowHalf defaultValue={product?.average_rating} />
            <p
              style={{
                color: colorInfo,
                fontWeight: 700,
              }}
            >
              <UserOutlined />
              {product?.reviews}
            </p>
          </div>
          <Divider />
          <p style={{ fontSize: "15px" }}>
            {product?.description.length > 100
              ? product?.description.slice(0, 70) + "..."
              : product?.description}
          </p>
          <div
            style={{
              margin: "20px 0",
            }}
          >
            <h3>Key Features</h3>
            <ul
              style={{
                margin: "10px 0",
                paddingLeft: "20px",
              }}
            >
              {Object.entries(product?.key_features).map(
                ([property, value]) => (
                  <li key={property}>{`${property}: ${value}`}</li>
                )
              )}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${apiLink}/api/products`);
  const products = await res.json();

  const paths = products?.data.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`${apiLink}/api/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product: product?.data,
    },
  };
};
