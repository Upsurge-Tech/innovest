export default function ValueMissionStatement({ statement, bulletIcon }) {
  return (
    <div className="rounded-[25px] border p-5 bg-gradient-to-b from-[#C6C2C6] to-transparent border-[1px] border-[#E7DAED] flex gap-[25px] items-center">
      <img src={bulletIcon} alt="bullet point" />
      <span>{statement}</span>
    </div>
  )
}
