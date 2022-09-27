const Element = require('./Element')

class Heading extends Element {

    constructor(content, level) {
        super(content, `h${level}`)
    }
}

module.exports = Heading;