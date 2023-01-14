import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const myCustomLightTheme: ThemeDefinition = {
    dark: true,
  }

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
              myCustomLightTheme,
            }
          }
    })
    nuxtApp.vueApp.use(vuetify)
})