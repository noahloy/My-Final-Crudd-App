// import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Planets from './links/planets';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));

export default function Earth () {
    const classes = useStyles()



  return (
        
    <>
        <div className={classes.root}> 
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/mercury"
            style={{fontWeight: "bold", color: "white", textDecoration: "none"}} >Mercury</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/venus" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Venus</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/earth" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Earth</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/mars" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Mars</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/jupiter" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Jupiter</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/saturn" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Saturn</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/uranus" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Uranus</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/planet-list/neptune" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Neptune</NavLink>
        </Button>
        </div>
    </>

  )

  }