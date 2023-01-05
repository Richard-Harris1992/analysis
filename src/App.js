
import './App.css';
import Sidebar from './containers/Sidebar';
import Reviews from './containers/Reviews.js';
import AvgRating from './containers/AvgRating.js';
import SentimentAnalysis from './containers/SentimentAnalysis.js';
import WebVisitors from './containers/WebVisitors.js';



function App() {
return (
  <div className='main'>
    <Sidebar/>
    <Reviews />
    <AvgRating/>
    <SentimentAnalysis />
    <WebVisitors />
  </div>
);
}

export default App;
