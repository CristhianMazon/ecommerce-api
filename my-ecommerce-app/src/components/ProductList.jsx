// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        } else {
          setError(data.message || 'Falha ao carregar produtos.');
        }
      } catch (err) {
        console.error('Erro de rede ao buscar produtos:', err);
        setError('Erro de conexão. Não foi possível carregar os produtos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Carregando produtos...</p>;
  }

  if (error) {
    return <p className="error-message">Erro: {error}</p>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#f0f0f0' }}>Nossos Produtos</h2> {/* Título principal dos produtos */}
      {products.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#f0f0f0' }}>Nenhum produto disponível no momento.</p>
      ) : (
        // Usa a classe "product-grid" para o container dos produtos
        <div className="product-grid">
          {products.map((product) => (
            // Usa a classe "product-card" para cada produto individual
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description || 'Sem descrição.'}</p>
              <p className="price">
                R$ {product.price ? product.price.toFixed(2) : '0.00'}
              </p>
              <p className="stock-category">Estoque: {product.stock}</p>
              <p className="stock-category">
                Categoria: {product.Category ? product.Category.name : 'N/A'}
              </p>
              <button>
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
