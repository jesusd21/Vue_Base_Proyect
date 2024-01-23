<script setup>
import { defineProps } from 'vue';

defineProps({
    color: {
        type: String,
        required: true
    }
});
</script>

<template>
  <div class="block bottom-0 left-0 w-full h-96 p-0" :style="{ backgroundColor: '#FFF', zIndex: 9999 }">
    <div v-for="i in 16" :key="i" :style="{ height: `${0.5 + i * 0.15}rem`, backgroundColor:  color }" class="w-full mb-0.5"></div>
  </div>
</template>

<style>
/* Agrega estilos adicionales según sea necesario */
</style>
