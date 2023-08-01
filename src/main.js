import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupNaive } from './plugins/ui/naive.js'

async function bootstrap() {
    const app = createApp(App)
    setupNaive(app)
    app.mount('#app')
}

void bootstrap()
