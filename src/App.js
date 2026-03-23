import { useRef, useState } from "react";
import "./styles.css";

export default function MusicVideoWebsite() {
  const [language, setLanguage] = useState("en");
  const [openLyricsId, setOpenLyricsId] = useState(null);
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
      siteTitle: "池田樱子的音乐天地",
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
      siteTitle: "池田さくらの音楽",
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

  const songs = [
  {
    id: 1,
    title: "破茧成火",
    file: "/破茧成火.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

终于一天沉默的我不再隐藏真的自我
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

yeah yeah`
  },
  {
    id: 2,
    title: "終わらない終末",
    file: "/終わらない終末.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

今ここに立っている
もう未練などない
この罪深い世界で
最後の時代を見つめながら
終末を待っている

今度こそ願ってる
別の世界へ行く
もうこれ以上耐えられない
この地獄の夜を越えたなら
きっと清められる

なぜ世界の終わり来ない
まだ罪人として生きる
この命は救われない
この汚れた魂

なぜ世界の終わり来ない
宇宙の塵になりたい
来世も輪廻もいらない
愛も憎しみもない

今度こそ願ってる
別の世界へ行く
もうこれ以上耐えられない
この地獄の夜を越えたなら
きっと清められる

なぜ世界の終わり来ない
まだ罪人として生きる
この命は救われない
この汚れた魂

なぜ世界の終わり来ない
宇宙の塵になりたい
来世も輪廻もいらない
愛も憎しみもない

なぜ世界の終わり来ない
まだ罪人として生きる
この命は救われない
この汚れた魂

なぜ世界の終わり来ない
宇宙の塵になりたい
来世も輪廻もいらない
愛も憎しみもない`
  },
  {
    id: 3,
    title: "Song 3",
    file: "/song3.mp3",
    lyrics: `这里写第三首歌的歌词`
  },
  {
    id: 4,
    title: "Song 4",
    file: "/song4.mp3",
    lyrics: `这里写第四首歌的歌词`
  },
  {
    id: 5,
    title: "Song 5",
    file: "/song5.mp3",
    lyrics: `这里写第五首歌的歌词`
  },
  {
    id: 6,
    title: "Song 6",
    file: "/song6.mp3",
    lyrics: `这里写第六首歌的歌词`
  },
  {
    id: 7,
    title: "Song 7",
    file: "/song7.mp3",
    lyrics: `这里写第七首歌的歌词`
  },
  {
    id: 8,
    title: "Song 8",
    file: "/song8.mp3",
    lyrics: `这里写第八首歌的歌词`
  },
  {
    id: 9,
    title: "Song 9",
    file: "/song9.mp3",
    lyrics: `这里写第九首歌的歌词`
  },
  {
    id: 10,
    title: "Song 10",
    file: "/song10.mp3",
    lyrics: `这里写第十首歌的歌词`
  }
];
  const galleryItems = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  type: "image",
  src: `/gallery/photo${index + 1}.jpg`,
  alt: `photo ${index + 1}`
}));
  galleryItems.push({
  id: 101,
  type: "bilibili",
  bvid: "BV14nAGzMEbA",
  alt: "video 1",
  cover: "/gallery/photo201.jpg"
});
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
             src="/gallery/photo200.jpg"
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
  onClick={() =>
    setOpenLyricsId(openLyricsId === song.id ? null : song.id)
  }
>
  {openLyricsId === song.id ? t.hideLyrics : t.showLyrics}
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

                {openLyricsId === song.id && (
  <div className="lyrics-box">
    <pre>{song.lyrics}</pre>
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

        <div className="video-card">
  <div className="video-frame-wrap">
    <iframe
      className="video-frame"
      src="https://player.bilibili.com/player.html?bvid=BV14nAGzMEbA&page=1"
      title="Music Video"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      scrolling="no"
    />
  </div>
</div>
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
) : item.type === "video" ? (
  <video src={item.src} muted playsInline preload="metadata" />
) : (
  <div className="gallery-video-cover">
    <img src={item.cover} alt={item.alt} />
    <span className="gallery-play-icon">▶</span>
  </div>
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
) : activeMedia.type === "video" ? (
  <video
    className="modal-media"
    src={activeMedia.src}
    controls
    autoPlay
  />
) : (
  <iframe
    className="modal-media bilibili-frame"
    src={`https://player.bilibili.com/player.html?bvid=${activeMedia.bvid}&page=1`}
    title={activeMedia.alt}
    frameBorder="0"
    allowFullScreen
  />
)}
          </div>
        </div>
      )}
    </div>
  );
}
