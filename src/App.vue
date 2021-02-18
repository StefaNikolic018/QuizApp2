<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link>
    </div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import { mapActions } from "vuex";
export default {
  components: {
    Header
  },

  computed: {
    ...mapActions(["fetchQuestions", "shuffleAnswers", "currentQuestionAction"])
  },
  created() {
    this.fetchQuestions;
    // this.currentQuestionAction;
    // this.shuffleAnswers;
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
