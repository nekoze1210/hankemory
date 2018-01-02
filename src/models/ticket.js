export default class Ticket {
  constructor (source = {}) {
    this.image_url = source.image_url || ''
    this.movie_name = source.movie_name || ''
    this.theater = source.theater || ''
    this.watched_at = source.watched_at || ''
    this.memo = source.memo || ''
  }
}
