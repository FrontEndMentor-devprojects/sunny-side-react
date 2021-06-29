import React from 'react'
import logo from "../images/logo.svg"
import insta from '../images/icon-instagram.svg';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';


export default function Footer() {
    return (
        <footer className="flex flex-col bg-footer-cyan text-dark-blue py-10">
            <img className="fill-current stroke-current text-dark-blue w-40 mx-auto mb-3" src={logo} alt="" />
            <nav className="flex justify-center space-x-4 md:space-x-9 mb-10">
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
            </nav>
            <nav className="flex justify-center items-center space-x-6">
                <a href="/facebook"><img src={facebook} alt="" /></a>
                <a href="/instagram"><img src={insta} alt="" /></a>
                <a href="/twitter"><img src={twitter} alt="" /></a>
                <a href="/pinterest"><img src={pinterest} alt="" /></a>
            </nav>
        </footer>
    )
}
