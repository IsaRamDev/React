import React from 'react';
import { Container,Row,Image, Col, Table } from 'react-bootstrap';
import pokemon from "../images/pokemon.png";

console.log(pokemon);
function Pokemon() {
  return(
    <Container>
    <Row md={12}>
      <Col md={8}>
        <h3 className="textpokemon" >Pokemon is the greatest! My favorite pokemon are:</h3>
        <>
            <Table className="table" striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Pokemon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Pikachu</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jigglypuff</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Abra</td>
                    </tr>
                </tbody>
            </Table>
        </>
      </Col>
      <Col md={4}>
        <Image className="img3" src={pokemon} roundedCircle />
      </Col>
    </Row>
  </Container>
  )
}

export default Pokemon;