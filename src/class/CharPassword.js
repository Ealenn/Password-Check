export default class CharPassword {
  constructor (password) {
    this.password = password
  }

  lowercase () {
    if (this.password) {
      return this.password.length - this.password.replace(/[a-z]/g, '').length
    } else {
      return 0
    }
  }

  uppercase () {
    if (this.password) {
      return this.password.length - this.password.replace(/[A-Z]/g, '').length
    } else {
      return 0
    }
  }
}
