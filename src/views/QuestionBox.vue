<template>
  <div class="container">
    <b-jumbotron>
      <template #lead>
        <p></p>
        <b
          ><p
            class="border border-dark rounded bg-warning p-2 shadow-lg"
            v-html="getCurrentQuestion.question"
          ></p
        ></b>
      </template>

      <hr class="my-4" />

      <p
        class="m-0 border border-dark p-2"
        v-for="(answer, index) in getShuffledAnswers"
        :key="index"
        @click="selectAnswer(index)"
        :class="{
          dugme: selectedIndex != index,
          selected: selectedIndex === index,
          correct: submitted && index === correctIndex,
          incorrect:
            index != correctIndex && selectedIndex === index && submitted
        }"
        v-html="answer"
        :disabled="submitted === true"
      ></p>
      <b-button-group class="mt-3 border rounded border-dark">
        <b-button
          variant="primary"
          @click="submitAnswer"
          :disabled="getSelectedIndex === null || submitted"
          >Submit</b-button
        >
        <b-button
          v-show="getTotalNum < getQuestionsLength"
          variant="success"
          @click="next"
          :disabled="submitted === false"
          >Next</b-button
        >
        <b-button variant="success" v-show="getTotalNum === getQuestionsLength">
          <router-link to="/finished" class="text-light">Finish</router-link>
        </b-button>
      </b-button-group>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
// import _ from "lodash";
export default {
  name: "QuestionBox",
  methods: {
    ...mapActions([
      "shuffleAnswers",
      "fetchQuestions",
      "incrementNum",
      "incorrectQuestions",
      "shuffleAnswers",
      "currentQuestionAction",
      "incrementIndex",
      "next",
      "submitAnswer",
      "selectAnswer"
    ])
  },
  computed: {
    ...mapGetters([
      "getAllQuestions",
      "getQuestionsLength",
      "getCurrentQuestion",
      "getShuffledAnswers",
      "getTotalNum",
      "getSelectedIndex"
    ]),
    ...mapState([
      "Questions, correctNum, totalNum",
      "shuffledAnswers",
      "currentQuestion",
      "index",
      "correctIndex",
      "selectedIndex",
      "submitted"
    ])
  },
  mounted: function() {
    this.fetchQuestions();
    // this.currentQuestionAction(this.index);
    // this.currentQuestion = this.getAllQuestions[this.index];
    // this.shuffleAnswers;
    // this.fetchQuestions;
    // this.currentQuestionAction;
    // this.shuffleAnswers;
    this.questionsLength = this.getQuestionsLength;
  }
};
</script>
<style scoped>
.dugme {
  background-color: white;
  color: rgb(77, 64, 64);
  transition-duration: 0.5s;
}
.dugme:hover {
  background-color: rgb(77, 64, 64);
  color: white;
  cursor: pointer;
}
.selected {
  background-color: cornflowerblue;
}
.correct {
  background-color: springgreen;
}
.incorrect {
  background-color: tomato;
}
</style>
