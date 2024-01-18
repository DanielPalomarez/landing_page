<template>
    <div class="col-10 ">
        <div class="img-container">
            <div v-if="slideIndex == 1" class="slides fade">
                <img class="img" src="https://i.pinimg.com/736x/b0/ba/46/b0ba46bdeceb571926903194f86dc3ac.jpg" alt="">
            </div>
            <div v-if="slideIndex == 2" class="slides fade">
                <img class="img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94pZFbmPcLM4AdPD6YSKLqBE002oJ0fAhFg&usqp=CAU"
                    alt="">
            </div>
            <div v-if="slideIndex == 3" class="slides fade">
                <img class="img"
                    src="https://thicc-af.mywaifulist.moe/waifus/emilia-re-zero-starting-life-in-another-world/uHMcLJztzbBKWTo48f7687U3pttMdVht3WWMbmkI.jpg?class=thumbnail"
                    alt="">
            </div>
            <a class="prev" @click="changeSlide(-1)">&#10094;</a>
            <a class="next" @click="changeSlide(1)">&#10095;</a>
        </div>
        <div>
            <span :class="{ 'activeDot': slideIndex == slide }" @click="currentSlide(slide)" v-for="slide in slides"
                class="px-1 dot" :key="slide"> <i class="mdi mdi-circle"></i></span>
        </div>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from '../utils/Logger';
export default {
    setup() {
        let slideIndex = ref(1)
        const slides = [1, 2, 3]
        return {
            slideIndex,
            slides,
            changeSlide(slideNum) {
                slideIndex.value += slideNum
                if (slideIndex.value == 0) {
                    slideIndex.value = 3
                }
                if (slideIndex.value == 4) {
                    slideIndex.value = 1
                }
                logger.log(slideIndex.value)
            },
            currentSlide(slideNum) {
                slideIndex.value = slideNum
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.img {
    height: 30rem;
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.dot {
    color: pink;
}

.activeDot {
    color: rgb(249, 153, 169);
}

.img-container {
    position: relative;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.prev:hover,
.next:hover {
    background-color: rgb(249, 153, 169);
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev {
    left: 0;
    border-radius: 0 3px 3px 0;
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
    opacity: 1;
}

@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}
</style>