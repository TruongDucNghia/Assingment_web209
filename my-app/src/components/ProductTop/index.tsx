import { StarOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './productTop.module.css'
type Props = {
    img: string,
    name: string,
    price: number,
    oldPrice: number,
    link: string
}

const cx = classNames.bind(styles)
const ProductTop = (props: Props) => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('img-product')}>
            <NavLink to={props.link}>
                <img src={props.img} alt="" />
            </NavLink>
        </div>
        <span className={cx('name-product')}>{props.name}</span>
        <div className={cx('wrapper-price')}>
            <span className={cx('newPrice')}>{props.price}</span>
            <span className={cx('oldPrice')}>{props.oldPrice}</span>
        </div>
        <div className={cx('infor')}>
            <span>[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</span>
        </div>
        <div className={cx('review')}>
            <div className={cx('star')}>
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
            </div>
            <span>72 đánh giá</span>
        </div>
    </div>
  )
}

export default ProductTop