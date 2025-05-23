import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>My App</h2>
      <nav style={styles.nav}>
        {token ? (
          <>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { margin: 0 },
  nav: { display: 'flex', gap: '1rem' },
  link: { color: 'white', textDecoration: 'none' },
  button: {
    background: 'white',
    color: '#007bff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '4px',
  }
};

export default Header;
