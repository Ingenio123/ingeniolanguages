import styled from "styled-components";
import { useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
//custom hooks
import useSearch from "../../../hooks/useSearch";
import { useCardFeedback } from "../../../hooks/useCardFeedBack";
//
// component
import { Showdata } from "./Showdata";
import CardFeedBack from "./CardFeedbackTeacher";
//services
import FeedbackServices from "../../../services/feedback.services";

//

export const SearchComponent = ({ data, placeholder }) => {
  const [ModalDelete, setModalDelete] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [item, setItem] = useState({}); // item => {}
  const [Feedback, setIdFeedback] = useState("");

  //custom hooks
  const { reset, FirstDataGet, ResetSelect, Status, ResetStatus } = useSearch();
  const {
    getSummary,
    loading,
    ItIsEmpty,
    normal,
    dataKids,
    DataSelect,
    getSummaryForPackage,
    deleteFeedbak,
    ResetSelectFeedback,
  } = useCardFeedback();
  //
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.email.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleClickItem = (datos) => {
    clearInput();
    setItem(datos);
    ResetSelectFeedback();
    FirstDataGet(datos);
    reset();
    ResetSelect();
    getSummary(datos._id);
  };

  const HanldeResetButton = () => {
    setFilteredData([]);
    setItem({});
    ResetStatus();
  };

  const handleDeleteFeedback = async () => {
    deleteFeedbak(Feedback);
    await FeedbackServices.deleteFeedback(Feedback);
    setModalDelete((prev) => !prev);
  };
  const ModalDeleteClick = (id) => {
    setIdFeedback(id);
    setModalDelete((prev) => !prev);
  };

  return (
    <>
      <div>
        <SearchBox>
          <h2>Search student by email</h2>
          <SearchInput
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
        </SearchBox>
        {filteredData.length !== 0 && (
          <DataResult>
            {filteredData.slice(0, 15).map((value, key) => (
              <ItemResult
                onClick={() => {
                  handleClickItem(value);
                }}
              >
                {value.email}
              </ItemResult>
            ))}
          </DataResult>
        )}
        {Object.keys(item).length !== 0 && (
          <Showdata
            datstudent={item}
            getSummaryForPackage={getSummaryForPackage}
          />
        )}
      </div>
      {Status.succes || Status.error ? (
        <Modal>
          <div className="card">
            {Status.error ? (
              <>
                <ContentIcon error={true}>
                  <IconX />
                </ContentIcon>
                <p>Class summary cannot be submitted</p>
                <p>Student has finished all the remaining lessons</p>
              </>
            ) : (
              <>
                <ContentIcon>
                  <Icon />
                </ContentIcon>
                <p>Submitted successfully</p>
              </>
            )}
            <ButtonBack onClick={() => HanldeResetButton()}>Go Back</ButtonBack>
          </div>
        </Modal>
      ) : null}

      {Object.keys(item).length > 1 && (
        <CardFeedBack
          loading={loading}
          ItIsEmpty={ItIsEmpty}
          isStudent={true}
          Summary={
            item.courses.length > 1
              ? DataSelect
              : normal.length > 0
              ? normal
              : dataKids
          }
          deleteProps={ModalDeleteClick}
        />
      )}
      {ModalDelete && (
        <Modal>
          <div className="card">
            <IconFaTrash />
            <p className="text-bold">Are you sure?</p>
            <p> This action cannot be undone.</p>
            <div className="box__buttons">
              <button
                className="button__box primary"
                onClick={handleDeleteFeedback}
              >
                Confirm
              </button>
              <button
                className="button__box default"
                onClick={ModalDeleteClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

//  DataSelect.length > 0 ? DataSelect : normal.length > 0 ? normal : dataKids;

const IconFaTrash = styled(FaTrashAlt)`
  font-size: 3rem;
  color: #1d4ed8;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  p {
    margin: 0;
  }
  .card {
    background-color: #fff;
    padding: 0.8rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 350px;
    height: 250px;
    border-radius: 4px;
    p {
      line-height: normal;
      text-align: center;
      margin: 0;
      color: #52525b;
      line-height: 1rem;
      font-size: 1rem;
      /* margin: 0.5rem 0; */
    }
    .text-bold {
      font-weight: 700;
      font-size: 1.5rem;
      color: #27272a;
    }
    .box__buttons {
      width: 80%;
      /* border: 1px solid red; */
      height: auto;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      .button__box {
        padding: 0.5rem 1rem;
        border: none;
        font-size: 1rem;
        letter-spacing: normal;
        border-radius: 0.5rem;
        font-weight: 500;
      }
      .primary {
        background-color: #1d4ed8 !important;
        color: #fff;
        &:hover {
          background-color: #2563eb !important;
        }
      }
      .default {
        color: #1d4ed8;
        background-color: transparent;
        box-shadow: 0px 2px 4px 0px rgba(10, 9, 9, 0.12);
        :hover {
          background-color: rgba(243, 244, 246, 1) !important;
        }
      }
    }
  }
`;

const ContentIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.error ? "#FCA5A5" : "#86efac")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #18181b;
  margin-bottom: 1rem;
`;

const Icon = styled(BiCheck)`
  font-size: 2rem;
`;

const ButtonBack = styled.button`
  border: none;
  background-color: #18181b;
  width: 300px;
  color: #fff;
  padding: 0.8rem;
  border-radius: 5px;
  font-size: 1rem;
  line-height: normal;
  margin-top: 1rem;
`;

const SearchBox = styled.div`
  margin-top: 2rem;
  h2 {
    font-size: 1.25rem;
    margin: 0;
    line-height: normal;
    font-weight: 700;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  line-height: normal;
  border-radius: 4px;
  border: 1px solid silver;
  margin: 0.5rem 0 0 0;
  width: 60%;
  ::placeholder {
    color: silver;
  }
  :focus {
    border: 2px solid #2989ff;
  }
`;
const DataResult = styled.div`
  border: 1px solid silver;
  z-index: 9;
  position: absolute;
  background-color: #fff;
`;
const ItemResult = styled.p`
  margin: 0;
  line-height: 1.3;
  margin-bottom: 0.2rem;
  padding: 0.3rem 0.2rem;
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const IconX = styled(BiX)`
  font-size: 2rem;
  color: #18181b;
`;
