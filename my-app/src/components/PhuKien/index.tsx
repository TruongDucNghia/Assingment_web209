import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './phuKien.module.css'

type Props = {
    name: string,
    img: string,
    link: string
}

const cx = classNames.bind(styles)
const PhuKien = (props: Props) => {
    const color = ['#FFA3A3', '#FFB8B8', '#FF94EB', '#E0B3FF', '#C6D8FB', '#4D91FF', '#85FFB1', '#F5D63D', '#FDA363', '#FF6666', '#D8A8FF', '#FFD1E1']
    const [bgColor, setBgColor] = useState('')
    useEffect(() =>{
        const random = color[Math.floor(Math.random()*color.length)]
        setBgColor(random)   
    }, [])
  return (
    <div style={{backgroundColor: bgColor}} className={cx('wrapper')}>
        <div className={cx('name')}>{props.name}</div>
        <div className={cx('wrapper-img')}>
            <NavLink to={props.link}>
                <img src={props.img} alt="" />
            </NavLink>
        </div>
    </div>
  )
}

export default PhuKien