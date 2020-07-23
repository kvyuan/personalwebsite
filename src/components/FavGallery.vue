<template>
  <div class="fav-gallery">
    <Fav image="jazz.jpg" description="Jazz. Slow or fast, it's beautiful."/>
    <Fav image="frank-sinatra.jpg" description="Frank Sinatra. Voice is smooth like peanut butter."/>
    <Fav image="louis-armstrong.jpg" description="Louis Armstrong. If one forgets how to be happy, listen to his music."/>
    <Fav image="fred-astaire.jpg" description="Fred Astaire. Greatest dancer of all time. Even Michael Jackson borrowed his styling."/>
    <Fav image="steve-nash.jpg" description="Steve Nash. Canadian basketball legend. Team play > personal stats, like how things should be"/>
    <Fav image="the-room.jpg" description="The Room. This movie is so bad that it's the best. Oh hi Mark!"/>
    <Fav image="sweet-and-sour-pork-strips.jpg" description="Sweet and Sour Pork Strips. 20 years of experience judging this traditional Chinese cuisine."/>
    <Fav image="toyota-supra.jpg" description="Toyota Supra. Who doesn't like old school runners with popup headlights?"/>
    <Fav image="cs-go.jpg" description="Intense team-based FPS game. 1600hr on record."/>
  </div>
</template>

<script>
import Fav from '@/components/Fav.vue';
export default {
  name: 'FavGallery',
  components: {
    Fav
  }
};
</script>

<style>
  .memegallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    width: 10vw;
    margin: 5rem auto;
    padding: 0 5rem;
    height: auto;
  }
</style>

.
