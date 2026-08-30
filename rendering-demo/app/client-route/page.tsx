'use client';

import { clientSideFunction } from '@/utils/client-utils';
import { useTheme } from '@/components/ThemeProvider';
// import { serverSideFunction } from '@/utils/server-utils';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function ClientRoutePage() {
//   const result = serverSideFunction();

//   return <h1>Client Route {result}</h1>;
// }

// export default function ClientRoutePage() {
//   const settings = {
//     dots: true,
//   };

//   const theme = useTheme();
//   console.log(theme);

//   return (
//     <>
//       <h1 style={{ color: theme.colors.secondary }}>Client Route Page</h1>
//       <div className='image-slider-container'>
//         <Slider {...settings}>
//           <div>
//             <img src='http://picsum.photos/400/200' />
//           </div>
//           <div>
//             <img src='http://picsum.photos/400/200' />
//           </div>
//           <div>
//             <img src='http://picsum.photos/400/200' />
//           </div>
//           <div>
//             <img src='http://picsum.photos/400/200' />
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// }

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>Client Route Page</h1>
      <p>{result}</p>
    </>
  );
}
