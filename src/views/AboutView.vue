<script setup>
import { ref, onMounted } from 'vue';

const paleta = ref([]);
const colorInput = ref('');

onMounted(()=>{
  generarPaletaMonocromaticaAleatoria()
})

const generarColorAleatorio = () => {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generarPaletaComplementaria = (colorBase) => {
  const colores = [];
  colores.push(colorBase);

  // Generar un nuevo color variado para el primer color después del color base
  let primerColorVariado = generarColorVariado(colores);
  colores.push(primerColorVariado);

  // Generar el complementario del color base
  const complementario = generarComplementario(colorBase);
  colores.push(complementario);

  // Generar tres colores variados adicionales
  for (let i = 0; i < 3; i++) {
    const color = generarColorVariado(colores);
    colores.push(color);
  }

  return colores;
};

const generarPaletaMonocromatica = (colorBase) => {
  const colores = [];
  const tonos = [0.2, 0.4, 0.6, 0.8]; // Tonos de color
  colores.push(colorBase);

  // Generar tonos monocromáticos
  tonos.forEach((tono) => {
    const nuevoColor = generarTonoMonocromatico(colorBase, tono);
    colores.push(nuevoColor);
  });

  return colores;
};

const generarTonoMonocromatico = (colorBase, tono) => {
  // Convertir el color a formato RGB
  const r = parseInt(colorBase.substring(1, 3), 16);
  const g = parseInt(colorBase.substring(3, 5), 16);
  const b = parseInt(colorBase.substring(5, 7), 16);

  // Aplicar el tono al color base
  const nuevoR = Math.round(r * tono);
  const nuevoG = Math.round(g * tono);
  const nuevoB = Math.round(b * tono);

  // Convertir el nuevo color a formato hexadecimal
  const nuevoColor = `#${nuevoR.toString(16).padStart(2, '0')}${nuevoG.toString(16).padStart(2, '0')}${nuevoB.toString(16).padStart(2, '0')}`;

  return nuevoColor;
};

const generarComplementario = (colorBase) => {
  const r = parseInt(colorBase.substring(1, 3), 16);
  const g = parseInt(colorBase.substring(3, 5), 16);
  const b = parseInt(colorBase.substring(5, 7), 16);

  const complementarioR = 255 - r;
  const complementarioG = 255 - g;
  const complementarioB = 255 - b;

  const complementarioHex = `#${complementarioR.toString(16).padStart(2, '0')}${complementarioG.toString(16).padStart(2, '0')}${complementarioB.toString(16).padStart(2, '0')}`;

  return complementarioHex;
};

const generarColorVariado = (colores) => {
  let colorVariado;
  do {
    colorVariado = generarColorAleatorio();
  } while (!combinarBien(colorVariado, colores));
  return colorVariado;
};

const combinarBien = (color, colores) => {
  return true; // Lógica de combinación de colores puede implementarse aquí
};

const generarPaletaAleatoria = () => {
  const nuevaPaleta = [];
  for (let i = 0; i < 6; i++) {
    nuevaPaleta.push(generarColorAleatorio());
  }
  paleta.value = nuevaPaleta;
};

const generarPaletaPersonalizada = () => {
  if (colorInput.value && validarColorHexadecimal(colorInput.value)) {
    paleta.value = generarPaletaComplementaria(colorInput.value.toUpperCase());
  } else {
    alert('Ingrese un color válido en formato hexadecimal.');
  }
};

const generarPaletaMonocromaticaAleatoria = () => {
  const colorAleatorio = generarColorAleatorio();
  paleta.value = generarPaletaMonocromatica(colorAleatorio);
};

const validarColorHexadecimal = (color) => {
  const regex = /^#[0-9A-F]{6}$/i;
  return regex.test(color);
};

function copyColor(color) {
      navigator.clipboard.writeText(color);
      Vue.prototype.$toast.success('Color copiado al portapapeles');
    }
</script>

<template>
  <div class="h-[70rem]">
    <div class="flex justify-center mt-24 text-[#386379] opacity-55 p-[90px] text-[4rem]">
      <p>
        Generador de Paletas de Colores 
      </p>
    </div>
    <div class=" flex justify-center mt-14">
      <input v-model="colorInput" type="text" placeholder="#FFFFFF" class="p-2 mr-2 border rounded">
      <button @click="generarPaletaPersonalizada" class="bg-[#386379] opacity-55 hover:bg-[#386379] hover:opacity-100 text-white font-bold py-2 px-4 rounded">Generar Paleta Personalizada</button>
    </div>
    <div class="mt-4 flex justify-center">
      <button @click="generarPaletaAleatoria" class="bg-[#386379] opacity-55 hover:bg-[#386379] hover:opacity-100 text-white font-bold py-2 px-4 rounded">Generar Paleta Aleatoria</button>
      <button @click="generarPaletaMonocromaticaAleatoria" class="bg-[#386379] opacity-55 hover:bg-[#386379] hover:opacity-100 text-white font-bold py-2 px-4 rounded ml-4">Generar Paleta Monocromática Aleatoria</button>
    </div>
    <div class="flex justify-center mt-8">
      <div  v-for="(color, index) in paleta" :key="index" class="w-32 h-96 text-white hover:text-black cursor-pointer" 
      style="display: flex; justify-content: center; align-items: center;" 
      :style="{ backgroundColor: color }" @click="copyColor(color)">{{color}}</div>
    </div>
  </div>
</template>


<style>
.parentContainer {
    height: 100vh; /* Adjust to your needs */
    background-color: #c4c6bf;
}
.bg-color {
  background-color: #f3f4f6;
}
</style>
