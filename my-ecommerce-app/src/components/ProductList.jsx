// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/api'; // Importa a URL base da API

function ProductList() {
  const [products, setProducts] = useState([]); // Estado para armazenar a lista de produtos
  const [loading, setLoading] = useState(true); // Estado para indicar se os produtos estão sendo carregados
  const [error, setError] = useState(null); // Estado para mensagens de erro

  // useEffect para buscar os produtos quando o componente é montado
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`); // Faz a requisição GET para a API de produtos
        const data = await response.json();

        if (response.ok) {
          setProducts(data); // Atualiza o estado com os produtos recebidos
        } else {
          setError(data.message || 'Falha ao carregar produtos.'); // Define mensagem de erro da API
        }
      } catch (err) {
        console.error('Erro de rede ao buscar produtos:', err);
        setError('Erro de conexão. Não foi possível carregar os produtos.'); // Define erro de rede
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchProducts(); // Chama a função de busca
  }, []); // O array vazio [] como segundo argumento garante que o useEffect rode apenas uma vez (no montagem do componente)

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Carregando produtos...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>Erro: {error}</p>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Nossos Produtos</h2>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Nenhum produto disponível no momento.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Layout responsivo em grid
          gap: '20px',
          justifyContent: 'center'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#fff'
            }}>
              <h3 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#333' }}>{product.name}</h3>
              <p style={{ fontSize: '0.9em', color: '#666', flexGrow: 1 }}>{product.description || 'Sem descrição.'}</p>
              <p style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#007bff', marginTop: '10px' }}>
                R$ {product.price ? product.price.toFixed(2) : '0.00'}
              </p>
              <p style={{ fontSize: '0.85em', color: '#888' }}>Estoque: {product.stock}</p>
              <p style={{ fontSize: '0.85em', color: '#888' }}>
                Categoria: {product.Category ? product.Category.name : 'N/A'}
              </p>
              <button
                style={{
                  marginTop: '15px',
                  padding: '10px 15px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1em'
                }}
              >
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
