<template>
  <div class="result-wrapper">
    <div class="result-container">
      <div class="result-price-contents">
        <div class="result-contents-title">見積もり金額</div>
        <div class="result-price">
          <div class="result-price-num">
            {{ sumValue | numberWithDelimiter }}円
          </div>
        </div>
        <nuxt-link
          class="result-btn"
          tag="div"
          v-scroll-to="'#result-contact'"
          to
        >
          <span>この内容でお問い合わせする</span>
          <div class="arrow"></div>
        </nuxt-link>
      </div>
      <div class="result-detail">
        <resultDetail />
      </div>
      <div id="result-contact">
        <contactContents />
      </div>
    </div>
  </div>
</template>
<script>
import resultDetail from "@/components/resultDetail.vue";
import contactContents from "@/components/contactContents.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      sumValue: (state) => state.sumValue,
    }),
  },
  components: {
    resultDetail,
    contactContents,
  },
};
</script>
<style scoped>
.result-wrapper {
  width: 100%;
  margin-bottom: 80px;
}
.result-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.result-price-contents {
  width: 100%;
  height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: #20d8ba;
}
.result-contents-title {
  margin-top: 50px;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
}

.result-price {
  position: relative;
  margin-top: 130px;
}
.result-price-num {
  font-size: 4rem;
  font-weight: 700;
  font-family: "Roboto";
  color: #ffffff;
}
.result-price-num::before {
  width: 2rem;
  left: -100px;
  bottom: 2rem;
  content: "合計";
  font-size: 1rem;
  position: absolute;
  color: #ffffff;
}
.result-btn {
  max-width: 400px;
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -25px;
  background-color: #ffffff;
  border-radius: 25px;
  filter: drop-shadow(0px 3px 6px #cccccc);
  cursor: pointer;
}
.result-btn:active {
  filter: drop-shadow(0px 0px 0px #ffffff);
  bottom: -27px;
}
.result-btn span {
  margin: 0 15px;
  font-weight: 700;
}
.arrow {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid #17171b;
  border-bottom: 2px solid #17171b;
  transform: rotate(45deg);
  background: transparent;
}
.result-detail {
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #f0f2f2;
  padding: 80px 0;
}
#result-contact {
  max-width: 1000px;
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
}
</style>
