import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './components/DropDown';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import cutekitten from "./images/cutekitten.jpg";
import Gatos from './components/Gatos';
import Pokemon from './components/Pokemon';
import Libros from './components/Libros';

console.log(cutekitten);
function App() {
  return(
    <Container className="contenedor">
      <DropDown />
      <h1 className="title1"> Let's take a quick look at Isa's life!</h1>
      <img src={cutekitten} alt="kitten" />
      <>
        <h2 className="title2">Isa's World!</h2>
        <Libros />
        <Gatos />
        <Pokemon />
      </>
    </Container>
  )
}

export default App;
