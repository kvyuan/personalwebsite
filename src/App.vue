<template>
  <div id="app">
    <title>Hao's Website</title>
    <div class="navbar">
      <div>
        <p class="signature">Hao Yuan</p>
      </div>
      <div class="navbar-inner">
        <router-link to="/home" class="nav-item">HOME</router-link>
        <router-link to="/about" class="nav-item">ABOUT</router-link>
        <router-link to="/resume" class="nav-item">RESUME</router-link>
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
  background-color: #92856c;
  position:absolute;
  min-height: 100%;
  width:100%;
  top:0px;
  left:0px;
  z-index:-1;
  overflow-z: hidden;
  margin: 0;
  height:auto;
  padding-bottom: 10vh;
  background-clip: padding-box;
}

#homeview {
  font-family: Helvetica;
  font-size: 16px;
  color: white;
  background-color: transparant;

}

.navbar{
  width: 100%;
  height: 7vh;
  background-color: #0c0b0b;
  position: fixed;
  display: flex;
  font-family: proxima-nova;
  font-weight: 600;
  font-style: normal;
  font-size: 1.25vw;
  letter-spacing: .16em;
  vertical-align: middle;
  align-items: center;
  z-index: 99;
}

.signature{
  font-family: "Brush Script MT";
  font-family: "Segoe Script";
  font-size: 3vw;
  color: #d6d6d6;
  position: relative;
  left: 15%;
}

.navbar-inner{
  margin-left: 10vw;
  display: flex;
  font-size:15;
  hover ~.nav-item{
    background-color: #cc1b0d;
  };
  float:right;
  text-align: right;
}

.nav-item{
  color: #d6d6d6;
  margin: 20px;
  padding: .618em 0;
  text-decoration:none;
  float: right;
}
</style>
