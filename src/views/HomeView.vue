<script setup>
import Card from '@/components/Card.vue';
import coffeeWindow from '@/assets/images/coffeeWindow.jpg'
import coffeeMachine from '@/assets/images/coffeeMachine.jpg'

</script>

<template>
  <div class="bg-gray-100 mx-auto w-full mb-16" >


        <div key="div1" class="ml-40 mt-3 flex p-10 ">
          <div class="w-1/2 ">
            <div class="flex">
              <div class="w-1/2 h-full ">
                <Card :image='coffeeMachine' title="Especial" description="Disfruta de los mejores cafes" />
              </div>
              <div class="w-1/2 h-full">
                <Card :image='coffeeWindow' title="Especial" description="Disfruta de los mejores cafes" />
              </div>
            </div>
          </div>
          <div class="w-1/2 px-5 py-10 ">
            <div style="max-width: 100%; word-wrap: break-word;">
              <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item ">
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
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

    <div style="margin-left: 5rem; margin-right: 5rem;" class="bg-black w-1/7 h-1 mt-10 " />
    
    <div key="div1" class="ml-40 flex  my-8">
      <div class="w-1/2 pl-2">
        <div style="max-width: 100%; word-wrap: break-word;">
          <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item ">
            <p class="mt-16 mx-10">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
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
          <div class="w-1/2 h-full ">
            <Card :image='coffeeMachine' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
          <div class="w-1/2 h-full">
            <Card :image='coffeeWindow' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
        </div>
      </div>

    </div>

    <div style="margin-left: 5rem; margin-right: 5rem;" class="bg-black w-1/7 h-1 mt-10 " />

    <div key="div1" class="ml-40 my-8 flex">
      <div class="w-1/2 ">
        <div class="flex">
          <div class="w-1/2 h-full ">
            <Card :image='coffeeMachine' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
          <div class="w-1/2 h-full">
            <Card :image='coffeeWindow' title="Especial" description="Disfruta de los mejores cafes" />
          </div>
        </div>
      </div>
      <div class="w-1/2 pl-2 mx-15 mt-10">
        <div style="max-width: 100%; word-wrap: break-word;">
          <div style="margin-left: 10%; margin-right: 10%;" class="text-gray-600 font-bold item">
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el
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
