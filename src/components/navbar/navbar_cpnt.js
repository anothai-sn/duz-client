import React, { Component } from 'react';

import './navbar_cpnt.css'
import Logo from '../../imges/dusit-zoo-logo.png'

class Navbar extends Component {
    render() {
        return (
                <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="/home" class="navbar-brand p-0">
                        <img class="img-fluid me-3" src={Logo} alt="Icon" />
                        <h1 class="m-0 text-primary">Dusit Zoo</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
                        <div class="navbar-nav ms-auto">
                            <a href="/home" class="nav-item nav-link active">หน้าหลัก</a>
                            <a href="/animals" class="nav-item nav-link active">สัตว์</a>
                            <a href="/about" class="nav-item nav-link active">ราคาบัตรเช้าชม</a>
                            <a href="/map" class="nav-item nav-link active">เเผนที่</a>
                            <a href="/contract" class="nav-item nav-link active">ช่องทางการติดต่อ</a>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Navbar;