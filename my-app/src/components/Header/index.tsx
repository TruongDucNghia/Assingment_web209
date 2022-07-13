import React from 'react'
import logo from '../../asset/img/logo.png'
import Styles from './header.module.css'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTruckFast, faLocationDot, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import BlockInfo from '../blockInfo';
const cx = classNames.bind(Styles)
const Header = () => {

  return (
    <div className={cx('container')}>
      <div className={cx('wraper')}>
        <div className='wraper-logo'>
          <img className={cx('logo')} src={logo} alt="" />
        </div>
        <div className={cx('wraper-search')}>
          <button className={cx('btn-search')}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          <input className={cx('input-search')} type="text" />
        </div>
        <div className={cx('wraper-info')}>
          <BlockInfo text={'Gọi mua hàng 1800.2097'}/>
          <BlockInfo text={'Cửa hàng gần bạn'} icon={faLocationDot}/>
          <BlockInfo text={'Tra cứu đơn hàng'} icon={faTruckFast}/>
          <BlockInfo text={'Giỏ hàng'} icon={faBagShopping}/>
        </div>
      </div>
    </div>
  )
}


export default Header