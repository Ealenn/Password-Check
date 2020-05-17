export default class ScoreElement {
  Total: number;
  Recommend: number;
  Check: boolean;
  Score: number;
  ScoreMax: number;

  constructor (
    Total: number,
    Recommend: number,
    Check: boolean,
    Score: number,
    ScoreMax: number
  ) {
    this.Total = Total
    this.Recommend = Recommend
    this.Check = Check
    this.Score = Score
    this.ScoreMax = ScoreMax
  }
}
