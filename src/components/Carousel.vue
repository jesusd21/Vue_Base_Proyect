<script setup>
import { ref } from 'vue';

const images = ref([
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300',
  'https://via.placeholder.com/150x300'
]);
let currentIndex = ref(0);

const slideLeft = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : images.value.length - 1  ;
};

const slideRight = () => {
  currentIndex.value = currentIndex.value < images.value.length - 1 ? currentIndex.value + 1 : 0;
};
</script>

<template>

<div class="carousel-container">
    <div class="arrow left" @click="slideLeft">&#10094;</div>
    <div class="carousel" :style="{ transform: 'translateX(' + -currentIndex * 150 + 'px)' }">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="slide" class="slide-image" />
      </div>
    </div>
    <div class="arrow right" @click="slideRight">&#10095;</div>
  </div>
</template>


<style>

  
.carousel-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.carousel {
  overflow: hidden;
  flex-grow: 1;
  margin: 0 1rem;
  display: flex;
}

.slide {
  flex: 0 0 calc(15rem + 10px);
  height: 30rem;
  margin-right: 5px;
}

.slide:last-child {
  margin-right: 0;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  font-size: 2rem;
  cursor: pointer;
}

.left {
  margin-right: 1rem;
}

.right {
  margin-left: 1rem;
}
</style>
