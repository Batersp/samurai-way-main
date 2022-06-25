import React from "react";

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    activatedEditMode() {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivatedEditMode() {
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }

            </div>
        )
    }
}

