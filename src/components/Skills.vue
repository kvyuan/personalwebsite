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
  width: 100%;
  display: grid !important;
  location: absolute;
  height: 20px;
  font-family: proxima-nova;
  font-style: normal;
  font-size: 16px;
  letter-spacing: .1em;
  color: black;
  margin-bottom: 2em;
  margin-top: 0px;
  text-align: left;
  top: 10%;
}
</style>
