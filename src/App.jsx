import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage';
import HalfPage from './pages/HalfPage/HalfPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
