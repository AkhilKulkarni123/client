import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LessonPage from './LessonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
