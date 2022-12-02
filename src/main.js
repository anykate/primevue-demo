import App from '@/App.vue'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.css'
import 'primevue/resources/themes/saga-blue/theme.css'

import '@/assets/main.scss'
import ToastService from 'primevue/toastservice'

createApp(App).use(PrimeVue, { ripple: true }).use(ToastService).mount('#app')
