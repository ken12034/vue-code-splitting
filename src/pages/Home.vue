<template>
  <div :class="$style.appContainer">
      Home
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  public mounted(): void {
    console.log("HOME");
  }
}
</script>

<style lang="scss" module>
@import '@scss/base/base.scss';
</style>