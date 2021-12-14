import React from 'react'
import '../App.css'
import './Web.css'
import './Responsive.css'
import './Icons.css'
import './font-awesome.css'
import './animate.css'
import './Flex-Slider.css'
import './slicknav-min.css'
import './jquery-fancybox-min.css'
import './Magnific-Popup-CSS.css'
import './magnific-popup.min.css'
import './nice-select.css'
import './niceselect.css'
import './owl-carousel.css'
import './reset.css'
import Image from '../Images/images.jpg'
import Imagen from '../Images/New.jpg'
import Imagem from '../Images/logo.png'
import { Carousel } from 'react-carousel-minimal';

const Modaal = ({ handleClose }) => {

    const data = [
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          
        },
        {
          image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          
        },
        {
          image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
         
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          
        },
        {
          image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
         
        },
        {
          image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
          
        },
        {
          image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
          
        },
        {
          image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
          
        }
      ];

      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    
      

    return (
        <>
            
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="25%"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            // style={{
            //   textAlign: "center",
            //   maxWidth: "850px",
            //   maxHeight: "200px",
            //   margin: "40px auto",
            // }}
          />
        </>
    )
}

export default Modaal


// import React from 'react'

// const Modal = () => {
//     console.log("hereeee");
//     return (
//         <div>
//            Modal 
//         </div>
//     )
// }

// export default Modal

