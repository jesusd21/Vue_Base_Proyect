<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import colors from '@/assets/colors.js';
import Navbar_Vertical from '@/components/Navbar_Vertical.vue';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
const currentRoute = ref('');
const router = useRouter();
const mainColor=ref('black');
const secColor=ref('');



watchEffect(() => {
  currentRoute.value = router.currentRoute.value.path;
  if (currentRoute.value === '/') {
      mainColor.value = colors.home;
      secColor.value = colors.home;
    } else if (currentRoute.value === '/about') {
      mainColor.value = colors.about;
      secColor.value = colors.about;
    } else if (currentRoute.value === '/events') {
      mainColor.value = colors.events;
      secColor.value = colors.events;
    } else if (currentRoute.value === '/products') {
      mainColor.value = colors.products;
      secColor.value = colors.products;
    } else if (currentRoute.value === '/login') {
      mainColor.value = colors.login;
      secColor.value = colors.login;
    }
});
</script>

<template>
  <div id="app">
    <!-- Encabezado común para todas las páginas -->
    <!-- <Navbar_Vertical></Navbar_Vertical> -->
    <Navbar :color=mainColor />
    <!-- Rutas dinámicas según las configuradas en el router -->
    <router-view  style="margin-top: 4rem" ></router-view>
    <!-- Pie de página común para todas las páginas -->
    <Footer :color=mainColor />
    <!-- <Footer_1 :color=mainColor /> -->
  </div>
</template>
<style scoped>

</style>