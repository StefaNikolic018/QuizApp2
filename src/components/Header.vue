<template>
  <div class="container">
    <b-nav tabs>
      <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item disabled
        >Counter: {{ getCorrectNum }}/{{ getTotalNum }}</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["getCorrectNum", "getTotalNum"])
  }
};
</script>
