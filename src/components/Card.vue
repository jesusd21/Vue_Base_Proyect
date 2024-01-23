<template>
    <div class="w-80 border border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-lg h-2/5">
      <img :src="image" alt="Card Image" class="w-80 h-96 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  };
  </script>
  