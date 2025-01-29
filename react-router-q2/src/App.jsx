import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to the Users App</h1>
      <nav>
        <Link to="/users">View Users</Link>
      </nav>
    </div>
  );
}

export default App;