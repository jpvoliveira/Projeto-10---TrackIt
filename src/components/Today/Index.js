import Footer from "../Footer/Index";
import Header from "../Header/index";
import styled from "styled-components";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import dayjs from "dayjs";
require('dayjs/locale/pt-br')

export default function Today() {
  const {token} = useContext(TokenContext)
  console.log(token)
  return (
    <Container>
      <Header />
      <h1>{dayjs().locale('pt-br').format('dddd')}, {dayjs().format('DD/MM')}</h1>     
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;

  height: 100vh;
  width: 100vw;

  padding-top: 70px;
  padding-bottom: 70px;
  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    padding: 28px 15px;
  }
`;
