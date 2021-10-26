import "../../assets/components/SectionTeacher.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import "../../assets/components/ResponsiveTeachers.css";
import ModalFreeClass from "../Header/ModalRequesFreeClass";
import { useState } from "react";
import useUser from "../../hooks/useUser";

export const HeaderHero = ({ data }) => {
  const { SignUp, isLogged } = useUser();
  const Icon = styled(AiOutlineShoppingCart)`
    height: 30px;
    width: 30px;
  `;
  // ShowForm,
  // setShowForm,

  const [ShowForm, setShowForm] = useState(false);
  const OpenModal = () => {
    console.log("Open");
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <main className="container about" style={{ marginTop: "70px" }}>
        <div className="spaces">
          <figure className="about__image__teacher">
            <img src={data.imageUrl} alt="nada" />
          </figure>

          <div className="text__teacher">
            <h2 className="name_teacher">
              {data.firstName} {data.lastName}{" "}
            </h2>
          </div>
        </div>

        <div className="bnt__teacher">
          <p>
            <a className="btn__buy">
              <Icon></Icon> Buy a lesson Package
            </a>
          </p>
          <div className="or">Or</div>
          <p>
            <button className="btn__demo" onClick={OpenModal}>
              Reques a free demo lesson
            </button>
          </p>
        </div>
      </main>
      <div className="container eslogan">
        <p>"{data.eslogan}"</p>
      </div>
      <ModalFreeClass
        ShowForm={ShowForm}
        setShowForm={setShowForm}
        SignUp={SignUp}
        isLogged={isLogged}
      />
    </>
  );
};
