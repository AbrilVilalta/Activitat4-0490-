import { useState, useEffect } from 'react';
import './App.css';
import ButtonFilter from './components/ButtonFilter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [productes, setProductes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getProductes(){

        try {

          const responece = await fetch( 'https://fakestoreapi.com/products/' );

            if (!responece.ok) {
                throw new Error("Error carragan la resposta")
            }

            const data = await responece.json();
            setProductes(data);

        } catch(err) {
            console.error('Error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }

    }

    getProductes();

  }, []);

  return (
    <div className='app'>
      <div className="page-shell">
          <Header />

          <main>
              <ButtonFilter productes={productes} />
          </main>

          <Footer />
      </div>
    </div>
  )
}

export default App
