<template>
  <div class="memegallery">
    <div class="gallery-panel"
         v-for="meme in meme_list"
         :key="meme.id">
        <img :src="getThumbnail(meme.filename)">
    </div>
  </div>
</template>

<script>
import meme_list from '../assets/memes/config.json';
export default {
  name: 'MemeGallery',
  data() {
    return {
      meme_list,
    };

  },
  methods: {
   getThumbnail(filename){
     return require(`../assets/memes/thumbnails/${filename}`);
   }
 }
};
</script>

<style>
  .memegallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 5px;
    grid-auto-rows: 75px;
    grid-auto-flow: dense;
  }
  .gallery-panel img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: -2rem;
  }
</style>
