<template>
    <div class="col-12 p-0">
        <div class="bg-img">
            <Navbar />
            <div class="text-center text-white pt-5">
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
    // background-image: url('https://s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/09/15183456/re-zero-season-2-screenshot-of-emilia.jpg');
    min-height: 110dvh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    // background-color: pink;
    background-image: linear-gradient(rgb(251, 167, 181), rgb(250, 225, 229));
    // background: rgb(238, 174, 202);
    // background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
    // background-image: linear-gradient(to right, rgba(238, 174, 202, 1), rgba(148, 187, 233, 1));
    background-image: linear-gradient(to right, rgb(250, 128, 181), rgb(249, 215, 221));
}
</style>