var Ticket = require('./ticket').default

/**
 * 半券のリスト
 */
export default class TicketList {
  constructor (name = 'default') {
    var source = TicketList.fetch(name)

    this.movie_name = source.movie_name || name
    this.tickets = []
    let tickets = source.tickets || []
    tickets.forEach((ticket) => {
      this.tickets.push(new Ticket(ticket))
    })
  }
  // ストレージキーの設定
  static storageKey (name) {
    return 'ticketId.' + name
  }

  // ローカルストレージから保存された内容を取り出す
  static fetch (name = 'default') {
    return JSON.parse(localStorage.getItem(TicketList.storageKey(name)) || '{}')
  }

  // 新しい半券を半券リストに追加する
  add (ticket) {
    this.tickets.push(ticket)
  }

  // 半券リストを永続化する
  save () {
    // ローカルストレージに保存させる
    localStorage.setItem(TicketList.storageKey(this.movie_name), JSON.stringify(this))
  }

  // 1件の半券データを削除する
  remove (index) {
    this.tickets.splice(index, 1)
    this.save()
  }

  // 全半券データを削除する
  removeAll () {
    this.tickets = []
    this.save()
  }
  // watched_atの降順でデータをソートする
  sortByWatchedAtDesc (list) {
    list.sort((a, b) => {
      return (a.watched_at < b.watched_at ? 1 : -1)
    })
  }
}
