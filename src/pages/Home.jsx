import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-center">Home</h1>
      <Link to="/show/4">Link to id 4</Link>
    </>
  );
}
 
export default Home;