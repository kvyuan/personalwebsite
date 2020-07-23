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
  location: relative;
  font-family: proxima-nova;
  font-style: normal;
  font-size: 1.1vw;
  letter-spacing: .1em;
  color: black;
  text-align: left;
  place-items: center;
  padding-bottom: 5vh;
}

#degreeGpa, #schoolLocationYears {
  margin-bottom: 1em;
}
</style>
