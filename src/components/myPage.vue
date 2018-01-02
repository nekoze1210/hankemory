<template>
<v-ons-page id="myPage">
  <v-ons-toolbar>
    <div class="center">
      <b>マイページ</b>
    </div>
  </v-ons-toolbar>

  <v-ons-card modifier="material">
    <img src="https://monaca.io/img/logos/download_image_onsenui_01.png" alt="Onsen UI" style="width: 100%">
    <div class="title">
      {{nickname}}
    </div>
    <div class="content">
      <div>
        <v-ons-button modifier="quiet">
          <v-ons-icon icon="ion-thumbsup"></v-ons-icon>
        </v-ons-button>
        <v-ons-button modifier="quiet">
          <v-ons-icon icon="ion-share"></v-ons-icon>
        </v-ons-button>
      </div>
      <v-ons-list>
        <v-ons-list-title>プロフィール設定</v-ons-list-title>
        <v-ons-list-item>ニックネーム編集</v-ons-list-item>
        <v-ons-list-item>プロフィール画像変更</v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-card>
</v-ons-page>
</template>

<script>
export default {
  name: 'myPage',
  data () {
    return {
      nickname: 'ねこぜ'
    }
  }
}
</script>