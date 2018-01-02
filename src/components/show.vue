<template>
  <v-ons-page id="detail">
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">{{ item.movie_name }}</div>
    </v-ons-toolbar>

    <v-ons-card>
      <div class="card movie" :style="{ 'background-image': 'url(' + item.image_url + ')' }"></div>
      <div class="content">
        <v-ons-list>
          <v-ons-list-header>鑑賞日</v-ons-list-header>
          <v-ons-list-item>{{item.watched_at}}</v-ons-list-item>
          <v-ons-list-header>映画館</v-ons-list-header>
          <v-ons-list-item>{{item.theater}}</v-ons-list-item>
          <v-ons-list-header>感想・メモ</v-ons-list-header>
          <v-ons-list-item>{{item.memo}}</v-ons-list-item>
        </v-ons-list>
      </div>
    <!-- <v-ons-button ripple modifier="large" @click="call(item)">SNSにシェアする</v-ons-button> -->
    </v-ons-card>
  </v-ons-page>
</template>

<script>
  export default {
    data () {
      return {
        visible: true
      }
    },
    methods: {
      call (data) {
        console.log(data)
      }
    }
  }
</script>
