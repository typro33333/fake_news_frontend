import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import ImageDocker from '@core/assets/images/docker-cover.png';
import LKH from '@core/assets/images/lkh.png';
import LTQT from '@core/assets/images/trieu.png';
import THT from '@core/assets/images/thinh.jpg';
import { Space120, Space140 } from '@core/components/atom/space/space';
export default class Home extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className='home'>
        <Space140></Space140>
        <div className='home__header-content'>
          <div className='header-content'>
            <div className='header-content__box-title'>
              <div
                data-aos='fade-right'
                data-aos-easing='ease-in-sine'
                data-aos-duration='1000'
                className='box-title__title'>
                <h1>
                  <span className='title--modifile'>Covid-19? </span>
                  <br/>
                  But your
                  <span className='title--modifile'> Information </span>
                  is that
                  <span className='title--modifile'> Trusted? </span></h1>
              </div>
              <div
                data-aos='fade-up'
                data-aos-easing='ease-in-sine'
                data-aos-delay='1000'
                data-aos-duration='700'
                className='box-title__group-button'>
                <div className='btn btn-documents'>
                  <span>Documents</span> <span className='icon_arrow'><i class='bx bx-right-arrow-alt'></i></span>
                </div>
                <div className='btn btn-tracking'>
                  <span>Lets Tracking</span> <span className='icon_arrow'><i class='bx bx-right-arrow-alt'></i></span>
                </div>
              </div>
            </div>
            <div
              data-aos='fade-right'
              data-aos-easing='ease-in-sine'
              data-aos-delay='200'
              data-aos-duration='700'
              className='header-content__image-header'>
              <div className='image-header'>
                <img src={ImageDocker} alt='img-cover-docker'/>
              </div>
            </div>
          </div>
        </div>
        <Space120></Space120>
        <div
          data-aos='fade-up'
          data-aos-easing='ease-in-sine'
          data-aos-duration='800'
          data-aos-offset='180'
          className='home__thanks'>
          <h1 className='thanks__title title'>
            Thank You, <span className='title--modifile'>Mentor!</span>
          </h1>
          <div className='thanks__description'>
            <p className='description'>Thanks for being a good mentor and for guiding me on the right path. I will always be thankful to you.</p>
          </div>
          <div className='thanks__card'>
            <div
              className='card__image'>
              <img src={LKH} alt='le kim hung'/>
            </div>
            <p className='card__title-name'><span className='title--modifile'>PhD.</span> Lê Kim Hùng</p>
            <div
              data-aos='fade-up'
              data-aos-easing='ease-in-sine'
              data-aos-offset='180'
              data-aos-duration='800'
              className='card__description'>
              <p className='description'>
                <span className='description__1'>Besides teaching, Mr. Hung actively promotes the scientific research movement among students by organizing a research group named IEC (Intelligent Edge Computing). The group focuses on research and development on artificial intelligence (AI) applications in IoT and Edge Computing models.</span>
              With him, promoting the scientific research movement among students is extremely important, helping students to develop both in terms of research mindset and creativity. very helpful in your development path in the future.
              </p>
            </div>
          </div>
        </div>
        <Space120></Space120>
        <div
          data-aos='fade-up'
          data-aos-easing='ease-in-sine'
          data-aos-offset='240'
          data-aos-duration='800'
          className='home__project'>
          <h1 className='project__title title'>Project <span className='title--modifile'>Team</span></h1>
          <div className='project__layout-members'>
            <div className='members'>
              <div className='members__member'>
                <div className='member__card'>
                  <div
                    className='card__image-student'>
                    <img src={LTQT} alt='Le Trinh Quang Trieu'/>
                  </div>
                  <p className='card__title-name'><span className='title--modifile'>Student.</span> Lê Trịnh Quang Triệu</p>
                  <div
                    className='card__description'>
                    <p className='description'>
                      DevOps, Backend, Elasticsearch, Crawler data
                    </p>
                  </div>
                </div>
              </div>
              <div className='members__member'>
                <div className='member__card'>
                  <div
                    className='card__image-student'>
                    <img src={THT} alt='Le Trinh Quang Trieu'/>
                  </div>
                  <p className='card__title-name'><span className='title--modifile'>Student.</span> Thái Hoàng Thịnh</p>
                  <div
                    className='card__description'>
                    <p className='description'>
                      Grpc, Frontend, Elasticsearch, Crawler data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Space120></Space120>
      </div>
    );
  }
}
