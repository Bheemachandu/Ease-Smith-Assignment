import NavBar from "../NavBar/index.js"
import Search from "../Search/index.js"
import Pagination from "../Pagination/index.js";
import Products from "../products/index.js"
import Footer from "../Footer/index.js";
import './index.css';

function Home() {
  return (
    <div className="App">
      <div className="topFixedContainer">
        <h5>Free Shipping on orders above 999/-</h5>
      </div>
      <NavBar/>
      <Search/>
      <div className="discriptionContainer">
        <button className="plantsBtn">Plants</button>
        <button className="potsBtn">Pots</button>
        <p className="discription">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
      </div>
      <h1 className="nurseryHeading">Nursery</h1>
      <Pagination/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default Home;
