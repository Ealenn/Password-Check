export default class CharPassword {
  constructor (password) {
    this.password = password
  }

  total () {
    if (this.password) {
      return this.password.length
    }

    return 0
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
    }

    return 0
  }

  number () {
    if (this.password) {
      return this.password.length - this.password.replace(/[0-9]/g, '').length
    }

    return 0
  }

  specialChar () {
    if (this.password) {
      return this.password.length - this.password.replace(/[@#$%^&*()_+\-=/[\]{};':"\\|,.`£¥€!éèàç°<>?]/g, '').length
    }

    return 0
  }
}
