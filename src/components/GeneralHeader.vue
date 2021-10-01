<template>
  <div class="general-header">
    <p id="content">{{content}}</p>
  </div>
</template>

<script>
//import MemeGallery from '@/components/MemeGallery.vue';
export default {
  name: 'GeneralHeader',
  props: ['content']
};
</script>

<style>
.general-header{
  width: 100%;
  background-color: #0c0b0b;
  location:relative;
  display:inline-block;
  padding-top: 7vh;
}

#content{
  font-family: proxima-nova;
  font-style: normal;
  font-size: 3vw;
  color: #d6d6d6;
  letter-spacing: .13em;
  align-items: center;
}
</style>
