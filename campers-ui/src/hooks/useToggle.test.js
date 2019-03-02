import { renderHook, act } from 'react-hooks-testing-library';

import useToggle from './useToggle';

describe('useToggle', () => {
  test('toggle default', () => {
    const { result } = renderHook(() => useToggle());
    const [toggleState] = result.current;

    expect(toggleState).toBe(true);
  });

  test('toggle, toggle the state', () => {
    const { result } = renderHook(() => useToggle());
    const [toggleState, setToggle] = result.current;

    expect(toggleState).toBe(true);

    act(() => setToggle());

    const [updatedToggleState] = result.current;
    expect(updatedToggleState).toBe(false);
  });
});
