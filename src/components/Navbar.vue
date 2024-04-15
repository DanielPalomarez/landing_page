<template>
  <nav class="d-flex align-items-center justify-content-between bg-pink">
    <a href="">PlaceHolder</a>
    <li class="m-3">
      <button class="ms-3 btn" v-for="link in links" :key="link">{{ link }}</button>
    </li>
  </nav>
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
.bg-pink {
  background-color: pink
}

li {
  list-style-type: none;
}
</style>
