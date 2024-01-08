
import { Box, Typography } from '@mui/material'

export default function Typographys() {
  return (
    <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
      <Typography variant="h1">Typography 1</Typography>

      <Typography variant="h2" gutterBottom>
        Typography 2
      </Typography>

      <Typography variant="h3" gutterBottom>
        Typography 3
      </Typography>

      <Typography variant="h4" gutterBottom>
        Typography 4
      </Typography>

      <Typography variant="h5" gutterBottom>
        Typography 5
      </Typography>

      <Typography variant="h6" gutterBottom>
        Typography 6
      </Typography>

      <Typography variant="overline" gutterBottom>
        Overline
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Subtitle 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Subtitle 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography variant="body1" gutterBottom>
        Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography variant="body2" gutterBottom>
        Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography variant="inherit" gutterBottom>
        Inherit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography variant="caption" gutterBottom>
        Caption 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur
      </Typography>
    </Box>
  )
}
