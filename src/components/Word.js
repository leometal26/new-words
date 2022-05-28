import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col, Accordion, Alert } from "react-bootstrap";

export const Word = ({ word, speak, handleReset, handleNext, voice }) => {
  const colors = ["danger", "dark", "info", "warning", "primary", "success"];

  return (
    <Card bg="dark" className="text-center">
      <Card.Header>
        <Alert variant={colors[word.step - 1]}>Fase {word.step}</Alert>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{word.word}</Accordion.Header>
              <Accordion.Body>{word.meaning}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Row xs={1} lg={3}>
          <Col className="mb-1">
            <Button
              variant="outline-primary"
              className="form-control"
              onClick={() => {
                speak({
                  text: word.word,
                  voice: voice,
                });
              }}
            >
              Escuchar
            </Button>{" "}
          </Col>
          <Col className="mb-1">
            <Button
              variant="outline-success"
              className="form-control"
              onClick={() => handleNext(word)}
            >
              Aprendida
            </Button>{" "}
          </Col>
          <Col className="mb-1">
            <Button
              variant="outline-danger"
              className="form-control"
              onClick={() => handleReset(word.id)}
            >
              Olvidada
            </Button>{" "}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
