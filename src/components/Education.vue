<template>
  <div class="education">
    <h3 id="degreeGpa">{{degreeGpa}}</h3>
    <span id="school-location-years">{{schoolLocationYears}}</span>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: ['degreeGpa', 'schoolLocationYears']
};
</script>

<style>
.education{
  width: 100%;
  display: grid !important;
  location: relative;
  height: 100px;
  font-family: proxima-nova;
  font-style: normal;
  font-size: 16px;
  letter-spacing: .1em;
  color: black;
  margin-bottom: 1em;
  margin-top: 40px;
  text-align: left;
  left: 30%
}

#degreeGpa, #schoolLocationYears {
  margin-bottom: 1em;
}
</style>
