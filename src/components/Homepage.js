import world_map from '../assets/World-map.jpg'

const Homepage = () => (
  <div className="homepage">
    <div className="overview">
      <img src={world_map} alt="World map" />
      <h1>Countries Of The World</h1>
    </div>
  </div>
);

export default Homepage;
