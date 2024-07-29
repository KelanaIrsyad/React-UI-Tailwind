import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import FlashSale from './components/Flashsale/FlashSale';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlashSale />
      <Product />
      <Footer />
    </div>
  )
}

export default App