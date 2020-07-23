<template>
  <div class="container-outer">
    <GeneralHeader content="My 2020 meme collection"/>
    <div class="container">
      <img src="../assets/memes/thumbnails/1.png" width="100" height="100">
      <img src="../assets/memes/thumbnails/2.png" width="100" height="100">
      <img src="../assets/memes/thumbnails/3.png" width="100" height="100">
      <img src="../assets/memes/thumbnails/4.png" width="100" height="100">
      <img src="../assets/memes/thumbnails/5.png" width="100" height="100">
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
    grid-gap: 5vh;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
    padding-top: 8vh;
    padding-left: 20vw;
    padding-right: 20vw;
    padding-bottom: 8vw;

  img{
    max-width: 50%;
    height: auto;
  }
  }
</style>
