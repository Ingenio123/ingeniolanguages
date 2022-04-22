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
  width: 25%;
  color: #314584;
  opacity: 0;
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
