import * as React from "react";

export const useMount = effect => {
  return React.useEffect(effect, []);
};