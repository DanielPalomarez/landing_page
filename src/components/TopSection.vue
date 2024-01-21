<template>
    <div class="col-12 p-0 wave">
        <div class="bg-img">
            <Navbar />
            <div class="text-center text-white pt-5 bebas">
                <h1 class="fw-bold ">Daniel Palomarez</h1>
                <h2 class="fw-bold">Full Stack Web Developer</h2>

            </div>
        </div>
        <div class="custom-shape-divider-bottom-1705548013 p-0">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill"></path>
            </svg>
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

.custom-shape-divider-bottom-1705548013 {
    position: absolute;
    bottom: -11dvh;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1705548013 svg {
    position: relative;
    display: block;
    width: calc(121% + 1.3px);
    height: 78px;
}

.custom-shape-divider-bottom-1705548013 .shape-fill {
    fill: #f4f4f4;
}
</style>