import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import AllTips from './components/AllTips';
import Hero from './components/Hero';
import { useState, createContext, useEffect } from 'react';

const allContexts = createContext();
function App() {
  const [web3Api, setWeb3Api] = useState({ provider: null, contract: null, signer: null });
  const [allTips, setAllTips] = useState(null);


  useEffect(() => {
    const showTips = () => {

      console.log(Array.isArray(allTips));
      console.log(allTips[0][0]);
      console.log(allTips[0][1]);
      console.log(allTips[0][2]);
      console.log(allTips[0][3]);
      console.log(allTips[0][4]);
    }
    allTips && showTips();
  }, [allTips]);

  return (
    <div className="min-h-screen text-center bg-gradient-to-br from-yellow-50 to-green-100 overflow-x-hidden">
      <allContexts.Provider value={{ web3Api, setWeb3Api, setAllTips, allTips }}>
        <Navbar />
        <Hero />
        <AllTips />
        {/* <Footer /> */}
      </allContexts.Provider>
    </div>
  );
}

export default App;
export { allContexts };
