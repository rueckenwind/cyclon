/** @jsx jsx */

// import PropTypes from 'prop-types';
import { jsx, Global, css } from '@emotion/core'

// import normalize from 'normalize.css';
import normalize from './normalize.css'
import globalStyles from './global.css'
import fonts from './fonts.css'

/* stylelint-disable */
export const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        ${normalize}
      `}
    />
    <Global
      styles={css`
        ${globalStyles}
      `}
    />
    <Global
      styles={css`
        ${fonts}
      `}
    />
  </>
)