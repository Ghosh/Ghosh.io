
// In a separate const, so that it can be exported separately
export const breakpoints = [
  '480px',
  '768px',
  '992px',
  '1200px',
  '1440px'
]

const theme = {
  breakpoints: breakpoints,
  space: [0, 4, 8, 16, 20, 24, 28, 32, 64, 128, 256, 512],
  colors: {
    midnight: [
      '#EBEEF7',
      '#E2ECF9',
      '#C7D8F4',
      '#A2B7DF',
      '#7E93C0',
      '#526697',
      '#3B4E81',
      '#29386C',
      '#1A2657',
      '#0F1948'
    ]
  },
  maxWidth: '960px',
  wrappedWidth: '1440px'
}

export default theme
