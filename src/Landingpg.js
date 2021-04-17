import logo from './logo.svg';
import './Landingpg.css';
import Header from './Header';
import Button from '@material-ui/core/Button';

function Landingpg() {
  return (
    <div className="App">
          <Header title="FarmED"  />
    
    <body>
      <div className="App">
        <header className="App-header">
          
          Welcome to local farm fresh foods at your fingertips 
        <p>
          We're dedicated to connecting you to your local farm for a more sustainable shopping experience
        </p>
        <Button variant="contained" color="rgb(73, 110, 49)" href = "https://en.wikipedia.org/wiki/Main_Page">
        Explore Farms Nearby
        </Button>
        </header>
      </div>


    </body>
    </div>
  );
}

export default Landingpg;