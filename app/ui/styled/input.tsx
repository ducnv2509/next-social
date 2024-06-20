
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