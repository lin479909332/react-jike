import BarChart from './components/BarChart'

const Home = () => {
  return (
    <div>
      <BarChart
        title={'三大框架满意度'}
        xAxisData={['Angular', 'Vue', 'React']}
        seriesData={[10, 30, 70]}
      />
      <BarChart
        title={'三大框架使用度'}
        xAxisData={['Angular', 'Vue', 'React']}
        seriesData={[20, 80, 60]}
      />
    </div>
  )
}

export default Home
