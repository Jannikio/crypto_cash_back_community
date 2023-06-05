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
    <div>
      <Header/>
      <section id="video" className="p-4 md:p-8">
        <Video />
      </section>
      <section id="start-saving" className="p-4 md:p-8">
        <Buttons/>
      </section>
      {/* 
      <section id="textfields" className="my-10">
        <div className="p-4 md:p-8">
          <TextFields/>
        </div>
      </section>
      */}
      <section id="slider" className="my-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent">
        <div>
          <SliderComponent/>
        </div>
      </section>
      <section id="how-it-works" className="p-4 md:p-8">
        <Text1/>
      </section>
      <section id="text2" className="p-4 md:p-8">
        <Text2/>
      </section>
      <section id="footer" className="p-4 md:p-8">
        <Footer/>
      </section>
    </div>
  )
}
