
import { Box, Stack, Avatar } from '@mui/material'

export default function Avatars() {
  return (
    <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
    </Box>
  )
}
