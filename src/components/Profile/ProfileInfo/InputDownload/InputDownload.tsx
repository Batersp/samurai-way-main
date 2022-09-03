import React, {ChangeEvent} from 'react';
import s from './InputDownload.module.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


type PropsType = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputDownload = ({callback}: PropsType) => {

    /*   const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
           if (e.target.files && e.target.files.length) {
               const file = e.target.files[0]
               console.log('file: ', file)
           }
       };*/

    return (
        <div className={s.container}>
            <label>
                <input type="file"
                       onChange={callback}
                       style={{display: 'none'}}
                />
                <CloudDownloadIcon style={{color: 'red', fontSize: '40px'}}/>
            </label>
            <div className={s.text}>Download Photo</div>
        </div>
    )
}