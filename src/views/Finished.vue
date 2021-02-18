<template>
  <div class="container">
    <b-jumbotron>
      <b
        ><p
          class="border border-dark rounded p-2 shadow-lg"
          :class="getClass"
          v-html="getGreeting"
        ></p
      ></b>

      <hr class="my-4" />

      <!-- Using value -->
      <div v-if="getIncorrectQuestions" class="m-auto p-auto text-center">
        <b-button v-b-toggle="'collapse-2'" class="m-1" @click="isCollapsed"
          >Take a look at incorrect questions <br />
          <b-icon :icon="collapsedState" variant="dark"></b-icon>
        </b-button>

        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
          <b-card>
            <div
              class="m-0 border border-dark p-2 shadow"
              v-for="(item, key) in questionNumArray"
              :key="key"
            >
              <div class="font-weight-bold border border-dark m-3 shadow ">
                {{ item }}. Question:
                <span
                  v-html="getIncorrectQuestions[key].question"
                  class="question"
                ></span>
                <br />
                -Category:
                <span class="text-primary">{{
                  getIncorrectQuestions[key].category
                }}</span>
                <br />
                -Difficulty:
                <span class="text-info">{{
                  getIncorrectQuestions[key].difficulty
                }}</span>
              </div>

              <p
                class="m-0 border border-dark p-2"
                v-for="(value, ind) in getIncorrectQuestions[key]
                  .incorrect_answers"
                :key="ind"
                :class="{
                  incorrect: ind === getIncorrectIndexes[key]
                }"
                v-html="value"
              ></p>
              <p
                class="m-0 border border-dark p-2 correct"
                v-html="getIncorrectQuestions[key].correct_answer"
              ></p>
            </div>
          </b-card>
        </b-collapse>
      </div>

      <b-button
        class="mt-3 shadow-lg"
        variant="primary"
        @click="fetchQuestions"
      >
        <router-link to="/" class="text-light">Try again</router-link>
      </b-button>
    </b-jumbotron>
  </div>
</template>

// TODO: Categories of incorrect questions, and setting all the question
properties to default values instead of reloading

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // percentage: 0,
      questionNumArray: [],
      collapsedState: "caret-down-square"
    };
  },
  methods: {
    isCollapsed() {
      if (this.collapsedState === "caret-down-square") {
        this.collapsedState = "caret-up-square";
      } else {
        this.collapsedState = "caret-down-square";
      }
    },
    ...mapActions(["finished", "fetchQuestions"])
  },
  computed: {
    // setGreeting() {
    //   // if (this.percentage < 25) {
    //   //   return `Success, ${this.percentage}% of your answers are incorrect, you could try again to test your luck!`;
    //   // } else if (this.percentage > 25 && this.percentage < 50) {
    //   //   return `Not too bad for a rookie, ${this.percentage}% of your answers are incorrect, try again if you like!`;
    //   // } else if (this.percentage > 50 && this.percentage < 75) {
    //   //   return `You could do better, ${this.percentage}% of your answers are incorrect, try again!`;
    //   // } else {
    //   //   return `Too bad, ${this.percentage}% of your answers are incorrect, try again!`;
    //   // }
    // },
    ...mapGetters([
      "getIncorrectQuestions",
      "getIncorrectIndexes",
      "getQuestionsLength",
      "getPercentage"
    ]),
    getGreeting() {
      if (this.getPercentage < 25) {
        return `Success, ${this.getPercentage}% of your answers are incorrect, you could try again to test your luck!`;
      } else if (this.getPercentage > 25 && this.getPercentage < 50) {
        return `Not too bad for a rookie, ${this.getPercentage}% of your answers are incorrect, try again if you like!`;
      } else if (this.getPercentage > 50 && this.getPercentage < 75) {
        return `You could do better, ${this.getPercentage}% of your answers are incorrect, try again!`;
      } else {
        return `Too bad, ${this.getPercentage}% of your answers are incorrect, try again!`;
      }
    },
    getClass() {
      if (this.getPercentage <= 25) {
        return "bg-success";
      } else if (this.getPercentage > 25 && this.getPercentage < 50) {
        return "bg-primary";
      } else if (this.getPercentage >= 50 && this.getPercentage < 75) {
        return "bg-warning";
      } else if (this.getPercentage >= 75) {
        return "bg-danger";
      } else {
        return "bg-secondary";
      }
    }
  },
  mounted: function() {
    // this.percentage =
    //   (this.getIncorrectQuestions.length / this.getQuestionsLength) * 100;
    for (let i = 1; i <= this.getIncorrectQuestions.length; i++) {
      this.questionNumArray.push(i);
    }
    let p = (this.getIncorrectQuestions.length / this.getQuestionsLength) * 100;
    this.finished(p);
  }
};
</script>
<style scoped>
.correct {
  background-color: springgreen;
}
.incorrect {
  background-color: tomato;
}
.question {
  text-decoration: aqua dotted underline;
}
</style>
