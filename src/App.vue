<template>
  <v-ons-page id="app">
    <v-ons-tabbar swipeable position="auto" :visible="true" :tabs="tabs" :index.sync="tabIndex" @changeTab="changeTab($event)">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import timeline from './components/timeline'
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
          icon: 'ion-gear-a',
          label: '設定',
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
  components: { timeline, settings }
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
