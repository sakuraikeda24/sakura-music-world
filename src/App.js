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
      musicDesc: "这里会持续收录我的原创歌曲。",
      videosTitle: "音乐视频",
      videosDesc: "官方音乐视频会逐步更新。",
      comingSoon: "即将更新",
      lifeTitle: "生活记录",
      lifeDesc: "点击图片可以查看大图。",
      aboutTitle: "关于我",
      aboutText: "这是我的个人音乐空间。",
      hideLyrics: "收起歌词",
      showLyrics: "查看歌词",
      songTitle: "破茧成火",
      nowPlaying: "正在播放",
      close: "关闭"
    }
  };

  const t = translations[language];

  const songs = [
    {
      id: 1,
      title: t.songTitle,
      file: "/破茧成火.mp3"
    }
  ];

  // ✅ 关键：自动加载 50 张图片
  const galleryItems = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    type: "image",
    src: `/gallery/photo${index + 1}.jpg`,
    alt: `photo ${index + 1}`
  }));

  const handleFeaturedPlay = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      if (featuredAudioRef.current) {
        featuredAudioRef.current.play();
      }
    }, 300);
  };

  return (
    <div className="page">
      <main className="container">

        {/* 顶部 */}
        <header className="topbar">
          <h1 className="site-title">{t.siteTitle}</h1>

          <div className="language-switcher">
            <button onClick={() => setLanguage("en")}>EN</button>
            <button onClick={() => setLanguage("zh")}>中文</button>
          </div>
        </header>

        {/* 首页 */}
        <section className="hero-layout">
          <div className="intro-panel">
            <p>{t.introText1}</p>
            <p>{t.introText2}</p>
          </div>

          <div className="hero-image-card">
            <img src="/gallery/photo1.jpg" alt="hero" />
          </div>

          <div className="player-panel">
            <button onClick={handleFeaturedPlay}>
              ▶ {t.playMusic}
            </button>
          </div>
        </section>

        {/* 导航 */}
        <nav className="bottom-nav">
          <a href="#music">{t.navMusic}</a>
          <a href="#life">{t.navLife}</a>
          <a href="#about">{t.navAbout}</a>
        </nav>

        {/* 音乐 */}
        <section id="music" className="section">
          <h2>{t.musicTitle}</h2>

          {songs.map((song) => (
            <div key={song.id}>
              <h4>{song.title}</h4>

              <audio controls ref={featuredAudioRef}>
                <source src={song.file} />
              </audio>

              <button onClick={() => setShowLyrics(!showLyrics)}>
                {showLyrics ? t.hideLyrics : t.showLyrics}
              </button>
            </div>
          ))}
        </section>

        {/* Gallery */}
        <section id="life" className="section">
          <h2>{t.lifeTitle}</h2>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.alt}
                className="gallery-card"
                onClick={() => setActiveMedia(item)}
              />
            ))}
          </div>
        </section>

        {/* 弹窗 */}
        {activeMedia && (
          <div className="media-modal" onClick={() => setActiveMedia(null)}>
            <img src={activeMedia.src} className="modal-media" />
          </div>
        )}

      </main>
    </div>
  );
}
