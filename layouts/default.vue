<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <nuxt-link to="/">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>ホーム</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/quote">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-align-horizontal-left</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>見積もる</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/contact">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>お問い合わせ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
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
        <nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
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
