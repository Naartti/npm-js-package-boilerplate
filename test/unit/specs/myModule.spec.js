import myModule from 'src/myModule.js'

test('Module exists', () => {
  expect(myModule).toBeTruthy()
})

test('Module plays pong', () => {
  expect(myModule.ping()).toBe('pong')
})
