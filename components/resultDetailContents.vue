<template>
  <div class="result-detail-contents-wrapper">
    <div class="result-detail-contents-l"><img :src="list.img" alt /></div>
    <div class="result-detail-contents-c">a</div>
    <div class="result-detail-contents-r">a</div>
  </div>
</template>
<script>
export default {
  props: ["list"]
};
</script>
<style scoped>
.result-detail-contents-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.result-detail-contents-l {
  width: 10%;
}
.result-detail-contents-l img {
  width: 50px;
}
.result-detail-contents-c {
  width: 70%;
}
.result-detail-contents-r {
  width: 20%;
}
</style>
