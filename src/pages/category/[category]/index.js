import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/Shared/ProductCard";
import { apiLink } from "@/lib/config";
import { Col, Row } from "antd";

const SingleCategory = ({ products }) => {
  console.log(products);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {products?.map((product) => (
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

export default SingleCategory;

SingleCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const categories = [
    {
      name: "cpu",
    },
    {
      name: "motherboard",
    },
    {
      name: "ram",
    },
    {
      name: "psu",
    },
    {
      name: "storage",
    },
    {
      name: "monitor",
    },
    {
      name: "others",
    },
  ];

  const paths = categories.map((category) => ({
    params: { category: category.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const category = params.category;

  const res = await fetch(`${apiLink}/api/products/category/${category}`);
  const products = await res.json();

  return {
    props: {
      products: products?.data,
    },
  };
};
