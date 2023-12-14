import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const Home = () => {
  const chartRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    const option = {
      xAxis: {
        type: 'category',
        data: ['Angular', 'React', 'Vue'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [30, 70, 150],
          type: 'bar',
        },
      ],
    }

    myChart.setOption(option)
  }, [])
  return (
    <div>
      <div ref={chartRef} style={{ width: '400px', height: '300px' }}></div>
    </div>
  )
}

export default Home
