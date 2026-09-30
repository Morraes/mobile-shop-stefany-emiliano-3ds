function ProductCard({ produto }) {
  return (
    <article className="product-card">
      <span className="category-tag">{produto.categoria}</span>
      <div className="image-wrapper">
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <div className="card-content">
        <h3>{produto.nome}</h3>
        <p className="description">{produto.descricao}</p>
        <div className="card-footer">
          <div className="price-tag">
            <span className="price-label">Por apenas</span>
            <strong>R$ {produto.preco.toFixed(2).replace(".", ",")}</strong>
          </div>
          <button className="buy-button">Comprar ⚡</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;