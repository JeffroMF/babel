class C {
  static #y = "y";
  static #z = "self";
  static #x;
  static b = "b";
  static self = C;
  static #self = C;
  static {
    let cloned;
    var { #x: { [C.#z]: { b, #x: y = (C.b = "bb", C.#self.#y) }, #x: yy = (delete C.self, { ...cloned } = C, C.#y = "yy") } = C.#self, #y: yy2 } = C;
  }
}
