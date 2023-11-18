import { useState,useMemo } from "react";
export function useReactState(initState) {
  const [state, setState] = useState(initState);

  const proxy = useMemo(() => {
    return new Proxy(state, {
      set(obj, prop, value) {
        obj[prop] = value;

        setState({ ...obj }); // Update the state with a new object
        return true; // Indicate success
      }
    });
  }, [state]);

  return proxy;
}