import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UsagePage from './pages/UsagePage';
import ApplicationsPage from './pages/ApplicationsPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <div className="shell-glow" />
        <Navbar />
        <main className="relative z-10 px-2 pt-2 md:px-4 md:pt-4">
          <div className="page-wrap max-w-7xl">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/usage" element={<UsagePage />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
