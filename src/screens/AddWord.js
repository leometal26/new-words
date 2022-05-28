import React, { useContext, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { WordContext } from "../WordContext";
import { useForm } from "../hooks/useForm";

export const AddWord = () => {
  const { words, dispatch } = useContext(WordContext);
  const [{ word, meaning, language }, handleInputChange, reset] = useForm({
    word: "",
    meaning: "",
    language: "en",
  });

  const [msj, setMsj] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (word.trim().length <= 0 || meaning.trim().length <= 0) {
      setMsj("Ingrese término y significado");
      return;
    }

    if (
      words.findIndex((Inputword) => {
        return Inputword.word.toLowerCase() === word.toLowerCase();
      }) > 0
    ) {
      setMsj("Término ya ingresado");
      return;
    }
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    const newWord = {
      id: new Date().getTime(),
      word: word,
      meaning: meaning,
      language: language,
      step: 1,
      showTime: newDate.getTime(),
    };

    dispatch({
      type: "add",
      payload: newWord,
    });
    reset();
    setMsj("");
  };

  return (
    <Container className="mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicWord">
          <Form.Label>Término</Form.Label>
          <Form.Control
            autoComplete="off"
            spellCheck="false"
            type="text"
            name="word"
            placeholder="Ingrese término"
            value={word}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMeaning">
          <Form.Label>Significado</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            spellCheck="false"
            name="meaning"
            placeholder="Ingrese significado"
            value={meaning}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLanguage">
          <Form.Label>Idioma</Form.Label>
          <Form.Select
            aria-label="Idioma"
            name="language"
            onChange={handleInputChange}
            value={language}
          >
            <option value="en-US">Inglés</option>
            <option value="es-ES">Español</option>
            <option value="it-IT">Italiano</option>
            <option value="fr-FR">Frances</option>
          </Form.Select>
        </Form.Group>
        <Button
          onClick={handleAdd}
          variant="primary"
          type="submit"
          className="form-control"
        >
          Agregar
        </Button>
        {msj && (
          <Alert className="mt-3" variant="danger">
            {msj}
          </Alert>
        )}
      </Form>
    </Container>
  );
};
