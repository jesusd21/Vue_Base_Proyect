<script setup>
import loginIcon from '@/assets/images/loginIcon.png'


</script>

<template>
    <div class="parentContainer ">
            <div class="containerMain border-2 rounded-full size-96">
                <img :src="loginIcon" alt="Card Image" class="w-50 h-60 object-cover">
                <div class="flex flex-col space-y-4  ">
                    <input type="text" v-model="email" placeholder="Email" class="border-4 rounded-full w-72 mt-10 p-2 text-center" />
                    <input type="password" v-model="password" placeholder="Password" class="border-4 rounded-full w-72 mt-10 p-2 text-center" />

                </div>
                <div class="flex flex-col text-center mt-6 ">
                    <button @click="signIn">Sign in</button>
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

</style>