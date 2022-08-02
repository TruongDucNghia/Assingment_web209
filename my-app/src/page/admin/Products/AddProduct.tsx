import { Breadcrumb, Button, Col, Form, Input, Row, Select, Space, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct, getDetailProducts, updateProducts } from '../../../api/products';
import UploadImage from '../../../components/UploadImage';

type Props = {}
const AddProduct = (props: Props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [form] = Form.useForm()
    const [image, setImage] = useState('')
    const [img, setImg] = useState()
    
    useEffect(() =>{
        if(id){
            const get = async (id: any) =>{
                const res = await getDetailProducts(id)
                form.setFieldsValue(res.data)
                UploadImage(form.getFieldValue('image'))
            }
            get(id)
        }
    }, [])
    

    const handleImage = (data : any) =>{
        setImage(data)   
    }

    const onFinish = async (values: any) => {
        if(image !== ""){
            try {
                if(id){
                    const res = await updateProducts({...values, image, id})
                    message.success('Cập nhật sản phẩm thành công !')
                    navigate('/admin/products')
                }else{
                    const res = await addProduct({...values, image})
                    message.success('Thêm sản phẩm thành công !')
                    navigate('/admin/products')
                }
                
            } catch (error) {
                console.log('lỗi');        
            }
        }else{
            alert('Vui lòng nhập ảnh sản phẩm !!!')
        }
        
        
    };
    
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2}>Thêm mới</Typography.Title>
            </Breadcrumb>
            <Form
                form={form}
                onFinish={onFinish}
                autoComplete="on"
                labelCol={{ span: 24 }}
            >
                <Row gutter={16}>
                <Col span={10}>
                    <UploadImage initValue={img} image={handleImage} />
                    <Form.Item
                        className='custom-antd'
                        name={'descriptionShort'}
                        labelCol={{ span: 24 }}
                        rules={[{ required: true, message: "Bạn phải nhập tên cho sản phẩm !" }]}
                    >
                        <Input.TextArea placeholder='Mô tả ngắn' maxLength={200} rows={5} size='large' />
                    </Form.Item>
                </Col>
                <Col span={14}>
                    <>
                        <Form.Item
                            name={'name'}
                            labelCol={{ span: 24 }}
                            label="Tên Sản Phẩm"
                            rules={[{ required: true, message: "Bạn phải nhập tên cho sản phẩm !" }]}
                        >
                            <Input size='large' />
                        </Form.Item>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name={'price'}
                                    labelCol={{ span: 24 }}
                                    label="Giá gốc"
                                    rules={[{ required: true, message: "Giá gốc sản phẩm!" }]}
                                >
                                    <Input size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name={'saleOffPrice'}
                                    labelCol={{ span: 24 }}
                                    label="Giá khuyến mại"
                                    rules={[{ required: true, message: "Giá khuyến mại sản phẩm!" }]}
                                >
                                    <Input size='large' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name={'categories'}
                                    labelCol={{ span: 24 }}
                                    label="Phân loại"
                                    rules={[{ required: true, message: "Giá khuyến mại sản phẩm!" }]}
                                >
                                    <Select size='large'>
                                        <Select.Option value="phone" selected>Điện Thoại</Select.Option>
                                        <Select.Option value="laptop">Laptop</Select.Option>
                                        <Select.Option value="tai nghe">Tai nghe</Select.Option>
                                        <Select.Option value="Phụ kiện">Phụ kiện</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            name={'feature'}
                            labelCol={{ span: 24 }}
                            label="Đặc điểm nổi bật"
                            rules={[{ required: true, message: "Bạn phải nhập tên cho sản phẩm !" }]}
                        >
                            <Input.TextArea maxLength={50} showCount size='large' />
                        </Form.Item>
                        <Form.Item
                            name={'description'}
                            labelCol={{ span: 24 }}
                            label="Mô tả"
                            rules={[{ required: true, message: "Bạn phải nhập tên cho sản phẩm !" }]}
                        >
                            <Input.TextArea maxLength={200} rows={5} showCount size='large' />
                        </Form.Item>
                        <Form.Item>
                            <Button style={{borderRadius: 10, height: 40, backgroundColor: '#00B0D7'}} type="primary" htmlType="submit">
                                Tạo mới sản phẩm
                            </Button>
                        </Form.Item>
                    </>
                </Col>
                </Row>
            </Form>

        </>
    )
}

export default AddProduct