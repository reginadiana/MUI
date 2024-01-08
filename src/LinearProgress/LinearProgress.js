
import { Box, Stack, LinearProgress as LinearProgressComponent } from '@mui/material'

export default function LinearProgress() {
  return (
    <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
      <Stack spacing={2}>
        <LinearProgressComponent />
        <LinearProgressComponent color="secondary" />
        <LinearProgressComponent color="success" />
        <LinearProgressComponent color="inherit" />
      </Stack>
    </Box>
  )
}
