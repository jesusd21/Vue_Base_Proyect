<script setup>
import Card from '@/components/Card.vue';
import noImag from '@/assets/images/noImag.jpg'


</script>

<template>
  <div class="mx-auto bg-gray-100 mb-16 p-4 sm:p-6 md:p-8 lg:p-12" >
        <div key="div1" class="md:ml-10 lg:ml-20 mt-3 flex p-10" style="justify-content: space-between;">
          <div class="w-1/2 ">
            <div class="flex">
              <div class="w-1/2 h-full ">
                <Card :image='noImag' title="Especial" description="Disfruta de los mejores cafes" />
              </div>
              <div class="w-1/2 h-full">
                <Card :image='noImag' title="Especial" description="Disfruta de los mejores cafes" />
              </div>
            </div>
          </div>
          <div class="w-1/2 px-5 py-10 ">
            <div style="max-width: 100%; word-wrap: break-word;">
              <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item  text-center">
                <p style="line-height: 2; font-size: larger;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
                  texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
                  dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
                  libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
                  documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                  creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con
                  software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
    
    <div key="div1" class="md:ml-10 lg:ml-20 mt-3 flex p-10">
      <div class="w-1/2 pl-2">
        <div style="max-width: 100%; word-wrap: break-word;">
          <div style=" margin-right: 18%; " class="text-gray-600 font-bold item text-center mt-16">
            <p style="line-height: 2; font-size: larger;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
              texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
              dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
              libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
              documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
              creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con
              software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 ">
        <div class="flex">
          <div class="w-1/2 h-full ml-28">
            <Card :image='noImag' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
          <div class="w-1/2 h-full">
            <Card :image='noImag' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
        </div>
      </div>

    </div>


    <div key="div1" class="md:ml-10 lg:ml-20 mt-3 flex p-10">
      <div class="w-1/2 ">
        <div class="flex">
          <div class="w-1/2 h-full ">
            <Card :image='noImag' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
          <div class="w-1/2 h-full">
            <Card :image='noImag' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
        </div>
      </div>
      <div class="w-1/2 pl-2 mx-15 mt-10">
        <div style="max-width: 100%; word-wrap: break-word; ">
          <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item leading-150  text-center" >
            <p style="line-height: 2; font-size: larger;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
              texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se
              dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un
              libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
              documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
              creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con
              software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>

</style>