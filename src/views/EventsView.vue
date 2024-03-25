<script setup>
import Card from '@/components/Card.vue';
import noImag from '@/assets/images/noImag.jpg'

</script>

<template>
  <div class="block bottom-0 left-0 w-full p-0 min-h-96 bg-color">
    

      <!-- <div class="flex-container px-5"> -->
        <div class="grid-layout">
        <Card class="c1" :image='noImag' title="Especial" description="1" />
        <Card class="c1" :image='noImag' title="Especial" description="2" />
        <Card class="c1" :image='noImag' title="Especial" description="3" />
        <Card class="c1" :image='noImag' title="Especial" description="4" />
        <Card class="c1" :image='noImag' title="Especial" description="5" />
        <Card class="c1" :image='noImag' title="Especial" description="6" />
      </div>

  </div>
</template>

<style>
.bg-color {
  background-color:#f3f4f6;
}
.grid-layout {
  display: grid;
  grid-template-columns:  auto auto auto;
  justify-content: flex-ends;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}
.flex-container {
  border:1px solid black;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;

}
.c1{
  text-align: center;
  margin: 20px;
  height: 500px;
}


</style>
