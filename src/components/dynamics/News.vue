<template>
    <section class="section-news">
        <div class="section-news-title">
            <h2>Nosso blog</h2>
            <p>Últimas <span>notícias</span></p>
        </div>
        <div class="section-news-cards">
            <article class="section-news-card">
                <div class="card" id="mobile">
                    <img class="section-news-card-image" src="@/assets/img/img-noticia.png" alt="Serviços 1 codatech">
                    <div class="card-body">
                        <h3 class="section-news-card-title">What is Lorem Ipsum?</h3>
                        <p class="section-news-card-description">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                        <a href="#" class="btn-more-news">Ver materia completa</a>
                    </div>
                </div>
            </article>
            <article class="section-news-card">
                <div class="card">
                    <img class="section-news-card-image" src="@/assets/img/img-noticia-1.png" alt="Serviços 1 codatech">
                    <div class="card-body">
                        <h3 class="section-news-card-title">What is Lorem Ipsum?</h3>
                        <p class="section-news-card-description">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                        <a href="#" class="btn-more-news">Ver materia completa</a>
                    </div>
                </div>
            </article>
            <article class="section-news-card">
                <div class="card">
                    <img class="section-news-card-image" src="@/assets/img/img-noticia-2.png" alt="Serviços 1 codatech">
                    <div class="card-body">
                        <h3 class="section-news-card-title">What is Lorem Ipsum?</h3>
                        <p class="section-news-card-description">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                        <a href="#" class="btn-more-news">Ver materia completa</a>
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
        <ButtonLink text="Veja mais em nosso blog" link="#"></ButtonLink>
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

.section-news{
  margin: 1%;
  padding-top: 1%;
}

.section-news-title h2 {
  opacity: 50%;
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-family:'poppins', sans-serif;
}

.section-news-title p {
  font-size: 32px;
  margin: 0;
  font-family:'poppins', sans-serif;
}

.section-news-title span{
    color: #9bb6fb;
}

.section-news-title{
    margin-left: 100px;
    margin-top: 25px;
    font-family:'poppins', sans-serif;
}

.section-news-cards{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 75px;
  margin: 100px;
}

.card{
    width: 360px;
    height: 425px;
    padding: 0px;
    text-align: center;
    background-color: transparent;
    justify-content: center;
    background-color: #9bb6fb;
}

.card-body h3{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
    font-family:'poppins', sans-serif;
}

.card-body p{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family:'poppins', sans-serif;
}

.card-body a{
  color: #0b4dcf;
  text-decoration: underline;
  text-align: justify;
}

.blog-news a{
    color: #0b4dcf;
    text-decoration: underline;
    text-align: justify;
}

.blog-news img{
    width: 100%;
    border-radius: 5px
}

.blog-news a{
    padding: 15px;
    text-decoration: none;
}

@media screen and (max-width: 768px) {

  .section-news-title{
  align-items: center;
  justify-content: center;
  margin-left: 18%;
  margin-top: 5%;
  padding-top: 5%;
  }

  .card{
    display: none;
  }

  #mobile{
    display: grid;
    width: 360px;
    height: fit-content;
    padding: 0px;
    text-align: center;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    background-color: #9bb6fb;
  }

  #mobile img{
  display: inline-block;
  padding: 0;
  margin: 0 auto;
  border-radius: 0;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  }

  #mobile .section-news-card-title{
  font-size: 24px;
  align-items: center;
  justify-content: center;
  font-family:'poppins', sans-serif;
  color: black;
  }

  #mobile .section-news-card-description{
    font-size: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family:'poppins', sans-serif;
  color: white;
  }

  #mobile .btn-more-news{
  color: #0b4dcf;
  text-decoration:none;
  text-align: justify;
}

}
</style>
