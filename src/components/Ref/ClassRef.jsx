import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const ClassRef = () => {
  const [number, setNumber] = useState(0);
  const prevNum = useRef();

  useEffect(() => {
    prevNum.current = number;
  }, [number]);

  const ClickHandler = () => {
    setNumber(Math.ceil(Math.random() * 100));
  };
  return (
    <>
      <button onClick={ClickHandler}>Random</button>
      <p>
        number is:{number} and prev num is:{prevNum.current}
      </p>
    </>
  );
};

export default ClassRef;
