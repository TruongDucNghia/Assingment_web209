import React, { useEffect, useState } from 'react'
import { Button, message, Popconfirm, Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { deleteProducts, getProduct } from '../../../api/products';
import { Iproduct } from '../../../model/products';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

type Props = {}


const columns = (handleDelete: any) => {
  return (
    [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'image',
        key: 'image',
        dataIndex: "image",
        render: (_: any) => <img src={_} alt="" width={'150px'} />
      },
      {
        title: 'saleOffPrice',
        dataIndex: 'saleOffPrice',
        key: 'saleOffPrice',
      },
      {
        title: 'categories',
        dataIndex: 'categories',
        key: 'categories',
      },
      {
        title: 'feature',
        dataIndex: 'feature',
        key: 'feature',
      },
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
      },

      
      {
        title: 'Action',
        key: 'action',
        render: (_: any, record: any) => (
          <Space size="middle">
            <NavLink to={`${record.id}/update`}>
              <Button type='primary'>Update</Button>
            </NavLink>
            <Popconfirm title='Bạn có muốn sản phẩm này không ?' onConfirm={() => handleDelete(record.id)
            }>
              <Button type='primary' danger>Delete</Button>
            </Popconfirm>
          </Space>
        ),
      },


    ]
  )
}



const ListProducts = (props: Props) => {
  const [listProducts, setListProducts] = useState<Iproduct[]>()

  useEffect(() => {
    const get = async () => {
      const res = await getProduct()
      setListProducts(res.data)
    }
    get()
  }, [])
  const handleDelete = async (id: any) => {
    try {
      await deleteProducts(id)
      const newData = listProducts?.filter(item => item.id !== id)
      setListProducts(newData)
      message.success('Xóa sản phẩm thành công !')
    } catch (error) {
      message.error('Xóa sản phẩm không thành công !')
    }
  }
  return (
    <>
      <WrapperHeader>
        <Typography.Title>List products</Typography.Title>
        <NavLink to={`add`}>
          <Button_cs><PlusOutlined /></Button_cs>  
        </NavLink>
      </WrapperHeader>
      <Table columns={columns(handleDelete)} dataSource={listProducts} />

    </>
  )
}

const WrapperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
`
const Button_cs = styled.button`
    color: #00B0D7;
    width: 45px;
    height: 45px;
    font-size: 30px;
    font-weight: 500;
    border: 3px solid #00B0D7;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default ListProducts