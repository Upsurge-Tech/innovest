export default function ShiningRegion() {
  const commonClass =
    ' rounded-[100%] transform translate-x-[-50%] translate-y-[-50%] absolute blur-[121px]'
  return (
    <div className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[75%] w-[80%]">
      <div className="w-[100%] h-[400px] bg-[white] relative border overflow-hidden blur-[74px]">
        <div
          className={
            'bg-[#CECECE] w-[453px] h-[869px] opacity-[67%] top-[-10%] left-[20%]' +
            commonClass
          }
        ></div>
        <div
          className={
            ' bg-[#D4D4D4] w-[284px] h-[547px] top-[33%] left-[85%]' +
            commonClass
          }
        ></div>

        <div
          className={
            'bg-[#979797] w-[337px] h-[647px] opacity-[67%] top-[100%] left-[75%]' +
            commonClass
          }
        ></div>

        <div
          className={
            'bg-[#ADF475] w-[337px] h-[647px] top-[100%] left-[10%]' +
            commonClass
          }
        ></div>
        {/* shining region */}
      </div>
    </div>
  )
}
