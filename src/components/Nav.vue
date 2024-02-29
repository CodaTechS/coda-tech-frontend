<template>
    <img src="@/assets/img/codaTech.png" alt="codaTech">
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
    </nav>
    <ButtonLink text="Entre em contato" link="#"></ButtonLink>
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
</style>
