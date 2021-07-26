// import { useState} from "react"
import { NavLink } from 'react-router-dom'
import '../App.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function Favorites () {

  return (
    <div>
      <h1>Your Favorites</h1>
    </div>
  )