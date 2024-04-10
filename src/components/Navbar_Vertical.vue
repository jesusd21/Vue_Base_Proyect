<template>
  <div class="vertical-navbar">
    <div class="w-[100%] p-20 font-bold text-xl">Something</div>
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        <router-link :to="item.link" class="font-bold text-xl ml-[35%]">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { text: 'Home', link: '/' },
        { text: 'about', link: '/about' },
        { text: 'events', link: '/events' },
        { text: 'products', link: '/products' },
        { text: 'login', link: '/login' },
      ]
    };
  }
};
</script>


<style scoped>
.vertical-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  background-color: #5D9DA6;
  color: #fff;
  z-index: 1000;
}

.vertical-navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.vertical-navbar li {
  padding: 17px;
  border: 1px solid #FFF;
  border-radius: 10%;
  margin: 5%;
   
}

.vertical-navbar a {
  text-decoration: none;
  color: #fff;
}


</style>
