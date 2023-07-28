import { Col, Grid, Row } from "antd";
import ProductCard from "../Shared/ProductCard";
const { useBreakpoint } = Grid;

const FeaturedProducts = ({ featuredProducts }) => {
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
        Featured Products
      </h3>
      <Row gutter={[16, 16]}>
        {featuredProducts?.map((product) => (
          <Col
            key={product?._id}
            xs={{
              span: 24,
            }}
            sm={{
              span: 12,
            }}
            lg={{
              span: 8,
            }}
            xl={{
              span: 8,
            }}
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProducts;
