<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import tinycolor from 'tinycolor2';
import beachVideo from '@/assets/videos/beachVideo.mp4'
import colors from '@/assets/colors';
const router = useRouter();
const isSticky = ref(false);
const isScrolled = ref(false);
const menuVisible = ref(false);

const { color } = defineProps(['color']);
const colorSec = ref(color);
function degradeColor() {

  const baseColor = tinycolor(colorSec.value);
  const degraded = baseColor.lighten(10);
  colorSec.value = degraded.toHexString();
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
    router.scrollTo(0, 0);
  });
  menuVisible.value = false;
};
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};
</script>

<template>
  <div>
    <nav :style="{ backgroundColor: isSticky ? color : color === colors.home ? 'transparent' : color, color: 'black' }"
      :class="{ 'sticky': isSticky, 'scrolled': isScrolled }">
      <div>
        <div class="links lg:block hidden">
          <ul class="menu flex items-center justify-center">
            <li><a @click.prevent="navigateTo('/')" class="link ">Home</a></li>
            <li><a @click.prevent="navigateTo('/about')" class="link ">About</a></li>
            <li><a @click.prevent="navigateTo('/events')" class="link ">Events</a></li>
            <li><a @click.prevent="navigateTo('/products')" class="link ">Products</a></li>
            <li><a @click.prevent="navigateTo('/login')" class="link ">LogIn</a>
            </li>

          </ul>
        </div>

        <div class="block lg:hidden w-1/6 lg:w-1/6">
          <a href="#"
            class="border-4 block w-16 border-gray-600 bg-gray-600 text-white font-bold p-2 m-8 rounded-full hover:bg-gray-500 hover:text-white transition duration-500"
            @click="toggleMenu">Menu</a>
          <ul class="mobile-links mt-[-2rem] w-full absolute z-50 left-0 text-center" :style="{ backgroundColor: color }"
            :class="{ hidden: !menuVisible }">
            <li><a @click.prevent="navigateTo('/')" class="link ">Home</a></li>
            <li><a @click.prevent="navigateTo('/about')" class="link">About</a></li>
            <li><a @click.prevent="navigateTo('/events')" class="link">Events</a></li>
            <li><a @click.prevent="navigateTo('/products')" class="link">Products</a></li>
            <li><a @click.prevent="navigateTo('/login')"
                class="border-4 border-gray-600 bg-gray-600 text-white font-bold p-2 rounded-full hover:bg-gray-700 hover:border-gray-700 transition duration-500 ">LogIn</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="w-full relative" :style="{ backgroundColor: color, minHeight: '20rem' }" v-if="color === colors.home">
  <video class="w-full h-full -z-0" autoplay loop>
    <source :src="beachVideo" type="video/mp4">
    Tu navegador no soporta el tag de video.
  </video>
  <!-- Capa transparente -->
  <div class="absolute top-0 left-0 w-full h-full bg-[#2C3A3D] bg-opacity-70 z-1"></div>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2">
    <input class="rounded w-[50rem] h-16 border p-1 text-center font-bold"  type="text" placeholder="Barra de búsqueda" />
  </div>
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
  display: flex;
  justify-content: center;
  /* Centra los elementos horizontalmente */
  align-items: center;
  /* Centra los elementos verticalmente */
}

.btnLink {
  background-color: rgb(137, 133, 133);
  border-radius: 40%;
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 5px;
}

.btnLink:hover {
  background-color: #c4c6bf;
  transition-duration: .5s;
}

.btnLink :hover {
  background: #DE4738;

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
  background-color: rgb(94, 139, 150);
  /* Cambia el color al hacer scroll */
}

.nav-items {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 3rem;
  display: flex;
  justify-content: center;
  /* Centra los elementos horizontalmente */
  align-items: center;
  /* Centra los elementos verticalmente */
}

.nav-items>* {
  margin-left: 1rem;
  /* Espacio entre elementos */

}</style>
