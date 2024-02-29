<template>
    <section class="section-services">
        <div class="section-services-title">
            <h2>O que fazemos</h2>
            <p>Nossos <span>serviços</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam.</p>
        </div>
        <div class="section-services-cards">
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
