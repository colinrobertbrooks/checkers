import { RefObject, MutableRefObject, useState, useCallback } from "react";
import { useResizeObserver } from "./useResizeObserver";

const emptyRect: ClientRect = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export const useRect = (
  ref: RefObject<any> | MutableRefObject<any>
): ClientRect => {
  const [rect, setRect] = useState<ClientRect>(emptyRect);

  const handleResize = useCallback(() => {
    if (ref.current) setRect(ref.current.getBoundingClientRect());
  }, [ref]);

  useResizeObserver(ref, handleResize);

  return rect;
};
