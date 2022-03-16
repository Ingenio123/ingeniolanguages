import styled from "styled-components";
import PropTypes from "prop-types";

export const CardProgresNew = ({ score, level, scoreprint }) => {
  return (
    <Donut>
      <div className="donut-default">
        <div>{score}%</div>
      </div>
      {/* <div class="donut-line"></div> */}
      <div className="donut-text ">
        <h2>{level}</h2>
      </div>
      <div
        className={
          scoreprint >= 1 && scoreprint <= 3
            ? "donut-case"
            : "donut-case bg-default"
        }
      ></div>

      <div
        className={
          scoreprint >= 2 && scoreprint <= 3
            ? "donut-casetwo"
            : "donut-casetwo bg-default"
        }
      ></div>
      <div
        className={
          scoreprint === 3 ? "donut-casethree" : "donut-casethree bg-default"
        }
      ></div>
    </Donut>
  );
};

CardProgresNew.defaultProps = {
  score: 0,
  level: "A1",
  scoreprint: 0,
};

CardProgresNew.prototypes = {
  score: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  scoreprint: PropTypes.number.isRequired,
};

const Donut = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-top: 20px;
  .donut-text {
    top: 25px;
    left: 25px;
    width: 150px;
    height: 150px;
    background: #fff !important;
    position: absolute;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    h2 {
      margin: 0;
    }
  }
  .tooltips {
    width: 200px;
    height: 200px;
  }
  .donut-case {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-clip: border-box;
    overflow: hidden;
    clip: rect(0 200px 155px 0);
    background-color: #1d4ed8;
    transform: rotate(0deg);
    cursor: pointer;
  }
  .bg-default {
    background-color: #bfdbfe !important;
  }

  .donut-casetwo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #1d4ed8;

    position: absolute;
    top: 0;
    left: 0;
    background-clip: border-box;
    overflow: hidden;
    transform: rotate(210deg);
    clip: rect(0 195px 100px 0);
  }
  .donut-casethree {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-clip: border-box;
    overflow: hidden;
    clip: rect(0 100px 100px 0);
    background: #1d4ed8;

    transform: rotate(0deg);
  }
  .donut-default {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
    cursor: pointer;
    div {
      width: 100px;
      height: 60px;
      background-color: #292d57;
      color: #fff;
      font-size: 1rem;
      border-radius: 0.2rem;
      position: absolute;
      z-index: 5;
      top: 5%;
      right: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      display: none;
      ::before {
        content: "";
        position: absolute;
        bottom: -10px;
        background-color: #292d57;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
      }
    }
  }
  .donut-default:hover div {
    display: flex;
  }
  .donut-white {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background: #fff;
    top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .donut-line {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ::before {
      content: "";
      width: 2px;
      height: 20%;
      position: absolute;
      top: 0;
      left: 50%;
      background: #fff;
      z-index: 2;
    }
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      top: 67%;
      left: 6px;
      background: #fff;
      border-bottom: 1px solid #fff;
      z-index: 2;
    }
  }
`;
