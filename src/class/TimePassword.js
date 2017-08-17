const ASCII_ALPH_MIN = 26
const ASCII_ALPH_MAJ = 26
const ASCII_ALPH_NUM = 10
const ASCII_ALPH_SPEC = 40

export default class TimePassword {

  constructor (stats) {
    this.lowercase = stats.lowercase()
    this.uppercase = stats.uppercase()
    this.specialChar = stats.specialChar()
    this.number = stats.number()

    /* Possibility */
    this.possibility = 0
    this.possibility += this.lowercase > 0 ? ASCII_ALPH_MIN : 0
    this.possibility += this.uppercase > 0 ? ASCII_ALPH_MAJ : 0
    this.possibility += this.specialChar > 0 ? ASCII_ALPH_SPEC : 0
    this.possibility += this.number > 0 ? ASCII_ALPH_NUM : 0

    this.possibility_ascii = ''
    this.possibility_ascii += this.lowercase > 0 ? 'abcdefghijklmnopqrstuvwxyz' : ''
    this.possibility_ascii += this.uppercase > 0 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
    this.possibility_ascii += this.number > 0 ? '0123456789' : ''
    this.possibility_ascii += this.specialChar > 0 ? '!@#$%^&*()-_+=~`[]{}|:;"<>,.?' : ''

    /* Operation */
    this.operations_real = (this.possibility ** stats.repeat().unique)
    this.operations = (this.possibility ** stats.total())

    /* Calcule */
    this.getDate = function (operations, cpu, para) {
      let time = ((operations / (cpu * (10 ** 6))) / para) + 10
      return time <= 864000000000000 ? time : 864000000000000
    }
  }

  stats () {
    return {
      possibility: this.possibility,
      possibility_ascii: this.possibility_ascii,
      operations: this.operations
    }
  }

  operation () {
    return [
      {
        title: 'Mac Book Pro 15"',
        date: '2017',
        cpu: 4,
        unit: 4 * (10 ** 6),
        para: 4,
        time_optimyze: this.getDate(this.operations_real, 4, 3),
        time: this.getDate(this.operations, 4, 3)
      },
      {
        title: 'Web Server',
        date: '2017',
        cpu: 3.5,
        unit: 3.5 * (10 ** 6),
        para: 8,
        time_optimyze: this.getDate(this.operations_real, 3.5, 8),
        time: this.getDate(this.operations, 3.5, 8)
      },
      {
        title: 'Tianhe-2',
        date: '2013',
        cpu: 1.3,
        unit: 1.3 * (10 ** 6),
        para: 3120000,
        time_optimyze: this.getDate(this.operations_real, 1.3, 3120000),
        time: this.getDate(this.operations, 1.3, 3120000)
      }
    ]
  }
}
