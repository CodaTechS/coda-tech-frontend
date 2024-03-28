<template>
    <nav>
      <img src="@/assets/img/codaTech.png" alt="codaTech">
      <img class="mobile" src="@/assets/img/coda-tech-mobile.png" alt="codaTech">
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

<style scoped>
nav{
    background-color: #E5ECFF;
    color: black;
    height: fit-content;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    font-family:'poppins', sans-serif;
}

img{
  width: 200px;
}

.mobile{
  display: none;
}

ul{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-family:'poppins', sans-serif;
}

li{
  text-decoration: none;
  list-style: none;
}

@media screen and (max-width: 768px) {
  nav{
    padding: 1.5rem 4rem;
    justify-content: space-between;
    font-family:'poppins', sans-serif;
  }
  img{
    display: none;
  }

  .mobile{
   display:block;
   width: 75px;
  }

  ul{
    display: none;
    font-family:'poppins', sans-serif;
  }

}
</style>
