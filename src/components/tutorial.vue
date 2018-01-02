<template>
  <v-ons-page id="tutorial">
    <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex">
      <v-ons-carousel-item v-for="(value, key) in tutorials" :style="{ backgroundColor: value.color }">
        <p style="text-align: center; font-size: 25px; font-weight: 600; margin-top: 30px; color: #fff;" v-html="value.text.replace(/\n/g,'<br/>')""></p>
        <v-ons-button modifier="quiet" v-if="key === 2" @click="becomeUser()" style="color:#fff; padding: 10px; font-size:20px; border:1px solid #fff; display: block; margin: 50% 25%;"><b>Stubをはじめる</b></v-ons-button><br>
      </v-ons-carousel-item>
    </v-ons-carousel>
    <div :style="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(tutorials).length" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  el: '#tutorial',
  name: 'tutorial',
  data () {
    return {
      carouselIndex: 0,
      dots: {
        textAlign: 'center',
        fontSize: '20px',
        color: '#fff',
        position: 'absolute',
        bottom: '40px',
        left: 0,
        right: 0
      },
      tutorials: [
        {
          color: '#EC9F05',
          text: 'Stub!へようこそ！'
        },
        {
          color: '#094074',
          text: 'ここでは、\nあなたの思い出に残る映画を\n記録することが出来ます。'
        },
        {
          color: '#03CEA4',
          text: '使い方はカンタン\nさあ、はじめよう'
        }
      ]
    }
  },
  props: ['isBeginner'],
  methods: {
    becomeUser () {
      this.isBeginner = 0
    }
  }
}
</script>
