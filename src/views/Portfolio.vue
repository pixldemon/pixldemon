<template>
  <div id="portfolio-wrapper">
    <div class="slide-in-contents page-content">
      <h1>Stuff I Made</h1>
      <p>Here are some of my past projects. It's far from everything, but everything worth mentioning.</p>
      <div id="items" class="container">
        <div class="item" v-for="(item, index) in items" :key="item.name+index">
          <h3 class="item-title">{{item.name}}</h3>
          <img :src="`https://picsum.photos/250/180?dummy=${Math.random()}`" alt class="thumbnail" />
          <p class="item-description">{{item.description}}</p>
          <p class="links">
            <a
              v-for="link in item.links"
              :href="link.url"
              :key="link.url+Math.random()"
            >{{link.label}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      items: [
        {
          name: "visiejs",
          description:
            "Lightweight & barebones reactive view library written in TypeScript",
          links: [
            { label: "Github", url: "https://github.com/pixldemon/visiejs" },
            { label: "npm", url: "https://www.npmjs.com/package/visiejs" }
          ]
        },
        {
          name: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor ipsa fugit, voluptatum aspernatur.",
          links: [
            { label: "Github", url: "#" },
            { label: "Deployed Here", url: "#" }
          ]
        },
        {
          name: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor ipsa fugit, voluptatum aspernatur.",
          links: [
            { label: "Github", url: "#" },
            { label: "Deployed Here", url: "#" }
          ]
        },
        {
          name: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor ipsa fugit, voluptatum aspernatur.",
          links: [
            { label: "Github", url: "#" },
            { label: "Deployed Here", url: "#" }
          ]
        },
        {
          name: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor ipsa fugit, voluptatum aspernatur.",
          links: [
            { label: "Github", url: "#" },
            { label: "Deployed Here", url: "#" }
          ]
        },
        {
          name: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor ipsa fugit, voluptatum aspernatur.",
          links: [
            { label: "Github", url: "#" },
            { label: "Deployed Here", url: "#" }
          ]
        },
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

main {
  max-width: 900px;
}
#items {
  display: grid;
  grid-gap: 14px;
  width: 100%;
  justify-items: space-between;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  .item {
    // box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.17);
    padding: 1rem;
    border-radius: 0px;
    min-height: 300px;
    transition: 0.2s;
    background-color: white;
    h3 {
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
    }
    img {
      width: calc(100% + 2rem);
      margin: 0 -1rem;
    }
    .links {
      display: flex;
			justify-content: center;
			margin: 0 auto;
      a {
        font-size: 0.9em;
			}
			a:not(:last-child) {
				margin-right: 1rem;
			}
    }
  }
}
</style>