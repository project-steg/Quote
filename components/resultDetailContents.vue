<template>
  <div class="result-detail-contents-wrapper">
    <div class="result-detail-contents-l"><img :src="list.img.url" alt /></div>
    <div class="result-detail-contents-c">
      <p class="result-detail-name">{{ list.name }}</p>
      <p class="result-detail-descript">{{ list.descript }}</p>
    </div>
    <div class="result-detail-contents-r">
      <p>{{ list.value | numberWithDelimiter }}円</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
};
</script>
<style scoped>
.result-detail-contents-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f0f2f2;
  margin-bottom: 15px;
}
.result-detail-contents-l {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
}
.result-detail-contents-l img {
  width: 50px;
  height: 50px;
}
.result-detail-contents-c {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.result-detail-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #404040;
}
.result-detail-descript {
  font-size: 0.8rem;
  color: #777777;
  padding-right: 1rem;
}
.result-detail-contents-r {
  display: flex;
  width: 20%;
}
.result-detail-contents-r p {
  font-family: "roboto";
  font-weight: 700;
  color: #404040;
}
@media screen and (max-width: 800px) {
  .result-detail-contents-wrapper {
    flex-direction: column;
  }
  .result-detail-contents-l {
    justify-content: center;
    margin-bottom: 1rem;
  }
  .result-detail-contents-c {
    align-items: center;
  }
  .result-detail-descript {
    padding: 0;
  }
  .result-detail-contents-r {
    width: 90%;
    justify-content: center;
  }
}
</style>
