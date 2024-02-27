<template>
    <section class="home-carousel">
        <!-- Home apresentação -->
        <h1>
            Trazendo soluções em tecnologia para sua <span>empresa</span>
        </h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, necessitatibus? Eos sint ipsam quibusdam? Dolorem consectetur illo dolor quam aut beatae, dignissimos ipsa enim veritatis. Impedit itaque soluta ipsa autem?
        </p>
        <div class="btn-home">
            <input type="button" value="ENTRE EM CONTATO">
        </div>

        <!-- slide carousel -->
        <div class="carousel">
            <!-- Botão do carousel -->
                <img src="@/assets/img/banner-home 1.png" alt="codaTech">
                <img src="@/assets/img/banner-home 1.png" alt="codaTech">
                <img src="@/assets/img/banner-home 1.png" alt="codaTech">
                <img src="@/assets/img/banner-home 1.png" alt="codaTech">
            </div>
            <div class="btn-carousel">
                <input type="radio" name="btn-carousel" id="btn-carousel1">
                <input type="radio" name="btn-carousel" id="btn-carousel2">
                <input type="radio" name="btn-carousel" id="btn-carousel3">
                <input type="radio" name="btn-carousel" id="btn-carousel4">
            </div>
            <div>
            <!-- navegação do carousel -->
            <nav class="navigation-carousel">
                <div class="btn-primeiro"></div>
                <div class="btn-segundo"></div>
                <div class="btn-terceiro"></div>
                <div class="btn-quarto"></div>
            </nav>
        </div>
        <div class="manual-navigation">
            <label for="btn-carousel1" class="btn-manual"></label>
            <label for="btn-carousel2" class="btn-manual"></label>
            <label for="btn-carousel3" class="btn-manual"></label>
            <label for="btn-carousel4" class="btn-manual"></label>
        </div>
    </section>
</template>
