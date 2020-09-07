<template>
  <div class="quote-wrapper">
    <div class="container">
      <div class="contents" v-for="elem in list" :key="elem.id">
        <contents :list="elem" />
      </div>

      <div class="quote-result" @vision="resultData">{{checkedName}}</div>
        <button @click="$store.commit('viewPage', 3)">見積もる</button>
    </div>
  </div>
</template>

<script>
import contents from "@/components/contents.vue";
import result from "@/components/result.vue";
export default {
  data() {
    return {
      checkedName: "",
      list: [
        { id: 1, name: "企業理念ページ" },
        { id: 2, name: "お問い合わせ" },
        { id: 3, name: "企業紹介" },
        { id: 4, name: "オフィス地図" },
        { id: 5, name: "代表者挨拶" },
      ],
    };
  },
  methods: {
    resultData(checkedName) {
      this.checkedName = checkedName;
    },
  },

  components: {
    contents,
    result
  },
};
</script>

<style scoped>
.quote-wrapper {
  width: 100%;
  display: grid;
  place-items: center;
}
.container {
  width: 90%;
  display: grid;
  place-items: center;
}
.contents {
  width: 80%;
  height: 75px;
  margin-top: 30px;
}
.quote-button {
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 50px;
}
button {
  width: 60%;
  height: 50px;
  background-color: #cccccc;
  filter: drop-shadow(4px 4px 6px #707070);
  position: relative;
}
button:active {
  filter: drop-shadow(0px 0px 0px);
  top: 3px;
}
</style>
