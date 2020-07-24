<template>
  <div class="container-outer">
    <GeneralHeader content="My 2020 meme collection"/>
    <div class="container">
      <div v-for="n in 8" :key="n">
        <img :src="require(`../assets/memes/${n}.png`)" width="200" height="200">
      </div>
    </div>
  </div>
</template>

<script>
//import MemeGallery from '@/components/MemeGallery.vue';
import GeneralHeader from '@/components/GeneralHeader.vue';
//import meme_list from '../assets/memes/config.json';
export default {
  name: 'memes',
  components: {
    //MemeGallery,
    GeneralHeader
  },
};
</script>

<style>
  .container-outer{
  }
  .container{
    display: grid;
    grid-gap: 25vh;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
    padding-top: 8vh;
    padding-left: 20vw;
    padding-right: 20vw;
    padding-bottom: 8vw;

  img{
    max-width: 50%;
    height: 50%;
  }
  }
</style>
