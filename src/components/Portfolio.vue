<template>
    <div class="col-10 p-4">
        <p class="fw-bold">Portfolio</p>
        <div>
            <button>left</button>
            <img class="img" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="">
            <button>right</button>
        </div>
        <i class="mdi mdi-circle-small"></i>
        <i class="mdi mdi-circle-small"></i>
        <i class="mdi mdi-circle-small"></i>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.img {
    height: 15rem;
    aspect-ratio: 1/1;
}
</style>