    // src/components/Login.jsx
    import React, { useState } from 'react';
    import { useAuth } from '../context/AuthContext'; // Importa o hook useAuth
    import { API_BASE_URL } from '../config/api'; // Importa a URL base da API

    function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null); // Estado para mensagens de erro
      const [loading, setLoading] = useState(false); // Estado para indicar carregamento

      const { login } = useAuth(); // Pega a função de login do contexto

      const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
        setError(null); // Limpa erros anteriores
        setLoading(true); // Ativa o estado de carregamento

        try {
          const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json(); // Tenta parsear a resposta como JSON

          if (response.ok) { // Se a resposta for 200 OK
            login(data.token); // Chama a função login do contexto, passando o token
            // Não precisa de alert aqui, o App.jsx vai mudar a UI
          } else {
            // Se a resposta não for OK, exibe a mensagem de erro da API
            setError(data.message || 'Falha no login. Verifique suas credenciais.');
          }
        } catch (err) {
          // Erro de rede ou outro erro inesperado
          console.error('Erro de rede durante o login:', err);
          setError('Erro de conexão. Por favor, tente novamente.');
        } finally {
          setLoading(false); // Desativa o estado de carregamento, independente do resultado
        }
      };

      return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <label htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                id="loginEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label htmlFor="loginPassword">Senha:</label>
              <input
                type="password"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <button type="submit" disabled={loading} style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          </form>
        </div>
      );
    }

    export default Login;
    