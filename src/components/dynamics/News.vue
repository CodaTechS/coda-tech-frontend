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
