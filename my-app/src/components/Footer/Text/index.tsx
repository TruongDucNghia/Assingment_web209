import React from 'react'
import classNames from 'classnames/bind'
import styles from '../footer.module.css'

type Props = {
    text : String,
    color ?: String,
    size ?: String
}

const cx = classNames.bind(styles)
const TextFooter = (props: Props) => {
  return (
    <span className={cx('text-content', props.color, props.size)}>{props.text}</span>
  )
}

export default TextFooter