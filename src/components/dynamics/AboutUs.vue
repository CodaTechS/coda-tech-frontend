<template>
    <section class="section-about-us">
        <div class="section-about-us-title">
            <h2>Sobre nós</h2>
            <p>Por que escolher uma <span>empresa júnior?</span></p>
        </div>
        <div class="service-card">
            <article class="section-about-card">
                <div class="card" id="mobile">
                    <img class="section-about-card-image" src="@/assets/img/money.png" alt="Ícone de Custo Acessível">
                    <div class="card-body">
                        <h3 class="section-about-card-title">Custo Acessível</h3>
                        <p class="section-about-card-description">
                            Oferecemos soluções a um preço acessível, proporcionando qualidade sem comprometer seu orçamento.
                        </p>
                    </div>
                </div>
            </article>
            <article class="section-about-card">
                <div class="card">
                    <img class="section-about-card-image" src="@/assets/img/money.png" alt="Ícone de Custo Acessível">
                    <div class="card-body">
                        <h3 class="section-about-card-title">Custo Acessível</h3>
                        <p class="section-about-card-description">
                            Oferecemos soluções a um preço acessível, proporcionando qualidade sem comprometer seu orçamento.
                        </p>
                    </div>
                </div>
            </article>
            <article class="section-about-card">
                <div class="card">
                    <img class="section-about-card-image" src="@/assets/img/money.png" alt="Ícone de Custo Acessível">
                    <div class="card-body">
                        <h3 class="section-about-card-title">Custo Acessível</h3>
                        <p class="section-about-card-description">
                            Oferecemos soluções a um preço acessível, proporcionando qualidade sem comprometer seu orçamento.
                        </p>
                    </div>
                </div>
            </article>
            <article class="section-about-card">
                <div class="card">
                    <img class="section-about-card-image" src="@/assets/img/money.png" alt="Ícone de Custo Acessível">
                    <div class="card-body">
                        <h3 class="section-about-card-title">Custo Acessível</h3>
                        <p class="section-about-card-description">
                            Oferecemos soluções a um preço acessível, proporcionando qualidade sem comprometer seu orçamento.
                        </p>
                    </div>
                </div>
            </article>
        </div>
        <div class="arrow">
                        <a href="#">
                            <img src="#" alt="seta esquerda">
                        </a>
                        <a href="#">
                            <img src="#" alt="seta direita">
                        </a>
                    </div>
        <ButtonLink text="Saiba mais" link="#"></ButtonLink>
    </section>
</template>

<script>
import ButtonLink from '@/components/ButtonLink.vue'

export default {
    name: 'AboutUs',
    components: {
        ButtonLink
    }
};
</script>

<style scoped>

.section-about-us-card{
  align-items: center;
  justify-content: center;
}

.section-about-us-title h2{
  opacity: 50%;
  margin: 0;
  font-family:'poppins', sans-serif;
}

.section-about-us-title p{
  font-size: 32px;
  margin: 0;
  font-family:'poppins', sans-serif;
}

.section-about-us-title span{
  color: #9bb6fb;
  font-family:'poppins', sans-serif;
}

.section-about-us-title{
  padding-bottom: 25px;
}

.section-about-us{
  margin-left: 100px;
  margin-top: 50px;
}

.service-card{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 75px;
}

.card{
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 260px;
  align-items: center;
  justify-content: center;
}

.card img{
  width:75px;
  height: 75px;
  display: inline-block;
  background-color: #9bb6fb;
  padding: 5px;
  border-radius: 45%;
}

.card-body h3{
  font-size: 24px;
  display: inline-block;
  text-align: justify;
  padding-left: 10px;
  margin: 0px;
  font-family:'poppins', sans-serif;
  color: #9bb6fb;
}

.card-body p{
  margin: 16px;
  text-align: start;
  font-family:'poppins', sans-serif;
}

@media screen and (max-width: 768px) {

  .section-about-us-title{
    align-items: center;
  justify-content: center;
  }

  .section-about-us-title h2{
  opacity: 50%;
  margin: 0;
  font-family:'poppins', sans-serif;
}

.section-about-us-title p{
  font-size: 32px;
  margin: 0;
  font-family:'poppins', sans-serif;
}

.section-about-us-title span{
  color: #9bb6fb;
;
  font-family:'poppins', sans-serif;
}

  .card{
    display: none;
  }

  #mobile{
    display: inline-block;
    width: 300px;
    height: 400px;
    padding: 0;
    text-align: center;
    justify-content: center;
    background-color: #9bb6fb;
  }

  #mobile img{
  display: inline-block;
  padding: 10%;
  margin: 0 auto;
  border-radius: 0;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  }

  #mobile .section-about-card-title{
  font-size: 24px;
  align-items: center;
  justify-content: center;
  font-family:'poppins', sans-serif;
  color: white;
  }

  #mobile .section-about-card-description{
    font-size: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family:'poppins', sans-serif;
  color: black;
  }

}

</style>
