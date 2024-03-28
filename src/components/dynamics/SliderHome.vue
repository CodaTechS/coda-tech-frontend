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
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
            <img src="@/assets/img/bg-home.png" alt="Imagem do Carrossel">
            <img id="mobile" src="@/assets/img/bg-home-mobile.png" alt="Imagem do Carrossel">
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

<style scoped >

section{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:'poppins', sans-serif;
  margin: 0;
  padding: 0;
}

.home-presentation{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 30%;
  margin-left: 5%;
}

.home-carousel-title{
  font-size: 32px;
  text-align: justify;
  color: white;
  font-family:'poppins', sans-serif;
}

.home-carousel-title span{
  color: #9bb6fb;
}

.home-carousel-text{
  font-size: 16px;
  text-align: start;
  color: white;
}

.carousel {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel #mobile {
    display: none;
}

.carousel-navigation{
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  color: black;

}

.carousel-navigation li{
  width: 2%;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {

  .home-presentation{
    margin-bottom: 50%;
    margin-left: 5%;
  }

  .home-carousel img{
    display: none;
  }

  .carousel #mobile{
    display: flex;
  }

  .home-carousel-title {
    text-align: start;
    justify-items: start;
    font-family:'poppins', sans-serif;

  }

  .home-carousel-text{
    text-align: start;
    justify-items: start;
    font-family:'poppins', sans-serif;
  }

  .carousel-navigation li{
    display: none;
  }
}
</style>
