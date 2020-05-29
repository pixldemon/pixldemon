<template>
  <div id="sidebar" :class="{scrolled: scrolled, collapsed: collapsed}">
    <nav>
      <div id="mobile-header" v-if="mobile">
        <h1>
          <span>pixl</span>demon
        </h1>
        <div>
          <span id="route-name">{{routeName}}</span>
          <button id="hamburger" @click="collapsed = !collapsed"></button>
        </div>
      </div>
      <ul v-if="!(mobile && collapsed)" :class="{'slide-in-contents': mobile}">
        <li class="nav-entry">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-entry">
          <router-link to="/about">About Me</router-link>
        </li>
        <li class="nav-entry">
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li class="nav-entry">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import variables from "../styles/_variables.scss";

export default {
  name: "Sidebar",
  data() {
    return {
      scrolled: false,
      mobile: false,
      collapsed: true,
      routeName: this.$route.name
    };
  },
  watch: {
    $route(to, from) {
      this.collapsed = true;
      this.routeName = this.$route.name;
    }
  },
  created() {
    window.addEventListener("scroll", evt => {
      this.scrolled = document.firstElementChild.scrollTop != 0;
    });
  },
  mounted() {
    this.mobile =
      window.innerWidth < parseInt(variables.breakpoint2.replace("px", ""));
    window.addEventListener("resize", evt => {
      this.mobile =
        window.innerWidth < parseInt(variables.breakpoint2.replace("px", ""));
    });
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

#sidebar {
  padding-top: $top-padding;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;

  width: var(--sidebar-width);

  display: flex;
  flex-direction: column;

  padding-right: 1rem;
  padding-left: 1rem;

  user-select: none;

  background-color: white;
  z-index: 10;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 0;
  margin: 0;

  width: $sidebar-content-width;
  margin: 0 auto;
}

.nav-entry {
  margin: 1.3rem 0;
  list-style: none;

  a {
    color: black;
    font-weight: 300;
    text-decoration: none;
    font-size: 1.4rem;
    transition: 0.2s;

    opacity: 0.8;
    &:hover,
    &.router-link-exact-active { opacity: 1; }

    &::after {
      display: block;
      content: "";
      background-color: black;
      height: 1px;
      width: 0px;
      transition: 0.2s;
      margin: 0 auto;
    }

    &:hover::after,
    &.router-link-exact-active::after { width: 100%; }

    &.router-link-exact-active { color: $accent-color-1 !important; }
    &.router-link-exact-active::after { background-color: $accent-color-1; }
  }
}

#mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;

  h1 {
    margin: 0;
    text-align: center;
    font-weight: 900;
    color: $accent-color-1;
    span { color: black; }
  }
  #route-name { font-size: 1.4rem; }
}
#hamburger {
  background: none;
  border: none;
  outline: none;
  position: relative;
  height: 1.1rem;
  width: 2rem;
  padding: 1rem;
  box-sizing: content-box;
  margin: 0;
  margin-right: -1rem;

  &::before,
  &::after {
    display: block;
    position: absolute;
    content: "";
    height: 4px;
    width: 2rem;
    background-color: black;
    transition: 0.3s;
    transform-origin: 51% 51%;
  }
  &::before { top: 1rem; }
  &::after { bottom: 1rem; }
}
#sidebar:not(.collapsed) #hamburger {
  &::before {
    top: calc(50% - 2px);
    transform: rotate(225deg);
  }
  &::after {
    bottom: calc(50% - 2px);
    transform: rotate(-225deg);
  }
}
@media screen and (max-width: $breakpoint2) {
  #sidebar:not(.collapsed) {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  }
  ul {
    flex-direction: column !important;
    align-items: center;
  }
  .nav-entry {
    margin: 1.6rem 0 !important;
  }
}

@media screen and (max-width: $breakpoint) {
  #sidebar {
    width: 100vw;
    padding: 0 $content-margin;
    height: auto;
  }
  #sidebar {
    padding: 0.8rem 0;
  }
  nav {
    max-width: $max-content-width;
    margin: 0 $content-margin;
  }
  ul {
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
  }
  .nav-entry {
    margin: 0.5rem;
    font-size: 1rem;
  }
  .nav-entry:last-child {
    margin-right: 0;
  }
  .nav-entry:first-child {
    margin-left: 0;
  }
  #sidebar.scrolled {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    #background-cover {
      opacity: 1;
    }
  }
}
</style>