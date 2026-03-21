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
        "https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/515436854_4129021264092005_4067482838813048194_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UBiStNmFvncQ7kNvwFC6FPK&_nc_oc=AdqBwAcxE7TPcBbVonoUE9HnbHHpX5E7aK-9tcqiZZ7700EX4Mnp6NRNpo2zwtl5mPPu-xzCLI_dqGcgwKeSBEZb&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=nbF0_TTkVwQfo_F5rrGV7g&_nc_ss=7a30f&oh=00_Afy391rtzV3wgh1dR_T7F3SVObBbmqL37b1zICLzIAeD0w&oe=69C30954",
      videoUrl: "https://www.youtube.com/embed/akCeAuwHFW0",
    },
    {
      title: "日文作品 01",
      description: "这里放你的日文原创音乐短视频",
      tag: "日文",
      cover: "https://i.ibb.co/1GX15tPX/20260227224026-12-2.jpg",
      videoUrl: "https://www.youtube.com/",
    },
    {
      title: "英文作品 01",
      description: "这里放你的英文原创音乐短视频",
      tag: "English",
      cover:
        "https://scontent.fakl5-1.fna.fbcdn.net/v/t39.30808-6/624406739_4342880279372768_90288687277872195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=FiNuD1RtRaUQ7kNvwFXAoT7&_nc_oc=AdrqYgBs2eE-MDfGoPezNMr5QbXCk8MWQJyEDPptBxW_gJLAmd_uiZaZo2ahapHTTPhKz43IfOYOy9b3sEdBOyyX&_nc_zt=23&_nc_ht=scontent.fakl5-1.fna&_nc_gid=CxlHNVEUxH4vf7daU9ABJA&_nc_ss=7a30f&oh=00_AfwvN7FLYBmaIIaPRMjQZjaH40ycCC5jN7G9VaRUrsJuXQ&oe=69C31B79",
      videoUrl: "https://www.youtube.com/watch?v=01c4oLqYoJo",
    },
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
            <a href="#music">音乐作品</a>
            <a href="#about">关于</a>
          </nav>
        </header>

        <section id="home" className="hero-advanced">
          <div className="hero-left">
            <p className="hero-badge">Original Music · Short Videos</p>
            <h1>Sakura Music World</h1>
            <p className="hero-text">我的原创音乐和短视频作品</p>

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
          </div>

          <div className="hero-right">
            <img
              src="https://scontent.fakl5-2.fna.fbcdn.net/v/t39.30808-6/633476797_4356902411303888_8408420196503766101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=N-mjnAF17IMQ7kNvwEPouSj&_nc_oc=AdqIcOQdIi40wgVz315VkUgenM-GZhyv-xVw_r1Tc5XOHtJZ8SXC0LZvubu8RZKEFPyYFcfARlwOWopuFlCesdFZ&_nc_zt=23&_nc_ht=scontent.fakl5-2.fna&_nc_gid=XLkG_ovLG35R6n0sS34crg&_nc_ss=7a30f&oh=00_Afz-gL-FxiR9NVuCDdLa-EZXKXC7svf43pzoTMy9RMigqQ&oe=69C30906"
              alt="hero"
            />
          </div>
        </section>

        <section id="videos" className="section">
          <div className="section-heading">
            <h2>短视频</h2>
            <p>这里以后可以展示你的音乐短视频封面</p>
          </div>

          <div className="video-grid">
            {featuredVideos.map((video) => (
              <article className="video-card" key={video.title}>
                <div className="video-cover-wrap">
                  <img
                    src={video.cover}
                    alt={video.title}
                    className="video-cover"
                  />
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

        <section id="music" className="section">
          <div className="section-heading">
            <h2>音乐作品</h2>
            <p>按语言分类展示你的作品</p>
          </div>

          <div className="music-list">
            <div className="music-block">
              <h3>中文作品</h3>
              <p>这里可以放你的中文歌曲</p>
            </div>

            <div className="music-block">
              <h3>日文作品</h3>
              <p>这里可以放你的日文歌曲</p>
            </div>

            <div className="music-block">
              <h3>英文作品</h3>
              <p>这里可以放你的英文歌曲</p>
            </div>
          </div>
        </section>

        <section id="about" className="section about-box">
          <div className="section-heading">
            <h2>关于我</h2>
          </div>
          <p>
            在这里写你的故事、创作背景或者音乐风格。以后也可以加上联系方式、演出信息，或者
            YouTube 链接。
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
