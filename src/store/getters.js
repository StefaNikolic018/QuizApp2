export default {
  getAllQuestions(state) {
    return state.Questions;
  },
  getQuestionsLength(state) {
    return state.Questions.length;
  },
  getCorrectNum(state) {
    return state.correctNum;
  },
  getTotalNum(state) {
    return state.totalNum;
  },
  getCurrentQuestion(state) {
    return state.currentQuestion;
  },
  getShuffledAnswers(state) {
    return state.shuffledAnswers;
  },
  getIncorrectQuestions(state) {
    return state.incorrectQuestions;
  },
  getIncorrectIndexes(state) {
    return state.incorrectIndexes;
  },
  getSelectedIndex(state) {
    return state.selectedIndex;
  },
  getGreeting(state) {
    return state.greeting;
  },
  getClass(state) {
    return state.class;
  },
  getPercentage(state) {
    return state.percentage;
  }
};
