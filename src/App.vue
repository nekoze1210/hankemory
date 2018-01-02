<template>
  <v-ons-page id="app">
    <!-- <v-ons-carousel fullscreen swipeable auto-scroll overscrollable :index.sync="carouselIndex" v-show="isBeginner">
      <v-ons-carousel-item v-for="(value, key) in tutorials" :style="{ backgroundColor: value.color }">
        <p style="text-align: center; font-size: 25px; font-weight: 600; margin-top: 30px; color: #fff;" v-html="value.text.replace(/\n/g,'<br/>')""></p>
        <v-ons-button modifier="quiet" v-if="key === 2" @click="becomeUser()" style="color:#fff; padding: 10px; font-size:20px; border:1px solid #fff; display: block; margin: 50% 25%;"><b>Stubをはじめる</b></v-ons-button><br>
      </v-ons-carousel-item>
    </v-ons-carousel> -->
    <!-- <div :style="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(tutorials).length" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
    </div> -->

    <v-ons-tabbar swipeable position="auto" :visible="true" :tabs="tabs" :index.sync="tabIndex" @changeTab="changeTab($event)">
    </v-ons-tabbar>
    </div>
  </v-ons-page>
</template>

<script>
import timeline from './components/timeline'
import myPage from './components/myPage'
import settings from './components/settings'
import newTicket from './components/newTicket'

export default {
  name: 'app',
  data () {
    return {
      tabIndex: 0,
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
      ],
      tabs: [
        {
          icon: 'ion-ios-list',
          label: '鑑賞した映画',
          page: timeline
        },
        {
          icon: 'md-plus',
          label: '半券の登録',
          page: newTicket
        },
        {
          icon: 'ion-person',
          label: 'ユーザ設定',
          page: settings
        }
      ]
    }
  },
  methods: {
    changeTab (tabIndex) {
      this.tabIndex = tabIndex
    },
    updateView () {
      this.$forceUpdate()
    },
    becomeUser () {
      this.$nextTick(function () {
        this.isBeginner = 0
      })
      this.$forceUpdate()
    }
  },
  components: { timeline, myPage, settings }
}
</script>

<style>
  body {
    padding: constant(safe-area-inset-top) constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);
  }
  .toolbar {
    background-color: #78be3f;
  }
  .center.toolbar__center.toolbar__title {
    color: #fff;
  }
  .left {
    color: #fff;
  }
  .back-button__label {
    color: #fff;
  }
  .back-button__icon {
    fill: #fff;
  }
</style>
