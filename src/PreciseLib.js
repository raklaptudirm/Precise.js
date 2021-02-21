export class Precise {
  /**
   * @constant
   * 
   * @type {string}
  */
  static PI  = "3.1415926535897932384626433832795028841971"
  /**
   * @constant
   * 
   * @type {string}
  */
  static TAU = "6.2831853071795864769252867665590057683943"
  /**
   * @constant
   * 
   * @type {string}
  */
  static E   = "2.7182818284590452353602874713526624977572"
  /**
   * @function
   * 
   * @param {string} a - First Argument
   * @param {string} b - Second Argument
   * @returns {string} The Sum
   * 
   * @throws {TypeError}
   * 
   * @example
   *   Precise.add('12345', '848389')
  */
  static add (a, b) {
    if (!(typeof a === 'string')) throw new TypeError(`Expected string, received ${typeof a}`)
    else if (!(typeof b === 'string')) throw new TypeError(`Expected string, received ${typeof b}`)
    if (a.length > b.length) {
      while (a.length > b.length) {
        b = '0' + b
      }
    } else if (a.length < b.length) {
      while (a.length < b.length) {
        a = '0' + a
      }
    }
    let i; let ex = 0; let ans = ''; let add
    for (i = (a.length - 1); i >= 0; i--) {
      add = parseInt(a[i]) + parseInt(b[i]) + ex
      ex = (add - (add % 10)) / 10
      add = add % 10
      ans = add + ans
    }
    if (ex !== 0) ans = ex + ans
    return ans
  }
  /**
   * @function
   * 
   * @param {string} a - First Argument
   * @param {string} b - Second Argument
   * @returns {string} The Product
   * 
   * @throws {TypeError}
   * 
   * @example
   *   Precise.mult('12345', '848389')
  */
  static mult (a, b) {
    if (!(typeof a === 'string')) throw new TypeError(`Expected string, received ${typeof a}`)
    else if (!(typeof b === 'string')) throw new TypeError(`Expected string, received ${typeof b}`)
    if (b.length > a.length) {
      const c = a
      a = b
      b = c
    }
    let i; let ans; let ex = 0; let mult; let j
    const values = []
    for (i = (b.length - 1); i >= 0; i--) {
      ans = ''; ex = 0
      for (j = (a.length - 1); j >= 0; j--) {
        mult = (parseInt(b[i]) * parseInt(a[j])) + ex
        ex = (mult - (mult % 10)) / 10
        mult = mult % 10
        ans = mult + ans
      }
      values.push(ans)
    }

    ans = '0'

    for (i = 0; i < values.length; i++) {
      for (j = 0; j < i; j++) {
        values[i] = values[i] + '0'
      }
      ans = this.add(ans, values[i])
    }

    return ans
  }
}
