<script setup>
import noImag from '@/assets/images/noImag.jpg'


</script>

<template>
    <div class="block bottom-0 left-0  w-full p-36 bg-color ">

        <div class="mt-[-4rem]">
            <div class="flex justify-center items-center mb-52 ">
                <div class="search-box ">
                    <input type="text" placeholder="Search...">
                    <div class="search"></div>
                </div>
            </div>

            <div class="flex justify-center items-center ">
                <div class="w-1/2">
                    <img :src="noImag" alt="iconoImg" loading="lazy" class="img_perfil" />
                </div>

                <div class="w-1/2">
                    <p class="text-left font-bold text-[4rem] " style="color: #63A38B;">
                        Texto de prueba para posicionar
                    </p>
                </div>
            </div>

            <div class="flex justify-center items-center  ">
                <p class="text-center font-bold text-[2rem] " style="color: #63A38B; width: 50%; ">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                    sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.
                    persona que se dedica a la imprenta)
                </p>
                <div class="w-1/2 ml-50 flex">
                    <div class="flex justify-center items-center h-screen">
                        <div class="w-1/2 m-[3rem]">
                            <div class=" rounded-md"
                                style="width: 18rem; height: 18rem; background-color: #63A38B; margin-left: 4rem; ">
                            </div>
                            <div class=" rounded-md"
                                style="width: 18rem; margin-top: 2rem; height: 8rem; background-color: #63A35B;">
                            </div>
                        </div>

                        <div class="w-1/2">
                            <div class=" rounded-md mt-[5rem]"
                                style="width: 15rem; height: 30rem; background-color: #63A32B;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center  ">
                <div class="w-1/2 ml-60 flex">
                    <div class="flex justify-center items-center h-screen">
                        <div class="grid grid-cols-5 gap-4">
                            <!-- Fila 1 -->
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>

                            <!-- Fila 2 -->
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>

                            <!-- Fila 3 -->
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>
                            <div class="rounded-[50%] bg-gray-500" style="width: 5rem; height: 5rem;"></div>


                        </div>
                    </div>
                </div>
                <p class="text-center font-bold text-[2rem] " style="color: #63A38B; width: 50%; ">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                    sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.
                    persona que se dedica a la imprenta)
                </p>

            </div>

            <div class="flex-nowrap  containerContacto ">
                <input class="inputCorreo" type="email" v-model="email" placeholder="Correo electrónico">
                <br>
                <input class="inputCorreo" type="text" v-model="asunto" placeholder="Asunto">
                <br>
                <textarea class="textArea" v-model="contenido" placeholder="Escribe tu correo" />
                <br>
                <button
                class="bg-[#63A38B] opacity-55 hover:bg-[#63A38B] hover:opacity-100 text-white font-bold py-2 px-4 rounded ml-[95%]">

                Enviar</button>
                
            </div>
        </div>
    </div>
</template>


<style scoped>
.img_perfil {
    border-radius: 50%;
    width: 20rem;
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
    padding:5rem;
}
.inputCorreo {
    border: 1px solid #63A38B;
    border-radius: 5%;
    padding: 5px;
    margin: 10px;
    width: 20%;
}
.textArea {
    border: 1px solid #63A38B;
    width: 100%;
    height: 10rem;
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