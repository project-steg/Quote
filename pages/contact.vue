<template>
  <div class="contact-wrapper">
    <div class="contact-contents">
      <contactContents />
    </div>
  </div>
</template>
<script>
import contactContents from "@/components/contactContents.vue";
export default {
  components: {
    contactContents,
  },
};
</script>
<style scoped>
.contact-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.contact-contents {
  max-width: 1000px;
  width: 80%;
  margin: 80px 0;
}
</style>