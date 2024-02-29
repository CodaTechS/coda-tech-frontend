<template>
  <SliderHome></SliderHome>
  <AboutUs></AboutUs>
  <Services></Services>
  <News></News>
</template>

<script>
import SliderHome from '@/components/dynamics/SliderHome.vue';
import AboutUs from '@/components/dynamics/AboutUs.vue';
import Services from '@/components/dynamics/Services.vue';
import News from '@/components/dynamics/News.vue';

export default {
  name: 'Home',
  components: {
    SliderHome,
    AboutUs,
    Services,
    News
  }
};
</script>

<style scoped>

</style>
