import styled from "styled-components";
import { useRef, useCallback, useEffect, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { url } from "../Urls";
let ItemsData = [
  {
    urlImage:
      "https://scdn.italki.com/ng/static/image/home/students/gianni.jpg",
    name: "Jhon",
    learning: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!",
  },
  {
    urlImage:
      "https://scdn.italki.com/ng/static/image/home/students/gianni.jpg",
    name: "Jhon",
    learning: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!",
  },
  {
    urlImage:
      "https://scdn.italki.com/ng/static/image/home/students/gianni.jpg",
    name: "Jhon",
    learning: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!",
  },
  {
    urlImage:
      "https://scdn.italki.com/ng/static/image/home/students/cassie.jpg",
    name: "Jhon2",
    learning: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!",
  },
  {
    urlImage: "https://scdn.italki.com/ng/static/image/home/students/andy2.jpg",
    name: "Jhon2",
    learning: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!",
  },
  {
    urlImage:
      "https://scdn.italki.com/ng/static/image/home/students/gianni.jpg",
    name: "Jhon2",
    learning: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!",
  },
  {
    urlImage:
      "https://scdn.italki.com/ng/static/image/home/students/gianni.jpg",
    name: "Jhon2",
    learning: "English",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a obcaecati praesentium natus debitis assumenda quam optio quasi voluptate maxime!",
  },
];
const CarrouselVersionTwo = () => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);
  const [Reviews, setReviews] = useState({
    loading: true,
    reviews: [],
  });

  const Next = useCallback(() => {
    if (slideshow.current.children.length > 0) {
      console.log("Siguiente");
      const primerElemento = slideshow.current.children[0];
      //   console.log(primerElemento);

      // Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = `${500}ms ease-out all`;

      const tamanioSlide = slideshow.current.children[0].offsetWidth + 20;
      //   console.log(tamanioSlide);

      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`;
      const transicion = () => {
        // Reiniciamos la posicion del Slideshow.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };
      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, []);

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${500}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    let functAsync = async () => {
      const getReviews = await fetch(`${url}/v1/data/get/reviews`);
      let datas = await getReviews.json();
      // console.log(datas.reviews);
      setReviews({
        ...Reviews,
        loading: false,
        reviews: datas.reviews,
      });
    };
    functAsync();
    return () => {};
  }, []);

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      Next();
    }, 8000);

    // Eliminamos los intervalos
    slideshow.current.addEventListener("mouseenter", () => {
      clearInterval(intervaloSlideshow.current);
    });

    // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
    slideshow.current.addEventListener("mouseleave", () => {
      intervaloSlideshow.current = setInterval(() => {
        Next();
      }, 8000);
    });

    return () => clearInterval(intervaloSlideshow.current);
    // if (autoplay) {
    // }
  }, [Next]);
  return (
    <Main>
      <h1 className="text-center">What our students say</h1>
      <ContenedorPrincipal>
        <ContenedorSileShow ref={slideshow}>
          {!Reviews.loading && (
            <>
              {Reviews.reviews.map((i) => (
                <CardContent>
                  <div className="headerCard">
                    <span>
                      <img
                        src={i.url_image}
                        alt="it"
                        style={{ width: "76px", height: "76px" }}
                      />
                    </span>
                  </div>
                  <div className="scores">
                    <img
                      src="https://scdn.italki.com/ng/static/image/milkway/homepage/rate.svg"
                      alt="lazy"
                    />
                  </div>
                  <div className="name">{i.name_user}</div>
                  <div className="aprendiendo">
                    {i.languages_is_learning} student
                  </div>
                  <div className="textp">{i.description}</div>
                </CardContent>
              ))}
            </>
          )}
        </ContenedorSileShow>
        <Controles>
          <Boton derecho onClick={Next}>
            <HiOutlineChevronRight />
          </Boton>
          <Boton onClick={anterior}>
            <HiOutlineChevronLeft />
          </Boton>
        </Controles>
      </ContenedorPrincipal>
    </Main>
  );
};

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  /* width: 50px; */
  /* border: 1px solid red; */
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  font-size: 2rem;
  color: #595959; /* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */
  /* path {
    filter: ${(props) =>
    props.derecho
      ? "drop-shadow(-2px 0px 0px #fff)"
      : "drop-shadow(2px 0px 0px #fff)"};
  } */
  ${(props) => (props.derecho ? "right: -10px" : "left: -10px")};
`;

const Main = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  overflow: hidden;
`;

const ContenedorPrincipal = styled.div`
  position: relative;
`;
const ContenedorSileShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 33.33%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  border: 1px solid blue;
  /* max-height: 500px; */
  position: relative;
`;
export default CarrouselVersionTwo;

//styles

export const SectionReviewContain = styled.section`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  /* border: 1px solid red; */
`;

export const CardContent = styled.div`
  position: relative;
  margin: 0 1rem;
  margin-top: 2rem;
  padding: 0 1.5rem;
  padding-bottom: 48px;
  border-radius: 8px;
  max-width: calc(33.33% - 30px);
  flex: 0 0 100%;
  /* border: 1px solid red; */
  background-color: #dbeafe;
  /* max-height: 500px; */
  &.loaded {
    opacity: 1;
  }
  & .headerCard {
    margin-top: -32px;
    span {
      width: 80px;
      height: 80px;
      position: relative;
      border-radius: 50%;
      border: 2px solid #ffff;
      vertical-align: middle;
      text-align: center;
      display: inline-flex;
      list-style-image: initial;
      color: rgb(244, 237, 226);
      justify-content: center;
      align-items: center;
      background: transparent;
      img {
        display: block;
        border-radius: 50%;
        max-width: 100%;
        object-fit: cover;
      }
      i {
        position: absolute;
        display: inline-block;
        background-size: contain;
        background-position: 50% center;
        background-repeat: no-repeat;
        border-radius: 50%;
        border: 2px solid white;
        right: 0px;
        width: 24px;
        height: 24px;
        background-image: url(https://scdn.italki.com/orion/static/flags/cn.svg);
      }
    }
  }

  & .scores {
    display: flex;
    position: absolute;
    top: 30px;
    right: 16px;
  }
  & .name {
    margin-top: 16px;
    margin-bottom: 8px;
    line-height: 1.5rem;
    font-size: 3.5rem;
    font-family: "Sacramento", cursive;
    font-weight: 600;
    margin: 1.5rem 0;
  }
  & .aprendiendo {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 0.5rem;
  }
  & .textp {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 18px;
    color: #666666;
    text-align: justify;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: all 1s ease;
  &.loaded {
    opacity: 1;
  }
`;
