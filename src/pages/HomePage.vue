<template>
  <div class="container-fluid">
    <section class="row sticky-top">
      <Navbar />
    </section>
    <section class="row py-5">
      <AboutMe />
    </section>
    <section class="row d-flex justify-content-center text-center">
      <MySkills />
      <Experience />
      <!-- <Portfolio /> -->
      <PinUp />
      <Valor />
      <ContactMe />
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import AboutMe from '../components/AboutMe.vue';
import MySkills from '../components/MySkills.vue';
import Portfolio from '../components/Portfolio.vue';
import ContactMe from '../components/ContactMe.vue';
import Wave from '../components/wave.vue';
import Experience from '../components/Experience.vue';
import Navbar from '../components/Navbar.vue';
import PinUp from '../components/PinUp.vue'
import Valor from '../components/Valor.vue'

export default {
  setup() {
    return {
    };
  },
  components: {
    AboutMe, MySkills, Portfolio, ContactMe, Wave, Navbar, Experience, PinUp, Valor
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
