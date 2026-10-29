
import { useState, useEffect } from 'react';
import './ProductsList.css';


function ProductList({ productes }) {
    if (productes.length === 0) {
        return (
            <div className="no-products">
                <h3>No hem trobat cap producte</h3>
                <p>Prova de canviar els filtres.</p>
            </div>
        );
    }

    return (
        <div className="products-list">
            {productes.map(producte => (
                <article className="product-card" key={producte.id}>
                    <div className="product-image-container">
                        <img
                            className="product-image"
                            src={producte.image}
                            alt={producte.title}
                            loading="lazy"
                        />

                        <button
                            type="button"
                            className="product-favorite"
                            aria-label={`Afegir ${producte.title} als preferits`}
                        >
                            ♡
                        </button>
                    </div>

                    <div className="product-info">
                        <h3 className="product-name">{producte.title}</h3>

                        <p className="product-price">
                            {producte.price} €
                        </p>

                        <span className="product-rating">
                            ★ {producte.rating.rate}
                        </span>

                        <button
                            type="button"
                            className="product-add-button"
                            aria-label={`Afegir ${producte.title} a la cistella`}
                        >
                            +
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default ProductList;