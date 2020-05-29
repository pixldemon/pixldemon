<template>
  <div id="footer-wrapper">
    <p>&copy;2020 Moritz Clerc</p>
    <p>
      <a href="https://github.com/pixldemon">Github</a>
      <a href="https://twitter.com/pixldemon">Twitter</a>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

#footer-wrapper {
  margin: 0 $content-margin;
  display: flex;
  max-width: $max-content-width;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  p {
    font-size: 1rem;
    margin-bottom: 0;
    & > :not(:last-child) {
      margin-right: 1rem;
    }
  }
  a[href] {
    color: black;
    transition: 0.2s;
    &:hover {
      color: $accent-color-1;
    }
  }
}
</style>