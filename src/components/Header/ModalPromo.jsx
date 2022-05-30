import styled from "styled-components";
import { HiX } from "react-icons/hi";
import PropTypes from "prop-types";

const ModalPromo = ({ data, closeModal, history }) => {
  return (
    <ModalOverlay>
      <ContentModal>
        <BoxIcon onClick={closeModal}>
          <IconX />
        </BoxIcon>
        {data.promo_type_template === 1 && (
          <>
            <BoxImage template={data.promo_type_template}>
              <ImagePromo src={data.promo_url_picture} alt="" />
            </BoxImage>

            <BoxContentText template={data.promo_type_template}>
              <TextH3>{data.promo_title}</TextH3>
              <TextDescrip>{data.promo_description}</TextDescrip>
              <TextPormoCode>{data.promo_code}</TextPormoCode>
              <ButtonShopNow onClick={() => history.push("/prices")}>
                Buy Now
              </ButtonShopNow>
              <PromoConditions>"{data.promo_conditons}"</PromoConditions>
            </BoxContentText>
          </>
        )}
        {data.promo_type_template === 2 && (
          <>
            <BoxContentText>
              <TextH3>{data.promo_title}</TextH3>
              <TextDescrip>{data.promo_description}</TextDescrip>
              <TextPormoCode>{data.promo_code}</TextPormoCode>
              <ButtonShopNow onClick={() => history.push("/prices")}>
                Buy Now
              </ButtonShopNow>
              <PromoConditions>"{data.promo_conditons}"</PromoConditions>
            </BoxContentText>
            <BoxImage template={data.promo_type_template}>
              <ImagePromo src={data.promo_url_picture} alt="" />
            </BoxImage>
          </>
        )}
      </ContentModal>
    </ModalOverlay>
  );
};

ModalPromo.prototype = {
  data: PropTypes.shape({
    promo_url_image: PropTypes.string.isRequired,
    promo_title: PropTypes.string.isRequired,
    promo_description: PropTypes.string.isRequired,
    promo_code: PropTypes.string.isRequired,
    promo_conditions: PropTypes.string.isRequired,
    promo_template: PropTypes.string.isRequired,
  }),
};
export default ModalPromo;

const ModalOverlay = styled.main`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentModal = styled.section`
  width: 785px;
  height: 440px;
  background-color: #fff;
  border-radius: 0.4rem;
  position: relative;
  display: flex;
  column-gap: 20px;
  border-radius: 0.375rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    width: 80%;
    height: 460px;
  }
`;
const BoxIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #18181b;
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem;
  :hover {
    cursor: pointer;
  }
`;
const IconX = styled(HiX)`
  font-size: 20px;
  color: inherit;
`;
const BoxImage = styled.div`
  width: 420px;
  height: 100%;
  overflow: hidden;
  ${({ template }) =>
    template == 1
      ? "border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"
      : "border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;"}
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ImagePromo = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const BoxContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 360px;
  ${({ template }) =>
    template === 1 ? "padding-right:20px" : "padding-left:20px"};
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.5em;
  }
`;
const TextH3 = styled.h3`
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1rem;
  font-size: 2.25em;
  color: inherit;
  letter-spacing: -1px;
`;

const TextDescrip = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: inherit;
  margin-bottom: 2em;
  letter-spacing: -1px;
  @media screen and (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

const TextPormoCode = styled.p`
  text-align: center;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1em;
  font-size: 1.875em;
  color: inherit;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.67em;
  }
`;
const ButtonShopNow = styled.button`
  background-color: #4561ba;
  color: #fff;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  font-size: 1em;
  font-weight: 600;
  border-radius: 0.367rem;
  height: 2.5em;
  line-height: 1.2;
  min-width: 200px;
  letter-spacing: normal;
  margin-bottom: 2em;
  :hover {
    background-color: #374e95;
  }
`;

const PromoConditions = styled.p`
  font-size: 0.8em;
  text-align: center;
  color: inherit;
  line-height: normal;
`;
