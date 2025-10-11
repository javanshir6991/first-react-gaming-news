import React, { useState } from 'react'
import { Gamepad2, Twitter, Youtube, Twitch, Instagram, Mail, ArrowUp, Zap, Trophy, Users } from 'lucide-react'

const Footer = () => {
    const [hoveredSocial, setHoveredSocial] = useState(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const socialLinks = [
        { icon: Twitter, label: 'Twitter', color: '#1DA1F2' },
        { icon: Youtube, label: 'YouTube', color: '#FF0000' },
        { icon: Twitch, label: 'Twitch', color: '#9146FF' },
        { icon: Instagram, label: 'Instagram', color: '#E4405F' },
    ];

    const quickLinks = [
        { name: 'Games', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Tournaments', href: '#' },
        { name: 'Leaderboard', href: '#' },
    ];

    const companyLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white overflow-hidden mt-30">
            {/* Animated background effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#077d07] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(#077d07 1px, transparent 1px), linear-gradient(90deg, #077d07 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            {/* Top glowing line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#077d07] to-transparent animate-pulse" />

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#077d07] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative bg-gradient-to-br from-[#077d07] to-[#055d05] p-3 rounded-2xl transform group-hover:rotate-12 transition-transform duration-300">
                                    <Gamepad2 size={32} className="text-white" />
                                </div>
                            </div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-[#077d07] to-[#0aa00a] bg-clip-text text-transparent">
                                GameHub
                            </span>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">
                            Your ultimate destination for gaming news, reviews, and community. Level up your gaming experience.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-4 pt-4">
                            <div className="flex items-center gap-2 bg-neutral-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-neutral-700">
                                <Users size={16} className="text-[#077d07]" />
                                <span className="text-sm font-semibold">1M+</span>
                            </div>
                            <div className="flex items-center gap-2 bg-neutral-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-neutral-700">
                                <Trophy size={16} className="text-[#077d07]" />
                                <span className="text-sm font-semibold">500K</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Zap size={20} className="text-[#077d07]" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-neutral-400 hover:text-[#077d07] transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#077d07] group-hover:w-4 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Trophy size={20} className="text-[#077d07]" />
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-neutral-400 hover:text-[#077d07] transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-[#077d07] group-hover:w-4 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Mail size={20} className="text-[#077d07]" />
                            Newsletter
                        </h3>
                        <p className="text-neutral-400 mb-4 text-sm">
                            Get the latest gaming news and updates delivered to your inbox.
                        </p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#077d07] transition-colors duration-300"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#077d07] to-[#055d05] px-4 py-1.5 rounded-md text-sm font-semibold hover:shadow-lg hover:shadow-[#077d07]/50 transition-all duration-300">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider with animation */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#077d07] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href="#"
                                    className="relative group"
                                    onMouseEnter={() => setHoveredSocial(index)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                >
                                    <div className="absolute inset-0 bg-[#077d07] rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                                    <div
                                        className="relative bg-neutral-800 p-3 rounded-lg border border-neutral-700 hover:border-[#077d07] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                                        style={{
                                            backgroundColor: hoveredSocial === index ? social.color : ''
                                        }}
                                    >
                                        <Icon size={20} />
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <p className="text-neutral-500 text-sm">
                        © 2024 <span className="text-[#077d07] font-semibold">GameHub</span>. All rights reserved.
                    </p>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="group relative bg-gradient-to-r from-[#077d07] to-[#055d05] p-3 rounded-full hover:shadow-lg hover:shadow-[#077d07]/50 transition-all duration-300 transform hover:scale-110"
                    >
                        <div className="absolute inset-0 bg-[#077d07] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        <ArrowUp className="relative transform group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                    </button>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#077d07] to-transparent" />
        </footer>
    );
};

export default Footer;

