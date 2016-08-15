/*
 * action types
 */

//export const COLUMN_PRESSED = 'COLUMN_PRESSED'

/*
 * action creators
 */

export function columnPressed(cords) {
  return { type: 'COLUMN_PRESSED',
            cords: cords}
}
