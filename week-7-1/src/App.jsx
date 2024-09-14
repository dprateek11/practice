import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Landing } from './components/Landing';
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>}></Route>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default App;
