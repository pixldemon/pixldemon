<template>
  <div id="wrapper">
    <Sidebar />
    <main>
      <router-view />
    </main>
    <Footer />
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
  margin-left: var(--sidebar-width);
  min-height: 100vh;
}
main {
  padding-top: $top-padding;
  margin: 0 $content-margin;
  max-width: $max-content-width;
}

@media only screen and (max-width: $breakpoint) {
  #wrapper {
    width: 95%;
    max-width: $max-content-width;
    margin: 0 auto;
    padding: 0;
    padding-top: 5rem;
  }
  main {
    padding-top: 0rem;
  }
}
@media only screen and (max-width: $breakpoint2) {
  #wrapper {
    padding-top: 3rem;
  }
}
</style>
