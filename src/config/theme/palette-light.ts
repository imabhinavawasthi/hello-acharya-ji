import { PaletteOptions } from '@mui/material'
import { grey, common } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#FF6F00',        // Saffron / deep spiritual orange
    contrastText: common.white,
  },
  secondary: {
    main: '#6A1B9A',        // Deep mystic purple – good contrast
    contrastText: common.white,
  },
  background: {
    default: '#FFF8F1',     // Soft cream background
    paper: '#FFFFFF',
  },
  text: {
    primary: '#4E342E',     // Deep earthy brown – for body text
    secondary: '#6A1B9A',   // Matches secondary for accents/headings
    disabled: grey[500],
  },
  divider: grey[300],
  error: {
    main: '#D32F2F',
  },
  warning: {
    main: '#F57C00',
  },
  info: {
    main: '#0288D1',
  },
  success: {
    main: '#388E3C',
  },
}

export default palette
