<template>
  <div class="education">
    <h2 id="degree">{{degree}}</h2>
    <h4 id="school-location-years">{{schoolLocationYears}}</h4>
    <h4 id="GPA">GPA: {{GPA}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: ['degree', 'schoolLocationYears', 'GPA']
};
</script>

<style>
.education{
  font-family: proxima-nova;
  font-style: normal;
  letter-spacing: .1em;
  color: black;
  text-align: left;
  padding-bottom: 3.5vh;
}

h3, h4 {
  margin-bottom: 2px;
}

h3{
  font-size: 1.7vw
}

h4{
  font-size: 1.4vw
}

h2{
  font-size: 1.8vw;
}
</style>
