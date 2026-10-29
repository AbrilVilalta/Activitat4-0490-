import { useState, useEffect } from "react";
import ProductList from "./ProductsList";
import './ButtonFilter.css';

function getCookie (name) {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((item) => 
    item.startsWith(name+"=")
  );
  if (!cookie) return null;

  return decodeURIComponent(
    cookie.substring(name.length +1)
  )
}

function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=10000; SameSite=Lax` // Accent obert +  espai || encodeURIComponent per a que no entrin caracters estranys ||SameSite nomes en el doc on l'hem guardada
}

function ButtonFilter({ productes }){

    const preus = productes.map(producte => producte.price);
    const [preuMin, setPreuMin] = useState(0);
    const [preuMax, setPreuMax] = useState(0);

    const [preuSeleccionat, setPreuSeleccionat] = useState(() => {
        return getCookie("preu") || 0});

    useEffect(() => {
        if (productes.length > 0) {
            const preus = productes.map(producte => producte.price);
            const minim = Math.min(...preus);
            const maxim = Math.max(...preus);

            setPreuMin(minim);
            setPreuMax(maxim);
            if (preuSeleccionat === 0) setPreuSeleccionat(maxim);
        }
    }, [productes]);

    const [categoria, setCategoria] = useState(() => {
        return getCookie("categoria") || "Tots"});

    const [rate, setRate] = useState(() => {
        return getCookie("rate") || 0});

   const productesFiltrats = productes.filter((producte) => {
        const coincideixCategoria =
            categoria === 'Tots' ||
            categoria === producte.category;
        
        const coinsideixRate = 
            rate === 0 ||
            ( rate <= producte.rating.rate);

        const coincideixPreu =
            producte.price <= preuSeleccionat;

        return (
            coincideixCategoria &&
            coinsideixRate &&
            coincideixPreu
        );
   });

    useEffect(() => {
        setCookie("preu", preuSeleccionat);
    }, [preuSeleccionat]);

    useEffect(() => {
        setCookie("rate", rate);
    }, [rate]);

    useEffect(() => {
        setCookie("categoria", categoria);
    }, [categoria]);

    return(
        <>
            <div className="button-filter">
                <h2 className="filter-title">Troba el teu objecte ideal</h2>

                <div className="filters-row">
                    <select
                        className="category-select"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="Tots">Totes les categories</option>

                        {[...new Set(productes.map(producte => producte.category))]
                            .map(categoria => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                    </select>

                    <div className="rating-filter">
                        {[1, 2, 3, 4, 5].map(estrelles => (
                            <button
                                key={estrelles}
                                type="button"
                                className={`rating-button ${rate === estrelles ? 'active' : ''}`}
                                onClick={() => setRate(estrelles)}
                                aria-label={`${estrelles} estrelles o més`}
                            >
                                ★
                            </button>
                        ))}
                    </div>

                    <div className="price-filter">
                        <label className="price-label">
                            Preu màxim: <strong>{preuSeleccionat} €</strong>
                        </label>

                        <input
                            className="price-range"
                            type="range"
                            min={preuMin}
                            max={preuMax}
                            value={preuSeleccionat}
                            step="1"
                            onChange={(e) => setPreuSeleccionat(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>

            <ProductList productes={productesFiltrats}/>
        </>
    )

}

export default ButtonFilter;