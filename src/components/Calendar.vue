<script setup>
import { ref, computed } from 'vue';
import Swal from 'sweetalert2'

const currentMonth = ref(null);
const currentYear = ref(null);
const selectedDate = ref(null);
const now = new Date();
const currentHour = String(now.getHours()).padStart(2, '0');
const currentMinute = String(now.getMinutes()).padStart(2, '0');
const currentTime = `${currentHour}:${currentMinute}`;
const svgCalendar = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="20px" height="20px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<path d="M160,240v32c0,8.844-7.156,16-16,16h-32c-8.844,0-16-7.156-16-16v-32c0-8.844,7.156-16,16-16h32
		C152.844,224,160,231.156,160,240z M144,352h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
		C160,359.156,152.844,352,144,352z M272,224h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
		C288,231.156,280.844,224,272,224z M272,352h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
		C288,359.156,280.844,352,272,352z M400,224h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
		C416,231.156,408.844,224,400,224z M400,352h-32c-8.844,0-16,7.156-16,16v32c0,8.844,7.156,16,16,16h32c8.844,0,16-7.156,16-16v-32
		C416,359.156,408.844,352,400,352z M112,96h32c8.844,0,16-7.156,16-16V16c0-8.844-7.156-16-16-16h-32c-8.844,0-16,7.156-16,16v64
		C96,88.844,103.156,96,112,96z M512,128v320c0,35.344-28.656,64-64,64H64c-35.344,0-64-28.656-64-64V128c0-35.344,28.656-64,64-64
		h16v16c0,17.625,14.359,32,32,32h32c17.641,0,32-14.375,32-32V64h160v16c0,17.625,14.375,32,32,32h32c17.625,0,32-14.375,32-32V64
		h16C483.344,64,512,92.656,512,128z M480,192c0-17.625-14.344-32-32-32H64c-17.641,0-32,14.375-32,32v256c0,17.656,14.359,32,32,32
		h384c17.656,0,32-14.344,32-32V192z M368,96h32c8.844,0,16-7.156,16-16V16c0-8.844-7.156-16-16-16h-32c-8.844,0-16,7.156-16,16v64
		C352,88.844,359.156,96,368,96z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
<g>
</g>
</svg>`
const svgLugar = `<svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,128a6.9,6.9,0,0,1-4.89-2L26.23,93.12A55.05,55.05,0,0,1,10,53.69,53.29,53.29,0,0,1,25.87,15.58a54.56,54.56,0,0,1,76.26,0h0A53.29,53.29,0,0,1,118,53.69a55.05,55.05,0,0,1-16.23,39.43L68.89,125.94A6.9,6.9,0,0,1,64,128ZM64,6A48.19,48.19,0,0,0,30.08,19.85,47.34,47.34,0,0,0,16,53.7,49.1,49.1,0,0,0,30.47,88.87l32.87,32.82a.91.91,0,0,0,1.31,0L97.53,88.87A49.1,49.1,0,0,0,112,53.7,47.34,47.34,0,0,0,97.92,19.85h0A48.19,48.19,0,0,0,64,6Z"/><path d="M64,81.41a27.25,27.25,0,1,1,19.3-8A27.23,27.23,0,0,1,64,81.41Zm0-48.49a21.26,21.26,0,1,0,15.06,6.22h0A21.25,21.25,0,0,0,64,32.92Z"/></svg`
const events = ref([])
const initCalendar = () => {
  const now_ = new Date();
  currentMonth.value = now_.getMonth() + 1;
  currentYear.value = now_.getFullYear();
};

const weeks = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value - 1, 1).getDay() || 7;
  const daysInMonth = new Date(currentYear.value, currentMonth.value, 0).getDate();
  const weeksArr = [];

  let day = 1;
  for (let i = 1; i <= 6; i++) {
    const week = [];
    for (let j = 1; j <= 7; j++) {
      if ((i === 1 && j < firstDay) || day > daysInMonth) {
        week.push('');
      } else {
        week.push(day);
        day++;
      }
    }
    weeksArr.push(week);
    if (day > daysInMonth) break;
  }
  return weeksArr;
});

const previousMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
};

const nextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
};

const isToday = (day) => {
  const today = new Date();
  return day === today.getDate() && currentMonth.value === today.getMonth() + 1 && currentYear.value === today.getFullYear();
};

const isSelected = (day) => {
  return day === selectedDate.value;
};

const selectDate = (day) => {
  selectedDate.value = day;
  const año = currentYear.value;
  Swal.fire({
    title: 'Agregar Evento',
    html:
      `<input id="swal-timepicker" class="swal2-input" placeholder="Hora del día" type="time" value="${currentTime}">` +
      `<input id="swal-description" class="swal2-input" placeholder="Descripción" type="text">` +
      `<input id="swal-location" class="swal2-input" placeholder="Lugar" type="text">`,
    showCancelButton: true,
    confirmButtonText: 'Agregar',
    cancelButtonText: 'Cancelar',
    focusConfirm: false,
    preConfirm: () => {
      const hour = document.getElementById('swal-timepicker').value;
      const description = document.getElementById('swal-description').value;
      const location = document.getElementById('swal-location').value;
      // Aquí puedes realizar las operaciones necesarias con los valores ingresados
      const fecha = monthName.value + ' ' + day + ', ' + año + ' at ' + hour  //`${day}/${mes}/${año} ${hour}`;
      events.value.push({ fecha: fecha, descripcion: description, lugar: location });
    }
  });
};

function deleteEvent(index) {
  console.log(index);
  events.value.splice(index, 1);
}
const getDayClasses = (day) => {
  return {
    'today': isToday(day),
    'selected': isSelected(day),
    'bg-gray-200': !day
  };
};

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const monthName = computed(() => months[currentMonth.value - 1]);

const selectedDay = ref(null);
const showEventPopup = ref(false);
const newEvent = ref('');

const closeEventPopup = () => {
  showEventPopup.value = false;
};

const addEvent = () => {
  if (newEvent.value.trim() !== '') {
    events.value.push({ date: `${currentYear.value}-${currentMonth.value}-${selectedDay.value}`, description: newEvent.value });
    newEvent.value = '';
  }
  closeEventPopup();
};

initCalendar();
</script>
<template>
  <div class="flex flex-row-reverse">
    <div class="mt-60 w-1/2 m-40">
      <div class="flex justify-center align-middle">
        <div class="flex flex-row mb-9">
          <button @click="previousMonth" class="arrow-button font-bold"
            style="justify-content: flex-start;">&lt;</button>
          <p class=" font-bold"> {{ monthName }} / {{ currentYear }} </p>
          <button @click="nextMonth" class="arrow-button font-bold" style="justify-content: flex-end;">&gt;</button>
        </div>

      </div>
      <table class="w-[80%] h-[25rem]">
        <thead>
          <tr class="border-transparent">
            <th>Lun</th>
            <th>Mar</th>
            <th>Mié</th>
            <th>Jue</th>
            <th>Vie</th>
            <th>Sáb</th>
            <th>Dom</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="week in weeks" :key="week" >
            <td class="border  border-gray-300" v-for="day in week" :key="day"
              :class="getDayClasses(day)" @click="() => { day ? selectDate(day) : '' }">
              {{ day || '' }}
              <div v-if="day === selectedDay"
                class="absolute top-0 left-0 mt-2 ml-2 bg-white border border-gray-300 p-2 rounded">
                <input v-model="newEvent" placeholder="Add event" @keydown.enter="addEvent"
                  @keydown.esc="closeEventPopup" class="border border-gray-300 rounded px-2 py-1">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-60 w-1/2  flex justify-center align-middle ">
      <div class="bg-gray-200 w-[90%] h-[30rem] mt-[rem]  rounded-md overflow-auto">
        <div class="bg-[#386379] justify-start w-[100%] h-[3rem] text-center align-middle py-[0.5rem] border-t">
          <p style="color: white; font-weight: 700; font-size: larger;">Eventos</p>
        </div>
        <div v-if="events.length >0">
        <div v-for="(evento, index) in events" :key="index"
          style="border: 1px solid; border-color: lightgray; font-weight: 600;"
          class="p-4 flex items-center justify-between border-b bg-slate-100">

          <div class="flex flex-row justify-center"> <svg style="height: 20px; width: 20px; margin-right:3px;"
              :innerHTML="svgCalendar" />{{ evento.fecha }}</div>
          <div class="flex flex-row justify-start"><svg style="height: 20px; width: 20px; margin-right:3px;"
              :innerHTML="svgLugar" />{{ evento.lugar }}</div>
          <button @click="deleteEvent(index)" class="text-white bg-[#4b7f9a] px-2 py-1 rounded">Remover</button>
        </div>
      </div>
      <div v-else>
        <div class="flex justify-center align-middle mt-[20%] text-gray text-2xl font-bold">
          No Tienes eventos registrados 
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.arrow-button {
  margin-inline: 1rem;

  background-color: transparent;
  cursor: pointer;
}

.arrow-button:hover {
  background-color: lightgray;
  border-radius: 50%;
  padding-inline: 2px;
}

table {
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 0.5rem;
}

.today {
  background-color: lightblue;
  color: white;
}

.selected {
  background-color: #4b7f9a;
  color: white;
}
.noDay {
  background-color: gray;
}
.outMonth {
  background-color: gray;
}

::-webkit-scrollbar {
  width: 12px;
  /* Ancho del scrollbar */
  border-radius: 50%;
  /* Radio de borde del scrollbar */

}

/* Track del scrollbar (el fondo) */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  /* Color de fondo del scrollbar */

}

/* Thumb del scrollbar (la barra deslizante) */
::-webkit-scrollbar-thumb {
  background: #386379
    /* Color del thumb */

}

/* Hover sobre el thumb */
::-webkit-scrollbar-thumb:hover {
  background: #4b7f9a;
  /* Color del thumb al pasar el mouse sobre él */
}
</style>