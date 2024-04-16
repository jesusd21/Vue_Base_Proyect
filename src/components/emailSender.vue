<script setup>
  class EmailSender {
    async enviarCorreo() {
      // Aquí colocarías la lógica para enviar el correo electrónico
      // Puedes usar bibliotecas como Nodemailer (para Node.js) o servicios de terceros como SendGrid
      // Por simplicidad, aquí solo simularemos el envío de correo
      console.log('Correo enviado:', {
        email: this.email,
        asunto: this.asunto,
        contenido: this.contenido,
        archivosAdjuntos: this.archivosAdjuntos
      });
    }
  }

  // Instancia de la clase EmailSender
  const emailSender = new EmailSender();

  // Variables de datos reactivos para el formulario de correo
  let email = '';
  let asunto = '';
  let contenido = '';
  let archivosAdjuntos = [];

  // Método para manejar la selección de archivos adjuntos
  const onFileSelected = (event) => {
    const fileList = event.target.files;
    archivosAdjuntos = Array.from(fileList);
  };
</script>


<template>
             <div class="flex-nowrap  containerContacto sm:mt-[10%]">
                <input class="inputCorreo" type="email" v-model="email" placeholder="Tu Correo electrónico">
                <br>
                <input class="inputCorreo" type="text" v-model="asunto" placeholder="Asunto">
                <br>
                <label class="btn btn-primary" style="display: flex; align-items: center;">
                    <span class="ml-[85%] mr[5%] md:ml-[85%] sm:ml-[50%] " style="color: #63A38B;">Adjuntar archivos
                    </span>
                    <svg style="width: 40px; margin-left: 1%;" s enable-background="new 0 0 91 91" height="70px" id="Layer_1"
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
                <button class="bg-[#63A38B] opacity-55 hover:bg-[#63A38B] hover:opacity-100 
                    text-white font-bold py-2 px-4 rounded ml-[95%] md:ml-[95%] sm:ml-[70%] ">
                    Enviar
                </button>


            </div>
</template>


<style>
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
 
</style>
