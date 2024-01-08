import { Box } from '@mui/material'

import Alerts from './Alerts'
import Avatars from './Avatars'
import Buttons from './Buttons'
import DataGrid from './Datagrid'
import Typographys from './Typographys'
import LinearProgress from './LinearProgress'

function App() {
  return (
    <Box>
      <DataGrid />

      <Alerts />

      <LinearProgress />

      <Buttons />

      <Avatars />

      <Typographys />
    </Box>
  )
}

export default App
