<template>
    <div class="col-5 d-flex justify-content-center">
        <img class="img" src="../assets/img/me.jpg" alt="">
    </div>
    <div class="col-7 d-flex flex-column justify-content-center pr-5">
        <h1>
            Full Stack Web Developer
        </h1>
        <h2>Daniel Palomarez</h2>
        <p>I’m a Full Stack Developer who loves building simple, scalable, and effective software
            solutions. I enjoy
            working with a team, learning new things, and seeing my code turn into a fully realized application. From
            idea to design, from integration to deployment, I’m always excited to be a part of the process.</p>
        <span>
            <a title="Github" href="https://github.com/DanielCoder12"><i class="mdi mdi-github"></i></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/daniel-palomarez-b31a84297/"><i
                    class="mdi mdi-linkedin"></i></a>
            <a title="Resume" href=""><i class="mdi mdi-file-account"></i></a>
        </span>
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
    height: 35rem;
    width: auto;
}
</style>