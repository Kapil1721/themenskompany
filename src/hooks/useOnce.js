import React from "react";

export function useOnce(cb, deps = []) {
  const isCalledRef = React.useRef(false);

  React.useEffect(() => {
    if (!isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, deps);
}
