const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db)

    it('Should call the spy correctly', () => {
        var spy = expect.createSpy()
        spy('Wiput', 18)
        expect(spy).toHaveBeenCalledWith('Wiput', 18)
    })

    it('Should call saveUser with user object', () => {
        var email = 'wiput@wiput.me'
        var password = '123abc'

        app.handleSignup(email, password)
        expect(db.saveUser).toHaveBeenCalledWith({email, password})

    })

})
