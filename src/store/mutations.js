import _ from "lodash";
export default {
  allQuestions(state, data) {
    state.Questions = data.results;
  },
  setNum(state, truth) {
    if (truth) {
      state.correctNum++;
      state.totalNum++;
    } else {
      state.totalNum++;
    }
  },
  setIncorrect(state, payload) {
    state.incorrectQuestions.push(payload.question);
    state.incorrectIndexes.push(payload.index);
  },
  setShuffledAnswers(state) {
    let shuffled = [
      ...state.currentQuestion.incorrect_answers,
      state.currentQuestion.correct_answer
    ];
    state.shuffledAnswers = _.shuffle(shuffled);
    state.correctIndex = state.shuffledAnswers.indexOf(
      state.currentQuestion.correct_answer
    );
  },
  setCurrentQuestion(state) {
    state.currentQuestion = state.Questions[state.index];
    state.selectedIndex = null;
  },
  setIndex(state) {
    state.index++;
  },
  setSubmit(state) {
    state.submitted = false;
  },
  setCorrectIndex(state) {
    state.correctIndex = null;
  },
  setSubmittedAnswer(state) {
    if (!state.submitted) {
      state.submitted = true;
      if (state.correctIndex === state.selectedIndex) {
        state.correctNum++;
        state.totalNum++;
      } else {
        state.totalNum++;
        state.incorrectQuestions.push(state.currentQuestion);
        let ind = state.currentQuestion.incorrect_answers.indexOf(
          state.shuffledAnswers[state.selectedIndex]
        );
        state.incorrectIndexes.push(ind);
      }
    }
  },
  setSelectedIndex(state, index) {
    if (!state.submitted && index != null) {
      state.selectedIndex = index;
    } else {
      state.selectedIndex = null;
    }
  },
  setQuestionsLength(state) {
    state.questionsLength = 0;
  },
  async setPercentage(state, p) {
    state.percentage = p;
    return
  },
  newStart(state) {
    state.correctNum = 0;
    state.totalNum = 0;
    state.incorrectIndexes = [];
    state.incorrectQuestions = [];
  }
};
