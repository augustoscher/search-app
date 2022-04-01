import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Posts from './pages/Posts';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">TV Series</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
