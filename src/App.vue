<template>
  <div id="app">
    <title>Hao's Website</title>
    <div class="navbar">
      <div>
        <p class="signature">Hao Yuan</p>
      </div>
      <div class="navbar-inner">
        <a href="/home" class="nav-item">HOME</a>
        <a href="/about" class="nav-item">ABOUT</a>
        <a href="/resume" class="nav-item">RESUME</a>
        <a href="/memes" class="nav-item">MEMES</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background: #F9F4ED;
  background-color: #eae6df;
  position:absolute;
  display:block;
  min-height:100%;
  height:auto;
  width:100%;
  top:0px;
  left:0px;
  z-index:-1;
}

#homeview {
  font-family: Helvetica;
  font-size: 16px;
  color: white;
  background-color: transparant;

}

.navbar{
  width: 100%;
  height: 60px;
  background-color: #0c0b0b;
  top: 0;
  position: fixed;
  display: flex;
  font-family: proxima-nova;
  font-weight: 600;
  font-style: normal;
  font-size: 15px;
  letter-spacing: .16em;
  vertical-align: middle;
  align-items: center;
  z-index: 99;
}

.signature{
  font-family: "Brush Script MT";
  font-family: "Segoe Script";
  font-size: 36px;
  color: #FFF;
  position: relative;
  left: 80px;
}

.navbar-inner{
  margin: 0 auto;
  display: flex;
  font-size:15
  hover ~.nav-item{
    background-color: #cc1b0d;
  }
}

.nav-item{
  color: #FFF;
  margin: 20px;
  padding: .618em 0;
  vertical-align: middle;
  text-decoration:none;
}
</style>
