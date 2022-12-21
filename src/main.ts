import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import InputText from 'primevue/inputtext'
import App from './App.vue'
import primeVueComponents from './module/primevue'

const app = createApp(App)
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.component('InputText', InputText)
app.use(router)
app.use(createPinia())
primeVueComponents.forEach((component) => {
  /** Primevue components added from primeVue.ts */
  app.component(component.name, component)
})
app.use(PrimeVue, { ripple: true })
app.mount('#app')
