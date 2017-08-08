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

  repeat (withStats = true) {
    // Count
    let counts = {}
    this.password.toLowerCase().split('').forEach(function (x) { counts[x] = (counts[x] || 0) + 1 })

    // Max
    let max = 0
    let unique = 0
    Object.keys(counts).forEach(
      function (key) {
        max = max < counts[key] ? counts[key] : max
        unique++
      }
    )

    if (withStats) {
      counts.max = max
      counts.unique = unique
    }

    return counts
  }
}
