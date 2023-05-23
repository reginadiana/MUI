import "./App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box >
      <Box sx={{ m: 8, p: 2, border: "1px dashed grey"}}>
        <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2}>
          <Button variant="text">Text</Button>
          <Button href="#text-buttons">Link</Button>
          <Button
            onClick={() => {
              alert("onClick triggered");
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

      <Box sx={{ m: 8, p: 2, border: "1px dashed grey" }}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
      </Box>

      <Box sx={{ m: 8, p: 2, border: "1px dashed grey" }}>
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
  );
}

export default App;
