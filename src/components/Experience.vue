<template>
  <div class="experience">
    <h3 id="position">{{position}}</h3>
    <h4 id="companyLocationYears">{{companyLocationYears}}</h4>
    <span id="description">{{description}}</span>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: ['position', 'companyLocationYears', 'description']
};
</script>

<style>
.experience{
  width: 78%;
  display: grid !important;
  location: absolute;
  font-family: proxima-nova;
  font-style: normal;
  font-size: 16px;
  letter-spacing: .1em;
  color: black;
  margin-top: 0px;
  text-align: left;
  top: 10%;
  padding-bottom: 30px;
}
#position, #companyLocationYears{
  line-height: 3px
}
</style>
