import classNames from 'classnames/bind'
import React from 'react'
import Styles from './blockInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Props = {
    icon ?: object,
    text : String
}
const cx = classNames.bind(Styles)
const BlockInfo = (props : Props) => {
    console.log(typeof props.icon);
    
  return (
    <div className={cx('wrapper')}>
        {props.icon ? 
        <FontAwesomeIcon className={cx('icon')} icon={props.icon}/>
        : ""}
        <span className={cx('text-content')}>{props.text}</span>

    </div>
  )
}

export default BlockInfo