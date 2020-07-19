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
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 60rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }
  .gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: contain;
    border-radius: 0.75rem;
  }
</style>
