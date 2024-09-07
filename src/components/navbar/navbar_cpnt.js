import React, { useState } from 'react';
import './navbar_cpnt.css';
import Logo from '../../imges/dusit-zoo-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // ฟังก์ชันเปิด/ปิดเมนู
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <a href="/home" className="navbar-brand p-0">
                <img className="img-fluid me-3" src={Logo} alt="Icon" />
                <h1 className="m-0 text-primary">Dusit Zoo</h1>
            </a>
            <button 
                type="button" 
                className="navbar-toggler" 
                onClick={toggleMenu} 
                aria-expanded={isOpen ? 'true' : 'false'} 
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div 
                className={`collapse navbar-collapse py-4 py-lg-0 ${isOpen ? 'show' : ''}`} 
                id="navbarCollapse"
            >
                <div className="navbar-nav ms-auto">
                    <a href="/home" className="nav-item nav-link active">หน้าหลัก</a>
                    <a href="/animals" className="nav-item nav-link">สัตว์</a>
                    <a href="/about" className="nav-item nav-link">ราคาบัตรเช้าชม</a>
                    <a href="/map" className="nav-item nav-link">แผนที่</a>
                    <a href="/contract" className="nav-item nav-link">ช่องทางการติดต่อ</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
