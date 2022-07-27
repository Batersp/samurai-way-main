import React from "react";
import style from './Paginator.module.css'

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((el, index) => {
                return <span key={index}
                             className={currentPage === el ? style.selectedPage : ''}
                             onClick={() => onPageChanged(el)}>{el}</span>
            })}
        </div>
    )
}