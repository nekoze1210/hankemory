<template>
  <v-ons-page id="timeline">
    <v-ons-navigator swipeable
      :page-stack="pageStack"
      @push-page="updatePage($event)"
      @reloaded="reload()"
    ></v-ons-navigator>
  </v-ons-page>

</template>

<script>
import mainPage from './mainPage'

export default {
  name: 'timeline',
  data () {
    return {
      pageStack: [mainPage]
    }
  },
  methods: {
    updatePage (data) {
      this.pageStack.push({
        extends: data.page,
        data () {
          return { item: data.data }
        }
      })
    }
  },
  components: { mainPage }
}
</script>

<style>
  .button.button--large {
    background-color: #F89406;
  }
</style>
