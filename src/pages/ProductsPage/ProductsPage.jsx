import { getProducts } from '../../api/fakeApi';
import { ProductList } from '../../components/ProductList/ProductList';
// import { ProductList } from '../components/ProductList';
// import { getProducts } from '../fakeApi';

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}


