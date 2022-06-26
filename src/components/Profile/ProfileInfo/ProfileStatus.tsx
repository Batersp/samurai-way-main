import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivatedEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode}>{this.state.status || 'status is missing'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeInput} autoFocus onBlur={this.deactivatedEditMode} value={this.state.status}/>
                    </div>
                }

            </div>
        )
    }
}

