import React from 'react'
import { render } from '@testing-library/react'

import { Hello } from './Hello'

const getInitialProps = (): React.ComponentProps<typeof Hello> => ({
  message: 'Test value',
})

describe('<Hello />', () => {
  let props: React.ComponentProps<typeof Hello>

  beforeEach(() => {
    props = getInitialProps()
  })

  it('renders without errors', () => {
    const utils = render(<Hello {...props} />)

    expect(utils.getByText(props.message)).toBeTruthy()
  })
})
