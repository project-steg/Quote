<template>
  <div class="result-wrapper">
    <div class="resulut-container">
      <div class="result-contents">
        <div class="result-contents-title">見積もり金額</div>
        <div class="result-price">
          <div class="result-price-contents">98,000円</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.result-wrapper {
  width: 100%;
}
.result-container {
  width: 100%;
}
.result-contents {
  width: 100%;
  height: 500px;
  display: flex;
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
.result-price-contents {
  font-size: 4rem;
  font-weight: 700;
  font-family: "Roboto";
  color: #ffffff;
}
.result-price-contents::before {
  width: 2rem;
  left: -100px;
  bottom: 2rem;
  content: "合計";
  font-size: 1rem;
  position: absolute;
  color: #ffffff;
}
</style>