import React from 'react';
import { Container,Row,Image, Col, FormControl, InputGroup } from 'react-bootstrap';
import cat from "../images/cat.jpg";

console.log(cat);
function Gatos() {
  return(
    <Container>
    <Row md={12}>
      <Col md={5}>
        <Image className="img2" src={cat} roundedCircle />
      </Col>
      <Col md={7}>
        <h3 className="textgatos" >Cats are PERFECT, because they are:</h3>
        <>
        <InputGroup>
            <InputGroup.Radio className="check" aria-label="Radio button for following text input" />
            <label className="labels">
                Cute!
            </label>
        </InputGroup>
        <InputGroup>
            <InputGroup.Radio className="check" aria-label="Radio button for following text input" />
            <label className="labels">
                Adorable!
            </label>
        </InputGroup>
        <InputGroup>
            <InputGroup.Radio className="check" aria-label="Radio button for following text input" />
            <label className="labels">
                Lovable!
            </label>
        </InputGroup>
        <InputGroup>
            <InputGroup.Radio className="check" aria-label="Radio button for following text input" />
            <label className="labels">
                Divas!
            </label>
        </InputGroup>
        <InputGroup>
            <InputGroup.Radio className="check" aria-label="Radio button for following text input" />
            <label className="labels">
                They are simply PERFECT!
            </label>
        </InputGroup>
        </>
      </Col>
    </Row>
  </Container>
  )
}

export default Gatos;