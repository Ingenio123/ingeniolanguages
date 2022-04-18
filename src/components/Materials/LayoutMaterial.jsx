import { Container } from "./Styles";
import { FC } from "react";

export const MaterialsLayout = (props) => {
  return <Container className="container">{props.children}</Container>;
};
