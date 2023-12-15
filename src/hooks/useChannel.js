import { useEffect, useState } from 'react'
import { getChannelListAPI } from '@/apis/article'
// 频道列表
function useChannel() {
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    // 获取频道列表的方法
    const getChannelList = async () => {
      const res = await getChannelListAPI()
      if (res.message === 'OK') {
        setChannelList(res.data.channels)
      }
    }
    getChannelList()
  }, [])
  return {
    channelList,
  }
}

export { useChannel }
