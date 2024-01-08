import { useState } from 'react'

import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
  Stack,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

function App() {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <DataGrid rows={rows} columns={columns} />
      
      <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Alert severity="success">Mensagem de sucesso (padrão)</Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert variant="outlined" severity="error">
              Com variant outlined
            </Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert variant="filled" severity="warning">
              Com variant filled
            </Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert severity="error">Mensagem de erro</Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert severity="warning">Mensagem de alerta</Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert severity="info">Mensagem de informação</Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert onClose={() => alert('onClose callback was trigged')}>
              Click there!
            </Alert>
          </Grid>

          <Grid item xs={6}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Close me! I'm using collapse transition
              </Alert>
            </Collapse>
          </Grid>

          <Grid item xs={6}>
            <Alert
              action={
                <Button
                  onClick={() =>
                    alert('onClick callback was trigged by action button alert')
                  }
                  color="info"
                  size="large"
                >
                  UNDO
                </Button>
              }
              severity="info"
            >
              Ação customizada
            </Alert>
          </Grid>

          <Grid item xs={6}>
            <Button
              disabled={open}
              variant="outlined"
              onClick={() => {
                setOpen(true)
              }}
            >
              Re-open
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Alert icon={false} severity="success">
              Alerta sem icone
            </Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="warning">
              Icone customizado
            </Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert
              iconMapping={{
                error: <CheckIcon fontSize="inherit" />,
              }}
              severity="error"
            >
              <AlertTitle>Alerta com iconMapping</AlertTitle>
              Permite customizar um icone para cada tipo de severity, tornando o
              componente mais dinamico
            </Alert>
          </Grid>

          <Grid item xs={6}>
            <Alert severity="error">
              <AlertTitle>Titulo</AlertTitle>Mensagem -{' '}
              <strong>importante!</strong>
            </Alert>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
        <Stack spacing={2}>
          <LinearProgress />
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      </Box>

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

      <Box sx={{ m: 8, p: 2, border: '1px dashed grey' }}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
      </Box>

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
    </Box>
  )
}

export default App
