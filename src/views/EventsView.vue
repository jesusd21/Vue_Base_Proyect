<script setup>
import Card from '@/components/Card.vue';
import noImag from '@/assets/images/noImag.jpg'

</script>

<template>
  <div class="block bottom-0 left-0 w-full  min-h-96 bg-color py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12 xl:px-16">
      <Card class="c1" :image="noImag" title="Especial" description="1" />
      <Card class="c1" :image="noImag" title="Especial" description="2" />
      <Card class="c1" :image="noImag" title="Especial" description="3" />
      <Card class="c1" :image="noImag" title="Especial" description="4" />
      <Card class="c1" :image="noImag" title="Especial" description="5" />
      <Card class="c1" :image="noImag" title="Especial" description="6" />
    </div>
  </div>
</template>

<style>
.bg-color {
  background-color: #f3f4f6;
}

.grid-layout {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: flex-ends;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.flex-container {
  border: 1px solid black;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;

}

.c1 {
  text-align: center;
  margin: 20px;
  height: 500px;
}
</style>
