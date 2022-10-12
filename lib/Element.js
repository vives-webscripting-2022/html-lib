
export default class Element {
    tag = ''
    content = ''

    constructor(content, tag) {
        this.content = content
        this.tag = tag
    }

    toString() {
        return `<${this.tag}>${this.content}</${this.tag}>`
    }
}
