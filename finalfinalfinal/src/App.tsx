import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
//import LoginPage from './pages/LoginPage';
import ThesisListPage from './pages/ThesisListPage';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<Navigate to="/ThesisListPage" replace />} />
          <Route
            path="/theses"
            element={
              // <ProtectedRoute>
              <ThesisListPage />
              // </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/ThesisListPage" replace />} />
        </Routes>
        <Toaster position="top-right" />
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;

//          <Route path="/login" element={<LoginPage />} />
