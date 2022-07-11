import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListCars from './components/ListCars/Cars';
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/cars"
          element={(
            <Protected>
              <Dashboard />
            </Protected>
            )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
