import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
const BarChart = ({ title, xAxisData, seriesData }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(chartRef.current)
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: seriesData,
          type: 'bar',
        },
      ],
    }
    myChart.setOption(option)
  }, [])
  return <div ref={chartRef} style={{ width: '400px', height: '300px' }}></div>
}

export default BarChart
