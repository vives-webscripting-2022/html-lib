import Element from "./Element.js"

export default class Heading extends Element {

    constructor(content, level) {
        super(content, `h${level}`)
    }
}