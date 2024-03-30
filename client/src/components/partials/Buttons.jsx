const Buttons = ({label, onClick}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-fit py-3 px-5 mt-3 backdrop-blur-xl bg-white/10 text-white rounded-xl"
    >
      {label}
    </button>
  )
}

export default Buttons