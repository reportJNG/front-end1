
import Home from './pages/Home';
import Layout from './componants/Layout';
import { BrowserRouter } from 'react-router-dom'; 
import RouterComponents from './routes/Router';

function App() {
  return (
    <BrowserRouter>
  
    <RouterComponents></RouterComponents>
  
    </BrowserRouter>
  );
}

export default App;
