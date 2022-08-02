import { Breadcrumb, Button, Col, Form, Input, Row, Select, Space, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addCate, deltailCate, updateCate } from '../../../api/category';

type Props = {}
const AddCategories = (props: Props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [form] = Form.useForm()
    useEffect(() =>{
        const get = async (id : number) =>{
            const {data} = await deltailCate(id)
            form.setFieldsValue(data)
        }
        get(Number(id))
    }, [])


    const onFinish = async (values: any) => {
            try {
                if (id) {
                    const res = await updateCate({ ...values, id })
                    console.log(values);
                    message.success('Cập nhật sản phẩm thành công !')
                    navigate('/admin/categories')
                } else {
                    const res = await addCate({ ...values })
                    console.log(values);
                    message.success('Thêm sản phẩm thành công !')
                    navigate('/admin/categories')
                }

            } catch (error) {
                console.log('lỗi');
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
                <Form.Item
                    name={'name'}
                    labelCol={{ span: 24 }}
                    label="Name category"
                    rules={[{ required: true, message: "Bạn phải nhập tên cho danh mục !" }]}
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item>
                    <Button style={{ borderRadius: 10, height: 40, backgroundColor: '#00B0D7' }} type="primary" htmlType="submit">
                        Create category
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}

export default AddCategories