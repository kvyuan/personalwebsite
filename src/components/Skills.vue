<template>
  <div class="skills">
    <li id="skills">{{skills}}</li>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: ['skills']
};
</script>

<style>
.skills{
  font-family: proxima-nova;
  font-style: normal;
  font-size: 1.2vw;
  letter-spacing: .1em;
  text-align: left;
  margin-bottom:1vh;

}
</style>
