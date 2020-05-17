import RepeatElement from './RepeatElement'

export default class Stats {
  password: string

  constructor (password: string) {
    this.password = password
  }

  Total (): number {
    return this.password.length
  }

  LowerCase (): number {
    return this.password.length - this.password.replace(/[a-z]/g, '').length
  }

  UpperCase (): number {
    return this.password.length - this.password.replace(/[A-Z]/g, '').length
  }

  Number (): number {
    return this.password.length - this.password.replace(/[0-9]/g, '').length
  }

  SpecialChar (): number {
    return (
      this.password.length -
      this.password.replace(/[@#$%^&*()_+\-=/[\]{};':"\\|,.`£¥€!éèàç°<>?]/g, '')
        .length
    )
  }

  Repeat (): Array<RepeatElement> {
    const elements: { [id: string]: RepeatElement } = {}
    const password = this.password.toLocaleLowerCase()
    for (let i = 0; i < password.length; i++) {
      const char = password.charAt(i)
      const key = btoa(char)
      if (elements[key] === undefined) {
        elements[key] = new RepeatElement(char)
      } else {
        elements[key].repeat++
      }
    }

    const elementArray = new Array<RepeatElement>()
    Object.keys(elements).forEach(key => {
      elementArray.push(elements[key])
    })

    return elementArray
  }
}
