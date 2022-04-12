import {useState} from "react";
import {stat} from "fs";

type ProfileStatusType = {
    status: string, updateStatus: (status: string) => void
}


export function ProfileStatus(props: ProfileStatusType) {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const inDblClick = () => {
        setEditMode(true)
    }

    const onBlurClick = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeClick = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode
                    ? <span onDoubleClick={inDblClick}>{props.status || '-----'}</span>
                    : <input autoFocus={true} onBlur={onBlurClick} value={status} onChange={onChangeClick}/>
            }
        </div>
    )
}