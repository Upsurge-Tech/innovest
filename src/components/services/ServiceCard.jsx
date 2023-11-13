import ReadMoreButton from './ReadMoreButton'
export default function ServicesCard({
  imageComponent,
  title,
  content,
  onReadMore,
  flip,
}) {
  return (
    <div
      className={
        'bg-[#F5F6FF] rounded-xl border flex flex-col ' +
        (flip ? 'md:flex-row-reverse' : 'md:flex-row')
      }
    >
      <div className="md:w-[350px] flex flex-col mt-4 mb-4 ml-4 mr-4">
        {imageComponent}
      </div>

      <div className="flex-1 p-5 flex-col flex gap-[30px] md:justify-center md:p-[70px] ">
        <h3 className="text-[28px] text-[#2D3748] font-semibold">{title}</h3>
        <p>{content}</p>
        <ReadMoreButton onClick={onReadMore} />
      </div>
    </div>
  )
}
