import { useRef, useState } from "react";
import "./styles.css";

export default function MusicVideoWebsite() {
  const [language, setLanguage] = useState("en");
  const [showLyrics, setShowLyrics] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);
  const featuredAudioRef = useRef(null);

  const translations = {
    en: {
      navHome: "Home",
      navMusic: "Music",
      navVideos: "Videos",
      navLife: "Gallery",
      navAbout: "About",
      siteTitle: "Sakura Music World",
      introText1: "My original music, everyday moments, and creative world.",
      introText2:
        "A personal space for songs, visuals, memories, and the story behind each piece.",
      playMusic: "Play Music",
      musicTitle: "Music",
      musicDesc:
        "A growing collection of original songs in Chinese, Japanese, and English.",
      videosTitle: "Music Videos",
      videosDesc: "Official music videos and visual works will appear here.",
      comingSoon: "Coming Soon",
      lifeTitle: "Gallery",
      lifeDesc:
        "A collection of daily photos and videos. Click any item to view it in a larger size.",
      aboutTitle: "About Me",
      aboutText:
        "This is my personal music space, where I share songs, visual memories, and my creative journey through music.",
      playSong: "Play Song",
      hideLyrics: "Hide Lyrics",
      showLyrics: "Show Lyrics",
      songTitle: "破茧成火",
      nowPlaying: "Now Playing",
      close: "Close"
    },
    zh: {
      navHome: "首页",
      navMusic: "音乐作品",
      navVideos: "音乐视频",
      navLife: "生活记录",
      navAbout: "关于我",
      siteTitle: "Sakura Music World",
      introText1: "我的原创音乐、生活片段与创作世界。",
      introText2:
        "这是一个属于我的个人空间，放歌曲、影像、记忆，以及每一首作品背后的故事。",
      playMusic: "播放音乐",
      musicTitle: "音乐作品",
      musicDesc: "这里会持续收录我的中文、日文和英文原创歌曲。",
      videosTitle: "音乐视频",
      videosDesc: "官方音乐视频和影像作品会逐步更新在这里。",
      comingSoon: "即将更新",
      lifeTitle: "生活记录",
      lifeDesc:
        "这里会展示我的生活照片和视频。点击任意内容后，可以查看更大的原始显示效果。",
      aboutTitle: "关于我",
      aboutText:
        "这里是我的个人音乐空间。我会在这里分享歌曲、影像记忆，以及属于我的音乐创作旅程。",
      playSong: "播放歌曲",
      hideLyrics: "收起歌词",
      showLyrics: "查看歌词",
      songTitle: "破茧成火",
      nowPlaying: "正在播放",
      close: "关闭"
    },
    ja: {
      navHome: "ホーム",
      navMusic: "音楽作品",
      navVideos: "音楽映像",
      navLife: "ギャラリー",
      navAbout: "私について",
      siteTitle: "Sakura Music World",
      introText1: "私のオリジナル音楽、日々の瞬間、そして創作の世界。",
      introText2:
        "歌、映像、記憶、そして一つひとつの作品の背景を残していく、私だけの場所です。",
      playMusic: "音楽を再生",
      musicTitle: "音楽作品",
      musicDesc:
        "中国語、日本語、英語によるオリジナル曲を少しずつ収録していきます。",
      videosTitle: "音楽映像",
      videosDesc: "公式MVや映像作品をここに追加していきます。",
      comingSoon: "準備中",
      lifeTitle: "ギャラリー",
      lifeDesc:
        "日常の写真や動画をまとめた場所です。クリックすると大きなサイズで見ることができます。",
      aboutTitle: "私について",
      aboutText:
        "ここは私の個人的な音楽空間です。歌、映像の記録、そして音楽と共に歩んできた創作の旅をここで分かち合います。",
      playSong: "再生",
      hideLyrics: "歌詞を閉じる",
      showLyrics: "歌詞を見る",
      songTitle: "破茧成火",
      nowPlaying: "再生中",
      close: "閉じる"
    }
  };

  const t = translations[language];

  const lyrics = `终于一天沉默的我不再隐藏真的自我
不如就让我痛痛快快疯疯癫癫洒脱

认定了路就算明知前方布满荆棘坎坷
就算被嘲笑我这一生走的离经叛道
也值得

只要能够堂堂正正活成自己想要的我
可为何这个世界总爱逼人低头认错

那些所谓道理规则他们口中的对与错
最后却经不起任何一句质问与反驳
一反驳 就碎了

有些人 有些魂 莫名其妙没了
所有付出换来的只是他们对我的冷漠

既然你 永远都 不接受真的我
那我又何必低声下气活在你设定的枷锁
不如就此毁灭一切彻底撕碎虚假的我

只要能够堂堂正正活成自己想要的我
可为何这个世界总爱逼人低头认错

那些所谓道理规则他们口中的对与错
最后却经不起任何一句质问与反驳
一反驳 就碎了

有些人 有些魂 莫名其妙没了
所有付出换来的只是他们对我的冷漠

既然你 永远都 不接受真的我
那我又何必低声下气活在你设定的枷锁
不如就此毁灭一切彻底撕碎虚假的我

那些人 那些话 全都化作烟火
所有质疑换来的只是我燃烧的怒火

既然说 你们都 看不懂真的我
那我又何必继续扮演那个伪装的我
不如就此推翻一切活成自我破茧成火

yeah yeah`;

  const songs = [
    {
      id: 1,
      title: t.songTitle,
      file: "/破茧成火.mp3"
    }
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/490733849_4049302022063930_6802643808855178055_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_D2qkr24kwMQ7kNvwEdgC-c&_nc_oc=AdpCtvybJEDZa1xE8MSJejEeu1OpKDBZOxjKbWBKoCVi2IOwbKpa6FwZAofxXXm0IjBjUYHJ5EsJ0RSGaOliuJZK&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=_0vSnBLufGfPctc8c-57XA&_nc_ss=7a32e&oh=00_AfyRZRDnNCaZSMTQ2MNNkj8ddfI2kYH1Tya8HhISRodwFQ&oe=69C569E4",
      alt: "life 1"
    },
    {
      id: 2,
      type: "image",
      src: "https://scontent.fakl5-2.fna.fbcdn.net/v/t39.30808-6/514984746_4129018634092268_1732216122266108636_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=HurjaA6y-KIQ7kNvwFPhZoI&_nc_oc=Ado6sUx8gvsxj2InVc5NebEbyohJRyj-X6-wjKpvZZ97SMKZhcjtz8hHLj9_NNa6H3PjiMN83V_9OUNSYFRQjTTf&_nc_zt=23&_nc_ht=scontent.fakl5-2.fna&_nc_gid=UWas918LnMsd4afySLWnJA&_nc_ss=7a32e&oh=00_AfwHrLyN2rge6agRSCYkHyNktehvJq4aJuabCB5MuBbULQ&oe=69C5684E",
      alt: "life 2"
    },
    {
      id: 3,
      type: "image",
      src: "https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/624406739_4342880279372768_90288687277872195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=cxZryc6yudkQ7kNvwFcEDkI&_nc_oc=Adq85fBJv6Kgp4iQJ2FzHhaaFVSdn8aVMnRIWr5rm4APoKYYw01zlo75bBoltCC1UjPC6fsypG2p0RNroZ746sD0&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=j0TZ0ZPwkSVYU2JxDXzJgQ&_nc_ss=7a32e&oh=00_AfzVn7DgxyZ6TIC524gbGxqMsApjyD8cD-MiIGk1biqYyA&oe=69C58639",
      alt: "life 3"
    }
    // 以后加视频时直接这样加：
    // {
    //   id: 4,
    //   type: "video",
    //   src: "/gallery-video.mp4",
    //   alt: "life video"
    // }
  ];

  const handleFeaturedPlay = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      if (featuredAudioRef.current) {
        featuredAudioRef.current.play();
      }
    }, 350);
  };

  return (
    <div className="page">
      <main className="container">
        <header className="topbar">
          <div className="topbar-spacer" />
          <h1 className="site-title">{t.siteTitle}</h1>

          <div className="language-switcher">
            <button
              className={language === "en" ? "lang-link active" : "lang-link"}
              onClick={() => setLanguage("en")}
            >
              English
            </button>
            <button
              className={language === "zh" ? "lang-link active" : "lang-link"}
              onClick={() => setLanguage("zh")}
            >
              中文
            </button>
            <button
              className={language === "ja" ? "lang-link active" : "lang-link"}
              onClick={() => setLanguage("ja")}
            >
              日本語
            </button>
          </div>
        </header>

        <section id="home" className="hero-layout">
          <div className="intro-panel">
            <p>{t.introText1}</p>
            <p>{t.introText2}</p>
          </div>

          <div className="hero-image-card">
            <img
              src="https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/589422967_4280149748979155_7990063532555381749_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=S_hrrsD8RiMQ7kNvwEXl6Wg&_nc_oc=Adp5KoK8QhiYDg2zxp6F0_2SrKjEV31wG3rAQX-lFSBFe3z1HdElhVNs-xTzvkl_SH7braAcnOiSYo4Ycn4Tofxg&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=31nbs625XnQqu6ameR2j7Q&_nc_ss=7a32e&oh=00_AfwPj8fVMlNnfBLxiUXgkORgVd92KDm8MWTzT-ZJ57ZuKg&oe=69C58EFC"
              alt="Sakura hero"
            />
          </div>

          <div className="player-panel">
            <h2>{t.playMusic}</h2>
            <div className="player-box">
              <button className="play-circle" onClick={handleFeaturedPlay}>
                ▶
              </button>
              <p className="player-note">{t.nowPlaying}</p>
              <p className="player-song-name">{t.songTitle}</p>
            </div>
          </div>
        </section>

        <nav className="bottom-nav">
          <a href="#home">{t.navHome}</a>
          <a href="#music">{t.navMusic}</a>
          <a href="#videos">{t.navVideos}</a>
          <a href="#life">{t.navLife}</a>
          <a href="#about">{t.navAbout}</a>
        </nav>

        <section id="music" className="section">
          <div className="section-heading">
            <h2>{t.musicTitle}</h2>
            <p>{t.musicDesc}</p>
          </div>

          <div className="music-list">
            {songs.map((song, index) => (
              <article className="song-card" key={song.id}>
                <div className="song-info">
                  <div>
                    <div className="song-label">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4>{song.title}</h4>
                  </div>

                  <div className="song-actions">
                    <button
                      className="ghost-button small"
                      onClick={() => setShowLyrics(!showLyrics)}
                    >
                      {showLyrics ? t.hideLyrics : t.showLyrics}
                    </button>
                  </div>
                </div>

                <audio
                  controls
                  className="audio-player"
                  ref={index === 0 ? featuredAudioRef : null}
                >
                  <source src={song.file} type="audio/mpeg" />
                </audio>

                {showLyrics && index === 0 && (
                  <div className="lyrics-box">
                    <pre>{lyrics}</pre>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="videos" className="section">
          <div className="section-heading">
            <h2>{t.videosTitle}</h2>
            <p>{t.videosDesc}</p>
          </div>

          <div className="placeholder-card">{t.comingSoon}</div>
        </section>

        <section id="life" className="section">
          <div className="section-heading">
            <h2>{t.lifeTitle}</h2>
            <p>{t.lifeDesc}</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                className="gallery-card"
                onClick={() => setActiveMedia(item)}
                aria-label={item.alt}
              >
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt} />
                ) : (
                  <video src={item.src} muted playsInline preload="metadata" />
                )}
                <span className="gallery-type-tag">
                  {item.type === "image" ? "Photo" : "Video"}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="about" className="section about-box">
          <div className="section-heading">
            <h2>{t.aboutTitle}</h2>
          </div>
          <p>{t.aboutText}</p>
        </section>

        <footer className="footer">© Sakura Music World</footer>
      </main>

      {activeMedia && (
        <div className="media-modal" onClick={() => setActiveMedia(null)}>
          <div
            className="media-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveMedia(null)}
            >
              {t.close}
            </button>

            {activeMedia.type === "image" ? (
              <img
                className="modal-media"
                src={activeMedia.src}
                alt={activeMedia.alt}
              />
            ) : (
              <video
                className="modal-media"
                src={activeMedia.src}
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
const galleryItems = [
  { id: 1, type: "image", src: "/gallery/photo1.jpg", alt: "photo 1" },
  { id: 2, type: "image", src: "/gallery/photo2.jpg", alt: "photo 2" },
  { id: 3, type: "image", src: "/gallery/photo3.jpg", alt: "photo 3" },
  { id: 4, type: "image", src: "/gallery/photo4.jpg", alt: "photo 4" },
  { id: 5, type: "image", src: "/gallery/photo5.jpg", alt: "photo 5" },
  { id: 6, type: "image", src: "/gallery/photo6.jpg", alt: "photo 6" },
  { id: 7, type: "image", src: "/gallery/photo7.jpg", alt: "photo 7" },
  { id: 8, type: "image", src: "/gallery/photo8.jpg", alt: "photo 8" },
  { id: 9, type: "image", src: "/gallery/photo9.jpg", alt: "photo 9" },
  { id: 10, type: "image", src: "/gallery/photo10.jpg", alt: "photo 10" },
  { id: 11, type: "image", src: "/gallery/photo11.jpg", alt: "photo 11" },
  { id: 12, type: "image", src: "/gallery/photo12.jpg", alt: "photo 12" },
  { id: 13, type: "image", src: "/gallery/photo13.jpg", alt: "photo 13" },
  { id: 14, type: "image", src: "/gallery/photo14.jpg", alt: "photo 14" },
  { id: 15, type: "image", src: "/gallery/photo15.jpg", alt: "photo 15" },
  { id: 16, type: "image", src: "/gallery/photo16.jpg", alt: "photo 16" },
  { id: 17, type: "image", src: "/gallery/photo17.jpg", alt: "photo 17" },
  { id: 18, type: "image", src: "/gallery/photo18.jpg", alt: "photo 18" },
  { id: 19, type: "image", src: "/gallery/photo19.jpg", alt: "photo 19" },
  { id: 20, type: "image", src: "/gallery/photo20.jpg", alt: "photo 20" },
  { id: 21, type: "image", src: "/gallery/photo21.jpg", alt: "photo 21" },
  { id: 22, type: "image", src: "/gallery/photo22.jpg", alt: "photo 22" },
  { id: 23, type: "image", src: "/gallery/photo23.jpg", alt: "photo 23" },
  { id: 24, type: "image", src: "/gallery/photo24.jpg", alt: "photo 24" },
  { id: 25, type: "image", src: "/gallery/photo25.jpg", alt: "photo 25" },
  { id: 26, type: "image", src: "/gallery/photo26.jpg", alt: "photo 26" },
  { id: 27, type: "image", src: "/gallery/photo27.jpg", alt: "photo 27" },
  { id: 28, type: "image", src: "/gallery/photo28.jpg", alt: "photo 28" },
  { id: 29, type: "image", src: "/gallery/photo29.jpg", alt: "photo 29" },
  { id: 30, type: "image", src: "/gallery/photo30.jpg", alt: "photo 30" },
  { id: 31, type: "image", src: "/gallery/photo31.jpg", alt: "photo 31" },
  { id: 32, type: "image", src: "/gallery/photo32.jpg", alt: "photo 32" },
  { id: 33, type: "image", src: "/gallery/photo33.jpg", alt: "photo 33" },
  { id: 34, type: "image", src: "/gallery/photo34.jpg", alt: "photo 34" },
  { id: 35, type: "image", src: "/gallery/photo35.jpg", alt: "photo 35" },
  { id: 36, type: "image", src: "/gallery/photo36.jpg", alt: "photo 36" },
  { id: 37, type: "image", src: "/gallery/photo37.jpg", alt: "photo 37" },
  { id: 38, type: "image", src: "/gallery/photo38.jpg", alt: "photo 38" },
  { id: 39, type: "image", src: "/gallery/photo39.jpg", alt: "photo 39" },
  { id: 40, type: "image", src: "/gallery/photo40.jpg", alt: "photo 40" },
  { id: 41, type: "image", src: "/gallery/photo41.jpg", alt: "photo 41" },
  { id: 42, type: "image", src: "/gallery/photo42.jpg", alt: "photo 42" },
  { id: 43, type: "image", src: "/gallery/photo43.jpg", alt: "photo 43" },
  { id: 44, type: "image", src: "/gallery/photo44.jpg", alt: "photo 44" },
  { id: 45, type: "image", src: "/gallery/photo45.jpg", alt: "photo 45" },
  { id: 46, type: "image", src: "/gallery/photo46.jpg", alt: "photo 46" },
  { id: 47, type: "image", src: "/gallery/photo47.jpg", alt: "photo 47" },
  { id: 48, type: "image", src: "/gallery/photo48.jpg", alt: "photo 48" },
  { id: 49, type: "image", src: "/gallery/photo49.jpg", alt: "photo 49" },
  { id: 50, type: "image", src: "/gallery/photo50.jpg", alt: "photo 50" }
];
