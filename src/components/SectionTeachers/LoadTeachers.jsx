import styled, { css, keyframes } from "styled-components";

export default function LoadTeachers() {
  return (
    <Container className="container">
      <div className="row  portafolio__teacher mb-4">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div
            className="image-flip"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className="mainflip">
              <Card>
                <ImgCard></ImgCard>
                <CardContentText>
                  <Cardtitle></Cardtitle>
                  <CardText></CardText>
                </CardContentText>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Shimmer = keyframes`
    0%{
        background-position: -450px 0;
    }
  100%{
    background-position: 450px 0;
  }
`;

const Before = css`
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #d9d9d9 0%,
    rgba(0, 0, 0, 0.05) 20%,
    #d9d9d9 40%,
    #d9d9d9 100%
  );
  background-repeat: no-repeat;
  background-size: 450px 400px;
  animation: ${Shimmer} 1s linear infinite;
`;

const Container = styled.main`
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 80%;
  background: silver;
`;
const ImgCard = styled.div``;
const CardContentText = styled.div``;
const Cardtitle = styled.div``;
const CardText = styled.div``;
