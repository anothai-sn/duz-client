import React, { Component } from 'react';

import './animal_list_cpnt.css'

import Img1 from '../../imges/animals/68943.jpg'
import Img2 from '../../imges/animals/68945.jpg'
import Img3 from '../../imges/animals/68949.jpg'

class AnimalList extends Component {
    constructor() {
        super()
        this.state = {
            data: [{
                id: 1,
                animalName: "Name1",
                animalImage: Img1
            },{
                id: 2,
                animalName: "Name2",
                animalImage: Img2
            },{
                id: 3,
                animalName: "Name3",
                animalImage: Img3
            }]
        }
    }
    
    // Get api zone

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

                    <div className="row g-4">
                        {this.state.data.map((animal) => (
                            <div className="col-md-4 col-12 wow fadeInUp" data-wow-delay="0.1s" key={animal.id}>
                                <a className="animal-item" href={`/animals/${animal.animalName}`} data-lightbox="animal">
                                    <div className="position-relative">
                                        <img className="img-fluid" src={animal.animalImage} alt={animal.animalName} />
                                        <div className="animal-text p-4">
                                            <p className="text-white small text-uppercase mb-0">Animal</p>
                                            <h5 className="text-white mb-0">{animal.animalName}</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default AnimalList;