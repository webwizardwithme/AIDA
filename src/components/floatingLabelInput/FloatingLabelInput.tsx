import * as React from 'react'

interface Props {
  type: string,
  name: string,
  children: React.ReactNode,
  field: any,
  form: React.ReactNode,
}

const FloatingLabelInput:React.FC<Props> = (props) => {
  const [active, setActive] = React.useState(false);
  const {type, name, children, field} = props
  
  function handleActivation(e:React.ChangeEvent<HTMLInputElement>) {
    setActive(!!e.target.value);
  }
  

  return (
    <div className="relative border rounded mb-2 bg-blue-50 text-black border-white border-opacity-25">
      <input
        className={[
          "outline-none w-full rounded bg-blue-50 text-sm transition-all duration-200 ease-in-out p-2",
          active ? "pt-6" : ""
        ].join(" ")}
        id={name}
        name={name}
        type={type}
        onChange={handleActivation}
        {...field}
      />
      <label
        className={[
          "absolute top-0 left-0 flex items-center text-black text-opacity-50 p-2 transition-all duration-200 ease-in-out",
          active ? "text-xs" : "text-sm"
        ].join(" ")}
        htmlFor={name}
      >
        {children}
      </label>
      
      
    </div>
  );
}

export default FloatingLabelInput