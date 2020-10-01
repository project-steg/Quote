<template>
  <div class="result-detail-wrapper">
    <div
      class="result-detail-contents"
      v-for="elem in $store.state.list"
      :key="elem.id"
    >
      <resultDetailContents :list="elem" />
    </div>
  </div>
</template>
<script>
import resultDetailContents from "@/components/resultDetailContents.vue";
export default {
  components: {
    resultDetailContents
  }
};
</script>
<style scoped>
.result-detail-wrapper {
  max-width: 1000px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 50px 0;
}
</style>
