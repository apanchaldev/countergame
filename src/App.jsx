import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

function App() {
  const [cntr, setCount] = useState(0);
  const prevCnt = useRef();

  useEffect(() => {
    prevCnt.current = cntr;
  }, [cntr]);

  const incrementCntClick = () => {
    setCount(cntr + Math.round(Math.random() * 10));
  }

  const decrementCntClick = () => {
    setCount(cntr - Math.round(Math.random() * 10));
  }

  const resetClick = () => {
    setCount(0);
    prevCnt.current = 0
  }

  return (
    <>
      <div className="container-50 mt-5">
        <Header />
        <Body 
          cntr={cntr}
          prevCnt={prevCnt.current}
          incrementCntClick={incrementCntClick}
          decrementCntClick={decrementCntClick}
        />
        <Footer resetClick={resetClick} />
      </div>
    </>
  );
}

export default App;
