import { useState } from 'react';

export default function useToggle(defaultState = true) {
  const [toggleState, setToggleState] = useState(defaultState);

  function toggle() {
    const newState = !toggleState;
    setToggleState(newState);
  }

  return [toggleState, toggle];
}
