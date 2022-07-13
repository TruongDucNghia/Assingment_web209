import React from 'react'
import classNames from 'classnames/bind'
import styles from './footer.module.css'
import TextFooter from './Text'

const cx = classNames.bind(styles)
const Footer = () => {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('footer-header')}>
                <div className={cx('wrapper-content')}>
                    <div className={cx('wrapper-text')}>
                        <TextFooter text={'Tìm cửa hàng'} size={'xl'} />
                        <TextFooter text={'Tìm cửa hàng gần nhất'} />
                        <TextFooter text={'Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)'} color={'red'} />
                        <TextFooter text={'Phương thức thanh toán'} size={'xl'} />
                        <div className={cx('wrapper-payment')}>
                            <img src="./src/asset/img/Rectangle.png" alt="" />
                            <img src="./src/asset/img/Rectangle (1).png" alt="" />
                            <img src="./src/asset/img/Rectangle (2).png" alt="" />
                            <img src="./src/asset/img/Rectangle (3).png" alt="" /> <br />
                            <img src="./src/asset/img/Rectangle (4).png" alt="" />
                        </div>
                    </div>
                    <div className={cx('wrapper-text')}>
                        <TextFooter text={'Gọi mua hàng: 1800.2044 (8h00 - 22h00)'} />
                        <TextFooter text={'Gọi mua hàng: 1800.2063 (8h00 - 22h00)'} />
                        <TextFooter text={'Gọi mua hàng: 1800.2064 (8h00 - 22h00)'} />
                        <TextFooter text={'Đối tác dịch vụ bảo hành'} size={'xl'} />
                        <TextFooter text={'Điện Thoại - Máy tính'} />
                        <TextFooter text={'Trung tâm bảo hành uỷ quyền Apple'} size={'xl'} />
                        <img className={cx('img-footer')} src="./src/asset/img/img2.png" alt="" />

                    </div>
                    <div className={cx('wrapper-text')}>
                        <TextFooter text={'Mua hàng và thanh toán Online'} />
                        <TextFooter text={'Mua hàng trả góp Online'} />
                        <TextFooter text={'Tra thông tin đơn hàng'} />
                        <TextFooter text={'Tra điểm Smember'} />
                        <TextFooter text={'Tra thông tin bảo hành'} />
                        <TextFooter text={'Tra cứu hoá đơn VAT điện tử'} />
                        <TextFooter text={'Trung tâm bảo hành chính hãng'} />
                        <TextFooter text={'Quy định về việc sao lưu dữ liệu'} />
                        <TextFooter text={'Dịch vụ bảo hành điện thoại'} color={'red'} />
                    </div>
                    <div className={cx('wrapper-text')}>
                        <TextFooter text={'Quy chế hoạt động'} />
                        <TextFooter text={'Chính sách Bảo hành'} />
                        <TextFooter text={'Liên hệ hợp tác kinh doanh'} />
                        <TextFooter text={'Khách hàng doanh nghiệp (B2B)'} />
                        <TextFooter text={'Ưu đãi thanh toán'} color={'red'} />
                        <TextFooter text={'Tuyển dụng'} />
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('footer-bt')}>
                    <div className={cx('wrapper-content', 'bg-dark')}>
                        <div className={cx('wrapper-text')}>
                            <TextFooter text={'Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại'} />
                            <TextFooter text={'Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro'} />
                            <TextFooter text={'iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11'} />
                        </div>
                        <div className={cx('wrapper-text')}>
                            <TextFooter text={'Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A'} />
                            <TextFooter text={'Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia'} />
                            <TextFooter text={'Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53'} />
                        </div>
                        <div className={cx('wrapper-text')}>
                            <TextFooter text={'Laptop - Laptop HP - Laptop Dell - Laptop Acer'} />
                            <TextFooter text={'Microsoft Surface - Laptop Lenovo - Laptop Asus'} />
                            <TextFooter text={'Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình'} />
                        </div>
                    </div>
                    <div className={cx('text-footer')}>
                        <span>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC . Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer