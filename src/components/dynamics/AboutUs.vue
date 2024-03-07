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
    font-family: "Poppins";
}

section .container-about{
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
}

section .container-about p{
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    text-align: justify;
    font-weight: 400;
    font-size: 14px;
}

h6{
    opacity: 50%;
}

section .container-about span{
    color: var(--C05);
}

.box-about{
    display: inline-block;
    margin: 1px;
    text-align: justify;
    width: calc(50% - 10px);
    margin-bottom: 45px;
    padding: 50px;
    background-color: #8099DA;
}

.box-about h4{
    font-size: 32px;
    margin-top: 10px;
    color: #E5ECFF;
}

.box-about p{
    font-size: 16px;
    margin-top: 10px;
    text-align: justify;
    align-items: center;
    opacity: 50%;
}

.btn-home{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 75px;

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
