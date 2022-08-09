import {useFormik} from "formik";
import React from "react";
import {ProfileType} from "../../../../redux/profile-reducer";
import {FormControl, TextareaAutosize, TextField} from "@mui/material";
import s from '../ProfileInfo.module.css'


type ProfileDataFormType = {
    profile: ProfileType
    onSubmit: (values: FormValuesType) => void
}

export type FormValuesType = {
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    aboutMe: string,
    contacts: {facebook: string, website: string, vk: string, twitter: string, instagram: string, youtube: string,
        github: string,
        mainLink: string}

}


export const ProfileDataForm: React.FC<ProfileDataFormType> = ({profile,onSubmit}) => {

    const style = {
        display: 'block',
        width: '200px',
        backgroundColor: 'white',
    }

    const formik = useFormik({
        initialValues: {
            fullName: 'sfsfsfds',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            aboutMe: '',
            contacts: {facebook: '', website: '', vk: '', twitter: '', instagram: '', youtube: 'null',
                github: '',
                mainLink: ''}
        },
        onSubmit: onSubmit

    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <button type='submit' style={{width: '50px'}}>save</button>
                    <div>
                        <b>Full name</b>
                        <TextField
                            name='fullName'
                            placeholder={formik.values.fullName}
                            size='small'
                            style={style}
                            variant="standard"
                        />
                    </div>
                    <div>
                        <b>Looking for a job</b>
                        <div>
                            <input
                                name='lookingForAJob'
                                onChange={formik.handleChange}
                                type='checkbox'
                                checked={formik.values.lookingForAJob}
                            />
                        </div>
                    </div>
                    <div>
                        <b>My Professionals Skills</b>
                        <div>
                            <TextareaAutosize
                                name='lookingForAJobDescription'
                                aria-label="minimum height"
                                minRows={3}
                                placeholder={formik.values.lookingForAJobDescription}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                    <div>
                        <b>About me</b>
                        <div>
                            <TextareaAutosize
                                name='aboutMe'
                                aria-label="minimum height"
                                minRows={3}
                                placeholder={formik.values.aboutMe}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                    <div>
                        <b> Contacts </b> {Object.keys(profile.contacts).map(el => {

                        return <div className={s.contact}>
                            <b>{el}</b>
                                <TextField
                                    name='contacts.'
                                    placeholder={el}
                                    size='small'
                                    style={style}
                                    variant="standard"
                                />
                            </div>
                    })}
                    </div>

                </FormControl>
            </form>

        </div>
    )
}
