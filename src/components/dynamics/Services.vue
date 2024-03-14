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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
}

template{
    background-image: url(@/assets/img/bg-service.png);
    background-repeat: no-repeat;
    color: black;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Poppins";
    display: flex;
}

h2{
    opacity: 50%;
    margin-top: 1rem;
    font-size: 14px;
    color: #fff;
}

section .section-services-title{
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;

}

section #title{
    font-size: 32px;
    font-family: "Poppins";
    color: #fff;
}

.section-services-title > p{
    margin-bottom: 1rem;
    margin-top: 0;
    text-align: justify;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
}

section .section-services-title span{
    color: #8099DA;
}

.section-services-cards{
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
    background-image: url(@/assets/img/bg-service.mobile.png);
    background-repeat: no-repeat;
    color: black;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Poppins";
    display: flex;

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
