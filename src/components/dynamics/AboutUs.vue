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
    color: black;
}

section .section-about-us-title{
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;

}

.section-about-us-title > p{
    margin-bottom: 1rem;
    margin-top: 0;
    text-align: justify;
    font-weight: 400;
    font-size: 32px;
    color: black;
}

section .section-about-us-title span{
    color: #8099DA;
}

.section-about-us-cards{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 25px;
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
    background-color: #8099DA;

}

 .card h3{
    font-size: 32px;
    margin-top: 10px;
    color: #fff;
}

.card p{
    font-size: 16px;
    margin-top: 10px;
    text-align: justify;
    align-items: center;
    opacity: 50%;
    color: #fff;
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
    template{
    color: black;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Poppins";
    display: flex;
    background-color: #F5F7FF;
    }

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
