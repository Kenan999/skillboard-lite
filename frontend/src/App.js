import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Ensure firebase is set up properly
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>

      <h1>Welcome to Skillboard Lite</h1>

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
  <Route path="/profile" element={user ? <Profile /> : <Login />} />
  <Route path="/search" element={user ? <Search /> : <Login />} />
  {/* Debugging */}
  <Route path="*" element={<div>Route not found</div>} />
</Routes>
    </div>
  );
}

export default App;
