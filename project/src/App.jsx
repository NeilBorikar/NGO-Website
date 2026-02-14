import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { GalleryPage } from './pages/GalleryPage';
import { UserManualPage } from './pages/UserManualPage';

function AppContent() {
  const location = useLocation();
  
  const getPageFromPath = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/dashboard':
        return 'dashboard';
      case '/features':
        return 'features';
      case '/gallery':
        return 'gallery';
      case '/user-manual':
        return 'manual';
      default:
        return 'home';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={getPageFromPath()} onNavigate={() => {}} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/user-manual" element={<UserManualPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
