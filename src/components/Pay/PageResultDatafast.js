import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";
import Spinner from "react-loader-spinner";
import Url from "../Urls";
import ResultDatafast from "./ResultDatafast";

export default function PageResultDatafast(props) {
  const { search } = useLocation();
  const [Datas, setDatas] = useState({
    valorProducto: "00.00",
    valIva: "00.00",
    total: "00.00",
  });
  const [Loaders, setLoaders] = useState(undefined);

  useEffect(() => {
    const { id } = queryString.parse(search);
    console.log("este el id del action", id);
    const Endpoint = Url.url + "/data/datafastresults/" + id;
    fetch(Endpoint)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.resultado);
        setLoaders(true);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <Container>
      {!Loaders ? (
        <Spinner
          type="Puff"
          color="#1E3A8A"
          height={50}
          width={50}
          timeout={2000}
        />
      ) : (
        <ResultDatafast Datas={Datas} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 113px;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    margin: 0 30px;
  }
`;
