<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link @click="$store.commit('viewPage', 0)">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$store.commit('viewPage', 1)">
          <v-list-item-action>
            <v-icon>mdi-align-horizontal-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>見積もる</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$store.commit('viewPage', 2)">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>お問い合わせ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#20d8ba" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="title-color">Steg Webサイト作成見積もりシステム</div>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div class="main-wrapper">
        <top v-if="$store.state.viewPage === 0" />
        <quote v-if="$store.state.viewPage === 1" />
        <result v-if="$store.state.viewPage === 3" />
      </div>
    </v-main>
    <v-footer color="#20d8ba" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }} Steg All right reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
import quote from "@/components/quote.vue";
import top from "@/components/top.vue";
import result from "@/components/result.vue";
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  components: {
    quote,
    top,
    result,
  },
};
</script>
<style scoped>
.title-color {
  color: #ffffff;
}
.main-wrapper {
  width: 100%;
}
</style>