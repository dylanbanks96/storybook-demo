<template>
  <div>
    <h1>{{ msg }}</h1>
    <input
      label="input"
      type="text"
      v-model="testDatas.random"
      @input="setData"
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  created: function() {
    // this.$store.registerModule("storeModule", storeModule, {
    //   // preserveState: true
    // });
    // eslint-disable-next-line no-console
    // console.log("STORE", this.$store);
  },
  methods: {
    ...mapActions("storeModule", ["setMyData"]),
    setData(e) {
      this.setMyData({ data: e.target.value, index: e.target.dataset.index });
    },
  },
  data() {
    return {
      testDatas: [
        {
          random: "0123456789",
          testing: "01010101011",
        },
      ]
    };
  },
  components: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
