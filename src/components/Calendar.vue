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
  const mes = currentMonth.value;
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
      const fecha = `${day}/${mes}/${año} ${hour}`;
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
    'bg-gray-100': !day
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
          <button @click="previousMonth" class="arrow-button font-bold">&lt;</button>
          <p class=" font-bold"> {{ monthName }} / {{ currentYear }} </p>
          <button @click="nextMonth" class="arrow-button font-bold">&gt;</button>
        </div>
      </div>
      <table class="w-[80%] h-[25rem] ">
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
        <tbody class="">
          <tr v-for="week in weeks" :key="week">
            <td class="border rounded-tl-[2rem] border-gray-300" v-for="day in week" :key="day"
              :class="getDayClasses(day)" @click="() => { day ? selectDate(day) : '' }">
              {{ day || '' }}
              <div v-if="day === selectedDay && showEventPopup"
                class="absolute top-0 left-0 mt-2 ml-2 bg-white border border-gray-300 p-2 rounded">
                <input v-model="newEvent" placeholder="Add event" @keydown.enter="addEvent"
                  @keydown.esc="closeEventPopup" class="border border-gray-300 rounded px-2 py-1">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-60 w-1/2  flex justify-center align-middle " >
      <div class="bg-gray-200 w-[80%] h-[30rem] mt-[rem]  rounded-md" >
        <div class="bg-[#386379] justify-start w-[100%] h-[3rem] text-center align-middle py-[0.5rem] border-t">
          <p style="color: white; font-weight: 700; font-size: larger;">Eventos</p>
        </div>
        <div v-for="(evento, index) in events" :key="index" style="border: 1px solid; border-color: lightgray; font-weight: 600;"
        class="p-4 flex items-center justify-between border-b bg-slate-100">
          <div>{{ evento.fecha }}</div>
          <div>{{ evento.descripcion }}</div>
          <div>{{ evento.lugar }}</div>
          <button @click="deleteEvent(index)" class="text-white bg-[#4b7f9a] px-2 py-1 rounded">Remover</button>
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

.outMonth {
  background-color: gray;
}
</style>
