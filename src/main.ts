import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'


import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify : any = createVuetify({
    theme: {
        themes: {
            light: {
            dark: false,
            colors: {
                primary: '#333',
                secondary: '#000', 
            }
            },
        },
    },
  components,
  directives
})


createApp(App).use(vuetify).mount('#app')
