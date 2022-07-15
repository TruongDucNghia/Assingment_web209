import { SearchOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './header.module.css'
const cx = classNames.bind(styles)

const HeaderAdmin = () => {
  return (
    <header className={cx('wrapper-header')}>
      <div className={cx('wrapper-logo')}>
        <img src="./src/asset/img/logo.png" alt="" />
        <span className={cx('text-logo')}>Dashboard</span>
      </div>
      <div className={cx('wraper-search')}>
          <button className={cx('btn-search')}><SearchOutlined /></button>
          <input className={cx('input-search')} type="text" />
      </div>
      <div className={cx('header-text')}>
        <span>Xin Chào Nghĩa Dev</span>
      </div>
    </header>
  )
}

export default HeaderAdmin