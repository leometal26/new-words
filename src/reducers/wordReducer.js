export const wordReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "next":
      let newStepDate = 0;

      switch (action.payload.step) {
        case 1:
          newStepDate = 1;
          break;
        case 2:
          newStepDate = 2;
          break;
        case 3:
          newStepDate = 4;
          break;
        case 4:
          newStepDate = 8;
          break;
        case 5:
          newStepDate = 16;
          break;
        case 6:
          newStepDate = 32;
          break;
        default:
          break;
      }

      const newNextDate = new Date();
      newNextDate.setHours(0, 0, 0, 0);
      newNextDate.setDate(newNextDate.getDate() + newStepDate);

      action.payload.step = action.payload.step + 1;
      action.payload.showTime = newNextDate.getTime();

      return state.map((oWord) =>
        oWord.id === action.payload.id
          ? {
              id: oWord.id,
              word: oWord.word,
              meaning: oWord.meaning,
              step: action.payload.step,
              language: oWord.language,
              showTime: action.payload.showTime,
            }
          : oWord
      );

    case "reset":
      const newDate = new Date();
      newDate.setHours(0, 0, 0, 0);
      newDate.setDate(newDate.getDate() + 1);

      return state.map((oWord) =>
        oWord.id === action.payload
          ? {
              id: oWord.id,
              word: oWord.word,
              meaning: oWord.meaning,
              step: 2,
              language: oWord.language,
              showTime: newDate.getTime(),
            }
          : oWord
      );
    default:
      return state;
  }
};
