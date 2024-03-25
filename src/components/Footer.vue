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
  <div class="block bottom-0 left-0 w-full h-60 p-0" :style="{ backgroundColor: color, zIndex: 9999 }">
    <!-- <div v-for="i in 13" :key="i" :style="{ height: `${0.1 + i * 0.30}rem`, backgroundColor:  color }" class="w-full mb-0.5"></div> -->
  </div>
</template>

<style>
/* Agrega estilos adicionales según sea necesario */
</style>
