const ifHeaderScrolled = (ref) => {
  if (window.scrollY > 20) {
    return ref.current?.classList?.add('bg-scrolled');
  }
  return ref.current?.classList?.remove('bg-scrolled');
};

const ifFooterPriceScrolled = (ref, refChild) => {
  const heightToTop = ref.current?.getBoundingClientRect().top;
  const heightElement = refChild.current?.getBoundingClientRect().height;
  const stickyPoint = heightToTop + heightElement;
  console.log("heightToTop", heightToTop);
  console.log("heightElement", heightElement);
  console.log("stickyPoint", stickyPoint);
  console.log("window", window.innerHeight);
  if (stickyPoint >= window.innerHeight) {
    return refChild.current?.classList?.add('sticky');
  }
  return refChild.current?.classList?.remove('sticky');
}

export { ifHeaderScrolled, ifFooterPriceScrolled };
