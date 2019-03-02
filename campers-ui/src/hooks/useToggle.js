import { useState } from 'react';

export default function useToggle(props) {
  const { on = true, off = false } = props;

  const [toggleState, setToggleState] = useState(on);

  function toggle() {
    const newState = toggleState === on ? off : on;
    setToggleState(newState);
  }

  return [toggleState, toggle];
}
