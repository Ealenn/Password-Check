import Stats from '@/class/Stats'
import ScoreElement from './ScoreElement'
import ScoreResume from './ScoreResume'

export default class Score {
  private _stats: Stats;

  constructor (stats: Stats) {
    this._stats = stats
  }

  Resume (): ScoreResume {
    const arrayResult = new Array<ScoreElement>()
    arrayResult.push(this.Characters())
    arrayResult.push(this.Repeat())
    arrayResult.push(this.Unique())
    arrayResult.push(this.Number())
    arrayResult.push(this.UpperCase())
    arrayResult.push(this.LowerCase())
    arrayResult.push(this.SpecialChar())

    let Score = 0
    let ScoreMax = 0
    arrayResult.forEach(result => {
      Score += result.Score
      ScoreMax += result.ScoreMax
    })

    return new ScoreResume(
      Score,
      ScoreMax,
      Math.floor((Score * 100) / ScoreMax)
    )
  }

  Characters (): ScoreElement {
    const total = this._stats.Total()
    return new ScoreElement(total, 12, total >= 12, total < 12 ? total / 5 : 3, 3)
  }

  Repeat (): ScoreElement {
    const repeat = this._stats.Repeat()
    let max = 0
    repeat.forEach(element => {
      if (element.repeat > max) {
        max = element.repeat
      }
    })

    let score = 0
    if (max > 0) {
      if (max > 5) {
        score = 0
      } else {
        score = 5 - max
      }
    } else {
      score = 5
    }

    return new ScoreElement(max, 0, max === 0, score, 5)
  }

  Unique (): ScoreElement {
    const repeat = this._stats.Repeat()
    const unique = repeat.length
    return new ScoreElement(unique, 12, unique >= 12, unique < 12 ? unique / 4 : 3, 3)
  }

  Number (): ScoreElement {
    const number = this._stats.Number()
    return new ScoreElement(
      number,
      2,
      number >= 2,
      number < 2 ? number * 2 : 6,
      6
    )
  }

  UpperCase (): ScoreElement {
    const uppercase = this._stats.UpperCase()

    return new ScoreElement(
      uppercase,
      2,
      uppercase >= 2,
      uppercase < 2 ? uppercase * 2 : 6,
      6
    )
  }

  LowerCase (): ScoreElement {
    const lowercase = this._stats.LowerCase()

    return new ScoreElement(
      lowercase,
      2,
      lowercase >= 2,
      lowercase < 2 ? lowercase * 2 : 6,
      6
    )
  }

  SpecialChar (): ScoreElement {
    const specialchar = this._stats.SpecialChar()

    return new ScoreElement(
      specialchar,
      2,
      specialchar >= 2,
      specialchar <= 2 ? specialchar * 2 : 6,
      6
    )
  }
}
