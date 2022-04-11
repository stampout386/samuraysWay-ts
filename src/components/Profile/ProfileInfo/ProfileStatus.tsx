import {useState} from "react";


export function ProfileStatus(props: { status: string }) {

    const [editMopde, setEditMode] = useState<boolean>(false)

    const inDblClick = () => {
        setEditMode(true)
    }

    const onBlurClick = () => {
        setEditMode(false)
    }

    return (
        <div>
            {
                !editMopde ?
                    <span onDoubleClick={inDblClick}>{props.status}</span>
                    : <input autoFocus={true} onBlur={onBlurClick} value={props.status}/>
            }
        </div>
    )
}