import { setBuzzwords } from './buzzwords'
import { SET_BUZZWORDS } from '../constants'
/*
- toBe is a vanilla JAVASCRIPT function smiliar to toEqual
- the format is expect(x).toBe(y)
*/

test('get and dispatch buzzwords from the api server', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_BUZZWORDS)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setBuzzwords(mockDispatch)
})
