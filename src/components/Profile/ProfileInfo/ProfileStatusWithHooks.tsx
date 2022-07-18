import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activatedEditMode}>{status || 'status is missing'}</span>
                </div>
            }

            {editMode &&
                <div>
                    <input onChange={onChangeInput} autoFocus onBlur={deactivatedEditMode}
                           value={status}/>
                </div>
            }

        </div>
    )

}

