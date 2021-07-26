import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));


export default function DeltaIV () {
    const classes = useStyles()






    return (
        <>
            <div className={classes.root}> 
        <Button variant="contained" color="primary">
            <NavLink exact to="/vehicle-list/saturnv"
            style={{fontWeight: "bold", color: "white", textDecoration: "none"}} >SaturnV</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/vehicle-list/starship" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Starship</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/vehicle-list/sls" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>SLS</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/vehicle-list/falcon9" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Falcon9</NavLink>
        </Button>
        <Button variant="contained" color="primary">
            <NavLink exact to="/vehicle-list/atlasv" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>AtlasV</NavLink>
        </Button>
        {/* <Button variant="contained" color="primary">
            <NavLink exact to="/vehicle-list/deltaiv" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>DeltaIV</NavLink>
        </Button> */}
            </div>


        </>










    )


}