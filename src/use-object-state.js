import * as React from "react";
import deepMerge from "deepmerge";

export const useObjectState = (initialState = {}) => {
    return React.useReducer(
      (oldState, newState) => deepMerge(oldState, newState),
      initialState
    );
  };