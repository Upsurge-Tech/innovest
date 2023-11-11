export default function ReadMoreButton({ onClick }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClick}
        className="text-[#00407B] font-semibold text-[14px]"
      >
        Read more &gt;
      </button>
    </div>
  )
}
