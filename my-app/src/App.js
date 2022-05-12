import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import black from "../src/Assets/ath-msr7-black.jpg";
import brown from "../src/Assets/ath-msr7-brown.jpg";

function ProductView() {
    const [value, setValue] = React.useState(0);
    const [severity, setSeverity] = React.useState('');
    const [alertTitle, setAlertTitle] = React.useState('');
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [displayedImage, setImageDisplay] = React.useState(black);
    const [isLoading, setLoading] = React.useState(false);
    const [isFinishLoading, setFinishLoading] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeColor = (event) => {
        setImageDisplay(event.target.value);
    };
    const triggerAlert = (severityV, alertTitleV, alertVisibleV) => {
        setSeverity(severityV);
        setAlertTitle(alertTitleV);
        setAlertVisible(alertVisibleV);
    };
    const triggerClick = () => {
        setLoading(true);
        setInterval(setLoading(false),2000)
        setFinishLoading(true);
    }
    return (
        <Card sx={{minWidth: 800, align: 'center'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <CardContent>
                        <Typography component="div" variant="h5">
                            Audio-Technica ATH-MSR7
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            2017 Best Headphones of the Year Award Winner
                        </Typography>
                    </CardContent>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Audio-Technica is a well-known brand that offers headphones at more affordable price points. While they produce a sound that can rival higher-end models, they tend to have less than stellar builds. Their noise cancelling series also falls short compared to other brands with similar features.
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Our Verdict. The Audio-Technica ATH-M50x are better critical listening headphones than the Sony MDR-7506. The Audio-Technica will be more comfortable to wear during long listening sessions and they feel better-built. Their sound is very good and more accurate than the Sony, especially in the treble.
                        </TabPanel>
                    </Box>
                    <Box sx={{ minWidth: 120, paddingLeft: 3, paddingBottom: 2 }}>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Color</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={displayedImage}
                            label="Color"
                            onChange={handleChangeColor}
                            >
                            <MenuItem value={black}>Black</MenuItem>
                            <MenuItem value={brown}>Brown</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Divider/>
                    <CardActions sx={{padding: 2}}>
                        <Button variant="contained" onClick={triggerClick}>{isLoading ? "LOADING" : (isFinishLoading ? "VIEW CART" : "ADD TO CART")}</Button>
                    </CardActions>
                </Grid>
                <Divider/>
                <Grid item xs={12} lg={6}>
                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image={displayedImage}
                        alt="Live from space album cover"
                    />
                </Grid>
            </Grid>
            {alertVisible ? <Alert severity={severity}>
                <AlertTitle>{alertTitle}</AlertTitle>
                {alertTitle}
            </Alert> : null}
        </Card>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <ProductView />
      </Box>
    </Container>
  );
}