import { useParams } from "@solidjs/router";
import PageLayout from "./layout/Layout";
import { createResource, Show } from "solid-js";

async function fetchProducts(type: any) {
  const res = await fetch(`http://localhost:4000/products/${type}`);
  return res.json();
}

const SectionPage = () => {
  const params = useParams();
  const [products] = createResource(params.type, fetchProducts);

  return (
    <PageLayout>
      <Show when={products()} fallback={<p>Loading...</p>}>
        <p class="title-group">{params.type}</p>
        <div class="product-group-cart"></div>
      </Show>
    </PageLayout>
  );
};

export default SectionPage;
