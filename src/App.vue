<template>
  <div id="wrapper">
    <Sidebar />
    <main>
      <router-view />
      <Footer />
    </main>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  created() {
    window.addEventListener("load", () =>
      document.body.classList.add("loaded")
    );
  },
  components: {
    Sidebar,
    Footer
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@100;300;400;500;800&family=Noto+Sans+SC:wght@100;300;500;900&display=swap");

@import "./styles/_variables.scss";
@import "./styles/_globals.scss";

#wrapper {
  min-height: 100vh;
  display: flex;
}
main {
  padding-top: $top-padding;
  margin: 0 $content-margin;
  max-width: $max-content-width;
  width: 100%;
}

@media only screen and (max-width: $breakpoint) {
  #wrapper {
    margin: 0;
    padding-top: 8rem;
  }
  main {
    padding-top: 0rem;
  }
}
</style>
