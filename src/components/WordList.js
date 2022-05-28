import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Word } from "./Word.js";
import { useSpeechSynthesis } from "react-speech-kit";
import { WordContext } from "../WordContext.js";

export const WordList = () => {
  const { speak, voices } = useSpeechSynthesis();
  const { words, dispatch } = useContext(WordContext);

  const handleReset = (id) => {
    dispatch({
      type: "reset",
      payload: id,
    });
  };

  const handleNext = (oWord) => {
    dispatch({
      type: "next",
      payload: oWord,
    });
  };

  const dateCompare = new Date();
  dateCompare.setHours(0, 0, 0, 0);

  return (
    <Row className="mt-2">
      {words
        .filter(
          (word) =>
            word.step < 7 && Number(word.showTime) <= dateCompare.getTime()
        )
        .map((word) => (
          <Col key={word.id} md={12} lg={4} className="mb-2">
            <Word
              word={word}
              speak={speak}
              handleReset={handleReset}
              handleNext={handleNext}
              voice={voices.find(
                (voice) => voice.lang.search(word.language) >= 0
              )}
            />
          </Col>
        ))}
    </Row>
  );
};
