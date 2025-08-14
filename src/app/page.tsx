'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  MessageCircle,
  Mail,
  Car,
  Gamepad2,
  Plane,
  UtensilsCrossed,
  Sparkles,
  Heart,
  Users,
  Calendar,
} from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Go-Kart Racing',
    description: 'High-speed thrills and friendly competition on the track',
    icon: Car,
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Billiards Night',
    description: 'Strategic games and casual conversations over pool',
    icon: Gamepad2,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Holiday Adventures',
    description: 'Exploring new destinations and creating memories together',
    icon: Plane,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'Food Gatherings',
    description: 'Sharing delicious meals and discovering new flavors',
    icon: UtensilsCrossed,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'Fun Activities',
    description: 'Spontaneous adventures and memorable moments',
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 6,
    title: 'Team Bonding',
    description: 'Building stronger friendships through shared experiences',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
];

const featuredMemories = [
  {
    id: 1,
    caption: 'Badminton',
    date: 'December 2024',
    activity: 'Sports',
    src: '/events/badminton.jpeg',
    alt: 'Badminton Tournament',
  },
  {
    id: 2,
    caption: 'Billiard',
    date: 'January 2025',
    activity: 'Billiards',
    src: '/events/billiard2.png',
    alt: 'Billiard Championship',
  },
  {
    id: 3,
    caption: 'Makan Bersama Tim',
    date: 'January 2025',
    activity: 'Food',
    src: '/events/food.JPG',
    alt: 'Team Food Gathering',
  },
  {
    id: 4,
    caption: 'Petualangan Kuliner',
    date: 'March 2025',
    activity: 'Food',
    src: '/events/food2.jpeg',
    alt: 'Food Adventure',
  },
];

const galleryImages = [
  { src: '/events/badminton.jpeg', alt: 'Badminton Tournament', width: 300, height: 400 },
  { src: '/events/billiard.jpeg', alt: 'Billiard Championship', width: 400, height: 400 },
  { src: '/events/billiard2.png', alt: 'Pool Tournament', width: 350, height: 300 },
  { src: '/events/food.JPG', alt: 'Food Gathering', width: 400, height: 300 },
  { src: '/events/food1.png', alt: 'Team Dinner', width: 300, height: 300 },
  { src: '/events/food2.jpeg', alt: 'Food Adventure', width: 300, height: 350 },
  { src: '/events/food3.jpeg', alt: 'Team Bonding Meal', width: 400, height: 350 },
];

export default function Home() {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMemory((prev) => (prev + 1) % featuredMemories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextMemory = () => {
    setCurrentMemory((prev) => (prev + 1) % featuredMemories.length);
  };

  const prevMemory = () => {
    setCurrentMemory((prev) => (prev - 1 + featuredMemories.length) % featuredMemories.length);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lucu Terus Entertainment",
    "description": "A vibrant team entertainment website showcasing our journey, activities, and memorable moments together. From go-kart racing to billiards nights, food gatherings to holiday adventures.",
    "url": "https://lucu-terus.vercel.app",
    "logo": "https://lucu-terus.vercel.app/logo.png",
    "sameAs": [
      "https://instagram.com/lucuterus",
      "https://wa.me/yourwhatsappnumber"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Indonesian"]
    },
    "knowsAbout": [
      "Team Building",
      "Entertainment",
      "Go-Kart Racing",
      "Billiards",
      "Food Gatherings",
      "Team Activities",
      "Adventure Sports"
    ],
    "activity": [
      {
        "@type": "Event",
        "name": "Go-Kart Racing",
        "description": "High-speed thrills and friendly competition on the track"
      },
      {
        "@type": "Event",
        "name": "Billiards Night",
        "description": "Strategic games and casual conversations over pool"
      },
      {
        "@type": "Event",
        "name": "Food Gatherings",
        "description": "Sharing delicious meals and discovering new flavors"
      }
    ]
  };

  return (
    <div className='min-h-screen bg-gray-900'>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black' />
        <div className='absolute inset-0'>
          <div className='absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-bounce' />
          <div className='absolute top-32 right-20 w-16 h-16 bg-yellow-400/30 rounded-full animate-pulse' />
          <div className='absolute bottom-20 left-1/4 w-12 h-12 bg-orange-500/25 rounded-full animate-bounce delay-1000' />
          <div className='absolute bottom-40 right-1/3 w-14 h-14 bg-red-600/20 rounded-full animate-pulse delay-500' />
          {/* Red angular shapes inspired by poster */}
          <div className='absolute top-0 left-0 w-96 h-32 bg-gradient-to-r from-red-600 to-orange-500 transform -skew-y-12 opacity-80' />
          <div className='absolute top-20 right-0 w-64 h-24 bg-gradient-to-l from-red-500 to-orange-400 transform skew-y-6 opacity-70' />
        </div>

        <div className='relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto'>
          <div className='mb-8'>
            <Image
              src='/logo.png'
              alt='Team Logo'
              width={400}
              height={300}
              className='mx-auto rounded-2xl shadow-2xl border-4 border-red-500/50'
              priority
            />
          </div>

          <h1 className='text-6xl md:text-8xl font-black mb-6 transform -skew-y-1'>
            <span
              className='block text-yellow-400 drop-shadow-[0_0_20px_rgba(255,255,0,0.5)] stroke-black stroke-2'
              style={{
                WebkitTextStroke: '3px #000',
                textShadow:
                  '4px 4px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
              }}>
              LUCU TERUS
            </span>
            <span className='block text-yellow-300 text-4xl md:text-5xl mt-2 font-bold tracking-wider'>
              ENTERTAINMENT
            </span>
          </h1>

          <p className='text-lg md:text-xl mb-4 text-cyan-400 font-bold tracking-wide uppercase'>
            KALAU OK LANJUT, KALO ENGGA GANTI PADEL
          </p>

          <div className='mb-8'>
            <h2
              className='text-4xl md:text-6xl font-black text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.7)]'
              style={{
                WebkitTextStroke: '2px #000',
                textShadow:
                  '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
              }}>
              WACANA <span className='text-red-500'>GA</span>
              <span className='text-white'>SS</span> <span className='text-yellow-400'>GOKART</span>
            </h2>
          </div>

          <p className='text-sm md:text-base mb-8 text-green-400 font-bold tracking-wide uppercase'>
            RENCANA JUMAT BESOK
            <br />
            PEGASUS KARTING, BERES PULANG KANTOR
          </p>

          <Button
            size='lg'
            className='bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600 font-black px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400'
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }>
            Discover Our Journey
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id='about' className='py-20 bg-gray-800'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2
              className='text-4xl md:text-5xl font-black text-yellow-400 mb-6'
              style={{
                WebkitTextStroke: '2px #000',
                textShadow:
                  '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
              }}>
              TENTANG <span className='text-red-500'>TIM</span>{' '}
              <span className='text-white'>KITA</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-8 rounded-full' />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-white leading-relaxed font-medium'>
                Kami lebih dari sekedar rekan kerja – kami adalah keluarga yang percaya bahwa momen
                terbaik dalam hidup harus dibagi bersama. Perjalanan kami bersama telah melewati
                tahun-tahun penuh tawa, petualangan, dan kenangan tak terhitung yang memperkuat
                ikatan kami.
              </p>

              <p className='text-lg text-white leading-relaxed font-medium'>
                Dari balapan go-kart yang memacu adrenalin hingga percakapan santai saat makan
                malam, dari menjelajahi destinasi baru hingga kompetisi billiard yang seru, kami
                menemukan kegembiraan dalam setiap pengalaman yang dibagi bersama.
              </p>

              <div className='flex items-center space-x-8 pt-4'>
                <div className='text-center'>
                  <div className='text-3xl font-black text-yellow-400'>5+</div>
                  <div className='text-cyan-400 font-bold'>PETUALANGAN</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-black text-red-500'>1</div>
                  <div className='text-cyan-400 font-bold'>TAHUN BERSAMA</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-black text-orange-500'>∞</div>
                  <div className='text-cyan-400 font-bold'>KENANGAN</div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-3' />
              <Image
                src='/events/food1.png'
                alt='Team Bonding Meal'
                width={500}
                height={400}
                className='relative rounded-3xl shadow-xl object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity Highlights */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2
              className='text-4xl md:text-5xl font-black text-yellow-400 mb-6'
              style={{
                WebkitTextStroke: '2px #000',
                textShadow:
                  '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
              }}>
              AKTIVITAS <span className='text-red-500'>FAVORIT</span>{' '}
              <span className='text-white'>KAMI</span>
            </h2>
            <p className='text-xl text-cyan-400 max-w-2xl mx-auto font-bold'>
              SETIAP AKTIVITAS MEMBUAT KAMI SEMAKIN DEKAT DAN MENCIPTAKAN KENANGAN ABADI
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card
                  key={activity.id}
                  className='group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-yellow-400 overflow-hidden bg-gray-800'>
                  <div
                    className={`h-48 bg-gradient-to-br ${activity.color} relative overflow-hidden`}>
                    <div className='absolute inset-0 bg-black/40' />
                    <div className='absolute top-4 right-4'>
                      <IconComponent className='h-8 w-8 text-white drop-shadow-lg' />
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span
                        className='text-white text-lg font-black drop-shadow-lg'
                        style={{ WebkitTextStroke: '1px #000' }}>
                        {activity.title}
                      </span>
                    </div>
                  </div>
                  <CardContent className='p-6 bg-gray-800'>
                    <h3 className='text-xl font-black text-yellow-400 mb-2 group-hover:text-red-500 transition-colors'>
                      {activity.title}
                    </h3>
                    <p className='text-white font-medium'>{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Memories Carousel */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2
              className='text-4xl md:text-5xl font-black text-yellow-400 mb-6'
              style={{
                WebkitTextStroke: '2px #000',
                textShadow:
                  '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
              }}>
              KENANGAN <span className='text-red-500'>TERBAIK</span>
            </h2>
            <p className='text-xl text-cyan-400 font-bold'>
              HIDUPKAN KEMBALI MOMEN TERINDAH BERSAMA KAMI
            </p>
          </div>

          <div className='relative'>
            <div className='overflow-hidden rounded-3xl shadow-2xl'>
              <div className='relative h-96 md:h-[500px] bg-gradient-to-br from-purple-500 to-pink-500'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Image
                    src={featuredMemories[currentMemory].src}
                    alt={featuredMemories[currentMemory].alt}
                    width={600}
                    height={400}
                    className='rounded-lg object-cover w-full h-full'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-8 left-8 text-white'>
                  <h3 className='text-2xl md:text-3xl font-bold mb-2'>
                    {featuredMemories[currentMemory].caption}
                  </h3>
                  <div className='flex items-center space-x-4 text-white/90'>
                    <span className='flex items-center'>
                      <Calendar className='h-4 w-4 mr-2' />
                      {featuredMemories[currentMemory].date}
                    </span>
                    <span>•</span>
                    <span>{featuredMemories[currentMemory].activity}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevMemory}
              aria-label='Previous memory'
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-2 border-yellow-400'>
              <ChevronLeft className='h-6 w-6' />
            </button>

            <button
              onClick={nextMemory}
              aria-label='Next memory'
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-2 border-yellow-400'>
              <ChevronRight className='h-6 w-6' />
            </button>

            <div className='flex justify-center mt-6 space-x-2'>
              {featuredMemories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMemory(index)}
                  aria-label={`Go to memory ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMemory
                      ? 'bg-yellow-400 w-8 border-2 border-red-500'
                      : 'bg-gray-500 hover:bg-gray-400 border border-yellow-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2
              className='text-4xl md:text-5xl font-black text-yellow-400 mb-6'
              style={{
                WebkitTextStroke: '2px #000',
                textShadow:
                  '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
              }}>
              GALERI <span className='text-red-500'>FOTO</span>
            </h2>
            <p className='text-xl text-cyan-400 font-bold'>
              SEKILAS PETUALANGAN DAN MOMEN BERSAMA KAMI
            </p>
          </div>

          <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className='break-inside-avoid cursor-pointer group'
                onClick={() => setLightboxImage(`gallery-${index}`)}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className='w-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Social Links */}
      <footer className='py-16 bg-black text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2
            className='text-3xl md:text-4xl font-black text-yellow-400 mb-6'
            style={{
              WebkitTextStroke: '2px #000',
              textShadow:
                '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000',
            }}>
            TETAP <span className='text-red-500'>TERHUBUNG</span>
          </h2>
          <p className='text-xl text-cyan-400 mb-8 font-bold'>
            IKUTI PETUALANGAN KAMI DAN BERGABUNGLAH DALAM KESERUAN!
          </p>

          <div className='flex justify-center space-x-6 mb-8'>
            <Link
              href='#'
              className='bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 p-4 rounded-full transition-all duration-300 hover:scale-110 border-2 border-yellow-400'>
              <Instagram className='h-8 w-8' />
            </Link>
            <Link
              href='#'
              className='bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 p-4 rounded-full transition-all duration-300 hover:scale-110 border-2 border-yellow-400'>
              <MessageCircle className='h-8 w-8' />
            </Link>
            <Link
              href='#'
              className='bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 p-4 rounded-full transition-all duration-300 hover:scale-110 border-2 border-yellow-400'>
              <Mail className='h-8 w-8' />
            </Link>
          </div>

          <div className='border-t border-red-500/50 pt-8'>
            <p className='text-white/70 font-medium'>
              © 2025 LUCU TERUS ENTERTAINMENT. Made with ❤️ and lots of GOKART memories.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          onClick={() => setLightboxImage(null)}>
          <div className='relative max-w-4xl max-h-full'>
            <div className='relative'>
              <Image
                src={galleryImages[parseInt(lightboxImage.split('-')[1])].src}
                alt={galleryImages[parseInt(lightboxImage.split('-')[1])].alt}
                width={800}
                height={600}
                className='max-w-full max-h-[80vh] object-contain rounded-lg'
                onClick={(e) => e.stopPropagation()}
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {galleryImages[parseInt(lightboxImage.split('-')[1])].alt}
                </h3>
                <p className='text-gray-300'>LUCU TERUS ENTERTAINMENT - KENANGAN BERSAMA</p>
              </div>
            </div>
            <button
              onClick={() => setLightboxImage(null)}
              className='absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full border-2 border-yellow-400 transition-all duration-300 hover:scale-110'>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
