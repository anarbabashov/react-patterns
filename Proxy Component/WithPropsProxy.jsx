import { useState } from "react";

/**
 * @param {Object} props
 * @param {Function} props.children
 * @returns {React.ReactNode}
 */

export const WithPropsProxy = ({ children }) => {
  const [props, setProps] = useState({});

  const handleChange = (key, value) => {
    setProps((prev) => ({ ...prev, [key]: value }));
  }

  return children(props, handleChange);
}

//** Usage:
// <WithPropsProxy>
//   {(props, handleChange) => (
//     <div>
//       <input type="text" value={props.name} onChange={(e) => handleChange('name', e.target.value)} />
//     </div>
//   )}
// </WithPropsProxy>