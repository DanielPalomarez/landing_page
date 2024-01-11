<template>
    <div class="col-12 p-0">
        <div class="bg-img">
            <Navbar />
            <div class="text-center">
                <h1>Daniel Palomarez</h1>
                <h2>Full Stack Web Developer</h2>

            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Navbar from './Navbar.vue';
export default {
    setup() {
        return {};
    },
    components: { Navbar }
};
</script>


<style lang="scss" scoped>
.bg-img {
    // FIXME FIX THIS STUPID PLACE HOLDER IMAGE OR FIND A REAL IMAGE TO USE
    background-image: url('https://s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/09/15183456/re-zero-season-2-screenshot-of-emilia.jpg');
    height: 35rem;
    width: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    object-position: center;
}
</style>