import Stats from './Stats'

const ASCII_ALPH_MIN = 26
const ASCII_ALPH_MAJ = 26
const ASCII_ALPH_NUM = 10
const ASCII_ALPH_SPEC = 40

export default class Operation {
  Operation = 0
  OperationOptim = 0
  Possibility = 0
  PossibilityAscii = ''

  constructor (stats: Stats) {
    if (stats.LowerCase() > 0) {
      this.Possibility += ASCII_ALPH_MIN
      this.PossibilityAscii += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (stats.UpperCase() > 0) {
      this.Possibility += ASCII_ALPH_MAJ
      this.PossibilityAscii += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (stats.SpecialChar() > 0) {
      this.Possibility += ASCII_ALPH_SPEC
      this.PossibilityAscii += '!@#$%^&*()-_+=~`[]{}|:;"<>,.?'
    }

    if (stats.Number() > 0) {
      this.Possibility += ASCII_ALPH_NUM
      this.PossibilityAscii += '0123456789'
    }

    this.OperationOptim = (this.Possibility ** stats.Repeat().length)
    this.Operation = (this.Possibility ** stats.Total())
  }

  private GetDate (operations: number, cpu: number, para: number): number {
    const time = ((operations / (cpu * (10 ** 6))) / para) + 10
    return time <= 864000000000000 ? time : 864000000000000
  }

  PossibilityAndOperations () {
    return {
      Possibility: this.Possibility,
      PossibilityAscii: this.PossibilityAscii,
      Operations: this.Operation,
      OperationsOptim: this.OperationOptim
    }
  }

  Comparator () {
    return [
      {
        Title: 'Mac-Book-Pro',
        Date: '2017',
        Cpu: 4,
        Unit: 4 * (10 ** 6),
        Para: 4,
        TimeOptimyze: this.GetDate(this.OperationOptim, 4, 3),
        Time: this.GetDate(this.Operation, 4, 3)
      },
      {
        Title: 'Web-Server',
        Date: '2017',
        Cpu: 3.5,
        Unit: 3.5 * (10 ** 6),
        Para: 8,
        TimeOptimyze: this.GetDate(this.OperationOptim, 3.5, 8),
        Time: this.GetDate(this.Operation, 3.5, 8)
      },
      {
        Title: 'Tianhe-2',
        Date: '2013',
        Cpu: 1.3,
        Unit: 1.3 * (10 ** 6),
        Para: 3120000,
        TimeOptimyze: this.GetDate(this.OperationOptim, 1.3, 3120000),
        Time: this.GetDate(this.Operation, 1.3, 3120000)
      }
    ]
  }
}
