const Element = require('./Element')

class Paragraph extends Element {

    constructor(content) {
        super(content, 'p')
    }
}

module.exports = Paragraph