import { useEffect, useState, useRef } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef();

  // const handleScroll = () => {
  //   console.log(window.scrollY);
  //   console.log(element.current.getBoundingClientRect().bottom);
  //   window.scrollY > element.current.getBoundingClientRect().bottom
  //     ? setSticky(true)
  //     : setSticky(false);
  // };

  // // This function handles the scroll performance issue
  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut;
  //   return () => {
  //     let context = this,
  //       args = arguments;
  //     const later = () => {
  //       timeOut = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", debounce(handleScroll));
  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll);
  //   };
  // }, [debounce, handleScroll]);
  // const handleScroll = () => {
  //   console.log(window.scrollY);
  //   // if(window.scrollY >= 45 ){

  //   // }
  // };

  // return { isSticky, element };
}

export default useSticky;
