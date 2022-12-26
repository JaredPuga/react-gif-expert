import { render } from '@testing-library/react'
import { GifGridItem } from '../../src/components/GifGridItem'

describe('Pruebas en GifGridItem', () => { 
    test('Debe hacer match con el Snapshot', () => { 
        render(<GifGridItem />)
     })
 })