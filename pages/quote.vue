<template>
  <div class="quote-wrapper">
    <div class="quote-container">
      <banner />
      <div class="quote-grid">
        <div
          class="quote-contents"
          v-for="elem in $store.state.list"
          :key="elem.id"
        >
          <contents :list="elem" />
        </div>
      </div>

      <nuxt-link to="/result" tag="div" class="quote-button">
        <button>この内容で見積もる！</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import contents from "@/components/contents.vue";
import banner from "@/components/banner.vue";
export default {
  components: {
    contents,
    banner,
  },
};
</script>

<style scoped>
.quote-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quote-container {
  width: 90%;
  max-width: 1200px;
  margin: 80px 0;
}
.quote-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 80px;
  margin-top: 140px;
}
.quote-contents {
  width: 300px;
  height: 330px;
  margin: auto;
}
.quote-button {
  margin-top: 50px;
  display: grid;
  place-items: center;
}
.quote-button button {
  width: 500px;
  height: 75px;
  color: #ffffff;
  font-weight: 700;
  background-color: #20d8ba;
}
.quote-button button:hover {
  width: 500px;
  height: 75px;
  background-color: #ffffff;
  border: 4px solid #20d8ba;
  color: #20d8ba;
  display: grid;
  place-items: center;
}
@media screen and (max-width: 992px) {
  .quote-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
  }
}
@media screen and (max-width: 768px) {
  .quote-grid {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 80px;
  }
}
</style>
