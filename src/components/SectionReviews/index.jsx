import { SectionReviewContain, Image, CardContent } from "./style";
import { useState, useEffect } from "react";

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
];

export default function SectionReviews() {
  let images = ["EnglishImage.jpg", "ImageInfantil.jpg", "RusiaImage.jpeg"];
  const [SelectIndex, setSelectIndex] = useState(0);
  const [SelectedImage, setSelectImage] = useState(ItemsData[0]);
  const [loaded, setLoaded] = useState(false);
  const SelectNewImage = (index, images, next = true) => {
    const condition = next ? SelectIndex < images.length - 1 : SelectIndex > 0;
    //esto es un shorthands de ifs anidados
    setLoaded(false);
    setTimeout(() => {
      const nextIndex = next
        ? condition
          ? SelectIndex + 1
          : 0
        : condition
        ? SelectIndex - 1
        : images.length - 1;

      setSelectImage(images[nextIndex]);
      setSelectIndex(nextIndex);
    }, 1000);
    setLoaded(true);
  };

  const previous = () => {
    console.log("previes");
    SelectNewImage(SelectIndex, ItemsData, false);
  };

  const next = () => {
    console.log("Next");
    SelectNewImage(SelectIndex, ItemsData);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      SelectNewImage(SelectIndex, ItemsData);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <SectionReviewContain className="container">
      {SelectedImage.map((i) => (
        <CardContent className={loaded && "loaded"}>
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

      {/* <Image
        src={require("../../assets/images/" + SelectedImage).default}
        alt="images defaults"
        className={loaded && "loaded"}
        onLoad={() => setLoaded(true)}
      /> */}
      {/* <button
        onClick={previous}
        type="button"
        style={{ width: "100px", margin: "0 .3rem" }}
      >
        {"<"}
      </button>
      <button
        onClick={next}
        type="button"
        style={{ width: "100px", margin: "0 .3rem" }}
      >
        {">"}
      </button> */}
    </SectionReviewContain>
  );
}
