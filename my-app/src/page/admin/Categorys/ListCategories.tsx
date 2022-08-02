import React, { useEffect, useState } from 'react'
import { Button, message, Popconfirm, Space, Table, Tag, Typography } from 'antd';
import { deleteProducts, getProduct } from '../../../api/products';
import { Iproduct } from '../../../model/products';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { deleteCate, getCate } from '../../../api/category';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../../features/categorySlice'
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



const ListCategories = (props: Props) => {
  const [listCategories, setListCategories] = useState<Iproduct[]>()
    
  useEffect(() => {
    const get = async () => {
      const res = await getCate()
      setListCategories(res.data)
    }
    get()
  }, [])
  const handleDelete = async (id: any) => {
    try {
      await deleteCate(id)
      const newData = listCategories?.filter(item => item.id !== id)
      setListCategories(newData)
      message.success('Xóa danh mục thành công !')
    } catch (error) {
      message.error('Xóa danh mục không thành công !')
    }
  }
  return (
    <>
      <WrapperHeader>
        <Typography.Title>List categories</Typography.Title>
        <NavLink to={`add`}>
          <Button_cs><PlusOutlined /></Button_cs>  
        </NavLink>
      </WrapperHeader>
      <Table columns={columns(handleDelete)} dataSource={listCategories} />

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

export default ListCategories