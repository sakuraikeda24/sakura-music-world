import { useState } from "react";
import "./styles.css";

export default function MusicVideoWebsite() {
  const [activeVideo, setActiveVideo] = useState(null);

  const featuredVideos = [
    {
      title: "中文作品 01",
      description: "这里放你的中文原创音乐短视频",
      tag: "中文",
      cover:
        "https://scontent.fak15-2.fna.fbcdn.net/v/t39.30808-6/515436854_41290.jpg",
      videoUrl: "https://www.youtube.com/watch?v=01c4oLqYoJo"
    },
    {
      title: "日文作品 01",
      description: "这里放你的日文原创音乐短视频",
      tag: "日文",
      cover: "https://i.ibb.co/1GX15tPX/20260227224026-12-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=01c4oLqYoJo"
    },
    {
      title: "英文作品 01",
      description: "这里放你的英文原创音乐短视频",
      tag: "English",
      cover:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=01c4oLqYoJo"
    }
  ];

  const musicWorks = [
    {
      language: "中文作品",
      text: "抒情、叙事感、适合展示你的原创歌词与现场片段"
    },
    {
      language: "日文作品",
      text: "适合放你偏日系、旋律感强、画面感明显的作品"
    },
    {
      language: "英文作品",
      text: "适合展示国际化风格、live session 或 acoustic 版本"
    }
  ];

  const galleryPhotos = [
    {
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      alt: "Live stage moment"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
      alt: "Studio writing day"
    },
    {
      src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
      alt: "Music room"
    },
    {
      src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop",
      alt: "Artist portrait"
    }
  ];

  const journalEntries = [
    {
      date: "2026.03.20",
      title: "今天把网站正式上线了",
      text: "记录作为独立音乐人把作品放到自己空间里的第一天。以后这里会更新新歌、短视频、生活片段和创作过程。"
    },
    {
      date: "2026.03.12",
      title: "一首歌的灵感从哪里来",
      text: "有时候是夜里的一句旋律，有时候是一张照片、一段路程、一次聊天。日志区会慢慢写下这些片段。"
    },
    {
      date: "2026.03.01",
      title: "准备新的中文作品",
      text: "最近在整理更适合现场演唱和短视频表达的版本，也在思考怎么把音乐和视觉一起讲好。"
    }
  ];

  const isYoutubeVideo = (url) =>
    url.includes("youtube.com") || url.includes("youtu.be");

  const getYoutubeEmbedUrl = (url) => {
    if (url.includes("youtube.com/embed/")) return url;
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <div className="page">
      <main className="container">
        <header className="site-header">
          <div className="site-title">Sakura Music World</div>
          <nav className="site-nav">
            <a href="#home">首页</a>
            <a href="#videos">短视频</a>
            <a href="#works">音乐作品</a>
            <a href="#gallery">Gallery</a>
            <a href="#journal">日志</a>
            <a href="#about">关于</a>
          </nav>
        </header>

        <section id="home" className="hero-advanced hero-showcase">
          <div className="hero-left">
            <p className="hero-badge">Singer · Songwriter · Visual Diary</p>
            <h1>Sakura Music World</h1>
            <p className="hero-text">
              我的原创音乐、短视频、生活影像与创作日志。
            </p>
            <p className="hero-subtext">
              这是一个属于我的音乐空间，放作品，也放日常，记录灵感、舞台、照片和每一个慢慢成形的瞬间。
            </p>

            <div className="hero-actions">
              <button
                className="main-button"
                onClick={() =>
                  document
                    .getElementById("videos")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                进入作品
              </button>
              <a className="ghost-button" href="#journal">
                看日志
              </a>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
              alt="hero"
            />
          </div>
        </section>

        <section id="videos" className="section">
          <div className="section-heading">
            <h2>短视频</h2>
            <p>精选的音乐短视频、现场片段和作品预告</p>
          </div>

          <div className="video-grid">
            {featuredVideos.map((video) => (
              <article className="video-card" key={video.title}>
                <div className="video-cover-wrap">
                  <img src={video.cover} alt={video.title} className="video-cover" />
                  <span className="video-tag">{video.tag}</span>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <button
                    className="video-button"
                    onClick={() => setActiveVideo(video.videoUrl)}
                  >
                    观看视频
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="works" className="section">
          <div className="section-heading">
            <h2>音乐作品</h2>
            <p>按语言整理作品方向，让访客一眼看懂你的创作版图</p>
          </div>

          <div className="works-grid">
            {musicWorks.map((item) => (
              <article className="work-card" key={item.language}>
                <h3>{item.language}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="section-heading">
            <h2>Gallery</h2>
            <p>音乐人日常、舞台、录音、旅行与生活片段</p>
          </div>

          <div className="gallery-grid">
            {galleryPhotos.map((photo) => (
              <div className="gallery-card" key={photo.src}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>

        <section id="journal" className="section">
          <div className="section-heading">
            <h2>日志</h2>
            <p>创作想法、生活片段、新歌记录与上线动态</p>
          </div>

          <div className="journal-list">
            {journalEntries.map((entry) => (
              <article className="journal-card" key={entry.date + entry.title}>
                <div className="journal-date">{entry.date}</div>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-box">
          <div className="section-heading">
            <h2>关于我</h2>
          </div>
          <p>
            我会在这里持续更新自己的原创音乐、短视频、照片和日志。这个网站既是作品展示区，也是音乐人的生活记录页。
          </p>
        </section>

        <footer className="footer">© Sakura Music World</footer>

        {activeVideo && (
          <div className="video-modal" onClick={() => setActiveVideo(null)}>
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setActiveVideo(null)}
              >
                ×
              </button>

              {isYoutubeVideo(activeVideo) ? (
                <iframe
                  src={getYoutubeEmbedUrl(activeVideo)}
                  title="video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="external-video-box">
                  <h3>这个视频暂时不能站内直接播放</h3>
                  <p>你可以点下面按钮，在新标签页打开原视频。</p>
                  <button
                    className="video-button"
                    onClick={() => window.open(activeVideo, "_blank")}
                  >
                    在新标签页打开
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
