function ProductCard({ produto }) {
  return (
    <article className="product-card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <strong>R$ {produto.preco.toFixed(2).replace(".", ",")}</strong>
      <button>Comprar</button>
    </article>
  );
}

export default ProductCard;