import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import { ButtonAction } from '@core/components/atom/buttonAction/buttonAction';

// import Docker_image from '@core/assets/images/docker-cover.png';
// import Crawling_image from '@core/assets/images/crawling.png';
// import Avatar from '@core/assets/images/thinh.jpg';

export default class Home extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <ButtonAction />
      </div>
    );
  }
}
