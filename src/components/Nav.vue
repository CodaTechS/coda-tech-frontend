<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Inicio</router-link>
            </li>
            <li>
                <router-link to="/sobre">Sobre nós</router-link>
            </li>
            <li>
                <router-link to="/servicos">Serviços</router-link>
            </li>
            <li>
                <router-link to="/cases">Cases</router-link>
            </li>
            <li>
                <router-link to="/blog">Blog</router-link>
            </li>
        </ul>
        <ButtonLink text="Entre em contato" link="#"></ButtonLink>
    </nav>
</template>

<script>
import ButtonLink from '@/components/ButtonLink.vue'

export default {
    name: 'Nav',
    components: {
        ButtonLink
    }
};
</script>

<style scoped >

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');

*{
  padding: 0;
  margin: 0;
  font-family: 'poppins', sans-serif;
  box-sizing: border-box;
}

template{
  background-color: #f5f7ff;
}

nav{
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 6rem;
}

ul{
  display: center;
  align-items: center;
  justify-content: center;
  list-style: none;
}

@media screen  and (max-width: 730px){
  nav{
    padding: 1.5rem 4rem;
  }

  nav > ul{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 1rem;
  }

  nav > li{
    display: block;
    padding-top: 1.2rem;
  }
}
</style>
