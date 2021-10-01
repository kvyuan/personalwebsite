<template>
 <div>
  <div>
    <GeneralHeader content="Well, hello there :)"/>
    <div class="home-container">
      <p id="greetings-content">
        Thank you for visiting Hao's $1 budget website written with Vue.js framework!<br/>
        The chosen background color is meant to put less strain on your eyes.<br/>
        And I even spot dead pixels on my new monitor, yikes!
      </p>
      <h3> Get in touch</h3>
      <div class="social-media-row">
        <a href="https://github.com/kvyuan">
          <i class="fa fa-github" style="font-size:3vw"></i>
        </a>
        <a href="https://www.linkedin.com/in/hao-yuan-95qd/">
          <i class="fa fa-linkedin" style="font-size:3vw"></i>
        </a>
        <a href="https://steamcommunity.com/id/1naccurate/">
          <i class="fa fa-steam" style="font-size:3vw"></i>
        </a>
      </div>
    </div>

  </div>
 </div>
</template>

<script>
import GeneralHeader from '@/components/GeneralHeader.vue';
export default {
  name: 'Home',
  components: {
    GeneralHeader
  }
}

</script>

<style>

#greetings-content{
  font-size: 2vh;
  font-family: proxima-nova;
  line-height: 1.5;
  align-items: center;
  text-align: center;
}

a{
  padding-left:5%;
  padding-right:5%
}

h1{
  font-size: 6vh
}
.home-container{
  display: block;
  place-items: center;
}

</style>
