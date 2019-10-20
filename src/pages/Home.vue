<template>
  <div :class="$style.appContainer">
      Home
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Footer from "@pages/Footer.vue";

@Component({
  components: {
    Footer
    // Footer:()  => import(/* webpackChunkName: "footer" */"@pages/Footer.vue"),
  }
})
export default class Home extends Vue {
  public mounted(): void {
    console.log("HOME");
  }
}
</script>

<style lang="scss" module>
@import '@scss/base/base.scss';
</style>