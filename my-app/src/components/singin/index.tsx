import classNames from 'classnames/bind'
import React from 'react'
import styles from './singin.module.css'
type Props = {}

const cx = classNames.bind(styles)

const Singin = (props: Props) => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('form')}>
                <div className={cx('form-control')}>
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />
                </div>
                <div className={cx('form-control')}>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" />
                </div>
                <button className={cx('submit')}>Submit</button>
            </div>
        </div>

    </div>
  )
}

export default Singin