import { useState } from "react";
import "./styles.css";

export default function MusicVideoWebsite() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      navHome: "Home",
      navVideos: "Videos",
      navWorks: "Music",
      navGallery: "Gallery",
      navJournal: "Journal",
      navAbout: "About",
      heroBadge: "Singer · Songwriter · Visual Diary",
      heroTitle: "Sakura Music World",
      heroText: "My original music, short videos, daily moments, and creative journal.",
      heroSubtext:
        "A personal space for music, visuals, memories, and the process behind every song.",
      enterWorks: "Enter Works",
      readJournal: "Read Journal",
      videosTitle: "Videos",
      videosDesc: "Selected short-form music videos, live moments, and previews.",
      worksTitle: "Music Works",
      worksDesc: "A simple overview of my creative world in three languages.",
      galleryTitle: "Gallery",
      galleryDesc: "Daily life, stage moments, studio scenes, travel, and quiet fragments.",
      journalTitle: "Journal",
      journalDesc: "Thoughts, updates, inspirations, and behind-the-scenes notes.",
      aboutTitle: "About",
      aboutText:
        "This website is my personal music space. I share songs, short videos, photos, and journal entries here in different languages.",
      externalVideoTitle: "This video cannot be played directly on the site right now",
      externalVideoText: "Please use the button below to open the original video in a new tab.",
      openInNewTab: "Open in New Tab",
      watchVideo: "Watch Video",
      works: [
        {
          language: "Chinese Works",
          text: "Lyrical, narrative, emotional works suitable for original songs and live fragments."
        },
        {
          language: "Japanese Works",
          text: "Melodic, visual, and delicate pieces with a Japanese mood and storytelling feel."
        },
        {
          language: "English Works",
          text: "International-facing songs, acoustic sessions, and simple direct songwriting."
        }
      ],
      journal: [
        {
          date: "2026.03.20",
          title: "The website officially went live today",
          text: "Today marks the first day of putting my songs and creative world into a space that truly belongs to me."
        },
        {
          date: "2026.03.12",
          title: "Where does a song begin?",
          text: "Sometimes from one line, sometimes from a photo, a road, or a quiet feeling that refuses to leave."
        },
        {
          date: "2026.03.01",
          title: "Preparing a new Chinese release",
          text: "I have been shaping a version that feels stronger both live and in short-form video."
        }
      ],
      videos: [
        {
          title: "Chinese Work 01",
          description: "A short original music clip in Chinese.",
          tag: "中文"
        },
        {
          title: "Japanese Work 01",
          description: "A short original music clip in Japanese.",
          tag: "日本語"
        },
        {
          title: "English Work 01",
          description: "A short original music clip in English.",
          tag: "English"
        }
      ]
    },
    zh: {
      navHome: "首页",
      navVideos: "短视频",
      navWorks: "音乐作品",
      navGallery: "照片墙",
      navJournal: "日志",
      navAbout: "关于",
      heroBadge: "独立音乐人 · 创作者 · 生活记录",
      heroTitle: "Sakura Music World",
      heroText: "我的原创音乐、短视频、日常片段与创作日志。",
      heroSubtext:
        "这是一个属于我的音乐空间，放作品，也放生活，记录每一个灵感与慢慢成形的瞬间。",
      enterWorks: "进入作品",
      readJournal: "阅读日志",
      videosTitle: "短视频",
      videosDesc: "精选音乐短视频、现场片段和作品预告。",
      worksTitle: "音乐作品",
      worksDesc: "用三种语言整理我的创作方向和作品世界。",
      galleryTitle: "照片墙",
      galleryDesc: "日常、舞台、录音、旅行与安静片段。",
      journalTitle: "日志",
      journalDesc: "记录想法、创作近况、生活片段和幕后过程。",
      aboutTitle: "关于我",
      aboutText:
        "这个网站是我的个人音乐空间。我会在这里持续更新歌曲、短视频、照片和多语言日志。",
      externalVideoTitle: "这个视频暂时不能站内直接播放",
      externalVideoText: "你可以点击下方按钮，在新标签页打开原视频。",
      openInNewTab: "在新标签页打开",
      watchVideo: "观看视频",
      works: [
        {
          language: "中文作品",
          text: "偏抒情、叙事、情绪感强，适合展示原创歌曲和现场片段。"
        },
        {
          language: "日文作品",
          text: "旋律感、画面感和日系氛围更明显，适合精致细腻的表达。"
        },
        {
          language: "英文作品",
          text: "更国际化、更直接，也适合 acoustic 和 live session 形式。"
        }
      ],
      journal: [
        {
          date: "2026.03.20",
          title: "今天把网站正式上线了",
          text: "这是第一次把自己的歌曲和创作世界放进一个真正属于自己的空间里。"
        },
        {
          date: "2026.03.12",
          title: "一首歌的开始从哪里来",
          text: "有时候是一句歌词，有时候是一张照片、一段路，或者一种不肯离开的情绪。"
        },
        {
          date: "2026.03.01",
          title: "准备新的中文作品",
          text: "最近在打磨一个更适合现场和短视频表达的版本，也在整理整体视觉感觉。"
        }
      ],
      videos: [
        {
          title: "中文作品 01",
          description: "这里放你的中文原创音乐短视频。",
          tag: "中文"
        },
        {
          title: "日文作品 01",
          description: "这里放你的日文原创音乐短视频。",
          tag: "日文"
        },
        {
          title: "英文作品 01",
          description: "这里放你的英文原创音乐短视频。",
          tag: "English"
        }
      ]
    },
    ja: {
      navHome: "ホーム",
      navVideos: "動画",
      navWorks: "音楽作品",
      navGallery: "ギャラリー",
      navJournal: "日記",
      navAbout: "About",
      heroBadge: "シンガーソングライター · クリエイター · 日々の記録",
      heroTitle: "Sakura Music World",
      heroText: "オリジナル音楽、短い映像、日常の写真、制作日記をまとめた場所です。",
      heroSubtext:
        "作品だけでなく、日々の感情や風景、インスピレーションの流れもここに残していきます。",
      enterWorks: "作品を見る",
      readJournal: "日記を読む",
      videosTitle: "動画",
      videosDesc: "短い音楽映像、ライブの断片、作品の予告をまとめています。",
      worksTitle: "音楽作品",
      worksDesc: "三つの言語で、自分の音楽世界を整理して紹介します。",
      galleryTitle: "ギャラリー",
      galleryDesc: "日常、ステージ、レコーディング、旅、静かな時間の写真。",
      journalTitle: "日記",
      journalDesc: "制作メモ、近況、感情の記録、舞台裏の小さな出来事。",
      aboutTitle: "私について",
      aboutText:
        "このサイトは私の音楽と日常を記録する個人的な空間です。作品、写真、短い映像、そして三言語の日記を載せていきます。",
      externalVideoTitle: "この動画はサイト内で直接再生できません",
      externalVideoText: "下のボタンから新しいタブで元の動画を開いてください。",
      openInNewTab: "新しいタブで開く",
      watchVideo: "動画を見る",
      works: [
        {
          language: "中国語作品",
          text: "叙情的で物語性があり、感情をしっかり伝える作品群です。"
        },
        {
          language: "日本語作品",
          text: "メロディーや空気感を大切にした、繊細で映像的な表現です。"
        },
        {
          language: "英語作品",
          text: "よりシンプルで直接的、世界に向けたスタイルの作品です。"
        }
      ],
      journal: [
        {
          date: "2026.03.20",
          title: "今日、このサイトを公開しました",
          text: "自分の歌と創作の世界を、自分の場所として残せる最初の日になりました。"
        },
        {
          date: "2026.03.12",
          title: "一曲の始まりはどこから来るのか",
          text: "一行の言葉、写真、道、会話、あるいは消えない感情から始まることがあります。"
        },
        {
          date: "2026.03.01",
          title: "新しい中国語作品を準備中",
          text: "ライブでも短い映像でも伝わるように、少しずつ形を整えています。"
        }
      ],
      videos: [
        {
          title: "中国語作品 01",
          description: "中国語のオリジナル短編音楽動画です。",
          tag: "中文"
        },
        {
          title: "日本語作品 01",
          description: "日本語のオリジナル短編音楽動画です。",
          tag: "日本語"
        },
        {
          title: "英語作品 01",
          description: "英語のオリジナル短編音楽動画です。",
          tag: "English"
        }
      ]
    }
  };

  const t = translations[language];

  const featuredVideos = [
    {
      title: t.videos[0].title,
      description: t.videos[0].description,
      tag: t.videos[0].tag,
      cover:
        "https://scontent.fakl5-2.fna.fbcdn.net/v/t39.30808-6/633476797_4356902411303888_8408420196503766101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=N-mjnAF17IMQ7kNvwFiyJyy&_nc_oc=AdpknrVsCn7omsArqJa8TudII7VdCytG8RL0cchBUyHX9DgnonYUMiYffvYP4T_HK0sg7d_TgYB8dIP-0KOCaEiX&_nc_zt=23&_nc_ht=scontent.fakl5-2.fna&_nc_gid=NoXcCt9FgnZqhBuU3_H3tA&_nc_ss=7a30f&oh=00_AfwctOf5m21gVtZoe1tIRpUZQ3AdYJSTWt_SHvsFMvvqyw&oe=69C42246",
      videoUrl: "https://www.youtube.com/watch?v=01c4oLqYoJo"
    },
    {
      title: t.videos[1].title,
      description: t.videos[1].description,
      tag: t.videos[1].tag,
      cover: "https://i.ibb.co/1GX15tPX/20260227224026-12-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=01c4oLqYoJo"
    },
    {
      title: t.videos[2].title,
      description: t.videos[2].description,
      tag: t.videos[2].tag,
      cover:
        "https://scontent.fakl5-2.fna.fbcdn.net/v/t39.30808-6/633476797_4356902411303888_8408420196503766101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=N-mjnAF17IMQ7kNvwFiyJyy&_nc_oc=AdpknrVsCn7omsArqJa8TudII7VdCytG8RL0cchBUyHX9DgnonYUMiYffvYP4T_HK0sg7d_TgYB8dIP-0KOCaEiX&_nc_zt=23&_nc_ht=scontent.fakl5-2.fna&_nc_gid=NoXcCt9FgnZqhBuU3_H3tA&_nc_ss=7a30f&oh=00_AfwctOf5m21gVtZoe1tIRpUZQ3AdYJSTWt_SHvsFMvvqyw&oe=69C42246",
      videoUrl: "https://www.youtube.com/watch?v=01c4oLqYoJo"
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
          <div className="header-right">
            <nav className="site-nav">
              <a href="#home">{t.navHome}</a>
              <a href="#videos">{t.navVideos}</a>
              <a href="#works">{t.navWorks}</a>
              <a href="#gallery">{t.navGallery}</a>
              <a href="#journal">{t.navJournal}</a>
              <a href="#about">{t.navAbout}</a>
            </nav>
            <div className="language-switcher">
              <button
                className={language === "zh" ? "lang-btn active" : "lang-btn"}
                onClick={() => setLanguage("zh")}
              >
                中文
              </button>
              <button
                className={language === "ja" ? "lang-btn active" : "lang-btn"}
                onClick={() => setLanguage("ja")}
              >
                日本語
              </button>
              <button
                className={language === "en" ? "lang-btn active" : "lang-btn"}
                onClick={() => setLanguage("en")}
              >
                English
              </button>
            </div>
          </div>
        </header>

        <section id="home" className="hero-advanced hero-showcase">
          <div className="hero-left">
            <p className="hero-badge">{t.heroBadge}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>
            <p className="hero-subtext">{t.heroSubtext}</p>

            <div className="hero-actions">
              <button
                className="main-button"
                onClick={() =>
                  document
                    .getElementById("videos")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.enterWorks}
              </button>
              <a className="ghost-button" href="#journal">
                {t.readJournal}
              </a>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://scontent.fakl5-2.fna.fbcdn.net/v/t39.30808-6/633476797_4356902411303888_8408420196503766101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=N-mjnAF17IMQ7kNvwFiyJyy&_nc_oc=AdpknrVsCn7omsArqJa8TudII7VdCytG8RL0cchBUyHX9DgnonYUMiYffvYP4T_HK0sg7d_TgYB8dIP-0KOCaEiX&_nc_zt=23&_nc_ht=scontent.fakl5-2.fna&_nc_gid=NoXcCt9FgnZqhBuU3_H3tA&_nc_ss=7a30f&oh=00_AfwctOf5m21gVtZoe1tIRpUZQ3AdYJSTWt_SHvsFMvvqyw&oe=69C42246"
              alt="hero"
            />
          </div>
        </section>

        <section id="videos" className="section">
          <div className="section-heading">
            <h2>{t.videosTitle}</h2>
            <p>{t.videosDesc}</p>
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
                    {t.watchVideo}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="works" className="section">
          <div className="section-heading">
            <h2>{t.worksTitle}</h2>
            <p>{t.worksDesc}</p>
          </div>

          <div className="works-grid">
            {t.works.map((item) => (
              <article className="work-card" key={item.language}>
                <h3>{item.language}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="section-heading">
            <h2>{t.navGallery}</h2>
            <p>{t.galleryDesc}</p>
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
            <h2>{t.journalTitle}</h2>
            <p>{t.journalDesc}</p>
          </div>

          <div className="journal-list">
            {t.journal.map((entry) => (
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
            <h2>{t.aboutTitle}</h2>
          </div>
          <p>{t.aboutText}</p>
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
                  <h3>{t.externalVideoTitle}</h3>
                  <p>{t.externalVideoText}</p>
                  <button
                    className="video-button"
                    onClick={() => window.open(activeVideo, "_blank")}
                  >
                    {t.openInNewTab}
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
