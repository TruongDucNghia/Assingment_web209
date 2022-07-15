import classNames from 'classnames/bind'
import React from 'react'
import Styles from './blockInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Props = {
    icon ?: any,
    text : String
}
const cx = classNames.bind(Styles)
const BlockInfo = (props : Props) => {
    
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