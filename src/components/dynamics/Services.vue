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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500&display=swap');

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

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-image: url(../imge/bg-services.png);
    background-repeat: no-repeat;
    color: white;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Poppins";
}

h6{
    opacity: 50%;
}

section .container-service{
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
}

section .container-service p{
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    text-align: justify;
    font-weight: 400;
    font-size: 14px;
    opacity: 50%;
}

section .container-service span{
    color: var(--C05);
}

section .card-service{
    width: 30%;
    margin: 0 1%;
    display: inline-block;
    background-color: rgba(225, 225, 225, 0.001);
    padding: 40px;
    border: 0.1px solid var(--C05);
    text-align: center;
    background-color: #6179AC;
}

section .card-service h4{
    font-size: 32px;
    margin-top: 10px;
    color: #2F384F;
}

section .card-service p{
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
