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
        'bg-[#F1F2FF] rounded-[30px] border flex flex-col ' +
        (flip ? 'md:flex-row-reverse' : 'md:flex-row')
      }
    >
      <div className="md:min-h-[418px] md:min-w-[418px] flex flex-col">
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
