<template>
  <header>
      <img src="@/assets/img/codaTech.png" alt="codaTech">
    <Nav></Nav>
    <router-view></router-view>
  </header>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Header',
  components: {
    Nav
  }
};
</script>

<style scoped>

</style>
