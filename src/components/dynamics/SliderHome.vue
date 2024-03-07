<template>
    <section class="home-carousel">
        <!-- Apresentação da Página Inicial -->
        <div class="home-presentation">
            <h1 class="home-carousel-title">
                Trazendo soluções em tecnologia para sua <span>empresa</span>
            </h1>
            <p class="home-carousel-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus? Eos sint ipsam quibusdam? Dolorem consectetur illo dolor quam aut beatae, dignissimos ipsa enim veritatis. Impedit itaque soluta ipsa autem?
            </p>
            <ButtonLink text="Saiba mais" link="#"></ButtonLink>
        </div>
        <!-- Carrossel de Slides -->
        <div class="carousel">
            <!-- Imagens do Carrossel -->
            <img src="../imge/bg-home.png" alt="Imagem do Carrossel">
            <img src="../imge/bg-home.png" alt="Imagem do Carrossel">
            <img src="../imge/bg-home.png" alt="Imagem do Carrossel">
            <img src="../imge/bg-home.png" alt="Imagem do Carrossel">
        </div>
        <!-- Navegação do Carrossel -->
        <div class="navigatio-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn4"></div>
        </div>
        <div class="slides">
        <!--radio buttons-->
        <input type="radio" name="radio-btn" id="radio1">
        <input type="radio" name="radio-btn" id="radio2">
        <input type="radio" name="radio-btn" id="radio3">
        <input type="radio" name="radio-btn" id="radio4">
        <!--fim radio button-->
        </div>

        <div class="manual-navigation">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
        </div>
       <div class="btn-home">
        <input type="button" value="ENTRE EM CONTATO">
    </div>
    </section>
</template>

<script>
import ButtonLink from '@/components/ButtonLink.vue'

export default {
    name: 'SlideHome',
    components: {
        ButtonLink
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:root{
    --c00:#F5F7FF;
    --c01:#E5ECFF;
    --c02:#CDDBFF;
    --c03:#B3C8ff;
    --c04:#9BB6FB;
    --C05:#8099DA;
    --c06:#6179AC;
    --c07:#53689D;
    --c08:#465783;
    --C09:#3B486A;
    --c10:#2F384F;
    --c11:#151820;

}

body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    font-family: "Poppins";
}

.home-carousel {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.carousel {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
}

.slide {
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
}

.carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.home-presentation {
    position: absolute;
    top: 20%;
    left: 20px;
    margin-left: 10%;
    margin-right: 10%;
    transform: translateY(-50%);
    z-index: 1;
    text-align: left;
    max-width: calc(100% - 40px);
}

.home-carousel-title {
    font-size: 32px;
    color:var(--c00);
}

.home-carousel-text{
    font-size: 16px;
    color:var(--c00) ;
    opacity: 50%;
    margin-top: 20px;
}

.manual-navigation,
.navigation-auto {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;

}

input{
    display: none;
}

span{
    color: var(--C05);
}

.manual-btn,
.navigation-auto div {
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 1s;
}

.manual-btn:not(:last-child) {
    margin-right: 40px;
}

.manual-btn:hover,
.navigation-auto div:hover {
    background-color: #fff;
}

#radio1:checked ~ .first {
    margin-left: 0;
}

#radio2:checked ~ .first {
    margin-left: -25%;
}

#radio3:checked ~ .first {
    margin-left: -50%;
}

#radio4:checked ~ .first {
    margin-left: -75%;
}

.navigation-auto div:not(:last-child) {
    margin-right: -40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1,
#radio2:checked ~ .navigation-auto .auto-btn2,
#radio3:checked ~ .navigation-auto .auto-btn3,
#radio4:checked ~ .navigation-auto .auto-btn4 {
    background-color: #fff;
}

.btn-home{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}

section .btn-home{
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color:var(--C09);
    border: none;
    border-radius: 5px;

}

section .btn-home p{
    text-align: center;

}

section .btn-home input{
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    appearance: none;
    color: white;

}

</style>
