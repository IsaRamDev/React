import React from 'react';
import { Container,Row,Image, Spinner, Col } from 'react-bootstrap';
import book from "../images/book.jpg";

console.log(book);
function Libros() {
  return(
    <Container>
    <Row md={12}>
      <Col md={7}>
        <h3 className="textbook1" >Favorite book:</h3>
        <>
            <Spinner className="textbook1"  animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1"  animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1"  animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1"  animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <h1 className="textbook2">The Brain book</h1>
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1"  animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1"  animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1"  animation="border" />
            <Spinner animation="grow" />
            <Spinner className="textbook1" animation="border" />
        </>
      </Col>
      <Col md={3}>
        <Image className="img1" src={book} roundedCircle />
      </Col>
    </Row>
  </Container>
  )
}

export default Libros;