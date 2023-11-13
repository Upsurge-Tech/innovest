export default function NoOverflowRegion() {
  const commonClass =
    ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px] '
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden rounded-[23px]">
      {/* no overflow region */}
      <div
        className={
          'bg-[#ADADAD] w-[545px] h-[1047px] opacity-[67%] top-[-40%] left-[20%] ' +
          commonClass
        }
      ></div>

      <div
        className={
          'bg-[#D4D4D4] w-[343px] h-[658px] opacity-[58%] top-[40%] left-[90%] ' +
          commonClass
        }
      ></div>

      <div
        className={
          'bg-[#979797] w-[406px] h-[780px] opacity-[67%] top-[100%] left-[75%]' +
          commonClass
        }
      ></div>
    </div>
  )
}

// export default function NoOverflowRegion() {
//   const commonClass =
//     ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px] ';
//   return (
//     <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden rounded-[23px]">
//       {/* no overflow region */}
//       <div
//         className={
//           'bg-[#696969] w-[545px] h-[1047px] opacity-[67%] top-[-40%] left-[20%] ' +
//           commonClass
//         }
//       ></div>

//       <div
//         className={
//           'bg-[#696969] w-[343px] h-[658px] opacity-[58%] top-[40%] left-[90%] ' +
//           commonClass
//         }
//       ></div>

//       <div
//         className={
//           'bg-[#696969] w-[406px] h-[780px] opacity-[67%] top-[100%] left-[75%]' +
//           commonClass
//         }
//       ></div>
//     </div>
//   );
// }
