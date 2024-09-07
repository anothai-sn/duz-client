import React, { Component } from 'react';

import AnimalImg from '../../imges/animals/68943.jpg'

class Contract extends Component {
    render() {
        return (
            <div>
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-4 mb-5">
                            <div class="col-lg-4 wow fadeInUp">
                                <div class="h-100 bg-light d-flex align-items-center p-5">
                                    <div class="btn-lg-square bg-white flex-shrink-0">
                                        <i class="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">
                                            <span class="text-primary me-2">#</span>Address
                                        </p>
                                        <h5 class="mb-0">71 ถนนพระรามที่ 5 แขวงดุสิต เขตดุสิต กรุงเทพมหานคร</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="h-100 bg-light d-flex align-items-center p-5">
                                    <div class="btn-lg-square bg-white flex-shrink-0">
                                        <i class="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">
                                            <span class="text-primary me-2">#</span>Call Now
                                        </p>
                                        <h5 class="mb-0">+0-2281-2000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeInUp">
                                <div class="h-100 bg-light d-flex align-items-center p-5">
                                    <div class="btn-lg-square bg-white flex-shrink-0">
                                        <i class="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-2">
                                            <span class="text-primary me-2">#</span>Mail Now
                                        </p>
                                        <h5 class="mb-0">dusit@zoothailand.org</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-xxl py-5">
                            <div class="container">
                                <div class="row g-5">
                                    <div class="col-lg-3 d-none d-lg-block wow fadeInUp" data-wow-delay="0.1s">
                                    </div>

                                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div class="h-100" style={{ minHeight: '500px' }}>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5466.3905307683735!2d100.51264054350807!3d13.771182034260375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2995b1780470b%3A0x8a3e0ec6ab5421fe!2z4Liq4Lin4LiZ4Liq4Lix4LiV4Lin4LmM4LiU4Li44Liq4Li04LiV!5e1!3m2!1sth!2sth!4v1725521901287!5m2!1sth!2sth"
                                                width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade">
                                            </iframe>
                                        </div>
                                    </div>


                                    <div class="col-lg-3 d-none d-lg-block wow fadeInUp" data-wow-delay="0.1s">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contract;