export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    // 마우스가 위쪽으로 갔을때만 호출 되도록 최적화
    if (clientY <= 0) {
      onBefore();
    }
    // console.log(event);
    // onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
