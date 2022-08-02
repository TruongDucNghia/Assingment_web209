import { PlusSquareOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import { upload } from '../../api/image'
import styles from './upload.module.css'
type Props = {
  initValue: any
  image: (data : any) => void
}
const cx = classNames.bind(styles)

const UploadImage = (props: Props) => {
  const imgLoading : any = "https://i.stack.imgur.com/kOnzy.gif"
  const imgError : any = "https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png"
  const [img, setImg] = useState()

  // setImg(props.initValue)
  console.log(props.initValue);
  
  
  const changeImg = (event : any) =>{
    const file = event.target.files[0]
    // previewFile(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
       callAPIImg(reader.result)
    }
  }

  const pushImg = (data : String) =>{
    props.image(data)
    console.log(data);
    
  }

  const callAPIImg = async (base64Image: any) => {
    setImg(imgLoading)
    try {
      const res = await upload(base64Image)
      setImg(res.data.url)
      pushImg(res.data.url)
    } catch (error) {
      setImg(imgError)
      alert('lỗi !!!')
    }
  }
  return (
    <>
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-label')}>
              <span className={cx('label-img')}>* Thêm ảnh mới</span>
            </div>
            <div className={cx('input-content')}>
                <label htmlFor="uploadImage">
                  <div className={cx('label-ip')}><PlusSquareOutlined /> <span>Thêm mới</span></div>
                </label>
                <input onChange={changeImg} className={cx('input-hd')} type="file" id='uploadImage' />
                {img ? 
                  <div className={cx('imgPreview')}>
                    <img src={img} alt="" />
                  </div>
                  : ""
                }
            </div>    
        </div>
    </>
  )
}

export default UploadImage