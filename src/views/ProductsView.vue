<script setup>
import noImag from '@/assets/images/noImag.jpg'
import { ref } from 'vue';

const fileName = ref('')
const imgSeleccionada= ref(null)
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
                    imgSeleccionada.value= readerEvent.target.result;
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
                    <img :src="imgSeleccionada || noImag" alt="iconoImg" loading="lazy" class="img_perfil" @click="seleccionarImagen"/>
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
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>

                            <!-- Fila 2 -->
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>

                            <!-- Fila 3 -->
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                            <div class="rounded-[50%] bg-gray-500 w-[5rem] h-[5rem] sm:w-[4rem] sm:h-[4rem]"/>
                        </div>
                    </div>
                </div>
                <p class="text-center font-bold text-[2rem] w-full md:w-1/2 lg:w-5/12" style="color: #63A38B;">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                    sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.
                    persona que se dedica a la imprenta)
                </p>
            </div>


            <div class="flex-nowrap  containerContacto sm:mt-[10%]">
                <input class="inputCorreo" type="email" v-model="email" placeholder="Tu Correo electrónico">
                <br>
                <input class="inputCorreo" type="text" v-model="asunto" placeholder="Asunto">
                <br>
                <label class="btn btn-primary" style="display: flex; align-items: center;">
                    <span class="ml-[85%] mr[5%] md:ml-[85%] sm:ml-[50%] " style="color: #63A38B;">Adjuntar archivos </span>
                    <svg style="width: 40px; " s enable-background="new 0 0 91 91" height="70px" id="Layer_1"
                        version="1.1" viewBox="0 0 91 91" width="70px" xml:space="preserve"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path
                                d="M88.3,34.924c-1.304-1.305-3.419-1.305-4.724,0L40.378,78.117c-3.561,3.561-8.238,5.568-13.175,5.652   c-4.922,0.104-9.454-1.732-12.843-5.121c-7.027-7.027-6.789-18.701,0.529-26.02c0.01-0.01,0.016-0.021,0.026-0.032l41.019-41.016   c4.5-4.492,11.817-4.49,16.319,0.009c4.503,4.504,4.503,11.832,0,16.336c-0.005,0.005-0.008,0.011-0.013,0.016L30.501,69.68   c-0.002,0.002-0.002,0.003-0.004,0.005c-1.873,1.865-4.92,1.864-6.789-0.005c-0.908-0.906-1.41-2.113-1.41-3.396   c0-1.281,0.498-2.482,1.4-3.388c0.005-0.004,0.01-0.007,0.014-0.011l37.43-37.438c1.304-1.305,1.304-3.418-0.001-4.723   s-3.419-1.305-4.724,0l-37.41,37.418c-0.007,0.007-0.016,0.011-0.021,0.018c-2.172,2.168-3.367,5.055-3.367,8.123   s1.195,5.951,3.369,8.125c2.238,2.234,5.179,3.352,8.118,3.352c2.94-0.002,5.881-1.117,8.118-3.354   c0.005-0.005,0.008-0.011,0.014-0.016l41.736-41.735c0.001-0.002,0.003-0.003,0.005-0.005c0.003-0.003,0.006-0.007,0.009-0.01   l0.711-0.711c0.182-0.181,0.331-0.38,0.462-0.588c5.896-7.155,5.505-17.787-1.183-24.477c-6.69-6.686-17.318-7.074-24.469-1.181   c-0.208,0.131-0.407,0.281-0.588,0.462L10.163,47.904c-0.01,0.009-0.015,0.02-0.023,0.029C0.243,57.859,0.017,73.748,9.638,83.371   c4.578,4.578,10.683,7.084,17.235,7.084c0.148,0,0.297-0.004,0.445-0.006c6.677-0.113,12.993-2.816,17.784-7.609   c0.004-0.003,0.006-0.008,0.009-0.011L88.3,39.646C89.604,38.344,89.604,36.229,88.3,34.924z"
                                fill="#65B794" />
                        </g>
                    </svg>

                    <input hidden type="file" accept=".*" @change="onFileSelected" name="myfile">
                </label>
                <p style="margin-left: 85%; ">{{ fileName }}</p>

                <textarea class="textArea" v-model="contenido" placeholder="Contenido del correo" />
                <br>
                <button
                    class="bg-[#63A38B] opacity-55 hover:bg-[#63A38B] hover:opacity-100 text-white font-bold py-2 px-4 rounded ml-[95%] md:ml-[95%] sm:ml-[70%] ">

                    Enviar
                </button>


            </div>
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
    min-height: 20rem; /* Establece la misma altura máxima que el ancho máximo */
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

.inputCorreo {
    border: 1px solid #63A38B;
    border-radius: 5%;
    padding: 5px;
    margin: 10px;
    width: 20%;
}
@media(max-width:768px) {
    .inputCorreo {
        margin: 10px;
        width: 100%;
    }
}
.textArea {
    border: 1px solid #63A38B;
    width: 100%;
    height: 15rem;
    margin: 10px;
    padding: 5px;
}

@media(max-width:768px) {
    .search-box {
        position: absolute;
        margin: 50% auto;
        left: 10%;
    }
}
</style>