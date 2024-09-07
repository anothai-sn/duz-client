import React, { Component } from 'react';

import './about_cpnt.css'

import AnimalImg from '../../imges/animals/68943.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5 mb-5 align-items-end wow fadeInUp" data-wow-delay="0.1s">
                            <div class="col-lg-6">
                                <p><span class="text-primary me-2">#</span>Check the ticket prices</p>
                                <h1 class="display-5 mb-0">
                                    ราคาบัตรเข้าชม
                                    <span class="text-primary">สวนสัตว์ดุสิต</span>
                                </h1>
                            </div>

                        </div>
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="membership-item position-relative">
                                    <img class="img-fluid" src={AnimalImg} alt="" />
                                    <h1 class="display-1">01</h1>
                                    <h4 class="text-white mb-3">ผู้ใหญ่</h4>
                                    <h3 class="text-primary mb-4">100 บาท</h3>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="membership-item position-relative">
                                    <img class="img-fluid" src={AnimalImg} alt="" />
                                    <h1 class="display-1">02</h1>
                                    <h4 class="text-white mb-3">ปวส. - มหาวิทยาลัย</h4>
                                    <h3 class="text-primary mb-4">50 บาท</h3>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="membership-item position-relative">
                                    <img class="img-fluid" src={AnimalImg} alt="" />
                                    <h1 class="display-1">03</h1>
                                    <h4 class="text-white mb-3">เด็กเล็ก - ปวช.</h4>
                                    <h3 class="text-primary mb-4">20 บาท</h3>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div class="membership-item position-relative">
                                    <img class="img-fluid" src={AnimalImg} alt="" />
                                    <h1 class="display-1">04</h1>
                                    <h4 class="text-white mb-3">ข้าราชการ (ในเครื่องแบบ)</h4>
                                    <h3 class="text-primary mb-4">20 บาท</h3>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                                <div class="membership-item position-relative">
                                    <img class="img-fluid" src={AnimalImg} alt="" />
                                    <h1 class="display-1">05</h1>
                                    <h4 class="text-white mb-3">ผู้สูงอายุ 60ปีขึ้นไป คนพิการ ภิกษุ-สามเณร</h4>
                                    <h3 class="text-primary mb-4">ชมฟรี</h3>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;