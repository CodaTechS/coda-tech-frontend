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
