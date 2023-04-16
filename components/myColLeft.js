export default {
    name: "my-colum-left",
    template: /*html*/`
<div class="home">
    <header>
        <div class="header-logo">
            <h1 v-html="left.logo1"></h1>
        </div>

        <div class="header-nav">
            <ul class="nav">
                <li><a href="#" class="active" v-text="left.texto1[0]"></a></li>
                <li><a href="#" v-text="left.texto1[1]"></a></li>
                <li><a href="#" v-text="left.texto1[2]"></a></li>
                <li><a href="#" v-text="left.texto1[3]"></a></li>
                <li><a href="#" v-text="left.texto1[4]"></a></li>
            </ul>
        </div>

        <div class="header-btn">
            <button class="btn" v-text="left.texto2"></button>
            <div class="mode-change">
                <i class="fa-solid fa-moon" v-model="dar" @click="toggleTheme" id="mode-change"></i>
            </div>
        </div>

    </header>
    <div class="hero-section">
        <div class="social-icons">
            <ul class="nav social-icon-list">
                <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-square-behance"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>
        <div class="hero-content">
            <div class="content-text">
                <h1 v-text="left.texto3"></h1>
                <h1 v-html="left.texto4"></h1>
                <h1 v-html="left.texto5"></h1>
            </div>

            <div class="hero-btn">
                <button class="btn" v-html="left.boton"></button>
            </div>
        </div>
        <div class="hero-image">
            <img :src="left.imagen1" alt="">
        </div>
    </div>

</div>
    `,
    data() {
        return {
            isDarkTheme: false
        }
    },
    props: {
        left: Object
    },
    methods:{
        toggleTheme(){
            document.body.classList.toggle("oscuro");
            this.isDarkTheme = !this.isDarkTheme

        }
    }

}