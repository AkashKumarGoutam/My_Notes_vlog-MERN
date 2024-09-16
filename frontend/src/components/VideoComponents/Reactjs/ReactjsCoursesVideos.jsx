import React, { useEffect, useState } from 'react';
import video1 from '../../../assets/mov_bbb.mp4';
import video2 from '../../../assets/Venice_10.mp4';
import video3 from '../../../assets/Sequence_10.mp4';
import lock from '../../../assets/lock.png';
import unlock from '../../../assets/unlock.png';

function ReactjsCoursesVideos() {
  // State to track the current video
  const [currentVideo, setCurrentVideo] = useState(video1);
  const [currentVideoHeading, setCurrentVideoHeading] = useState("Chapter:1 (React js Introduction)");
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top
  }, [currentVideo, currentVideoHeading]);
  
  // Function to change video when a chapter is clicked
  const handleChangeVideo2 = (videoSrc) => {
    console.log("Changing to video2:", videoSrc);
    setCurrentVideo(videoSrc);
    setCurrentVideoHeading("Chapter:2 (JSX)")
  };
  const handleChangeVideo3 = (videoSrc) => {
    console.log("Changing to video3:", videoSrc);
    setCurrentVideo(videoSrc);
    setCurrentVideoHeading("Chapter:3 (More JSX)")
  };

  return (
    <div className='bg-gray-800 text-white'>
      <div>
        <h1 className='text-3xl font-semibold underline px-20 py-4 text-gray-300'>
          React.Js Courses:
        </h1>
        <div className='flex flex-col items-center'>
          <div className='py-8'>
            <h1 className='text-xl text-gray-300 font-semibold py-1'>{currentVideoHeading}</h1>
            {/* Added key to force re-render */}
            <video key={currentVideo} width="700" controls>
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>

          <div className='flex flex-col gap-10 w-[70%]'>
            {/* 1 */}
            <div className='flex justify-between bg-black text-gray-300 rounded-lg py-4 px-10'>
              <div>
                <button
                  className='text-xl font-semibold hover:text-blue-600'
                  onClick={() => handleChangeVideo2(video2)} // Change video to video2
                >
                  Chapter:2 (JSX)
                </button>
                <h1 className='text-sm text-blue-500'>
                  // if you complete the previous video then unlocked this chapter
                </h1>
                <h1 className='text-xs font-bold py-1 text-orange-600'>12:00 min</h1>
              </div>
              <div>
                <img src={lock} alt='img' className='w-8' />
                <img src={unlock} alt='img' className='w-8' />
              </div>
            </div>

            {/* 2 */}
            <div className='flex justify-between bg-black text-gray-300 rounded-lg py-4 px-10'>
              <div>
                <button
                  className='text-xl font-semibold hover:text-blue-600'
                  onClick={() => handleChangeVideo3(video3)} // Change video to video1
                >
                  Chapter:3 (More JSX)
                </button>
                <h1 className='text-sm text-blue-500'>
                  // if you complete the previous video then unlocked this chapter
                </h1>
                <h1 className='text-xs font-bold py-1 text-orange-600'>12:00 min</h1>
              </div>
              <div>
                <img src={lock} alt='img' className='w-8' />
                <img src={unlock} alt='img' className='w-8' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactjsCoursesVideos;






// import React, { useState } from 'react';
// import video1 from '../../../assets/mov_bbb.mp4';
// import video2 from '../../../assets/Venice_10.mp4';
// import lock from '../../../assets/lock.png';
// import unlock from '../../../assets/unlock.png';

// function ReactjsCoursesVideos() {
//   const [currentVideo, setCurrentVideo] = useState(video2); // Manage video source state

//   const handleChangeVideo = (video) => {
//     setCurrentVideo(video);
//   };

//   return (
//     <div className='bg-gray-800 text-white'>
//       <div>
//         <h1 className='text-3xl font-semibold underline px-20 py-4 text-gray-300'>
//           React.Js Courses:
//         </h1>
//         <div className='flex flex-col items-center'>
//           <div className='py-8'>
//             <h1 className='text-xl text-gray-300 font-semibold py-1'>
//               Chapter:1 (React js Introduction)
//             </h1>
//             <video width="700" controls>
//               <source src={currentVideo} type="video/mp4" />
//               Your browser does not support HTML video.
//             </video>
//           </div>

//           <div className='flex flex-col gap-10 w-[70%]'>
//             {/* 1 */}
//             <div className='flex justify-between bg-black text-gray-300 rounded-lg py-4 px-10'>
//               <div>
//                 <button
//                   className='text-xl font-semibold'
//                   onClick={() => handleChangeVideo(video1)} // Switch to video2
//                 >
//                   Chapter:2 (jsx)
//                 </button>
//                 <h1 className='text-sm text-blue-500'>
//                   // if you complete the previous video then unlock this chapter
//                 </h1>
//                 <h1 className='text-xs font-bold py-1 text-orange-600'>12:00 min</h1>
//               </div>
//               <div>
//                 <img src={lock} alt='img' className='w-8' />
//                 <img src={unlock} alt='img' className='w-8' />
//               </div>
//             </div>
//             {/* 2 */}
//             <div className='flex justify-between bg-black text-gray-300 rounded-lg py-4 px-10'>
//               <div>
//                 <button className='text-xl font-semibold'>Chapter:3 (jsx)</button>
//                 <h1 className='text-sm text-blue-500'>
//                   // if you complete the previous video then unlock this chapter
//                 </h1>
//                 <h1 className='text-xs font-bold py-1 text-orange-600'>12:00 min</h1>
//               </div>
//               <div>
//                 <img src={lock} alt='img' className='w-8' />
//                 <img src={unlock} alt='img' className='w-8' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReactjsCoursesVideos;
