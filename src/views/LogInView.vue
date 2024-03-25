<script setup>
import loginIcon from '@/assets/images/loginIcon.png'


</script>

<template>
    <div class="parentContainer ">
            <div class="containerMain border-2 rounded-full size-96">
                <img :src="loginIcon" alt="Card Image" class="w-50 h-60 object-cover">
                <div class="flex flex-col space-y-4  ">
                    <input type="text" v-model="email" placeholder="Email" class="inputForm" />
                    <input type="password" v-model="password" placeholder="Password" class="inputForm" />

                </div>
                <div class="flex flex-col text-center textSize">
                    <button @click="signIn" class="bg-slate-600 rounded-full p-1">Sign in</button>
                    <button @click="signUp">Sign up</button>

                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms-of-service.html">Terms of Service</a>
                </div>
            </div>
    </div>
</template>
  


<style>
.parentContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust to your needs */
    background-color: #c4c6bf;
    align-items: center;
}

.containerMain {
    width: 30rem;
    height: 40rem;
    background-color: #BDC6AC;
    display: flex;
    flex-direction: column; /* Adjust if necessary */
    justify-content: center;
    align-items: center;
    
}
.inputForm {
    border: 4px;
    border-radius: 9999px; /* Use a large value for a circular shape */
    width: 18rem; /* Adjust as needed */
    margin-top: 1.5rem; /* Adjust as needed */
    padding: 0.5rem;
    text-align: center;
}
.textSize {
    font-size: 15px;
    margin-top: 15px;
    color: white;
}

@media (max-width: 639px) {
  .containerMain {
    width: 15rem;
    height: 30rem;
  }
  .inputForm {
        width: 50vw; /* Adjust the width for smaller screens */
        font-size: 0.8rem; /* Adjust the font size for smaller screens */
    }
    .textSize {
    font-size: 8px;
}
}

/* For screens between 641px and 767px (small tablets) */
@media (min-width: 640px) and (max-width: 767px) {
  .containerMain {
    width: 15rem;
    height: 25rem;
  }
  .inputForm {
        width: 50vw; /* Adjust the width for medium screens */
        font-size: 1rem; /* Adjust the font size for medium screens */
        margin-bottom: 1px;
    }
    .textSize {
    font-size: 1px;
}
}

/* For screens between 768px and 1023px (tablets) */
@media (min-width: 768px) and (max-width: 1023px) {
  .containerMain {
    width: 15rem;
    height: 25rem;
  }
}

/* For screens between 1024px and 1279px (small laptops) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .containerMain {
    width: 15rem;
    height: 25rem;
  }
}

/* For screens larger than or equal to 1280px (laptops and desktops) */
@media (min-width: 1280px) {
  .containerMain {
    width: 30rem;
    height: 40rem;
  }
}

</style>