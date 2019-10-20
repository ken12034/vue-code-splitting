<template>
  <div>
    About
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class About extends Vue {
  public mounted(): void {
    console.log("About");
  }
}
</script>