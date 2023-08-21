import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import TextField from "@material-ui/core/TextField"

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
import "fontsource-roboto";

import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container"

import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"



const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #333, #000)",
        border: 0,
        borderRadius: 15,
        marginBottom: 15,
        color: "white",
        padding: "15px 30px"
    }
})

const theme = createTheme({
    typography: {
        h2: {
            fontSize: 48,
            marginBottom: 18,
        }
    },

    palette: {
        secondary: {
            main: orange[500],
        },
        primary: {
            main: green[500]
        }
    }
})

function ButtonStyled() {
    const classes = useStyles();
    return <Button className = { classes.root } > Test Styled Button < /Button>
}

function CheckboxExample() {

    const [checked, setChecked] = React.useState(true)

    return ( <
        FormControlLabel control = { < Checkbox
            checked = { checked }
            icon = { < DeleteIcon / > }
            checkedIcon = { < SaveIcon / > }
            onChange = {
                (e) => setChecked(e.target.checked) }
            color = "secondary"
            inputProps = {
                {
                    "aria-label": "secondary checkbox"
                }
            }
            />}
            label = "Testing Checkbox" /
            >
        )
    }


    function App() {
        return ( <
            ThemeProvider theme = { theme } >
            <
            Container maxWidth = "xs" >
            <
            div className = "App" >
            <
            header className = "App-header" >

            <
            Typography variant = "h2" >
            Welcome to MUI <
            /Typography> <
            Typography variant = "body1"
            component = "div" >
            Learn how to use Material UI <
            /Typography> <
            ButtonStyled / >

            <
            Grid container spacing = { 2 }
            justifyContent = 'center' >
            <
            Grid item xs = { 12 }
            sm = { 6 } >
            <
            Paper style = {
                { height: 75, width: 200, } }
            /> <
            /Grid> <
            /Grid>

            <
            CheckboxExample / >
            <
            ButtonGroup >
            <
            Button startIcon = { < SaveIcon / > }
            endIcon size = "large"
            variant = "contained"
            color = "primary" >
            Save <
            /Button>  <
            Button startIcon = { < DeleteIcon / > }
            endIcon size = "large"
            variant = "contained"
            color = "primary" >
            Discard <
            /Button>  <
            /ButtonGroup>         <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >

            <
            /header> <
            /div> <
            /Container> <
            /ThemeProvider>
        );
    }

    export default App;