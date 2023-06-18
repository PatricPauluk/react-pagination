// CSS
import './App.css';

// Hooks
import { useEffect, useState } from 'react';

// API das Cryptomoedas
import api from './services/api';

function App() {

  const [ coins, setCoins ] = useState([]);

  // useEffect contém a função handleData que busca e retorna os dados das moedas
  useEffect(() => {
    const handleData = async () => {
      const res = await api.get();
      setCoins(res.data);
      console.log(res.data);
    }
    handleData();
  }, []);
  

  return (
    <div>
    </div>
  );
}

export default App;
