import React, { Component } from 'react';

import './animal_list_cpnt.css'

import AnimalImg from '../../imges/animals/68943.jpg'

class AnimalList extends Component {
    render() {
        return (
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 mb-5 align-items-end wow fadeInUp" data-wow-delay="0.1s">
                        <div class="col-lg-6">
                            <p><span class="text-primary me-2">#</span>สัตว์ของเรา</p>
                            <h1 class="display-5 mb-0">
                                มาดูสัตว์น่ารัก ๆ ใน<span class="text-primary">สวนสัตว์ดุสิต</span>กันดีกว่า
                            </h1>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-md-4 col-12 wow fadeInUp" data-wow-delay="0.1s">
                            <a class="animal-item" href={null /* /:animalName */} data-lightbox="animal">
                                <div class="position-relative">
                                    <img class="img-fluid" src={AnimalImg} alt />
                                    <div class="animal-text p-4">
                                        <p class="text-white small text-uppercase mb-0">Animal</p>
                                        <h5 class="text-white mb-0">Animal Name</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnimalList;