<template>
 <div>
  <GeneralHeader content="Well, hello there!"/>
  <div>
    <h1>Greetings!</h1>
    <p id="greetings-content">
      Welcome to my $1 budget website written with Vue.js framework!
      <br>
      It's more of a personal website than a professional one,
      <br>
      so contents are not that serious except in my resume section.
      <br>
      The chosen background color is meant to put less strain on your eyes.
      <br>
      And I even spot dead pixels on my new screen, yikes!
    </p>
    <h1> Get in touch</h1>
    <div class="social-media-row">
      <a href="https://github.com/kvyuan">
        <i class="fa fa-github" style="font-size:36px"></i>
      </a>
      <a href="https://www.linkedin.com/in/hao-yuan-95qd/">
        <i class="fa fa-linkedin" style="font-size:36px"></i>
      </a>
      <a href="https://steamcommunity.com/id/1naccurate/">
        <i class="fa fa-steam" style="font-size:36px"></i>
      </a>
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
  font-size: 2rem;
  font-family: proxima-nova;
}

a{
  padding-left:35px
}

</style>
