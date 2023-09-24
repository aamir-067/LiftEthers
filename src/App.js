import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import AllTips from './components/AllTips';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen text-center bg-gradient-to-br from-yellow-50 to-green-100">
      <Navbar />
      <Hero />
      {/* <h1 className='text-4xl font-bolder'>All Contant</h1> */}
      {/* <AllTips /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
