import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;