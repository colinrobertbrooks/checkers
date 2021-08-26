import {
  RefObject,
  MutableRefObject,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
// import ResizeObserver from "resize-observer-polyfill"; // TODO: install

export const useResizeObserver = (
  ref: RefObject<any> | MutableRefObject<any>,
  callback: ResizeObserverCallback
): void => {
  const ro = useRef<ResizeObserver | null>(null);

  const observe = useCallback(() => {
    ro.current = new ResizeObserver(callback);
    if (ref.current) ro.current.observe(ref.current);
  }, [callback, ref]);

  const disconnect = useCallback(() => ro.current?.disconnect(), []);

  useLayoutEffect(() => {
    observe();
    return () => disconnect();
  }, [observe, disconnect]);
};
