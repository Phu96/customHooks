import * as React from "react";

export const useTimeout = (callback, ms, deps, useEffect = React.useEffect) => {
  useEffect(() => {
    const timeout = setTimeout(callback, ms);
    return () => clearTimeout(timeout);
  }, deps);
};