<template>
 <div>
  <div>
    <GeneralHeader content="Well, hello there :)"/>
    <div class="home-container">
      <h1>Welcome</h1>
      <p id="greetings-content">
        Thank you for visiting Hao's $1 budget website written with Vue.js framework!
        <br/>
        It's more of a personal website than a professional one,
        <br/>
        so contents are not that serious except in my resume section.
        <br/>
        The chosen background color is meant to put less strain on your eyes.
        <br/>
        And I even spot dead pixels on my new monitor, yikes!
        <br/>
        For a less terrible experience,
        <br/>
        please browse this website on a PC or enable view rotation on mobile.
        <br/>
        But hey, at least the memes are mobile friendly!
      </p>
      <h1> Get in touch</h1>
      <div class="social-media-row">
        <a href="https://github.com/kvyuan">
          <i class="fa fa-github" style="font-size:6vw"></i>
        </a>
        <a href="https://www.linkedin.com/in/hao-yuan-95qd/">
          <i class="fa fa-linkedin" style="font-size:6vw"></i>
        </a>
        <a href="https://steamcommunity.com/id/1naccurate/">
          <i class="fa fa-steam" style="font-size:6vw"></i>
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
  font-size: 2vw;
  font-family: proxima-nova;
  line-height: 1.5;
}

a{
  padding-left:5%;
  padding-right:5%
}

h1{
  font-size: 6vw
}
.home-container{
  display: block;
  place-items: center;
}

</style>
