<template>
    <section class="section-news">
        <div class="section-news-title">
            <h2>Nosso blog</h2>
            <p>Últimas <span>notícias</span></p>
        </div>
        <div class="section-news-cards">
            <article class="section-news-card">
                <div class="card">
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
}

template{
    color: black;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Poppins";
    display: flex;
    background-color: #F5F7FF;
}

h2{
    opacity: 50%;
    margin-top: 1rem;
    font-size: 14px;
    color: #fff;
}

section .section-news-title{
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;

}

.section-news-title > p{
    margin-bottom: 1rem;
    margin-top: 0;
    text-align: justify;
    font-weight: 400;
    font-size: 32px;
    color: black;
}

section .section-news-title span{
    color: #8099DA;
}

.section-news-cards{
    display: flex;
    justify-content: space-between;
}

.card{
    width: 75%;
    margin: 0 1%;
    display: inline-block;
    flex-direction: row;
    background-color: rgba(225, 225, 225, 0.00001);
    padding: 40px;
    border: 0.1px solid #8099DA;
    text-align: center;

}

.card img{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px
}

 .card h3{
    font-size: 32px;
    margin-top: 10px;
    color: black;
}

.card p{
    font-size: 16px;
    margin-top: 10px;
    text-align: justify;
    align-items: center;
    opacity: 50%;
    color: black;
}

.card a{
    text-decoration: none;
    color: #8099DA;
}

.arrow{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}

.arrow a {
    margin: 0 10px;
}

.arrow img{
    width: 30px;
    height: auto;
}

@media screen and (max-width: 730px) {
    .card:not(:first-child) {
        display: none;
    }

    .arrow{
        text-align: center;
        margin-top: 10px;
    }

    .arrow a {
        margin: 0 10px;
    }

    .arrow img{
        width: 30px;
        height: auto;
    }
}
</style>
