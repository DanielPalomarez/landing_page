<template>
  <div class="container-fluid">
    <section class="row">
      <TopSection />
    </section>
    <section class="row">
      <Wave />
    </section>
    <section class="row d-flex justify-content-center text-center">
      <AboutMe />
      <MySkills />
      <Portfolio />
      <ContactMe />
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import TopSection from '../components/TopSection.vue';
import AboutMe from '../components/AboutMe.vue';
import MySkills from '../components/MySkills.vue';
import Portfolio from '../components/Portfolio.vue';
import ContactMe from '../components/ContactMe.vue';
import Wave from '../components/wave.vue';

export default {
  setup() {
    const count = ref(0);
    return {
      count
    };
  },
  components: { TopSection, AboutMe, MySkills, Portfolio, ContactMe, Wave }
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
