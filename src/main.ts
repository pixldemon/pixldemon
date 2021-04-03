import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Analytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(Analytics, {
  id: 'UA-168769445-1',
  router
})

console.log(Vue.compile(`  <div id="contact-wrapper" class="slide-in-contents page-content">
<h1>Contact Me</h1>
<p>If you are interested in collaborating with me or want to connect for any other reason, here is how you can reach me.</p>
<ul class="slide-in-contents">
  <li v-for="avenue in avenues" :key="avenue.name">
    <span class="avenue">{{ avenue.name }}</span>
    <span v-if="!avenue.link" class="address">{{ avenue.address }}</span>
    <a v-else :href="avenue.link" class="address">{{ avenue.address }}</a>
  </li>
</ul>
</div>`))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
