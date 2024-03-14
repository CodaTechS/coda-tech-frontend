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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
}

template {
    background-color:#f5f7ff;
    color: #fff;
    height: fit-content;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

nav{
    justify-content: space-between;
}

img {
    display: flex;
    align-items: center;
}
</style>
