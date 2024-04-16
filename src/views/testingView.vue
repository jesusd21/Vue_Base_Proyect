<script setup>
import noImag from '@/assets/images/noImag.jpg'
import emailSenderVue from '@/components/emailSender.vue';
import { ref } from 'vue';
const fileName = ref('')
const imgSeleccionada = ref(null)
function onFileSelected(event) {
    debugger;
    const file = event.target.files[0];
    fileName.value = file.name;
    // const formData = new FormData();
    // formData.append("my-file", file);
    // Vue.http.post(`server-url`, formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // })
    //     .then(res => {
    //         //todo ok
    //     },
    //         error => {
    //             //todo mal :P
    //         })
}
function seleccionarImagen(evento) {
    debugger;
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; // Acepta solo archivos de imagen
    input.onchange = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.readAsDataURL(archivo);
            lector.onload = (readerEvent) => {
                imgSeleccionada.value = readerEvent.target.result;
            };
        }
    };
    input.click(); // Simula un clic en el input de tipo file
}
</script>

<template>
    <div class="block w-full lg:p-36 md:p-36 bg-color ">

        <div class="mt-[-4rem]">
            <div class="flex justify-center items-center mb-52 ">
                <div class="search-box ">
                    <input type="text" placeholder="Search...">
                    <div class="search"></div>
                </div>
            </div>

            <div class="flex flex-wrap justify-between ">
                <!-- <div class="sm:ml-[-5rem] md:w-1/2 lg:w-5/12">
                    <img  :src="noImag"  alt="iconoImg" loading="lazy" class="img_perfil" />
                </div> -->

                <div class="sm:ml-[-5rem] md:w-1/2 lg:w-5/12">
                    <img :src="imgSeleccionada || noImag" alt="iconoImg" loading="lazy" class="img_perfil"
                        @click="seleccionarImagen" />
                </div>

                <div class="w-full md:w-1/2 lg:w-5/12">
                    <p class="text-left font-bold text-[4rem] " style="color: #63A38B;">
                        Texto de prueba para posicionar
                    </p>
                </div>
            </div>


            <div class="flex flex-wrap justify-between items-center">
                <p class="text-center font-bold text-[2rem] w-full md:w-1/2 lg:w-5/12 mb-8 lg:mb-0"
                    style="color: #63A38B;">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                    sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.
                    persona que se dedica a la imprenta)
                </p>
                <div class="w-full md:w-1/2 lg:w-5/12">
                    <div class="flex justify-center items-center">
                        <div class="w-1/2 m-[3rem] ">
                            <div
                                class="ml-[4rem] bg-[#63A38B] rounded-md sm:w-[10rem] md:w-[18rem] sm:h-[10rem] md:h-[18rem]">
                            </div>
                            <div
                                class=" mt-[2rem] bg-[#61A15B] rounded-md sm:w-[10rem] md:w-[20rem] sm:h-[4rem] md:h-[8rem]">
                            </div>
                        </div>

                        <div class="w-1/2">
                            <div
                                class="ml-[1rem] mt-[5rem] bg-[#63A32B] rounded-md sm:w-[7rem] md:w-[15rem] sm:h-[15rem] md:h-[30rem]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap justify-between items-center">
                <div class="w-full md:w-1/2 lg:w-5/12 mb-8 lg:mb-0">
                    <div class="flex justify-center items-center h-screen">
                        <div class="grid grid-cols-5 gap-4">
                            <!-- Fila 1 -->
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />

                            <!-- Fila 2 -->
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />

                            <!-- Fila 3 -->
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]" />
                        </div>
                    </div>
                </div>
                <p class="text-center font-bold text-[2rem] w-full md:w-1/2 lg:w-5/12" style="color: #63A38B;">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                    sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.
                    persona que se dedica a la imprenta)
                </p>
            </div>

            <emailSenderVue/>

        </div>
    </div>
</template>


<style scoped>
.img_perfil {
    border-radius: 50%;
    margin-left: 30%;
    border-radius: 50%;
    max-width: 20rem;
    max-height: 20rem;
    min-width: 20rem;
    min-height: 20rem;
    /* Establece la misma altura máxima que el ancho máximo */
    margin-left: 30%;
}

html {
    font-size: 60%;
    scroll-behavior: smooth;
    background: c3c2c2;
}

.search-box {
    position: absolute;
    margin: 5% auto;
    left: 50%;
}

.search-box .search {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.4);
    background: #fff;
    opacity: 0.8;
}

.search:hover {
    cursor: pointer;
}

.search::before {
    position: absolute;
    content: "";
    left: 25px;
    right: 0;
    bottom: 0;
    top: 32px;
    width: 18px;
    height: 2px;
    background: #dd4b39;
    transform: rotate(45deg);
    transition: 0.5s;
}

.search::after {
    position: absolute;
    content: "";
    top: 7px;
    right: 0;
    bottom: 0;
    left: 9px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.5s;
    border: 2px solid #dd4b39;
}

.search-box input {
    width: 50px;
    height: 50px;
    position: absolute;
    box-shadow: 0 0.2rem 0.5rem 0 #333;
    border: none;
    outline: none;
    border-radius: 30px;
    transition: 1s;
    opacity: 0;
    z-index: 5;
    padding: 0 30px 0 60px;
    direction: ltr;
    font-size: 1.5rem;
    left: 30%;
    top: 10%;
}

.search-box input:hover {
    cursor: pointer;
}

.search-box input:focus {
    opacity: 1;
    width: 200px;
    cursor: text;
}

.search-box input:focus~.search {
    z-index: 5;
    background: #dd4b39;
    box-shadow: 0 0.2rem 0.3rem 0 #333;
}

.search-box input:focus~.search::before {
    top: 23px;
    left: 10px;
    width: 30px;
    background: #fff;
}

.search-box input:focus~.search::after {
    top: 23px;
    left: 10px;
    border-radius: 0%;
    width: 30px;
    height: 2px;
    background: #fff;
    transform: rotate(-45deg);
    border: none;
}

.search-box input::placeholder {
    opacity: 0.5;
}

.containerContacto {
    border: 1px solid #63A38B;
    padding: 4rem;
    background-color: #BDC6AC;

}



@media(max-width:768px) {
    .search-box {
        position: absolute;
        margin: 50% auto;
        left: 10%;
    }
}
</style>