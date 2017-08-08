import {getPasswordUsed} from './dictionary/PASSWORD'

export default class UsePassword {

  constructor () {
    this.use = getPasswordUsed()
  }

  keyword (password) {
    if (password) {
      var nowUse = []
      for (var i = 0; i < this.use.length; i++) {
        if (password.toLowerCase().indexOf(this.use[i].toLowerCase()) !== -1) {
          nowUse.push(this.use[i])
        }
      }

      return nowUse
    }

    return []
  }
}
