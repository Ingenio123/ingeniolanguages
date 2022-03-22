import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/components/SectionTeachers.css";
import { IoChevronForwardOutline, IoCart } from "react-icons/io5";
import { Flag } from "./Flag";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkSmooth } from "react-scroll";

export const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  const getTeachers = () => {
    axios.get("https://www.ingenioapi.com/data/getAllTeachers").then((resp) => {
      setTeachers(resp.data.teachers);
    });
  };
  useEffect(() => {
    getTeachers();
  }, []);

  const IconArrow = styled(IoChevronForwardOutline)`
    color: white;
    font-size: 1.4rem;
  `;
  return (
    <div id="/Teachers" className="mt-5">
      <div className="container">
        <h1 className="text-center ">Our teachers</h1>
        <div className="mb-4 row portafolio__teacher">
          {teachers.map((item, index) => (
            <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card card_radius">
                      <div className="text-center card-body">
                        <p>
                          <img
                            className="img-fluid"
                            src={item.imageUrl}
                            alt="imagenes de los docentes"
                          />
                        </p>
                        <h4 className="mt-4 card-title ">{item.firstName} </h4>
                        <p className="card-text cursive"> "{item.eslogan}" </p>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="mt-4 text-center card-body">
                        <h6 className="font-w-600 title-card">
                          LANGUAGES THAT
                        </h6>
                        <h4 className="mb-1 card-title cursive">
                          {" "}
                          {item.firstName}{" "}
                        </h4>
                        <h6 className="">TEACHES</h6>
                        <div className="separador">
                          {item.flags.map((item2, index) => (
                            <Flag
                              key={index}
                              nameFlag={item2.nameFlag}
                              imgFlag={item2.urlFlag}
                            />
                          ))}
                        </div>
                        <PricesCart
                          to="Prices"
                          className="btn__shop button-cart"
                          smooth={true}
                          duration={1000}
                          spy={true}
                        >
                          <IoCart color="white" size="25px"></IoCart>
                        </PricesCart>

                        <Link
                          to={`/ProfileTeachers/${item._id}`}
                          className="btn-conoce-more"
                        >
                          View profile <IconArrow></IconArrow>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PricesCart = styled(LinkSmooth)`
  :hover {
    cursor: pointer;
  }
`;
