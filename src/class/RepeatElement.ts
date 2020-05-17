export default class RepeatElement {
  _element = '';
  _repeat = 0;

  constructor (element: string) {
    this._element = element
  }

  get element (): string {
    return this._element
  }

  set element (element: string) {
    this._element = element
  }

  get repeat (): number {
    return this._repeat
  }

  set repeat (repeat: number) {
    this._repeat = repeat
  }
}
