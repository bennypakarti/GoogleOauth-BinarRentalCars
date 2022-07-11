import ListCars from '../components/ListCars/Cars';
import Header from '../components/header';
import Footer from '../components/footer';
import Jumbotron from '../components/content/jumbotron';
import Search from '../components/search';

function dashboard() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Search />
      <ListCars />
      <Footer />
    </div>
  );
}

export default dashboard;
