<template>
  <div class="container-fluid">
    <section class="row d-flex justify-content-center">
      <Home />
    </section>


  </div>
</template>

<script>
import Home from '../components/Home.vue';

export default {
  setup() {
    return {
    };
  },
  components: {
     Home
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
