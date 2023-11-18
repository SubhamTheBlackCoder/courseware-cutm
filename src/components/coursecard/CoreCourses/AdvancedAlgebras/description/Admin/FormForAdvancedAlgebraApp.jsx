import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../../../styles/Form.css';
import { useNavigate } from 'react-router-dom';

const FormForAdvancedAlgebraApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUserId, setRegisteredUserId] = useState('');
  const [users, setUsers] = useState([]);
  const [loginStatus, setLoginStatus] = useState('');
  const history= useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9090/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users', error);
      });
  }, []);

  const handleRegister = () => {
    axios.post('http://localhost:9090/register', { username, password })
      .then(response => {
        setRegisteredUserId(response.data);
        setUsername('');
        setPassword('');
        alert('User registered successfully!');
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          alert('Username already exists');
        } else {
          alert('Registration failed');
        }
      });
  };

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setLoginStatus('Login Successful');
      history('/course/core-course/Advanced-algebra/description/users/detail-form');
    } else {
      setLoginStatus('User not found ');
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="container">
      <h2 className='Admin'>Admin</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field" 
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleRegister} className="register-button">Register</button>
      <button onClick={handleLogin} className="login-button">Login</button>

      {registeredUserId && <p>User registered with ID: {registeredUserId}</p>}
      {loginStatus && <p className="status">{loginStatus}</p>}
    </div>
    
  );
};

export default FormForAdvancedAlgebraApp;
