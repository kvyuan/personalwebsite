<template>
  <div class="experience">
    <h2 id="position">{{position}}</h2>
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
  font-family: proxima-nova;
  font-style: normal;
  letter-spacing: .1em;
  color: black;
  text-align: left;
  width:78%;
  padding-bottom: 3.5vh;
}

h2{
  font-size:1.8vw;
}

h4{
  font-size:1.4vw;
  margin-block-start: 0em;
  margin-bottom:1vh;
}

#description{
  font-size: 1.2vw
}
</style>
