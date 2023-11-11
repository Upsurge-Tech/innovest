import NoOverflowRegion from './NoOverflowRegion'
import ShiningRegion from './ShiningRegion'
import ValueMissionStatement from './ValueMissionStatement'

export default function ValueMissionCard({
  bulletIcon,
  title,
  statements,
  hasBlueCircle,
}) {
  return (
    <div className="relative flex-1 flex-grow bg flex flex-col">
      <div className="bg-[white] relative border rounded-[23px] text-black z-[2] flex-1 flex flex-col justify-between">
        <NoOverflowRegion />
        <ShiningRegion />

        <div className="gap-y-[22px] flex flex-col p-[35px] relative">
          {statements.map((statement) => (
            <ValueMissionStatement
              key={statement}
              statement={statement}
              bulletIcon={bulletIcon}
            />
          ))}
        </div>
        <h3 className="pb-[22px] text-center text-[32px] font-bold relative">
          {title}
        </h3>
      </div>
      {hasBlueCircle ? (
        <div
          className={
            'bg-gradient-to-b from-[#66F7A9] to-[#00407B] rounded-[100%] w-[72px] h-[72px] absolute left-[-35px] bottom-[-35px] blur-[4px]'
          }
        ></div>
      ) : null}
    </div>
  )
}
