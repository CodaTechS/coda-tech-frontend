<template>
    <section class="section-about-us">
        <div class="section-about-us-title">
            <h2>Sobre nós</h2>
            <p>Por que escolher uma <span>empresa júnior?</span></p>
        </div>
        <div class="section-about-us-cards">
            <article class="service-card">
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
