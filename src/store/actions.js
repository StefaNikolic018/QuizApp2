import axios from "axios";

export default {
  async fetchQuestions({ commit }) {
    const apiUrl = "https://opentdb.com/api.php?amount=10";
    axios.get(apiUrl).then(response => {
      commit("allQuestions", response.data);
      commit("setCurrentQuestion");
      commit("setShuffledAnswers");
      commit("newStart");
    });
  },
  incrementNum({ commit }, truth) {
    commit("setNum", truth);
  },
  incorrectQuestions({ commit }, question, index) {
    commit("setIncorrect", { question, index });
  },
  shuffleAnswers({ commit }) {
    commit("setShuffledAnswers");
  },
  currentQuestionAction({ commit }) {
    commit("setCurrentQuestion");
  },
  // incrementIndex({commit}){
  //   commit('setIndex');
  //   commit('setCurrentQuestion');
  //   commit('setShuffledAnswers');
  // },
  next({ commit }) {
    commit("setIndex");
    commit("setCurrentQuestion");
    commit("setShuffledAnswers");
    commit("setSubmit");
    commit("setSelectedIndex", null);
  },
  selectAnswer({ commit }, index) {
    commit("setSelectedIndex", index);
  },
  submitAnswer({ commit }) {
    commit("setSubmittedAnswer");
  },
  async finished({ commit }, p) {
    commit("setSubmit");
    commit("setSelectedIndex", null);
    await commit("setPercentage", p);
    
  }
};
