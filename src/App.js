// App.js
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import AboutPage from './components/AboutPage';
// import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
