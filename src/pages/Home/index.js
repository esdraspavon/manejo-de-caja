import React from "react";
import Header from '../../components/Header';
import Open from '../../components/Open';
import Close from '../../components/Close';
import {HomeContainer} from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <Header></Header>
      <Open />
      <Close />
    </HomeContainer>
  )
}

export default Home;

