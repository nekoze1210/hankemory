<template>
  <v-ons-page id="main" @show="$mount()">
    <v-ons-toolbar>
      <div class="center">映画一覧</div>
    </v-ons-toolbar>
    <div id="lists">
      <div v-if="Object.keys(tickets).length === 0">
        <div class="center">
          <p style="text-align:center;">映画が一件も登録されていません。</p>
        </div>
      </div>
      <div v-for="ticket in tickets">
        <v-ons-card @click="push(ticket)">
          <b>{{ ticket.watched_at }}</b>
            <div class="card movie" :style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(' + ticket.image_url + ')' }">
            <div class="card-name">{{ ticket.movie_name }}</div>
          </div>
        </v-ons-card>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import detailPage from './show'
  import TicketList from '../models/ticket_list'

  export default {
    name: 'main',
    data () {
      return {
        title: '鑑賞した映画',
        state: 'initial',
        tickets: []
      }
    },
    methods: {
      push (ticket) {
        this.$emit('push-page', { page: detailPage, data: ticket })
      },
      loadTickets () {
        var list = new TicketList()
        list.sortByWatchedAtDesc(list.tickets)
        this.tickets = list.tickets
      }
    },
    beforeMount: function () {
      this.loadTickets()
    },
    components: { detailPage }
  }
</script>

<style>
.card.movie {
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;
  height: 250px;
}

.card-name {
  font-weight: 600;
  font-size: 20px;
  padding: 66px 0 8px 0;
  text-align: center;
}

.card-desc {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;
  text-align: center;
  line-height: 1.4;
}
</style>
