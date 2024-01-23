<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const currentRoute = ref('');
const router = useRouter();
const mainColor=ref('black');
const secColor=ref('');

const color1 = '#2C3A3D';
const color2 = '#386379';
const color3 = '#5D9DA6';
const color4 = '#63A38B';
const color5 = '#BDC6AC';

watchEffect(() => {
  currentRoute.value = router.currentRoute.value.path;
  console.log('La ruta ha cambiado:', currentRoute.value);
  if (currentRoute.value === '/') {
      mainColor.value = color1;
      secColor.value = color1;
    } else if (currentRoute.value === '/about') {
      mainColor.value = color2;
      secColor.value = color2;
    } else if (currentRoute.value === '/events') {
      mainColor.value = color3;
      secColor.value = color3;
    } else if (currentRoute.value === '/products') {
      mainColor.value = color4;
      secColor.value = color4;
    } else if (currentRoute.value === '/login') {
      mainColor.value = color5;
      secColor.value = color5;
    }
});
</script>

<template>
  <div id="app">
    <!-- Encabezado común para todas las páginas -->
    <Navbar :color=mainColor />
    <!-- Rutas dinámicas según las configuradas en el router -->
    <router-view  style="margin-top: 4rem" ></router-view>
    <!-- Pie de página común para todas las páginas -->
    <Footer :color=mainColor />

  </div>
</template>
<style scoped>

</style>