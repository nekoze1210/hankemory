<template>
  <v-ons-page id="detail">
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">{{ item.title }}</div>
    </v-ons-toolbar>

    <v-ons-card>
      <div class="card movie" :style="{ 'background-image': 'url(' + item.ticket_image.url.url + ')' }"></div>
      <div class="content">
        <v-ons-list>
          <v-ons-list-header>鑑賞日</v-ons-list-header>
          <v-ons-list-item>{{item.enjoyed_at}}</v-ons-list-item>
          <v-ons-list-header>映画館</v-ons-list-header>
          <v-ons-list-item>{{item.theater}}</v-ons-list-item>
          <v-ons-list-header>感想・メモ</v-ons-list-header>
          <v-ons-list-item>{{item.description}}</v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
  export default {
    data () {
      return {
        visible: true
      }
    }
  }
</script>
