<template>
  <div class="layout">
    <Nav/>
    <div :class="$style.layoutContainer">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";


@Component({
  components: {
    Nav:() => import(/* webpackChunkName: "nav" */"@components/nav/Nav.vue"),
    Footer:() => import(/* webpackChunkName: "footer" */"@layout/Footer.vue"),
  }
})
export default class Layout extends Vue {
}
</script>

<style lang="scss" module>
@import '@scss/base/layout.scss';
</style>