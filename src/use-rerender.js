import * as React from "react";

export const useRerender = (effect, deps) => {
  const justMounted = React.useRef(true);
  React.useEffect(() => {
    if (justMounted.current) {
      justMounted.current = false;
      return;
    }

    return effect();
  }, deps);
};