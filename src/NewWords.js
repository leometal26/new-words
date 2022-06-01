import React, { useEffect, useReducer } from "react";
import { Menu } from "./components/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CheckWords } from "./screens/CheckWords";
import { AddWord } from "./screens/AddWord";
import { AddUser } from "./screens/AddUser";
import { SelectUser } from "./screens/SelectUser";
import { wordReducer } from "./reducers/wordReducer";
import { WordContext } from "./WordContext";

const init = () => {
  return JSON.parse(localStorage.getItem("words")) || [];
};

export const NewWords = () => {
  const [words, dispatch] = useReducer(wordReducer, [], init);

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  return (
    <>
      <WordContext.Provider
        value={{
          words,
          dispatch,
        }}
      >
        <Router>
          <Menu></Menu>
          <Routes>
            <Route exact path="words" element={<CheckWords />} />
            <Route exact path="users" element={<SelectUser />} />
            <Route exact path="newUser" element={<AddUser />} />
            <Route exact path="newWord" element={<AddWord />} />
            <Route path="*" element={<CheckWords />} />
          </Routes>
        </Router>
      </WordContext.Provider>
    </>
  );
};
