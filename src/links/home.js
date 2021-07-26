// import { useState, useEffect } from "react"
import '../App.css'
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
import { link, NavLink } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

export default function Home () {
// const [index, setIndex] = useState(0)
// const [pod, setHome] = useState([])
// const classes = useStyles()


return (
    <div>
    <h1>Home Log-In Screen</h1>
    <form>
      <input type="text" placeholder="username"/>
      <input type="text" placeholder="password"/>
      <button>submit</button>
    </form>
    </div>
  




)}