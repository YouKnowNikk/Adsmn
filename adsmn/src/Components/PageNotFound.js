import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you're looking for does not exist.</p>
      <Link to="/" style={styles.homeButton}>Go to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2em',
    marginBottom: '30px',
  },
  homeButton: {
    padding: '10px 20px',
    backgroundColor: '#e7b463',
    color: '#320071',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1em',
    fontWeight: '700',
    cursor: 'pointer',
  },
};

export default PageNotFound;
