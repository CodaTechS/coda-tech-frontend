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
    </nav>
</template>

<script>
export default {
    name: 'Nav'
};
</script>

<style scoped>
</style>
