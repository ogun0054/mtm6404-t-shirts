const { useState } = React;

// T-shirt data with image paths matching your folder structure
const initialTshirts = [
  {
    id: 1,
    title: "Blue T-Shirt",
    image: "images/blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
  },
  {
    id: 2,
    title: "Bright Purple T-Shirt",
    image: "images/bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
  },
  {
    id: 3,
    title: "Cobalt Blue T-Shirt",
    image: "images/cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
  },
  {
    id: 4,
    title: "Green T-Shirt",
    image: "images/green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
  },
  {
    id: 5,
    title: "Grey T-Shirt",
    image: "images/grey-t-shirt.jpg",
    price: 4.99,
    stock: 2,
  },
  {
    id: 6,
    title: "Light Green T-Shirt",
    image: "images/light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
  },
  {
    id: 7,
    title: "Purple T-Shirt",
    image: "images/purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
  },
  {
    id: 8,
    title: "Red T-Shirt",
    image: "images/red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
  },
  {
    id: 9,
    title: "Teal T-Shirt",
    image: "images/teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
  },
];

function TShirtShop() {
  const [tshirts, setTshirts] = useState(initialTshirts);

  // Handle buying a t-shirt
  const handleBuy = (id, quantity) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt) =>
        tshirt.id === id
          ? { ...tshirt, stock: Math.max(0, tshirt.stock - quantity) }
          : tshirt
      )
    );

    // Show purchase confirmation
    const boughtTshirt = tshirts.find((t) => t.id === id);
    alert(
      `Purchased ${quantity} ${boughtTshirt.title} for $${(
        boughtTshirt.price * quantity
      ).toFixed(2)}!`
    );
  };

  return (
    <div className="t-shirt-shop">
      <div className="shop-header">
        <h1 className="shop-title">T-Shirt</h1>
      </div>

      <div className="tshirt-grid">
        {tshirts.map((tshirt) => (
          <div className="tshirt-card" key={tshirt.id}>
            <div className="tshirt-image-container">
              <img
                src={tshirt.image}
                alt={tshirt.title}
                className="tshirt-image"
              />
              {/* <div
                className={`stock-badge ${
                  tshirt.stock === 0 ? "out-of-stock" : ""
                }`}
              >
                {tshirt.stock > 0 ? `${tshirt.stock} in stock` : "Sold Out"}
              </div> */}
            </div>

            <div className="tshirt-info">
              <h3 className="tshirt-title">{tshirt.title}</h3>
              <div className="tshirt-price">${tshirt.price.toFixed(2)}</div>

              <div className="stock-info">
                <span className="stock-label">Availability:</span>
                {tshirt.stock > 0 ? (
                  <span className="stock-value">{tshirt.stock} available</span>
                ) : (
                  <span className="out-of-stock-text">Out of Stock</span>
                )}
              </div>
            </div>

            <div className="purchase-section">
              {tshirt.stock > 0 ? (
                <div className="quantity-control">
                  <select
                    className="quantity-select"
                    id={`quantity-${tshirt.id}`}
                    defaultValue={1}
                  >
                    {[...Array(tshirt.stock)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    className="buy-btn"
                    onClick={() => {
                      const quantity = parseInt(
                        document.getElementById(`quantity-${tshirt.id}`).value
                      );
                      handleBuy(tshirt.id, quantity);
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i> Buy
                  </button>
                </div>
              ) : (
                <div className="out-of-stock-badge">
                  <i className="fas fa-ban"></i> Currently Unavailable
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TShirtShop />);
