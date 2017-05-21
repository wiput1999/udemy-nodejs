const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {
    describe('#add', () => {
        it('Should add two numbers', () => {
            var res = utils.add(33,11)

            expect(res).toBe(44).toBeA('number')

            // Use assertion for better test
            // if(res != 44) {
            //     throw new Error(`Expected 44, but got ${res}.`)
            // }
        })

        it('Should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number')
                done()
            })
        })
    })

    describe('#square', () => {
        it('Should square a number', () => {
            var res = utils.square(5)

            expect(res).toBe(25).toBeA('number')

        })

        it('Should async square a number', (done) => {
            utils.asyncSquare(5, (sum) => {
                expect(sum).toBe(25).toBeA('number')
                done()
            })
        })
    })

    describe('#object', () => {
        // Should verify first and last names are set
        it('Should set first and last names', () => {
            var user = {location: 'Bangkok', age: 18}
            var res = utils.setName(user, 'Wiput Pootong')

            expect(res).toInclude({
                firstName: 'Wiput',
                lastName: 'Pootong'
            })
        })
    })
})



// it('Should expect some values', () => {
//     // expect(12).toNotBe(11)
//     // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'})
//     expect([2,3,4]).toExclude(1)
//     expect({
//         name: 'Wiput',
//         age: 18,
//         location: 'Bangkok'
//     }).toExclude({
//         age: 120
//     })
// })
