import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState([]);

  const getUsersFromJsonPlaceHolder = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUsers(data);
    } catch (error) {
      console.log('error======> ', error.message)
    }
  }

  useEffect(() => {
    getUsersFromJsonPlaceHolder();
  }, [])


  return (
    <div className="App">
      <HomePage users={users} />
    </div>
  );
}

export default App;
