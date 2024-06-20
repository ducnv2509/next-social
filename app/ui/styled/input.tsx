// import { Dispatch, SetStateAction } from 'react'
// import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

// interface InputProps<T extends FieldValues> {
//   type?: string
//   name?: string
//   id?: string
//   placeholder?: string
//   value?: any
//   min?: number
//   autoComplete?: string
//   className?: string
//   register: UseFormRegister<T>
//   label: Path<T>
//   required: boolean
// }

// export function Input<T extends FieldValues>(props: InputProps<T>) {
//   let { type, name, id, placeholder, min, value, autoComplete } = props
//   if (type && autoComplete) {
//     if (type == 'password') {
//       autoComplete = 'new-password'
//     }
//   }
//   return (
//     <input
//       {...{ type, name, id, placeholder, value, autoComplete }}
//       {...props.register(props.label, { required: props.required })}
//       min={min}
//       className={`block w-full px-4 py-2 mt-2 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-md transition-all ease-in-out duration-150 focus:border-primary-primary outline-none ${props.className}`}
//     />
//   )
// }

// export function InputLabelHover<T extends FieldValues>(props: InputProps<T>) {
//   const { type, name, id, placeholder, min, autoComplete } = props
//   return (
//     <div className="relative">
//       <input
//         {...{ type, name, id, autoComplete }}
//         {...props.register(props.label, { required: props.required })}
//         placeholder=" "
//         min={min}
//         className={`block px-4 py-2 w-full text-neutral-900 bg-transparent rounded-lg border border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-primary peer placeholder-white ${props.className}`}
//       />
//       <label
//         htmlFor={id}
//         className="absolute text-neutral-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//       >
//         {placeholder}
//       </label>
//     </div>
//   )
// }

// interface InputSubmitButtonProps<T extends FieldValues> {
//   type?: string
//   name?: string
//   id?: string
//   placeholder?: string
//   autoComplete?: string
//   className?: string
//   register: UseFormRegister<T>
//   label: Path<T>
//   required: boolean
// }

// export function InputSubmitButton<T extends FieldValues>(props: InputSubmitButtonProps<T>) {
//   const { type, name, id, placeholder, autoComplete } = props
//   return (
//     <>
//       <div className="relative">
//         <input
//           {...{ type, name, id, placeholder, autoComplete }}
//           {...props.register(props.label, { required: props.required })}
//           className={`block w-full mt-2 py-2 pl-4 pr-20 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-md transition-all ease-in-out duration-150 focus:border-primary-primary outline-none ${props.className}`}
//         />
//         <button type="submit" className="absolute inset-y-0 right-0 text-sm px-3.5 m-[1px] border-l border-neutral-200 text-primary-primary transition-all duration-75 hover:text-primary-hover active:text-primary-focus">
//           Update
//         </button>
//       </div>
//     </>
//   )
// }

// interface InputSearchProps {
//   name?: string
//   id?: string
//   placeholder?: string
//   autoComplete?: string
//   className?: string
//   value: string
//   setFilter: Dispatch<SetStateAction<string>>
// }

// export function InputSearch(props: InputSearchProps) {
//   const { name, id, placeholder, autoComplete } = props
//   return (
//     <>
//       <div className="relative">
//         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//           <svg aria-hidden="true" className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//           </svg>
//         </div>

//         <input
//           type="text"
//           {...{ name, id, placeholder, autoComplete }}
//           value={props.value}
//           onChange={(e) => props.setFilter(e.target.value)}
//           className={`block w-full py-2 pl-10 pr-2 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-md transition-all ease-in-out duration-150 focus:border-primary-primary outline-none ${props.className}`}
//         />
//       </div>
//     </>
//   )
// }

// interface InputSearchSmallNeutral {
//   name?: string
//   id?: string
//   placeholder?: string
//   className?: string
//   value: string
//   setFilter: Dispatch<SetStateAction<string>>
// }

// export function InputSearchSmallNeutral(props: InputSearchSmallNeutral) {
//   const { name, id, placeholder } = props
//   return (
//     <>
//       <div className="relative">
//         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//           <svg aria-hidden="true" className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//           </svg>
//         </div>

//         <input type="text" {...{ name, id, placeholder }} autoFocus value={props.value} onChange={(e) => props.setFilter(e.target.value)} className={`block w-full bg-neutral-100 text-sm py-2 px-4 pl-10 text-neutral-700 placeholder-neutral-400 border border-neutral-200 rounded-md outline-none ${props.className}`} />
//       </div>
//     </>
//   )
// }

// interface InputCommentProps<T extends FieldValues> {
//   name?: string
//   id?: string
//   placeholder?: string
//   className?: string
//   autoComplete?: string
//   register: UseFormRegister<T>
//   label: Path<T>
//   required: boolean
// }

// export function InputComment<T extends FieldValues>(props: InputCommentProps<T>) {
//   const { name, id, placeholder, autoComplete } = props
//   return (
//     <>
//       <div className="relative">
//         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//           </svg>
//         </div>

//         <input type="text" {...{ name, id, placeholder, autoComplete }} {...props.register(props.label, { required: props.required })} className={`block w-full py-2 pl-12 text-neutral-700 placeholder-neutral-400 bg-white outline-none ${props.className}`} />
//       </div>
//     </>
//   )
// }

// interface TextAreaProps<T extends FieldValues> {
//   type?: string
//   name?: string
//   id?: string
//   placeholder?: string
//   autoComplete?: string
//   className?: string
//   register: UseFormRegister<T>
//   label: Path<T>
//   required: boolean
//   rows: number
//   disabled?: boolean
// }

// export function TextArea<T extends FieldValues>(props: TextAreaProps<T>) {
//   const { type, name, id, placeholder, disabled, autoComplete } = props
//   return (
//     <textarea
//       {...{ type, name, id, placeholder, disabled, autoComplete }}
//       {...props.register(props.label, { required: props.required })}
//       rows={props.rows}
//       className={`block w-full px-4 py-2 mt-2 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-md transition-all ease-in-out duration-150 focus:border-primary-primary outline-none ${props.className}`}
//     />
//   )
// }


import { Input, InputProps } from "antd"
interface IProps extends InputProps {
    label?: string,
    vertical?: boolean,
    type?: string

}
const InputUI = (props: IProps) => {
    //! state
    const { label, vertical, type = "password", ...res } = props
    //! function
    //! render
    const styleVertical = vertical ? 'flex flex-col' : "flex gap-3"
    if (type === "password") {
        return <div className={`${styleVertical}`}>
            {label && <label className="mb-2">{label}</label>}
            <Input.Password {...res} />
        </div>
    }
    return <div className={`w-full ${styleVertical} `}>
        {label && <label className="mb-2">{label}</label>}
        <Input className="!w-96" {...res} />
    </div>
}

export default InputUI;