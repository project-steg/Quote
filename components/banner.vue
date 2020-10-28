<template>
  <div class="banner-wrapper">
    <div class="banner-l">
      <p>自分のWebサイトに</p>
      <p>載せたいものをクリック！</p>
    </div>
    <div class="banner-l-md">
      <p>自分のWebサイトに載せたいものをクリック！</p>
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
}
.banner-l p {
  font-family: "M PLUS Rounded 1c";
  font-size: 2rem;
  color: #ffffff;
}
.banner-l-md {
  display: none;
}
.banner-r {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50%;
  margin-top: 70px;
  padding-bottom: 35px;
}
@media screen and (max-width: 992px) {
  .banner-wrapper {
    flex-direction: column;
    overflow: hidden;
  }
  .banner-l {
    display: none;
  }
  .banner-l-md {
    display: flex;
    margin-top: 0px;
  }
  .banner-l-md p {
    font-family: "M PLUS Rounded 1c";
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 5px;
    text-align: center;
    padding: 0 1rem;
  }
  .banner-r {
    margin-top: 0;
    padding-bottom: 0px;
    width: 320px;
    align-items: top;
    position: relative;
    top: 20px;
  }
}
</style>