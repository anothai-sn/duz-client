import React, { Component } from 'react';

import './map_cpnt.css'

import DuzMap from '../../imges/dusit-zoo-map.png'

class Map extends Component {
    render() {
        return (
            <div>
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <p><span class="text-primary me-2">#</span>เเผนผังสวนสัตว์ดุสิต</p>
                                <h1 class="display-5 mb-4">
                                    เเผนผัง<span class="text-primary">สวนสัตว์ดุสิต</span>
                                </h1>
                                <p class="mb-4">
                                    แผนผังสวนสัตว์ดุสิตใหม่พร้อมให้คุณสำรวจ! เปิดประสบการณ์ท่องเที่ยวกับแผนผังที่ช่วยให้คุณเดินทางได้อย่างสะดวกสบาย พบกับพื้นที่จัดแสดงสัตว์ที่น่าสนใจ พร้อมจุดพักผ่อน ร้านอาหาร และกิจกรรมสำหรับครอบครัว!
                                </p>


                            </div>
                            <div class="Diagram-Zoo">
                                <div class="Diagram">
                                    <img id="responsive-image" src={DuzMap} alt="Responsive Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;