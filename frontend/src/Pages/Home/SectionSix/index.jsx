import React, { useState, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import testimonial2 from '../../../assets/Images/Home/Testimonial3.jpg';
import testimonial3 from '../../../assets/Images/Home/Testimonaial2.jpg';

const SectionSix = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [playingVideo, setPlayingVideo] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // For active dot

  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|v\/|embed\/|watch\?v=)([^#&?]{11})/);
    return match?.[1];
  };

  const testimonials = [
    {
      name: 'Dr. Emily Carter',
      role: 'Wedding Clients',
      text: '"The performance was nothing short of magical! The solo singer made our wedding unforgettable, and the music created the perfect atmosphere. Highly recommend!"',
      img: testimonial2,
      youtubeUrl: "https://youtu.be/M-KdPAa3gWA",
    },
    {
      name: 'Mark',
      role: 'Special Occasion Planner',
      text: '"From start to finish, the service was impeccable. The team helped us pick the right artists, and everything went smoothly. The musicians were top-notch, and our guests had a fantastic time!"',
      img: testimonial3,
      youtubeUrl: "https://youtu.be/M-KdPAa3gWA",
    },
  ];

  const allSlides = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  // Embla: Track selected slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Jump to slide when dot is clicked
  const scrollTo = (index) => {
    emblaApi && emblaApi.scrollTo(index);
  };

  return (
    <div className="w-full bg-white py-4 px-1">
      <div className="container mx-auto">

        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-3 mt-29 text-black bg-[#F5F5F5] rounded-full pl-4 pr-6 py-2 text-md font-medium tracking-wider">
            <div className="w-5 h-5 bg-black rounded-full"></div>
            OUR TESTIMONIALS
          </span>
        </div>

        <h2 className="text-[#1B1B1A] text-center font-bold mb-8">
          WHAT OUR CLIENTS SAY
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {allSlides.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-full px-4">

                {/* MOBILE */}
                <div className="lg:hidden">
                  <div className="bg-[#F5F5F5] rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-8 pb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.name}</h3>
                      <p className="text-gray-600 leading-relaxed text-base mb-4">{t.text}</p>
                      <p className="text-xl font-medium text-gray-800">{t.role}</p>
                    </div>

                    <div className="px-8 pb-8">
                      <div className="relative rounded-2xl overflow-hidden bg-black">
                        {playingVideo === i ? (
                          <iframe
                            className="w-full aspect-video"
                            src={`https://www.youtube.com/embed/${getYouTubeId(t.youtubeUrl)}?autoplay=1&rel=0&modestbranding=1`}
                            title={t.name}
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          />
                        ) : (
                          <>
                            <img
                              src={t.img}
                              alt={t.name}
                              className="w-full h-60 object-cover object-top grayscale"
                            />
                            <div
                              onClick={() => setPlayingVideo(i)}
                              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer hover:bg-black/50 transition"
                            >
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                                <Play className="w-8 h-8 text-black fill-black ml-1" />
                              </div>
                            </div>
                          </>
                        )}
                        {playingVideo === i && (
                          <button
                            onClick={() => setPlayingVideo(null)}
                            className="absolute top-3 right-3 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg text-2xl font-bold z-10"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* DESKTOP */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-8">

                    {/* CARD 1: Dr. Emily Carter */}
                    <div className="bg-[#F5F5F5] rounded-[40px] p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#DEDEE0] rounded-[40px] w-full h-[400px] px-4 py-4 lg:py-6 flex flex-col">
                          <span className="text-[#1C1A1A] text-2xl font-bold mt-2 mb-2">Dr. Emily Carter</span>
                          <p className="text-[#555555] font-normal lg:leading-[18px] xl:leading-[20px]">
                            "The performance was nothing short of magical! The solo singer made our wedding unforgettable, and the music created the perfect atmosphere. Highly recommend!"
                          </p>
                          <p className="text-[#555555] text-xl lg:mt-12">Wedding Clients</p>
                        </div>

                        <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden bg-black">
                          {playingVideo === i ? (
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${getYouTubeId(testimonials[0].youtubeUrl)}?autoplay=1&rel=0&modestbranding=1`}
                              title="Dr. Emily Carter"
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          ) : (
                            <>
                              <img src={testimonial2} alt="Dr Emily" className="w-full h-full object-cover grayscale" />
                              <div
                                onClick={() => setPlayingVideo(i)}
                                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer hover:bg-black/30 transition-all"
                              >
                                <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                  <Play className="w-12 h-12 text-black fill-black ml-2" />
                                </button>
                              </div>
                            </>
                          )}
                          {playingVideo === i && (
                            <button
                              onClick={() => setPlayingVideo(null)}
                              className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg text-3xl font-bold z-10"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* CARD 2: Mark */}
                    <div className="bg-[#F5F5F5] rounded-[40px] p-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#DEDEE0] rounded-[40px] w-full h-auto px-6 py-4 flex flex-col">
                          <h3 className="text-[#1C1A1A] text-2xl font-bold mt-2 mb-2">Mark</h3>
                          <p className="text-[#555555] font-normal lg:leading-[18px] xl:leading-[20px]">
                            "From start to finish, the service was impeccable. The team helped us pick the right artists, and everything went smoothly. The musicians were top-notch, and our guests had a fantastic time!"
                          </p>
                          <p className="text-[#555555] lg:text-lg xl:mt-12 lg:mt-6 lg:leading-[20px]">Special Occasion Planner</p>
                        </div>

                        <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden bg-black">
                          {playingVideo === i + 1 ? (
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${getYouTubeId(testimonials[1].youtubeUrl)}?autoplay=1&rel=0&modestbranding=1`}
                              title="Mark"
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          ) : (
                            <>
                              <img src={testimonial3} alt="Mark" className="w-full h-full object-cover grayscale" />
                              <div
                                onClick={() => setPlayingVideo(i + 1)}
                                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer hover:bg-black/30 transition-all"
                              >
                                <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                  <Play className="w-12 h-12 text-black fill-black ml-2" />
                                </button>
                              </div>
                            </>
                          )}
                          {playingVideo === i + 1 && (
                            <button
                              onClick={() => setPlayingVideo(null)}
                              className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg text-3xl font-bold z-10"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>


        <div className="flex justify-center mt-8 gap-3">
          {[0, 1, 2, 3].map((dotIndex) => {
            const slideIndex = dotIndex * testimonials.length; 
            return (
              <button
                key={dotIndex}
                onClick={() => scrollTo(slideIndex)}
                className={`transition-all duration-300 rounded-full ${
                  selectedIndex === slideIndex
                    ? 'bg-black w-3 h-3'
                    : 'bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to slide group ${dotIndex + 1}`}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SectionSix;