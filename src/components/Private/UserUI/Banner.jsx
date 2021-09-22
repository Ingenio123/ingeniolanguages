import React, { useRef, useEffect, useCallback, useState } from "react";
import styled from "styled-components";

const SlideShow = ({
  children,
  controles = false,
  autoplay = false,
  velocidad = "500",
  intervalo = "5000",
}) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = useCallback(() => {
    if (slideshow.current.children.length > 0) {
      console.log("Siguiente");
      // console.log(slideshow.current.children[0]);
      slideshow.current.style.transition = `${velocidad} ms ease-out all`;
      const SizeSlider = slideshow.current.children[0].offsetWidth;
      // moverl el Slider
      slideshow.current.style.transform = `translateX(-${SizeSlider}px)`;
    }
    const PrimerElemento = slideshow.current.children[0];

    const transiction = () => {
      slideshow.current.style.transition = "none";
      slideshow.current.style.transform = `translateX(0)`;

      // Tomamos el primer elemento y lo mandamos al final.
      slideshow.current.appendChild(PrimerElemento);

      slideshow.current.removeEventListener("transitionend", transiction);
    };

    slideshow.current.addEventListener("transitionend", transiction);
  }, [velocidad]);

  const anterior = () => {
    const size = slideshow.current.children.length;
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      //obtenemos el ultimo elemento del Slide show
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const SizeSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${SizeSlider}px)`;
      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, intervalo);
      // Eliminamos los intervalos
      slideshow.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloSlideshow.current);
      });
      // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
      slideshow.current.addEventListener("mouseleave", () => {
        intervaloSlideshow.current = setInterval(() => {
          siguiente();
        }, intervalo);
      });
    }
  }, [autoplay, intervalo, siguiente]);

  return (
    <ContentBanner>
      <ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
    </ContentBanner>
  );
};

const ContentBanner = styled.main`
  width: 100%;
`;
const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export { SlideShow };
