import logScope, { init } from 'src/logScope.js'

global.console = {
  warn: jest.fn(),
  trace: jest.fn(),
  error: jest.fn(),
  log: jest.fn()
}

beforeEach(() => {
  global.console.warn.mockRestore()
  global.console.trace.mockRestore()
  global.console.error.mockRestore()
  global.console.log.mockRestore()
})

test('logScope exists', () => {
  expect(logScope).toBeTruthy()
})

test('Create a log scope', () => {
  const log = logScope('test')

  log.debug('first')
  expect(console.log).toHaveBeenCalledWith('%c test [DEBUG] (0): first', 'color: blue')

  log.debug('second')
  expect(console.log).toHaveBeenCalledWith('%c test [DEBUG] (1): second', 'color: blue')
})

test('Dont print sequence', () => {
  const log = logScope('sequence')
  log.sequence('test')
  expect(console.log).toHaveBeenCalledTimes(0)
})

test('Get history of log', () => {
  const log = logScope('test')
  log.debug('1')
  log.debug('2')
  log.debug('3')

  expect(log.read('debug')).toContain('1', '2', '3')
})

test('Change settings from init', () => {
  init({
    print: false
  })

  const log = logScope('test')
  log.debug('Hello')
  expect(console.log).not.toHaveBeenCalled()

  init({
    print: true
  })

  log.debug('Hello again')
  expect(console.log).toHaveBeenCalled()
})

test('Callback on error', () => {
  const onErrorCallback = jest.fn()
  const log = logScope('Test')

  init({
    onError: onErrorCallback
  })

  expect(onErrorCallback).not.toHaveBeenCalled()
  log.warning('Test')
  expect(onErrorCallback).not.toHaveBeenCalled()
  log.error('Test')
  expect(onErrorCallback).toHaveBeenCalled()
})

test('Print only from one selected scope', () => {
  const logA = logScope('A')
  const logB = logScope('B')

  expect(console.log).toHaveBeenCalledTimes(0)

  logB.only()
  expect(console.log).toHaveBeenCalledTimes(1)

  logA.debug('test')
  expect(console.log).toHaveBeenCalledTimes(1)

  logB.debug('test')
  expect(console.log).toHaveBeenCalledTimes(3)
})
