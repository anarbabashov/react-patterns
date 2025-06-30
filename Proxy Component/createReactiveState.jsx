import React from "react";
import ReactDOM from "react-dom";

/**
 * @param {Object} initialState
 * @param {Function} onChange
 * @returns {Object}
 */

const createReactiveState = (initialState, onChange) => {
  return new Proxy(initialState, {
    set(target, key, value) {
      target[key] = value;
      onChange(key, value); // Tell React what *actually* changed
      return true;
    },
  });
};

// In your React component
const App = () => {
  const [renderCount, setRenderCount] = React.useState(0);
  const state = React.useMemo(
    () =>
      createReactiveState({ name: "Jax", score: 100 }, (key, value) =>
        console.log(`${key} updated to ${value}`)
      ),
    []
  );

  const updateScore = () => {
    state.score += 10; // Proxy catches this!
    setRenderCount((c) => c + 1); // Only re-render when *you* say
  };

  return (
    <div>
      <p>Name: {state.name}</p>
      <p>Score: {state.score}</p>
      <button onClick={updateScore}>Boost Score</button>
      <p>Renders: {renderCount}</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
