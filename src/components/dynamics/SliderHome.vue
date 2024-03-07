<template>
    <section class="home-carousel">
        <!-- Apresentação da Página Inicial -->
        <div class="home-presentation">
            <h1 class="home-carousel-title">
                Trazendo soluções em tecnologia para sua <span>empresa.</span>
            </h1>
            <p class="home-carousel-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus? Eos sint ipsam quibusdam? Dolorem consectetur illo dolor quam aut beatae, dignissimos ipsa enim veritatis. Impedit itaque soluta ipsa autem?
            </p>
            <ButtonLink text="Saiba mais" link="#"></ButtonLink>
        </div>
        <!-- Carrossel de Slides -->
        <div class="carousel">
            <!-- Imagens do Carrossel -->
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
        </div>
        <!-- Navegação do Carrossel -->
        <nav class="carousel-navigation">
            <li class="navigation-button"></li>
            <li class="navigation-button"></li>
            <li class="navigation-button"></li>
            <li class="navigation-button"></li>
        </nav>
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
