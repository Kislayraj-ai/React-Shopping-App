import React from 'react';
import Items from '../components/Items/Items';
import Loading from '../components/UI/Loading';
import { useStoreItem } from '../hooks/use-storeItem';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

const Home = () => {
  const { loading } = useStoreItem();

  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            height="250"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            height="250"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            height="250"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Items />
    </React.Fragment>
  );
};

export default Home;
