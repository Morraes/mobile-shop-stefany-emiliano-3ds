import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <main className="main-content">
      <h2>Nossos Produtos</h2>
      <div className="products-grid">
        {products.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </main>
  );
}

export default Home;