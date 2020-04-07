<template>
  <div class="app-wrapper">
    <navbar class="navbar-container" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain } from "./components/index.js";
export default {
  name: "Layout",
  components: {
    Navbar,
    AppMain
  }
};
</script>

<style lang="scss" scoped>
.navbar-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
}
.main-container {
  margin-top: 100px;
}
</style>
