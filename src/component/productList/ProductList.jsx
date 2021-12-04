import "./productList.css"
import Product from "../product/Product"
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">
          Create & inspire. It's Lama
        </h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting
        </p>
      </div>
      <div className="pl-list">
        <Product/>
      </div>
    </div>
  );
}

export default ProductList;