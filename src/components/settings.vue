<template>
  <v-ons-page id="settings">
    <v-ons-toolbar>
      <div class="center">設定</div>
    </v-ons-toolbar>
    <v-ons-list>
      <!-- <v-ons-list-header>アカウント</v-ons-list-header>
      <v-ons-list-item tappable>パスワードを変更する</v-ons-list-item> -->
      <v-ons-list-header>このアプリについて</v-ons-list-header>
      <!-- <v-ons-list-item @click="agreementDialog=true" tappable>利用規約</v-ons-list-item> -->
      <v-ons-list-item tappable @click="deleteAllTickets()"><span class="alert">登録データの削除</span></v-ons-list-item>
    </v-ons-list>
    <!-- <v-ons-dialog cancelable :visible.sync="agreementDialog">
      <p style="text-align: center"><h3>hankemory利用規約</h3><br><small>この利用規約（以下「本規約」といいます。）には、本サービスの提供条件が定められています。本サービスの利用に際しては、本規約の全文をお読み頂いた上で、本規約に同意頂く必要があります。本規約の他、サービス提供者が別途サービス利用者に提示する本サービスの利用に関するルールは、本規約に組み込まれるものとします。但し、本規約の内容と、前記のルールその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。</small></p> -->
    </v-ons-dialog>
  </v-ons-page>
</template>

<script>
import TicketList from '../models/ticket_list'

export default {
  name: 'settings',
  data () {
    return {
      agreementDialog: false
    }
  },
  methods: {
    deleteAllTickets () {
      this.$ons.notification.confirm({
        message: '一度削除したデータは二度と復元できません。本当によろしいですか？',
        buttonLabels: ['削除する', 'いいえ'],
        callback: (index) => {
          if (index === 0) {
            var tickets = new TicketList()
            tickets.removeAll()
            this.$ons.notification.toast('登録した半券が全て削除されました。', { timeout: 4000 })
          }
        }
      })
    }
  }
}
</script>

<style>
  .sign_out {
    color: #fff;
  }
  .alert {
    color: red;
  }
</style>
