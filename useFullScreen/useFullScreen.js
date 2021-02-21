export const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof onFullS === "function") {
        callback(true);
      }
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof onFullS === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};
