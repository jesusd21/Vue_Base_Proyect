<script setup>
import Card from '@/components/Card.vue';
import noImag from '@/assets/images/noImag.jpg'


</script>

<template>
  <div class="mx-auto bg-gray-100 mb-16 p-4 sm:p-6 md:p-8 lg:p-12">
    <div class="md:ml-10 lg:ml-20 mt-3 flex flex-wrap justify-between p-10">
      <div class="w-full md:w-1/2 lg:w-5/12 mb-6 md:mb-0">
        <div class="flex flex-wrap justify-between">
          <div class="w-full h-full sm:w-1/2 mb-4 md:mb-0">
            <Card :image="noImag" title="Especial" description="Disfruta de los mejores cafes" />
          </div>
          <div class="w-full h-full sm:w-1/2">
            <Card :image="noImag" title="Especial" description="Disfruta de los mejores cafes" />
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-5 py-10">
        <div style="max-width: 100%; word-wrap: break-word;">
          <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item text-center">
            <p style="line-height: 2; font-size: larger;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
              texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
              dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
              libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en
              documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
              creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con
              software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:ml-10 lg:ml-20 mt-3 flex flex-wrap justify-between p-10">
      <div class="w-full md:w-1/2 px-5 py-10">
        <div style="max-width: 100%; word-wrap: break-word;">
          <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item text-center">
            <p style="line-height: 2; font-size: larger;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
              texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
              dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
              libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en
              documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
              creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con
              software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-5/12 mb-6 md:mb-0">
        <div class="flex flex-wrap justify-between">
          <div class="w-full h-full sm:w-1/2 mb-4 md:mb-0">
            <Card :image="noImag" title="Especial" description="Disfruta de los mejores cafes" />
          </div>
          <div class="w-full h-full sm:w-1/2">
            <Card :image="noImag" title="Especial" description="Disfruta de los mejores cafes" />
          </div>
        </div>
      </div>

    </div>


    <div class="md:ml-10 lg:ml-20 mt-3 flex flex-wrap justify-between p-10">
      <div class="w-full md:w-1/2 lg:w-5/12 mb-6 md:mb-0">
        <div class="flex flex-wrap justify-between">
          <div class="w-full h-full sm:w-1/2 mb-4 md:mb-0">
            <Card :image="noImag" title="Especial" description="Disfruta de los mejores cafes" />
          </div>
          <div class="w-full h-full sm:w-1/2">
            <Card :image="noImag" title="Especial" description="Disfruta de los mejores cafes" />
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-5 py-10">
        <div style="max-width: 100%; word-wrap: break-word;">
          <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item text-center">
            <p style="line-height: 2; font-size: larger;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
              texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
              dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
              libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en
              documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
              creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con
              software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>

</style>