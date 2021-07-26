import './App.css';
import Home from './links/home';
import {Switch, Route} from "react-router-dom";
import Nav from './links/nav';
import Planets from './links/planets'
import Vehicles from './links/vehicles'
import Favorites from './links/destinationfavorites2';
import Earth from './links/planet-list/earth';
import Mercury from './links/planet-list/mercury';
import Mars from './links/planet-list/mars';
import Jupiter from './links/planet-list/jupiter';
import Saturn from './links/planet-list/saturn';
import Uranus from './links/planet-list/uranus';
import Neptune from './links/planet-list/neptune';
import Venus from './links/planet-list/venus';
import AtlasV from './links/vehicle-list/atlasv';
// import DeltaIV from './links/vehicle-list/deltaiv';
import Falcon9 from './links/vehicle-list/falcon9';
import SaturnV from './links/vehicle-list/saturnv';
import SLS from './links/vehicle-list/sls';
import Starship from './links/vehicle-list/starship';


function App() {
  return (
    <div>
      <Nav/>
      
      <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/destinationfavorites2" component={Favorites}/>
      <Route exact path="/planet-list" component={Planets}/>
      <Route exact path="/planet-list/earth" component={Earth}/>
      <Route exact path="/planet-list/mercury" component={Mercury}/>
      <Route exact path="/planet-list/venus" component={Venus}/>
      <Route exact path="/planet-list/mars" component={Mars}/>
      <Route exact path="/planet-list/jupiter" component={Jupiter}/>
      <Route exact path="/planet-list/saturn" component={Saturn}/>
      <Route exact path="/planet-list/uranus" component={Uranus}/>
      <Route exact path="/planet-list/neptune" component={Neptune}/>
      <Route exact path="/vehicle-list" component={Vehicles}/>
      <Route exact path="/vehicle-list/atlasv" component={AtlasV}/>
      {/* <Route exact path="/vehicle-list/deltaiv" component={DeltvaIV}/> */}
      <Route exact path="/vehicle-list/falcon9" component={Falcon9}/>
      <Route exact path="/vehicle-list/saturnv" component={SaturnV}/>
      <Route exact path="/vehicle-list/sls" component={SLS}/>
      <Route exact path="/vehicle-list/starship" component={Starship}/>
    </Switch>
    </div>
  );
}

export default App;
