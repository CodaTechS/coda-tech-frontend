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

body{
    background-color: var(--c00);
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    font-family: "Poppins";
}

.tittle-nosso-blog{
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
}

.tittle-nosso-blog p {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    text-align: justify;
    font-weight: 400;
    font-size: 14px;
}

.tittle-nosso-blog span{
    color: blue;
}

.blog-news{
    width: 30%;
    height: auto;
    margin: 0 1%;
    background-color: #6077A6;
    display: inline-block;
    padding: 0px;
    align-items: center;
    text-align: center;
}

.blog-news figcaption{
    width: 70%;
    text-align: start;
    display: inline-block;
    padding: 10px;

}

.blog-news time{
     width: 50%;
    text-align: end;
    margin: 0 0;

}

.blog-news h3{
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}

.blog-news p{
    font-size: 14px;
    margin-bottom: 15px;
    text-align: justify;
    padding: 15px;
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

.btn-home{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: -500px;

}

section .btn-home{
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: #6077A6;
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
