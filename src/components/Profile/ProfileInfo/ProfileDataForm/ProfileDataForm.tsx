import {useFormik} from "formik";
import React from "react";
import {ProfileType} from "../../../../redux/profile-reducer";
import {FormControl, Paper, TextareaAutosize, TextField} from "@mui/material";
import s from './ProfileDataForm.module.css'

import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";


type ProfileDataFormType = {
    profile: ProfileType
    onSubmit: (values: FormValuesType) => void
}

export type FormValuesType = {
    fullName?: string,
    lookingForAJob?: boolean,
    lookingForAJobDescription?: string,
    aboutMe?: string,
    contacts?: {
        facebook: string | null, website: string | null, vk: string | null, twitter: string | null, instagram: string | null, youtube: string | null,
        github: string | null,
        mainLink: string | null
    }
}


export type UpdateProfileRequestType = FormValuesType & { userId: number }


export const ProfileDataForm: React.FC<ProfileDataFormType> = ({profile, onSubmit}) => {

    const style = {
        display: 'block',
        width: '200px',
        backgroundColor: 'white',
    }

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk, twitter: profile.contacts.twitter, instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink
            }
        },

        onSubmit: onSubmit

    })

    return (
        <div className={s.container}>
            <div className={s.aboutMe}>
                <div className={s.aboutMeText}>Change</div>
            </div>
            <Paper elevation={10}  className={s.info}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                        <button className={s.btn} type='submit' style={{width: '50px'}}>save</button>
                    <div className={s.item}>
                        <b>Full name</b>
                        <TextField
                      /*      onChange={formik.handleChange}
                            name='fullName'*/
                            placeholder={formik.values.fullName}
                            size='small'
                            style={style}
                            variant="standard"
                            {...formik.getFieldProps('fullName')}
                        />
                    </div>
                    <div className={s.item}>
                        <b>Looking for a job</b>
                        <div>
                            <input
                               /* name='lookingForAJob'
                                onChange={formik.handleChange}*/
                                type='checkbox'
                                checked={formik.values.lookingForAJob}
                                {...formik.getFieldProps('lookingForAJob')}
                            />
                        </div>
                    </div>
                    <div className={s.item}>
                        <b>My Professionals Skills</b>
                        <div>
                            <TextareaAutosize
                               /* onChange={formik.handleChange}
                                name='lookingForAJobDescription'*/
                                aria-label="minimum height"
                                minRows={3}
                                placeholder={formik.values.lookingForAJobDescription}
                                style={{width: 200}}
                                {...formik.getFieldProps('lookingForAJobDescription')}
                            />
                        </div>
                    </div>
                    <div className={s.item}>
                        <b>About me</b>
                        <div>
                            <TextareaAutosize
                                /*name='aboutMe'
                                onChange={formik.handleChange}*/
                                aria-label="minimum height"
                                minRows={3}
                                placeholder={formik.values.aboutMe}
                                style={{width: 200}}
                                {...formik.getFieldProps('aboutMe')}
                            />
                        </div>
                    </div>
                    <div className={s.item}>
                        <b> Contacts </b> {Object.keys(profile.contacts).map(el => {



                        return <div key={el} className={s.contacts}>
                            <b>{el}</b>
                            <TextField
                              /*  onChange={formik.handleChange}
                                name={'contacts.' + el}*/
                                className={s.contact}
                                placeholder={el}
                                size='small'
                                style={style}
                                variant="standard"
                                {...formik.getFieldProps('contacts.' + el)}
                            />
                        </div>
                    })}
                    </div>

                </FormControl>
            </form>
            </Paper>

        </div>
    )
}
