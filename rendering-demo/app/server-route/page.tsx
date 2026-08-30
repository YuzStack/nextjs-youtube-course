// import { ImageSlider } from '@/components/ImageSlider';
import { clientSideFunction } from '@/utils/client-utils';
import { serverSideFunction } from '@/utils/server-utils';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function ServerRoutePage() {
//   const result = serverSideFunction();

//   return <h1>Server Route {result}</h1>;
// }

// export default function ServerRoutePage() {
//   const settings = {
//     dots: true,
//   };

//   return (
//     <div className='image-slider-container'>
//       <Slider {...settings}>
//         <div>
//           <img src='http://picsum.photos/400/200' />
//         </div>
//         <div>
//           <img src='http://picsum.photos/400/200' />
//         </div>
//         <div>
//           <img src='http://picsum.photos/400/200' />
//         </div>
//         <div>
//           <img src='http://picsum.photos/400/200' />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default function ServerRoutePage() {
//   const result = serverSideFunction();

//   return (
//     <>
//       <h1>Server Route {result}</h1>
//       <ImageSlider />
//     </>
//   );
// }

export default function ServerRoutePage() {
  const result = serverSideFunction();
  // const result = clientSideFunction();

  return (
    <>
      <h1>Server Route {result}</h1>
    </>
  );
}
