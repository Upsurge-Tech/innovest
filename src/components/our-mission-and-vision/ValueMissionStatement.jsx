export default function ValueMissionStatement({ statement, bulletIcon }) {
  return (
    <div className="rounded-[25px] border p-5 bg-gradient-to-b from-[#808080] to-transparent border-[1px] border-[#808080] flex gap-[25px] items-center">
      <img src={bulletIcon} alt="bullet point" />
      <span style={{ fontWeight: 'bold' }}>{statement}</span>
    </div>
  )
}
