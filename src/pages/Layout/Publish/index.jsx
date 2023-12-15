import { Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.scss'
import { getChannelListAPI, createArticleAPI } from '@/apis/article'
import { useEffect, useState } from 'react'

const { Option } = Select

const Publish = () => {
  // 频道列表
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    getChannelList()
  }, [])
  // 获取频道列表的方法
  const getChannelList = async () => {
    const res = await getChannelListAPI()
    if (res.message === 'OK') {
      setChannelList(res.data.channels)
    }
  }
  // 发布文章
  const onFinish = async (formValue) => {
    if (imageList.length !== imageType) return message.warning('图片类型和数量不一致')
    const { title, content, channel_id } = formValue
    const reqData = {
      title,
      content,
      type: imageType,
      cover: {
        type: imageType,
        images: imageList.map((item) => item.response.data.url),
      },
      channel_id,
    }
    const res = await createArticleAPI(reqData)
    if (res.message === 'OK') {
      message.success('发布成功')
    } else {
      message.error('发布失败')
    }
  }
  // 图片上传的回调
  const [imageList, setImageList] = useState([])
  const onChange = (value) => {
    setImageList(value.fileList)
  }
  // 图片类型切换
  const [imageType, setImageType] = useState(0)
  const onTypeChange = (e) => {
    setImageType(+e.target.value)
  }
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[{ title: <Link to={'/'}>首页</Link> }, { title: '发布文章' }]} />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map((item) => (
                <Option value={item.id} key={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type" onChange={onTypeChange}>
              <Radio.Group>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType > 0 && (
              <Upload
                listType="picture-card"
                showUploadList
                action={'http://geek.itheima.net/v1_0/upload'}
                name="image"
                onChange={onChange}
                maxCount={imageType}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill className="publish-quill" theme="snow" placeholder="请输入文章内容" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
