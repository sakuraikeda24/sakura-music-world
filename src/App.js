import { useState } from "react";
import "./styles.css";

export default function MusicVideoWebsite() {
  const [language, setLanguage] = useState("en");
  const [showLyrics, setShowLyrics] = useState(false);

  const translations = {
    en: {
      navHome: "Home",
      navMusic: "Music",
      navVideos: "Music Videos",
      navLife: "Life",
      navAbout: "About",
      heroBadge: "Singer · Songwriter · Visual Diary",
      heroTitle: "Sakura Music World",
      heroText: "My original music, daily moments, and creative world.",
      heroSubtext:
        "A personal space for songs, visuals, memories, and the process behind every piece.",
      playMusic: "Play Music",
      musicTitle: "Music Works",
      musicDesc:
        "A growing collection of songs in Chinese, Japanese, and English.",
      videosTitle: "Music Videos",
      videosDesc: "Official music videos and visual works will appear here.",
      comingSoon: "Coming Soon",
      lifeTitle: "Life",
      lifeDesc: "Photos and small fragments from a musician's daily life.",
      aboutTitle: "About Me",
      aboutText:
        "This is my personal music space. I share songs, life fragments, and the long journey of becoming who I am through music.",
      chineseWorks: "Chinese Works",
      playSong: "Play Song",
      hideLyrics: "Hide Lyrics",
      showLyrics: "Show Lyrics",
      songTitle: "破茧成火"
    },
    zh: {
      navHome: "首页",
      navMusic: "音乐作品",
      navVideos: "音乐视频",
      navLife: "生活记录",
      navAbout: "关于我",
      heroBadge: "独立音乐人 · 创作者 · 生活记录",
      heroTitle: "池田樱子的音乐天地",
      heroText: "我的原创音乐、生活片段与创作世界。",
      heroSubtext:
        "这是一个属于我的个人音乐空间，放歌曲，也放影像、记忆与创作过程。",
      playMusic: "播放音乐",
      musicTitle: "音乐作品",
      musicDesc: "这里会持续收录中文、日文和英文作品。",
      videosTitle: "音乐视频",
      videosDesc: "官方音乐视频和影像作品会逐步更新在这里。",
      comingSoon: "即将更新",
      lifeTitle: "生活记录",
      lifeDesc: "音乐人的日常照片、片段和生活影像。",
      aboutTitle: "关于我",
      aboutText:
        "这是我的个人音乐空间。我会在这里分享歌曲、生活片段，以及我如何通过音乐一步一步成为现在的自己。",
      chineseWorks: "中文作品",
      playSong: "播放歌曲",
      hideLyrics: "收起歌词",
      showLyrics: "查看歌词",
      songTitle: "破茧成火"
    },
    ja: {
      navHome: "ホーム",
      navMusic: "音楽作品",
      navVideos: "音楽映像",
      navLife: "日々の記録",
      navAbout: "私について",
      heroBadge: "シンガーソングライター · クリエイター · 日々の記録",
      heroTitle: "池田さくらのミュージカルワールド",
      heroText: "オリジナル音楽、日常の断片、そして創作の世界。",
      heroSubtext:
        "歌、映像、記憶、そして音楽を通して形になっていく過程を残すための場所です。",
      playMusic: "音楽を再生",
      musicTitle: "音楽作品",
      musicDesc: "中国語、日本語、英語の作品を少しずつ収録していきます。",
      videosTitle: "音楽映像",
      videosDesc: "公式MVや映像作品はここに追加していきます。",
      comingSoon: "準備中",
      lifeTitle: "日々の記録",
      lifeDesc: "音楽家としての日常、写真、小さな映像の記録。",
      aboutTitle: "私について",
      aboutText:
        "ここは私の個人的な音楽空間です。歌、日常の断片、そして音楽を通じて歩んできた道のりを記録していきます。",
      chineseWorks: "中国語作品",
      playSong: "再生",
      hideLyrics: "歌詞を閉じる",
      showLyrics: "歌詞を見る",
      songTitle: "破茧成火"
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

  const scrollToMusic = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <main className="container">
        <header className="site-header">
          <div className="site-title">Sakura Music World</div>

          <div className="header-right">
            <nav className="site-nav">
              <a href="#home">{t.navHome}</a>
              <a href="#music">{t.navMusic}</a>
              <a href="#videos">{t.navVideos}</a>
              <a href="#life">{t.navLife}</a>
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

        <section id="home" className="hero-advanced">
          <div className="hero-left">
            <p className="hero-badge">{t.heroBadge}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroText}</p>
            <p className="hero-subtext">{t.heroSubtext}</p>

            <div className="hero-actions">
              <button className="main-button" onClick={scrollToMusic}>
                {t.playMusic}
              </button>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/589422967_4280149748979155_7990063532555381749_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=S_hrrsD8RiMQ7kNvwEXl6Wg&_nc_oc=Adp5KoK8QhiYDg2zxp6F0_2SrKjEV31wG3rAQX-lFSBFe3z1HdElhVNs-xTzvkl_SH7braAcnOiSYo4Ycn4Tofxg&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=31nbs625XnQqu6ameR2j7Q&_nc_ss=7a32e&oh=00_AfwPj8fVMlNnfBLxiUXgkORgVd92KDm8MWTzT-ZJ57ZuKg&oe=69C58EFC"
              alt="hero"
            />
          </div>
        </section>

        <section id="music" className="section">
          <div className="section-heading">
            <h2>{t.musicTitle}</h2>
            <p>{t.musicDesc}</p>
          </div>

          <div className="music-group">
            <h3 className="group-title">{t.chineseWorks}</h3>

            <article className="song-card">
              <div className="song-info">
                <div>
                  <div className="song-label">01</div>
                  <h4>{t.songTitle}</h4>
                </div>

                <div className="song-actions">
                  <button className="video-button">
                    {t.playSong}
                  </button>
                  <button
                    className="ghost-button small"
                    onClick={() => setShowLyrics(!showLyrics)}
                  >
                    {showLyrics ? t.hideLyrics : t.showLyrics}
                  </button>
                </div>
              </div>

              <audio controls className="audio-player">
                <source src="/破茧成火.mp3" type="audio/mpeg" />
              </audio>

              {showLyrics && (
                <div className="lyrics-box">
                  <pre>{lyrics}</pre>
                </div>
              )}
            </article>
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
            <div className="gallery-card">
              <img
                src="https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/490733849_4049302022063930_6802643808855178055_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_D2qkr24kwMQ7kNvwEdgC-c&_nc_oc=AdpCtvybJEDZa1xE8MSJejEeu1OpKDBZOxjKbWBKoCVi2IOwbKpa6FwZAofxXXm0IjBjUYHJ5EsJ0RSGaOliuJZK&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=_0vSnBLufGfPctc8c-57XA&_nc_ss=7a32e&oh=00_AfyRZRDnNCaZSMTQ2MNNkj8ddfI2kYH1Tya8HhISRodwFQ&oe=69C569E4"
                alt="life 1"
              />
            </div>
            <div className="gallery-card">
              <img
                src="https://scontent.fakl5-2.fna.fbcdn.net/v/t39.30808-6/514984746_4129018634092268_1732216122266108636_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=HurjaA6y-KIQ7kNvwFPhZoI&_nc_oc=Ado6sUx8gvsxj2InVc5NebEbyohJRyj-X6-wjKpvZZ97SMKZhcjtz8hHLj9_NNa6H3PjiMN83V_9OUNSYFRQjTTf&_nc_zt=23&_nc_ht=scontent.fakl5-2.fna&_nc_gid=UWas918LnMsd4afySLWnJA&_nc_ss=7a32e&oh=00_AfwHrLyN2rge6agRSCYkHyNktehvJq4aJuabCB5MuBbULQ&oe=69C5684E"
                alt="life 2"
              />
            </div>
            <div className="gallery-card">
              <img
                src="https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/624406739_4342880279372768_90288687277872195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=cxZryc6yudkQ7kNvwFcEDkI&_nc_oc=Adq85fBJv6Kgp4iQJ2FzHhaaFVSdn8aVMnRIWr5rm4APoKYYw01zlo75bBoltCC1UjPC6fsypG2p0RNroZ746sD0&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=j0TZ0ZPwkSVYU2JxDXzJgQ&_nc_ss=7a32e&oh=00_AfzVn7DgxyZ6TIC524gbGxqMsApjyD8cD-MiIGk1biqYyA&oe=69C58639"
                alt="life 3"
              />
            </div>
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
    </div>
  );
}
