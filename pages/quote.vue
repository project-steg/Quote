<template>
  <div class="quote-wrapper">
    <div class="quote-container">
      <div class="quote-grid">
        <div class="quote-contents" v-for="elem in list" :key="elem.id">
          <contents :list="elem" />
        </div>
      </div>

      <nuxt-link to="/result" tag="div" class="quote-button">
        <button>見積もる</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import contents from "@/components/contents.vue";
export default {
  data() {
    return {
      list: [
        { id: 1, name: "企業理念ページ" },
        { id: 2, name: "お問い合わせ" },
        { id: 3, name: "企業紹介" },
        { id: 4, name: "オフィス地図" },
        { id: 5, name: "代表者挨拶" },
      ],
    };
  },

  components: {
    contents,
  },
};
</script>

<style scoped>
.quote-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 80px;
  margin-top: 80px;
}
.quote-contents {
  width: 300px;
  height: 330px;
  margin: auto;
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
