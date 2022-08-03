import classNames from 'classnames/bind'
import React from 'react'
import ButtonMenu from '../../../components/ButtonMenu'
import PhuKien from '../../../components/PhuKien'
import ProductTop from '../../../components/ProductTop'
import styles from './homePage.module.css'
type Props = {}

const cx = classNames.bind(styles)

const HomePage = (props: Props) => {
    return (
        <>
            <div className={cx('wrapper-banner')}>
                <div className={cx('content')}>
                    <div className={cx('wrapper-menu')}>
                        <ButtonMenu text={'Phone'} />
                        <ButtonMenu text={'Phone'} />
                        <ButtonMenu text={'Phone'} />
                        <ButtonMenu text={'Phone'} />
                        <ButtonMenu text={'Phone'} />
                        <ButtonMenu text={'Phone'} />
                        <ButtonMenu text={'Phone'} />
                    </div>
                    <div className={cx('banner')}>
                        <img src="https://res.cloudinary.com/dbpw1enlu/image/upload/v1659426006/Rectangle_azzwwr.png" alt="" />
                    </div>
                </div>
            </div>


            <div className={cx('wrapper-Top_product')}>
                <div className={cx('wrapper-title')}>Điện thoại nổi bật nhất</div>
                <div className={cx('wrapper-produc_main')}>
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                    <ProductTop 
                        img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659430053/Rectangle_1_syuxg3.png'
                        name='iPhone 11 64GB I Chính hãng VN/A'
                        oldPrice={2500000}
                        price={2300000}
                        link={'hehe'}
                    />
                </div>
            </div>


            <div className={cx('wrapper-phuKien')}>
                <div className={cx('wrapper-title')}>Phụ kiện</div>
                <div className={cx('content-phuKien')}>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                    <PhuKien link='hehe' name='Nổi bật' img='https://res.cloudinary.com/dbpw1enlu/image/upload/v1659517367/Rectangle_2_bmieb5.png'/>
                </div>
            </div>
        </>
    )
}

export default HomePage