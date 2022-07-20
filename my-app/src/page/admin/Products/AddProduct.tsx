import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, Row, Select, Space, Typography, message } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../../api/products';
import UploadImage from '../../../components/UploadImage';

const { Option } = Select;

const areas = [
    { label: 'Beijing', value: 'Beijing' },
    { label: 'Shanghai', value: 'Shanghai' },
];

const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
};

type SightsKeys = keyof typeof sights;
type Props = {}

const AddProduct = (props: Props) => {
    const [form] = Form.useForm();
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    const handleImage = (data : any) =>{
        setImage(data)   
    }

    const onFinish = async (values: any) => {
        if(image !== ""){
            try {
                const res = await addProduct({...values, image})
                message.success('Thêm sản phẩm thành công !')
                navigate('/admin/products')
                
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
                initialValues={{}}
                onFinish={onFinish}
                autoComplete="on"
                labelCol={{ span: 24 }}
            >
                <Row gutter={16}>
                <Col span={10}>
                    <UploadImage image={handleImage} />
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
                                        <Select.Option value="phones">Điện Thoại</Select.Option>
                                        <Select.Option value="phoness">Điện Thoại</Select.Option>
                                        <Select.Option value="phonesss">Điện Thoại</Select.Option>
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