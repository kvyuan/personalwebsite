<template>
  <div>
    <GeneralHeader content="Chill, it's a joke"/>
    <MemeGallery />
  </div>
</template>

<script>
import MemeGallery from '@/components/MemeGallery.vue';
import GeneralHeader from '@/components/GeneralHeader.vue';
export default {
  name: 'memes',
  components: {
    MemeGallery,
    GeneralHeader,
  },
};
</script>
