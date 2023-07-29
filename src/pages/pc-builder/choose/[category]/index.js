import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/Shared/ProductCard";
import Header from "@/lib/Header";
import { apiLink } from "@/lib/config";
import { addToPc } from "@/redux/features/pcBuilder/pcBuilderSlice";
import { Button, Col, Row } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ChooseSingleCategory = ({ products }) => {
  const router = useRouter();
  const { category } = router.query;

  const dispatch = useDispatch();

  const handleAddToBuilder = (product) => {
    const data = {
      category,
      product,
    };
    dispatch(addToPc(data));
    router.push("/pc-builder");
  };

  return (
    <div>
      <Header title={`${category.toUpperCase()} - Category`} />
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
            <ProductCard product={product}>
              <Button
                onClick={() => handleAddToBuilder(product)}
                type="primary"
              >
                Add To Builder
              </Button>
            </ProductCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChooseSingleCategory;

ChooseSingleCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const category = params.category;

  const res = await fetch(`${apiLink}/api/products/category/${category}`);
  const products = await res.json();

  return {
    props: {
      products: products?.data,
    },
  };
};
