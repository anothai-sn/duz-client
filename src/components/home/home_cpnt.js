import React, { Component } from 'react';

import Header from '../header/header_cpnt'
import AnimalList from '../animal/animal_list_cpnt';
import About from '../about/about_cpnt';

import Imge1 from '../../imges/animals/68949.jpg'
import Imge2 from '../../imges/animals/68946.jpg'
import Imge3 from '../../imges/animals/68947.jpg'

class Home extends Component {

    render() {
        return (
            <div>
                {/* <Header />
                <div class="modal modal-video fade" id="videoModal" tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content rounded-0">
                            <div class="modal-header">
                                <h3 class="modal-title" id="exampleModalLabel">Youtube Video</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="ratio ratio-16x9">
                                    <iframe class="embed-responsive-item" src id="video"
                                        allowfullscreen allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AnimalList />
                <About /> */}
            </div>
        );
    }
}

export default Home;