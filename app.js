import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import main from './main.js';
import myColLeft from './components/myColLeft.js';



let app = createApp(main);
app.component(myColLeft.name, myColLeft);


app.mount("#app");