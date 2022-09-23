import Container from './components/Container';
import Navbar from './components/Navbar';
import Overlay from './components/Overlay';
import Product from './components/Product';
import Social from './components/Social';
import Strips from './components/Strips';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Overlay />
      <Container /> 
      <Strips />
      <Navbar />   
      <Social />
      <Product />
    </>
  );
}