import React from "react";
import Header from '../../components/Header';
import Open from '../../components/Open';
import {HomeContainer} from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <Header></Header>
      <Open />
    </HomeContainer>
  )
}

export default Home;

