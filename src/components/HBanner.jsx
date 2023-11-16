
import Carousel from 'react-bootstrap/Carousel';

//filler data
const data = [
  {
    title: "Buy Snacks",
    text: "Enjoy the delicious selection of snacks",
    image: "https://cdn.pixabay.com/photo/2016/08/24/21/33/gummybears-1618073_1280.jpg"
  },
  {
    title: "Sell Snacks",
    text: "Grow your brand in our marketplace",
    image: "https://www.theladders.com/wp-content/uploads/candy-191112-800x450.jpg"
  },
  {
    title: "Supporting the Community",
    text: "All buyer/seller fees will be donated to local non-profits or charities",
    image: "https://as2.ftcdn.net/v2/jpg/06/29/02/69/1000_F_629026967_SqBhL3C9TBc8HxB070UmZJFyllTGS31E.jpg"
  }
];


function MyBanner() {
  return (
    <Carousel>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 "
            src={item.image}
            alt={item.title}
            height="600"
          />
          <Carousel.Caption style={{backgroundColor: "#606C38"}}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyBanner;
