<template>
    <section class="section-services">
        <div class="section-services-title">
            <h2>O que fazemos</h2>
            <p>Nossos <span>serviços</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam.</p>
        </div>
        <div class="section-services-cards">
            <article class="section-services-card">
                <div class="card" id="mobile">
                    <img class="service-card-image" src="@/assets/img/card-img.png" alt="Serviços 1 codatech">
                    <div class="card-body">
                        <h3 class="service-card-title">Soluções TI</h3>
                        <p class="service-card-description">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </article>
            <article class="section-services-card">
                <div class="card">
                    <img class="service-card-image" src="@/assets/img/card-img.png" alt="Serviços 1 codatech">
                    <div class="card-body">
                        <h3 class="service-card-title">Soluções TI</h3>
                        <p class="service-card-description">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </article>
            <article class="section-services-card">
                <div class="card">
                    <img class="service-card-image" src="@/assets/img/card-img.png" alt="Serviços 1 codatech">
                    <div class="card-body">
                        <h3 class="service-card-title">Soluções TI</h3>
                        <p class="service-card-title">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
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
        <ButtonLink text="Saiba mais sobre nossos serviços" link="#"></ButtonLink>
    </section>
</template>

<script>
import ButtonLink from '@/components/ButtonLink.vue'

export default {
    name: 'Services',
    components: {
        ButtonLink
    }
};
</script>

<style scoped>

.section-services{
    background-image: url(@/assets/img/bg-services.png);
    background-repeat: no-repeat;
    font-family: 'Poppins';
    width: 100%;
    height: 100%;

}

.section-services-cards{
  margin: 100px;

}

.section-services-title{
  margin: 1%;
  padding-top: 3%;
  font-family:'poppins', sans-serif;
}

.section-services-title h2{
  opacity: 50%;
  margin: 0;
  padding-left: 5%;
  border-top: 150px;
  font-size: 24px;
  font-family:'poppins', sans-serif;
  color: white;
}

.section-services-title p{
  font-size: 32px;
  padding-left: 5%;
  margin: 0;
  font-family:'poppins', sans-serif;
  color: white;
}

.section-services-title span{
  color: #9bb6fb;
}

.section-services-cards{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 75px;

}

.card{
    background-color: rgba(225, 225, 225, 0.001);
    width: 400px;
    height: 300px;
    padding: 5%;
    border: 0.1px solid #9bb6fb;
    text-align: center;
    background-color: transparent;
    justify-content: center;
}

.card h3{
    font-size: 32px;
    margin-top: 10px;
    color: white;
    align-items: center;
    justify-content: center;
    font-family:'poppins', sans-serif;
}

.card p{
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
    align-items: center;
    opacity: 50%;
    margin: 0;
    padding: 0;
    color: white;
    font-family:'poppins', sans-serif;
}

.card img{
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  margin: 0;
}

@media screen and (max-width: 768px) {

  .section-services-title{
  margin: 10%;
  padding-top: 5%;
}

  .section-services-title{
    align-items: center;
  justify-content: center;
  }

  .section-services-title h2{
  font-size: 24px;
  opacity: 50%;
  margin: 0;
  font-family:'poppins', sans-serif;
}

.section-services-title p{
  font-size: 32px;
  margin: 0;
  font-family:'poppins', sans-serif;
  text-align: start;
}

.section-services-title span{
  color: #9bb6fb;
  font-family:'poppins', sans-serif;
}

  .card{
    display: none;
    border: none;
  }

  #mobile{
    display: inline-block;
    width: 300px;
    height: 400px;
    padding: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
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

  #mobile .service-card-title{
  font-size: 24px;
  align-items: center;
  justify-content: center;
  font-family:'poppins', sans-serif;
  color: black;
  }

  #mobile .service-card-description{
    font-size: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family:'poppins', sans-serif;
  color: white;
  }

}

</style>
