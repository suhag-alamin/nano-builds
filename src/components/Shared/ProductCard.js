import { UserOutlined } from "@ant-design/icons";
import { Button, Card, Rate, theme } from "antd";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, children }) => {
  const { Meta } = Card;

  const {
    token: { colorInfo, colorPrimary },
  } = theme.useToken();
  return (
    <Card
      style={{ height: "100%" }}
      hoverable
      cover={
        <Image
          src={product?.image}
          width={350}
          height={350}
          layout="responsive"
          alt="news image"
        />
      }
    >
      <Meta
        style={{
          color: colorPrimary,
          marginBottom: "5px",
        }}
        title={product?.name}
      />
      <h4 style={{ marginBottom: "5px" }}>
        Category: <span>{product?.category}</span>
      </h4>
      <h6 style={{ marginBottom: "5px", fontSize: 12 }}>
        Status: <span>{product?.status}</span>
      </h6>
      <h5 style={{ marginBottom: "5px", color: colorPrimary }}>
        Price: <span>${product?.price}</span>
      </h5>

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

      <p style={{ fontSize: "15px" }}>
        {product?.description.length > 100
          ? product?.description.slice(0, 70) + "..."
          : product?.description}
      </p>

      {!children && (
        <Button style={{ marginTop: "20px" }} type="primary">
          <Link href={`/products/${product?._id}`}>Details</Link>
        </Button>
      )}
      {children && <div style={{ marginTop: "20px" }}>{children}</div>}
    </Card>
  );
};

export default ProductCard;
