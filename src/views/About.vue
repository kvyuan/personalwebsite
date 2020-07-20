<template>
  <div>
    <GeneralHeader content="These define who I am"/>
    <div class="fun-facts">
      <div class="city-pic-wrapper">
        <img class="city-pic" src="../assets/qd.jpg"/>
      </div>
      <div class="fun-facts-inner">
        <p id="sub-header">Fun Facts</p>
        <p id="fun-facts-content">
          I was born in the beer city, Qingdao of China, but I prefer
          cocktail drinks. I am 1/16 Russian which explains why I am
          fan of Adidas and Vodka. I have a big stomach. 50 dumplings or 1
          large 4-topping pizza in one sitting is eazy peasy, lemon squeezy. I
          enjoy travel planning as much as I enjoy traveling itself. My delicately
          planned 14-day graduation trip was ruined by 9 rainy days.
        </p>
      </div>
    </div>
    <div class="favorites">
      <p id="sub-header">All Time Favorites</p>
      <FavGallery/>
    </div>
    <div class="unpopular-opinions">
      <p id="sub-header">Unpopular Opinions</p>
      <div class="unpopular-opinions-inner">
        <p id="unpopular-opinions-content">
          <ul>
            <li> Machine learning is overly hyped; More time should be spent on feature engineering than model tuning</li>
            <li> Protests infringing others' rights and properties are not justified</li>
            <li> State-controlled media and free media both spread biased info, except one can do so freely</li>
            <li> Skin care products and alcolhol drinks shouldn't be gender specific</li>
            <li> Pineapple on Pizza is delicious</li>
            <li> Top hits in Billboard 2020 are worse than 5 years ago</li>
            <li> Bullet points are ugly and shouldn't be used anymore</li>
          </ul>
        </p>
      </div>
    </div>
    <div class="if-rich">
      <p id="sub-header">If I am wealthy some day</p>
      <div class="if-rich-inner">
        <p id="if-rich-content">
          Yeah I know, it's not likely to happen.
          <br>
          But if I am, I will start a fund to build an orphanage, a school,
          a homeless shelter, a nursing home, and an animal shelter.
          <br>
          This is my life goal. Might be trivial to you, but it means a lot to me.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralHeader from '@/components/GeneralHeader.vue';
import FavGallery from '@/components/FavGallery.vue';
export default {
  name: 'About',
  components: {
    GeneralHeader,
    FavGallery
  },
};
</script>

<style>
.fun-facts{
  width: 100%;
  height: 55vh;
  positition: relative;
}

.city-pic-wrapper{
  position: relative;
  padding-top: 100px;
  display:inline-block;
  float:left;
  margin-left: 11%;
  width: 35%;
  height: auto;

}

img.city-pic{
  width:100%;
  height: auto;
  float:left
}

.fun-facts-inner{
  position: relative;
  width:35%;
  float:right;
  margin-right:11%;
  padding-top:14vh;
}

.favorites{
  position: relative;
  padding-top: 5%;
}

.unpopular-opinions-inner{
  text-align: center;
  display:block;
  width: 100%
}

.if-rich-inner{
  align-items: center;
  text-align: center;
  justify-content: center;
  display:block;
  width: 100%
}

.if-rich{
  align-items: center;
  text-align: center;
  justify-content: center;
  display:block;
  width: 100%
}

#sub-header{
  font-family: proxima-nova;
  font-style: normal;
  font-size: 2.5vw;
  letter-spacing: .16em;
}

#fun-facts-content{
  font-family: proxima-nova;
  font-style: normal;
  font-size: 1.5vw;
  color: black;
  letter-spacing: .03em;
  display: flex;
  justify-content: space-between;
  text-align: justify;

}

#unpopular-opinions-content{
  font-family: proxima-nova;
  font-style: normal;
  font-size: 1.5vw;
  color: black;
  letter-spacing: .05em;
  display: flex;
  text-align: left;
  width: 100%;
  text-indent: -5 px;

}

#if-rich-content{
  font-family: proxima-nova;
  font-style: normal;
  font-size: 1.5vw;
  color: black;
  letter-spacing: .05em;
  text-align: center;
  align-items: center;


}

ul{
  max-width:90%;
  margin:auto;
  text-align:left;
}

</style>
