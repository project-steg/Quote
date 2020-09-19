<template>
  <div class="banner-wrapper">
    <div class="banner-l">
      <p>自分のWebサイトに</p>
      <p>載せたいものをクリック！</p>
    </div>
    <div class="banner-r">
      <bannerContents :list="$store.state.list[0]" />
    </div>
  </div>
</template>
<script>
import bannerContents from "@/components/bannerContents.vue";
export default {
  components: {
    bannerContents,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&display=swap");
.banner-wrapper {
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #20d8ba;
  margin-top: 80px;
}
.banner-l p {
  font-family: "M PLUS Rounded 1c";
  font-size: 2rem;
  color: #ffffff;
}
.banner-r {
  width: 350px;
  height: 350px;
  display: grid;
  place-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  margin-top: 70px;
  padding-bottom: 35px;
}
</style>