import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";

import { ThemeContext } from './Components/ThemeContect/themeContext';

import Header from './Components/Header';
import MainContent from './Components/MainContent';
import CountryDetail from './Components/MainContent/CountriesDetail';
import Footer from './Components/Footer';

import './App.css';
import styled from 'styled-components';

function App() {
  const themeContext = useContext(ThemeContext)
  return (
    <AppContainer className={themeContext.theme}>
      <Header/>
      <ContentContainer>
        <Routes>
          <Route exact path='/' element={<MainContent/>}/>
          <Route path='/region/:regionName' element={<MainContent/>}/>
          <Route path='/country/:countryName' element={<CountryDetail/>}/>
          <Route path='/search/:searchName' element={<MainContent/>}/>
        </Routes>
      </ContentContainer>
      <Footer/>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`
const ContentContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: block;
  margin: 0px auto;
  padding: 0px 15px;
`