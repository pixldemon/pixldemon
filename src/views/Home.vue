<template>
  <div id="home-wrapper">
    <div class="slide-in-contents" id="home-content-wrapper">
      <h1>Who am I?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptas quos veniam a nisi velit! Molestias pariatur quasi incidunt cupiditate veritatis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptas quos veniam a nisi velit! Molestias pariatur quasi incidunt cupiditate veritatis.</p>
      <TypingElement />
      <div class="container">
        <PrimaryButton label="Take a Look at My Work!" @click="$router.push('portfolio')" />
      </div>
      <h2>My Arsenal</h2>
      <div id="stack-wrapper">
        <div id="stack">
          <div class="stack-item" v-for="item in items" :key="item.title">
            <img :src="item.icon" />
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptas quos veniam a nisi velit! Molestias pariatur quasi incidunt cupiditate veritatis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde voluptas quos veniam a nisi velit! Molestias pariatur quasi incidunt cupiditate veritatis.</p>
    </div>
  </div>
</template>

<script>
import TypingElement from "@/components/TypingElement";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "Home",
  components: {
    TypingElement,
    PrimaryButton
  },
  data() {
    return {
      items: [
        {
          icon: "/assets/vue.png",
          title: "Vue.js",
          description: "For lightning fast, responsive UI"
        },
        {
          icon: "/assets/flask.png",
          title: "Flask",
          description: "For a reliable, infinitely extendable back end"
        },
        {
          icon: "/assets/sqlite.png",
          title: "SQLite",
          description: "For fast, safe storage of data"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

#home-wrapper {
  width: 100%;
  background-size: cover;
  position: relative;
}
#home-content-wrapper {
  h1 {
    line-height: 1;
    font-weight: 900;
    margin: 1.3rem 0;
    font-size: 3rem;
  }
  p {
    font-weight: 300;
    line-height: 2.4rem;
    color: $text-color;
  }
}

hr {
  margin: 1rem 0;
  border: none;
}

#stack-wrapper {
  margin: 2rem auto;
  height: 100%;
  display: flex;
  align-items: center;
}
#stack {
  display: flex;
  margin: 0 auto;
}
.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 120px;
    margin-bottom: 1rem;
  }
  p,
  h4 {
    margin: 0.3rem 0;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.4 !important;
    color: $text-color;
    text-align: center;
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
}

@media only screen and (max-width: $breakpoint) {
  .stack-item {
    flex-direction: row;
    margin-right: 0 !important;
    p,
    h4 {
      font-size: 1.3rem;
      text-align: left;
    }
    img {
      width: 100px;
      height: auto;
      padding: 2rem;
      margin: 0;
      box-sizing: content-box;
    }
  }
  #stack {
    display: block;
    margin: 0;
  }
}
</style>