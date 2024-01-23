<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
import {  useRouter } from 'vue-router';
import tinycolor from 'tinycolor2';

const router = useRouter();
const isSticky = ref(false);
const isScrolled = ref(false);
const menuVisible = ref(false);

const { color } = defineProps(['color']);
const colorSec= ref(color);
function degradeColor() {

  const baseColor = tinycolor(colorSec.value);
  const degraded = baseColor.lighten(10);
  colorSec.value= degraded.toHexString();
  return degraded.toHexString();
}
const handleScroll = () => {
  if (window.scrollY > 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }

  const navbar = document.querySelector('nav');
  if (navbar.offsetTop < window.scrollY) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navigateTo = (path) => {
  router.push(path).then(() => {
    // Después de la redirección, lleva la página al inicio (top)
    window.scrollTo(0, 0);
  });
  menuVisible.value = false;
};
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};
</script>

<template>
  <div>
  <nav :style="{ backgroundColor: isSticky ? color : color }" :class="{ 'sticky': isSticky, 'scrolled': isScrolled }">
    <div class="nav-items">
        <div class="links lg:block hidden w-6/6 md:4/6">
          <ul class="menu flex items-center justify-center">
            <li><a @click.prevent="navigateTo('/')" class="link">Home</a></li>
            <li><a @click.prevent="navigateTo('/about')" class="link">About</a></li>
            <li><a @click.prevent="navigateTo('/events')" class="link">Events</a></li>
            <li><a @click.prevent="navigateTo('/products')" class="link">Products</a></li>
            <li><a @click.prevent="navigateTo('/login')" 
                class="border-4 border-gray-600 bg-gray-600 text-white font-bold p-2 rounded-full hover:bg-gray-500 hover:text-white transition duration-500 link">LogIn</a>
            </li>
          </ul>
        </div>

        <div class="block lg:hidden w-1/6 lg:w-4/6">
          <a href="#" class="border-4 border-gray-600 bg-gray-600 text-white font-bold p-2 m-10 rounded-full hover:bg-gray-500 hover:text-white transition duration-500 link" @click="toggleMenu">Menu</a>
          <ul class="mobile-links mt-[-2rem] w-full absolute z-50 left-0 text-center" :style="{ backgroundColor: color  }" :class="{ hidden: !menuVisible }">
            <li><a @click.prevent="navigateTo('/')" class="link">Home</a></li>
            <li><a @click.prevent="navigateTo('/about')" class="link">About</a></li>
            <li><a @click.prevent="navigateTo('/events')" class="link">Events</a></li>
            <li><a @click.prevent="navigateTo('/products')" class="link">Products</a></li>
            <li><a @click.prevent="navigateTo('/login')" 
                class="border-4 border-gray-600 bg-gray-600 text-white font-bold p-2 rounded-full hover:bg-gray-700 hover:border-gray-700 transition duration-500 link">LogIn</a>
            </li>
          </ul>
        </div>
    </div>
  </nav>
    <div class="w-full " :style="{backgroundColor: color, minHeight:'50rem'}" v-if="color!=='#BDC6AC'">

   </div>
</div>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  color: azure;
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  color: azure;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.scrolled {
  background-color: rgb(94, 139, 150); /* Cambia el color al hacer scroll */
}

.nav-items {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 3rem;
}

.nav-items > * {
  margin-left: 1rem; /* Espacio entre elementos */
}
</style>
