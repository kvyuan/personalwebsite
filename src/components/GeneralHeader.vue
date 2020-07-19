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
  display: block;
  location:relative;
  height: 100px;
  align-items: center;
  text-align: center;
  justify-content: center;

}

#content{
  font-family: proxima-nova;
  font-style: normal;
  font-size: 60px;
  color: #FFF;
  letter-spacing: .16em;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center
}
</style>
