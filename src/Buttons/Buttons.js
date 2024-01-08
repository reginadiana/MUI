
import { Box, Stack, Button } from '@mui/material'

export default function Buttons() {
  return (
    <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
      <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2}>
        <Button variant="text">Text</Button>
        <Button href="#text-buttons">Link</Button>
        <Button
          onClick={() => {
            alert('onClick triggered')
          }}
        >
          Click me
        </Button>

        <Button variant="outlined">Outlined</Button>

        <Button disabled>Disabled</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>

        <Button variant="contained">Contained</Button>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>

        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </Box>
  )
}
