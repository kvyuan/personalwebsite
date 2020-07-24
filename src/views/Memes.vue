<template>
  <div class="container-outer">
    <GeneralHeader content="My 2020 meme collection"/>
    <div class="container">
      <div class="image-outer" v-for="n in 8" :key="n">
        <img :src="require(`../assets/memes/${n}.png`)" width="180" height="180">
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
  .container{
    display: grid;
    grid-gap: 15vh;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 140px;
    padding-top: 50px;
    padding-left: 20vw;
    padding-right: 20vw;
    max-height: 100%;

  img{
    max-width: 50%;
    height: 50%;
  }
  }

  .image-outer{
    margin: 0 auto
  }
</style>
