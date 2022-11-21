import { useState } from "react";
import Product from "./Product";
import Search from "./Input";

function Card() {
  const [products, setProducts] = useState(Product);
  const [qwery, setQwery] = useState("");

  const detailsHandler = (i) => {
    const newProducts = products.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          isDetails: !item.isDetails,
        };
      }
      return item;
    });
    setProducts(newProducts);
  };

  const addHandler = (i) => {
    const newProducts = products.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          inCard: !item.inCard,
        };
      }
      return item;
    });
    setProducts(newProducts);
  };

  const searchHandler = (e) => {
    setQwery(e.target.value);
  };

  return (
    <>
      <Search searchHandler={searchHandler} setQwery={setQwery} qwery={qwery} />
      <div className="cards-container">
        {products
          .filter((item) =>
            item.name.toLowerCase().includes(qwery.toLocaleLowerCase())
          )
          .map((item, index) => {
            return (
              <div className="item-card" key={index}>
                <div className="image-section">
                  <img src={item.img}></img>
                </div>

                {/* Основная инфа о товаре */}

                <div className="info-seсtion">
                  <div className="main-info-section">
                    <div className="name-price">
                      <h4 className="name">{item.name}</h4>
                      <h3 className="price">{item.price}</h3>
                    </div>

                    <div className="details">
                      <button
                        className="details-btn"
                        onClick={() => detailsHandler(index)}
                      >
                        Details
                      </button>

                      {item.isDetails && (
                        <div className="details-info">
                          <button
                            className="close-btn"
                            onClick={() => detailsHandler(index)}
                          >
                            ×
                          </button>
                          <span className="details-text">{item.details}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <hr />

                  {/* Описание товара */}

                  <div className="secondary-info-section">
                    <p>{item.description}</p>
                  </div>

                  {/* Секция кнопки добавления и удаления товара */}

                  <div className="add-item-section">
                    <button
                      className={`addBtn ${item.inCard ? "addedBtn" : ""}`}
                      onClick={() => addHandler(index)}
                      disabled={item.inCard}
                    >
                      {!item.inCard ? "Добавить в корзину" : "Уже в корзине"}
                    </button>
                    {item.inCard && (
                      <div
                        className="remove-from-card"
                        onClick={() => addHandler(index)}
                      >
                        Убрать товар из корзины
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Card;
