//NavigateBtn.jsx
function NavigateBtn({ setting, children, setP, pick, setS, }) {
  return (
    <div
    className="flex w-[100%] justify-items-center">
      <label className="cursor-pointer px-3 rounded-md has-[:checked]:bg-[var(--color-primary)] w-[100%] text-center my-1">
        <input
          type="radio"
          name="nav"
          className="hidden"
          defaultChecked={pick}
          onChange={() => setP(setting)}
          onClick={() => setS(e => !e)}
        />
        {children}
      </label>
    </div>
  );
}

export default NavigateBtn