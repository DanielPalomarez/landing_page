<template>
  <!-- <nav class="d-none d-md-inline">
    <ul class="d-flex justify-content-end">
      <li class="m-3" v-for="link in links" :key="link">
        <a>{{ link }}</a>
      </li>
    </ul>
  </nav> -->
</template>

<script>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
export default {
  setup() {
    const links = ['About me', 'My skills', 'Portfolio', 'Contact']

    const theme = ref(loadState('theme') || 'light')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })

    return {
      links,
      theme,
      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
