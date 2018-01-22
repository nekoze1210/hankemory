<template>
<v-ons-page id="newTicket">
  <v-ons-toolbar>
    <div class="center">半券の登録</div>
  </v-ons-toolbar>
  <v-ons-card modifier="material">
    <div class="content">
      <v-ons-list-header>半券の写真</v-ons-list-header>
      <div v-if="!uploadedImage">
        <input id="image-upload" type="file" v-on:change="onFileChange" required>
      </div>
      <div v-else>
        <img v-show="uploadedImage" :src="uploadedImage" style="max-width:100%; max-height:50%;">
        <button type="checkbox" @click="removeImage">画像を削除する</button>
      </div>
      <v-ons-list>
        <v-ons-list-title>映画タイトル</v-ons-list-title>
        <v-ons-list-item><v-ons-input placeholder="映画タイトルを入力" style="width:100%;" v-model="item.movie_name" required></v-ons-input></v-ons-list-item>
        <v-ons-list-title>鑑賞日</v-ons-list-title>
        <v-ons-list-item><v-ons-input type="date" style="width:100%;" v-model="item.watched_at" required></v-ons-input></v-ons-list-item>
        <v-ons-list-title>映画館</v-ons-list-title>
        <v-ons-list-item><v-ons-input placeholder="映画館を入力" style="width:100%;" v-model="item.theater" required></v-ons-input></v-ons-list-item>
        <v-ons-list-header>その他</v-ons-list-header>
        <v-ons-list-item><textarea v-model="item.memo" class="textarea textarea--transparent" placeholder="メモ・感想など" style="width:100%;" rows="5"></textarea></v-ons-list-item>
      </v-ons-list>
    </div>
    <v-ons-button modifier="large" @click="registerStub" ripple type="submit"><b>保存</b></v-ons-button>
  </v-ons-card>
</v-ons-page>
</template>

<script>
  import Ticket from '../models/ticket'
  import TicketList from '../models/ticket_list'

  export default {
    name: 'newTicket',
    data () {
      return {
        uploadedImage: '',
        item: {
          movie_name: '',
          theater: '',
          memo: '',
          watched_at: ''
        }
      }
    },
    methods: {
      onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        this.createImage(files[0])
      },
      createImage (file) {
        let image = new Image()
        let reader = new FileReader()
        reader.onload = (e) => {
          image.onload = () => {
            
            var width, height
            if (image.width > image.height) {
            // 横長の画像は横のサイズを指定値にあわせる
              var ratio = image.height / image.width;
              width = 300;
              height = 300 * ratio;
            } else {
              // 縦長の画像は縦のサイズを指定値にあわせる
              var ratio = image.width / image.height;
              width = 300 * ratio;
              height = 300;
            }
            
            var canvas = document.createElement('canvas')
            canvas.setAttribute('width', width)
            canvas.setAttribute('height', height)
            var ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, width, height)
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height)

            var base64 = canvas.toDataURL('image/jpeg')

            var barr, bin, i, len
            bin = atob(base64.split('base64,')[0])
            len = bin.length
            barr = new Uint8Array(len)
            i = 0
            while (i < len) {
              barr[i] = bin.charCodeAt(i)
              i++
            }
            blob = new Blob([arr], { type: 'image/jpeg' })
          }
          this.uploadedImage = e.target.result
        }
        reader.readAsDataURL(file)
      },
      removeImage () {
        this.uploadedImage = ''
      },
      resetForm () {
        this.uploadedImage = ''
        this.item.movie_name = ''
        this.item.theater = ''
        this.item.watched_at = ''
        this.item.memo = ''
      },
      isValid () {
        if (this.uploadedImage === '' || this.item.movie_name === '' || this.item.watched_at === '') {
          return false
        }
      },
      registerStub () {
        if (this.isValid() === false) {
          this.$ons.notification.toast('入力内容に誤りがあります。', { timeout: 4000 })
          return
        }

        var list = new TicketList()
        list.add(new Ticket({
          image_url: this.uploadedImage,
          movie_name: this.item.movie_name,
          theater: this.item.theater,
          watched_at: this.item.watched_at,
          memo: this.item.memo
        }))
        list.save()
        this.$emit('changeTab', 0)
        this.$ons.notification.toast('半券のデータが登録されました。', { timeout: 4000 })
        this.resetForm()
      }
    }
  }
</script>
