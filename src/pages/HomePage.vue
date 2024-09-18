<template>
  <div class="container-fluid  bg-pink">
      <Navbar />
    <section class="row d-flex justify-content-center">
      <Home />
    </section>


  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Home from '../components/Home.vue';

export default {
  setup() {
    return {
    };
  },
  components: {
    Navbar, Home
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
