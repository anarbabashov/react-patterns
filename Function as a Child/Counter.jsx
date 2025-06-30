import { useState } from "react";

/**
 * @param {Object} props
 * @param {Function} props.children
 * @returns {React.ReactNode}
 */
export const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return children({ count, increment, decrement });
}

/**
 * Usage:
 * 
 * <Counter>
 *   {({ count, increment, decrement }) => (
 *     <div>
 *       <button onClick={increment}>Increment</button>
 *       <button onClick={decrement}>Decrement</button>
 *       <p>Count: {count}</p>
 *     </div>
 *   )}
 * </Counter>
 */