<template>
  <div id="home-wrapper">
    <div class="slide-in-contents page-content" id="home-content-wrapper">
      <h1>Hello There!</h1>
      <p>
        My name is Moritz. I’m a german tech enthusiast in my teens.
        Since I fell in love with computers and programming a few years ago, I have tried to learn that I can
        about a variety of topics related to computer science and software engineering.
      </p>
      <p>
        The goal of this site is to catalog my development journey, but also to motivate myself to create more cool stuff to put on here.
      </p>
      <!-- <p>
        I do some web development on the side, so if you like what you see and need a website done,
        or are interested in potentially collaborating, just shoot me an email or a DM! No commitments. I’m always happy to get to know new people.
      </p> -->
      <div class="container">
        <PrimaryButton label="Take a Look at My Work!" @click="$router.push('portfolio')" />
      </div>
      <p>
        Right now, I'm working on the front end of
        <a href="https://votyvote.com/">VotyVote</a>, an awesome online polling platform.
      </p>
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
      <p>
        Those are my preferred tools for pretty much anything webdev.
        With the exception of data storage, I've gone through a bunch of different solutions each, and eventually settled on this stack.
      </p>
      <p>
        I've also begun developing my own front-end framework,
        <a href="https://github.com/pixldemon/visiejs">visiejs</a>, but that's more of an experiment that an attempt
        to create something useful in practice. I'm pretty much completely rewriting it, which is why the repo is private,
        but it should be ready to go public again soon.
      </p>
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
          description: "For lightning fast, dynamic UI"
        },
        {
          icon: "/assets/flask.png",
          title: "Flask",
          description: "For an infinitely extendable back end"
        },
        {
          icon: "/assets/sqlite.png",
          title: "SQLite",
          description: "For safe & fast storage of data"
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
  position: relative;
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