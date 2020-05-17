export default class ScoreElement {
  Score: number;
  ScoreMax: number;
  Percent: number;

  constructor (Score: number, ScoreMax: number, Percent: number) {
    this.Score = Score
    this.ScoreMax = ScoreMax
    this.Percent = Percent
  }
}
