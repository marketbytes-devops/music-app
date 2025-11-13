import React from 'react';

const TrustedPartnersSection = () => {
  // Partner logos data
  const partners = [
    { name: "Spotify", icon: "🎵" },
    { name: "Apple Music", icon: "🎧" },
    { name: "SoundCloud", icon: "☁️" },
    { name: "YouTube Music", icon: "▶️" },
    { name: "Amazon Music", icon: "🎶" },
    { name: "Tidal", icon: "🌊" },
    { name: "Deezer", icon: "💿" },
    { name: "Pandora", icon: "🎼" }
  ];

  return (
    <div className="w-full flex justify-center px-4 py-16">
      {/* Main Container */}
      <div 
        className="w-full max-w-[1347px] bg-[#F5F5F5] rounded-[24px] py-16 px-8 flex flex-col items-center"
        style={{ minHeight: '420px' }}
      >
        
        {/* Together We Make Badge */}
        <div 
          className="bg-[#555555] rounded-[50px] px-6 py-3 flex items-center gap-3 mb-8"
          style={{ height: '48px' }}
        >
          {/* White Circle Dot */}
          <div className="w-5 h-5 bg-white rounded-full"></div>
          
          {/* Text */}
          <span 
            className="text-white uppercase tracking-[0.06em] leading-none"
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 500,
              fontSize: '18px',
              letterSpacing: '6%'
            }}
          >
            Together, we make
          </span>
        </div>

        {/* Main Heading */}
        <h2 
          className="text-[#1B1B1A] uppercase tracking-[0.06em] leading-none mb-12 text-center"
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 500,
            fontSize: '42px',
            maxWidth: '575px'
          }}
        >
          Our Trusted Partners
        </h2>

        {/* Partners Logo Container */}
        <div 
          className="w-full max-w-[1184px] flex flex-wrap justify-center items-center gap-8 opacity-50"
          style={{ minHeight: '120px' }}
        >
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              style={{ 
                width: '120px', 
                height: '100px'
              }}
            >
              <div className="text-4xl mb-2">{partner.icon}</div>
              <div className="text-xs text-gray-600 font-medium text-center">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrustedPartnersSection;