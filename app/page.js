import Video from '../components/video'
import Header from '../components/header'
import Buttons from '../components/buttons'
import Text1 from '../components/text1'
import Text2 from '../components/text2'
import Footer from '../components/footer'
import TextFields from '@/components/textfields'
import SliderComponent from '../components/slider'

export default function Home() {
  return (
    <div className='bg-white'>
      <Header/>
      <section id = "video">
        <Video />
      </section>
      <section id = "textfields" className="my-10">
        <TextFields/>
      </section>
      <section id = "slider" className="my-24">
        <SliderComponent/>
      </section>
      <section id = "buttons">
        <Buttons/>
      </section>
      <section id = "text1">
        <Text1/>
      </section>
      <section id = "text2">
        <Text2/>
      </section>
      <section id = "footer">
        <Footer/>
      </section>
    </div>
  )
}
