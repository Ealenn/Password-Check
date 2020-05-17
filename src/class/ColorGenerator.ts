export default class ColorGenerator {
  GetHexByPercent (prc: number, inverted = false): string {
    if (prc <= 10) {
      return inverted ? '#4CAF50' : '#DD2C00'
    } else if (prc > 10 && prc <= 20) {
      return inverted ? '#8BC34A' : '#FF3D00'
    } else if (prc > 20 && prc <= 30) {
      return inverted ? '#00E676' : '#FF6E40'
    } else if (prc > 30 && prc <= 40) {
      return inverted ? '#69F0AE' : '#FF6D00'
    } else if (prc > 40 && prc <= 50) {
      return inverted ? '#FFD600' : '#FF9100'
    } else if (prc > 50 && prc <= 60) {
      return inverted ? '#FF6D00' : '#FFD600'
    } else if (prc > 60 && prc <= 70) {
      return inverted ? '#FF6D00' : '#69F0AE'
    } else if (prc > 70 && prc <= 80) {
      return inverted ? '#FF6E40' : '#00E676'
    } else if (prc > 80 && prc <= 90) {
      return inverted ? '#FF3D00' : '#8BC34A'
    } else if (prc > 90) {
      return inverted ? '#DD2C00' : '#4CAF50'
    }

    return '#4CAF50'
  }

  GetHexByValues (a: number, b: number, inverted = false): string {
    return this.GetHexByPercent(Math.floor((a * 100) / b), inverted)
  }
}
