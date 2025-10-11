import { ArrowRightFromLine, Gamepad2, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const CardComponent = ({ title, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated gradient overlay background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Glowing border effect */}
            <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                    backgroundSize: '300% 300%',
                    animation: 'gradient 3s ease infinite',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                }}
            />

            {/* Image Section */}
            <div className="relative h-80 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Trending badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={16} />
                    TRENDING
                </div>

                {/* Game icon badge */}
                <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <Gamepad2 className="text-white" size={24} />
                </div>

                {/* Scan line effect */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-32 transform -translate-y-32 transition-transform duration-1000"
                    style={{
                        transform: isHovered ? 'translateY(384px)' : 'translateY(-128px)',
                        animation: isHovered ? 'scan 2s ease-in-out infinite' : 'none'
                    }}
                />
            </div>

            {/* Content Section */}
            <div className="relative p-8 bg-gradient-to-b from-neutral-900 to-neutral-950">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-0 group-hover:w-full transition-all duration-700" />

                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {title}
                </h2>

                <p className="mt-7 text-xl text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-800">
                    <a
                        className="flex items-center text-xl gap-4 font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                        href=""
                    >
                        Learn More
                        <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">
                            <ArrowRightFromLine />
                        </span>
                    </a>

                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-sm text-neutral-400 font-medium">24 Sep 2024</p>
                    </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>


        </div>
    );
};

export default CardComponent;