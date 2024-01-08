import { useState } from 'react'

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

export default function App() {
  const [open, setOpen] = useState(true);

  return (
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
  )
}
