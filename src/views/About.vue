<template>
  <div id="about-wrapper" class="slide-in-contents page-content">
    <h1>Who Am I?</h1>
    <p>
      I don't really have much to put here yet, beyond what's already on
      <router-link to="/">Home</router-link>.
      Working on it. In the meantime, here's a pic of me. Might delete later.
    </p>
    <div class="container">
      <img src="/assets/me.png" id="portrait" :style="position" />
    </div>
    <TypingElement />
    <p>
      I'm currently in high school and will be for another two years.
      Once I graduate, I plan to spend at least a year or two in a foreign country, probably Canada, travelling and getting to know new people.
      Maybe I'll try to get a scholarship and study abroad, too. In any case, I want to study some combination of computer science, software
      engineering and political science.
    </p>
    <p>
      I could tell you what I think I'll want to do after, but it's almost certain to change until then. What I am reasonably sure about is that 
      I will try to pursue a career in software engineering, which has been a dream of mine for close to half my lifetime now.
    </p>
    <p>
      Software and programming have always fascinated me, since way before I really understood anything about them. Originally, I wanted to create 
      my own games, or improve the ones I loved, and when one day, I stumbled upon
      an advert for a programming book for children in a magazine my grandmother had bought me, ten-or-so year old me 
      was smart enough to say hey, lets give it a shot, and my dad gladly bought me the book. I'm incredibly thankful for whoever put that advert 
      in that magazine.
    </p>
  </div>
</template>

<script>
import TypingElement from "@/components/TypingElement.vue";

export default {
  name: "About",
  data() {
    return {
      position: {
        top: "auto",
        bottom: "auto",
        left: "auto",
        right: "auto"
      },
      images: ["/assets/me.png"]
    };
  },
  components: {
    TypingElement
  }
};
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

#portrait {
  max-height: 40vh;
  border-radius: 4px;
  height: auto;
}
</style>