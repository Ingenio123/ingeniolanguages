import { useEffect, useState } from "react";
import URI from "../Urls";
import { Flag } from "../../components/SectionTeachers/Flag";
import styled from "styled-components";
import { Link as LinkSmooth } from "react-scroll";
import { IoChevronForwardOutline, IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
//
const ComponentTeachers = () => {
  const [ArrayTeachers, setArrayTeachers] = useState([]);
  useEffect(() => {
    console.log("DATA##############");
    const fetchData = async () => {
      let response = await fetch(`${URI.url}/data/getAllTeachers`);
      let data = await response.json();
      return data;
    };
    fetchData()
      .then((res) => setArrayTeachers(res.teachers.slice(0, 6)))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Our teachers</h1>
        <div className="row">
          {ArrayTeachers.map((item, index) => (
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
                          View profile <IconArrow></IconArrow>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <BoxButton>
          <ButtonViewMore className="btn " to="/teachers">
            View more
          </ButtonViewMore>
        </BoxButton>
      </div>
    </>
  );
};
export default ComponentTeachers;

const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonViewMore = styled(Link)`
  background-color: #374d95;
  color: #fff;
  margin-left: auto;
  :hover {
    color: #fff !important;
    background-color: #4057a2;
  }
`;

const PricesCart = styled(LinkSmooth)`
  :hover {
    cursor: pointer;
  }
`;

const IconArrow = styled(IoChevronForwardOutline)`
  color: white;
  font-size: 1.4rem;
`;
