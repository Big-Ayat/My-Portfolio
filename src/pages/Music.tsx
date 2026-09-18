import Layout from '../components/Layout'

const PLAYLIST_ID = '1L3ZfwA6pkG42j9pXPNF1q'

interface Album {
  title: string
  artist: string
  cover: string
}

const albums: Album[] = [
  { title: 'M$NEY', artist: 'Asake', cover: '/assets/images/music/album1-money.jpg' },
  { title: 'The Game Needs Us', artist: 'BNXN', cover: '/assets/images/music/album2-game-needs-us.jpg' },
  { title: 'Love Is A Kingdom', artist: 'Tems', cover: '/assets/images/music/album3-love-is-a-kingdom.jpg' },
  { title: 'THIS MUSIC MAY CONTAIN HOPE.', artist: 'RAYE', cover: '/assets/images/music/album4-this-music-may-contain-hope.jpg' },
]

export default function Music() {
  return (
    <Layout>
      <style>{`
        .vinyl-disc {
          right: -38%;
          transition: right 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vinyl-move {
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vinyl-card:hover .vinyl-disc {
          right: -14%;
        }
        .vinyl-card:hover .vinyl-move {
          transform: translateX(14px);
        }
      `}</style>
      <section className="bg-black-800 pt-20 pb-[120px]">
        <div className="container">
          <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-10" data-aos="fade-up">
            <h3 className="text-white text-4xl lg:text-5xl xl:text-[40px] tracking-[-1.5px]">Songs that I listen to on repeat</h3>
            <p className="paragraph mt-3 max-w-[560px]" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Discover the soundtrack to my design genius &mdash; where pixel perfection meets musical inspiration, one
              playlist at a time!
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-16" data-aos="fade-up" data-aos-delay="200">
            <iframe
              title="Spotify playlist"
              src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              style={{ border: 0 }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {albums.map((album, i) => (
              <div key={album.title} data-aos="fade-up" data-aos-delay={300 + i * 150}>
                <div className="vinyl-card" style={{ maxWidth: '320px' }}>
                  <div className="vinyl-move">
                    <div className="relative" style={{ maxWidth: '320px' }}>
                      <div
                        className="vinyl-disc absolute rounded-full"
                        style={{
                          top: '50%',
                          width: '88%',
                          aspectRatio: '1 / 1',
                          transform: 'translateY(-50%)',
                          background: '#1a1a1a',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <div
                          className="absolute rounded-full bg-primary"
                          style={{ top: '50%', left: '50%', width: '32%', aspectRatio: '1 / 1', transform: 'translate(-50%, -50%)' }}
                        />
                      </div>
                      <div className="relative rounded-lg overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)' }}>
                        <img
                          src={album.cover}
                          alt={`${album.title} by ${album.artist}`}
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>
                    <p className="text-white font-bold font-Syne text-lg mt-4">{album.title}</p>
                    <p className="text-sm font-normal font-Inter" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {album.artist}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
