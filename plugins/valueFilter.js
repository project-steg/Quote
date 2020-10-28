import Vue from "vue";

Vue.filter("numberWithDelimiter", function(value) {
  if (!value) return "0";
  return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
});
