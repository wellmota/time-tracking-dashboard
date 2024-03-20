export function RadioLink(props) {
  const { id, className, type, name, value, checked, onChange, children } =
    props

  return (
    <>
      <input
        id={id}
        className={className}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        className={`transition ease-in-out hover:-translate-y-1 cursor-pointer focus:outline-none  hover:text-white ${
          checked ? "text-white" : ""
        }`}
        htmlFor={id}
      >
        {children}
      </label>
    </>
  )
}
