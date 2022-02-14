import { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return <> <h1>AGREGUE PRODUCTOS</h1>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
  
  
  
  </>
};

export default ItemCount