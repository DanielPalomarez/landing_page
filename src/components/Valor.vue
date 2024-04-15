<template>
    <div class="col-5 component">Valor</div>
    <div class="col-7 component"> <img class="construction-img"
            src="https://static.vecteezy.com/system/resources/previews/014/585/748/non_2x/under-construction-sign-png.png"
            alt=""></div>
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
.component {
    background-color: pink;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
</style>