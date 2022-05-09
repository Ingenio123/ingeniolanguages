import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const NavBanner = ({ element }) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = useCallback(() => {
    // Comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 1) {
      console.log("Siguiente");

      // Obtenemos el primer elemento del slideshow.
      const primerElemento = slideshow.current.children[0];

      // Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = `${1000}ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetHeight;

      // Movemos el slideshow
      slideshow.current.style.transform = `translateY(-${tamañoSlide}px)`;
      slideshow.current.style.opacity = `.5`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateY(0)`;
        slideshow.current.style.opacity = `1`;
        // Tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, []);

  useEffect(() => {
    console.log(slideshow.current.children.length);
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 5000);

    return () => clearInterval(intervaloSlideshow.current);
  }, [siguiente]);

  return (
    <Content ref={element}>
      <ContentSection ref={slideshow}>
        <ContentText>
          <Text>
            Get your lessons package today with 15% discount | CODE:
            MOTHERSDAY2022
          </Text>
        </ContentText>
        <ContentText>
          <Text>
            Get your lessons package today with 15% discount | CODE:
            MOTHERSDAY2023
          </Text>
        </ContentText>
        <ContentText>
          <Text>
            Get your lessons package today with 15% discount | CODE:
            MOTHERSDAY2024
          </Text>
        </ContentText>
      </ContentSection>
    </Content>
  );
};
export { NavBanner };

const Content = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  color: #ffff;
  background-color: #314584;
  /* display: flex; */
  /* justify-content: center; */
  /* border: 1px solid #000; */
  /* align-items: center; */
  overflow: hidden;
`;

const ContentSection = styled.div`
  width: 100%;
  height: 45px;
  position: absolute;
`;

const ContentText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 0.9rem;
  /* line-height: normal; */
  color: #fff;
  margin: 0;
  font-family: "Helvetica";
  text-align: center;
  transition: transform 0.5s ease-in-out;
`;
