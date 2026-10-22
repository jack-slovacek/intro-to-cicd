const sayHi = require('./index.js')
//this is a test comment
test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike')
})
