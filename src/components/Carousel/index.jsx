import InfiniteCarousel from "react-leaf-carousel";
import styled from "styled-components";
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
  padding: 0 1rem;
  padding-bottom: 48px;
  border-radius: 8px;
  background: #f2f2f2;
  width: 100%;
  color: #314584;

  transition: all 1s ease;
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
    font-size: 1.3rem;
  }
  & .aprendiendo {
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
  }
  & .textp {
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    color: #666666;
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

const Carousel = () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 808,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={true}
      showSides={true}
      sidesOpacity={0}
      sideSize={0.2}
      slidesToScroll={3}
      slidesToShow={3}
      scrollOnDevice={true}
    >
      {ItemsData.map((i) => (
        <CardContent>
          <div className="headerCard">
            <span>
              <img
                src={i.urlImage}
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
          <div className="name">{i.name}</div>
          <div className="aprendiendo">APRENDIENDO {i.learning}</div>
          <div className="textp">{i.description}</div>
        </CardContent>
      ))}
    </InfiniteCarousel>
  );
};
export default Carousel;

const CardReviews = styled.div``;
