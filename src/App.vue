<script setup>
import { ref } from 'vue'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'
const toast = useToast()
const showSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Success Message',
    detail: 'Message Content',
    life: 3000,
  })
}
import Dropdown from 'primevue/dropdown'
const selectedCity1 = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>

<template>
  <Toast position="top-right" />
  <h5>Basic</h5>
  <Dropdown
    v-model="selectedCity1"
    :options="cities"
    optionLabel="name"
    optionValue="code"
    placeholder="Select a City"
  />
  <h1>Welcome to PrimeVue</h1>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-3 sm:flex-nowrap justify-content-center">
      A
    </div>
    <div class="col-12 md:col-6 lg:col-3">B</div>
    <div class="col-12 md:col-6 lg:col-3">C</div>
    <div class="col-12 md:col-6 lg:col-3">D</div>
  </div>
  <div class="grid justify-content-center">
    <div class="card col-12 md:col-10 sm:flex-nowrap shadow-2 border-round p-4">
      <h5 class="text-2xl font-bold">Vertical</h5>
      <div class="field">
        <label for="firstname1">Firstname</label>
        <input
          id="firstname1"
          type="text"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
        />
        <small id="username-help"
          >Enter your username to reset your password.</small
        >
      </div>
      <div class="field">
        <label for="lastname1">Lastname</label>
        <input
          id="lastname1"
          type="text"
          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
        />
      </div>
    </div>
  </div>
  <div class="grid justify-content-center">
    <div class="card col-12 md:col-10 sm:flex-nowrap mt-3">
      <Button label="Success" class="p-button-success" @click="showSuccess" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-dropdown {
  width: 40rem;
}
</style>
