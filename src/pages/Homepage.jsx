import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/Pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
