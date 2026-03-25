import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function MusicVideoWebsite() {
  const [language, setLanguage] = useState("en");
  const [openLyricsId, setOpenLyricsId] = useState(null);
  const [activeMedia, setActiveMedia] = useState(null);
useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const songId = params.get("song");
  const videoId = params.get("video");

  // 🎧 音频处理
  if (songId) {
    const target = document.getElementById(`song-${songId}`);

    if (target) {
      setOpenLyricsId(Number(songId));

      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });

        const audio = target.querySelector("audio");

        if (audio) {
          audio.play().catch(() => {
            console.log("Autoplay blocked");
          });
        }
      }, 300);
    }
  }

  // 🎬 视频处理（你现在缺的就是这个）
  if (videoId) {
    const target = document.getElementById(`video-${videoId}`);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }
}, []);
  const featuredAudioRef = useRef(null);
 const [showBackToTop, setShowBackToTop] = useState(false);
const featuredSongIndex = 0;
  const translations = {
    en: {
      navHome: "Home",
      navMusic: "Music",
      navVideos: "Videos",
      navLife: "Gallery",
      navAbout: "About",
      siteTitle: "Sakura Music World",
      introText1: "Music, finally heard the way it was meant to be.",
      introText2:
        `Most of the music here comes from albums I released over a decade ago — all composed and written by me, unless otherwise explicitly marked as fully AI-generated.`,
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
      aboutText: `Sakura Ikeda

All the music presented here is originally composed and written by me, unless otherwise explicitly marked as fully AI-generated.

Over a decade ago, I created and released two albums — 23 original songs in total.
Every melody, every lyric, every structure comes from my own work.

What has changed today is not the authorship,
but the way these works are expressed.

At the time, my ability to realize those ideas was limited by technical conditions and vocal constraints.
I could write the music I envisioned, but I could not fully deliver how it should sound.

With the emergence of AI, I finally found a way to bridge that gap.

AI does not create my music.
It gives voice to it.

The first thing I chose to do was to return to those 23 songs —
to reinterpret them, refine them, and bring them closer to what they were always meant to be.

They have now been re-expressed with AI vocals,
and further developed into Japanese and English versions,
allowing them to exist beyond a single language.

This is not a replacement of the original work,
but a continuation — a process of completing what was once unfinished.

Moving forward, I will continue to release my own original compositions,
alongside selected AI-generated works that I believe carry artistic value.

Sakura Music World is not just a platform for music.
It is a space where original ideas, evolving tools, and time come together —
to shape music into its most authentic form. 
`,
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
      introText1: "从“面具”到“池田樱子”",
      introText2: `十几年前，我是独立音乐人大男孩“面具”， 
完成两张专辑，23首原创歌曲。 

十几年后，我摘下面具，成为“池田樱子”。 
这些作品，在这里被重新表达。`,
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
      aboutText: `池田樱子
          十几年前，我曾以独立音乐人“面具”的名字创作并发表了两张原创专辑，共23首歌曲。
那时的我，是一个男生。

我独自完成了作曲、作词与演唱的全部过程，用最原始的方式记录表达与情绪。
那是一段真实而重要的开始。

回看当年的作品，我依然珍视它们的真诚。
但我也清楚地知道——

受限于当时的制作条件与表达能力，那些作品，并不是我真正想要的样子。
它们只是“在当时条件下，勉强成立的版本”。
而当年那个活在“面具”之下的人，也同样如此。

十几年过去，“面具”这个身份已经结束。

我摘下面具，破茧成火。
现在的我，是美丽幸福真实的我---池田樱子。

身份改变了，外在改变了，
但对音乐的表达欲望，从未停止过。

直到AI技术的出现，我终于找到了新的表达方式。
它不只是工具，而是一种延伸——
让我更接近自己真正想要的声音与作品形态。

因此，我做的第一件事，是回到过去。

我让AI重新演绎那23首原创作品，
并将它们扩展为日语与英语版本，赋予它们跨越语言的生命力。

这不是简单的翻唱，
而是一次对过往表达的重构与完成。

在此之后，我会继续发布自己的原创作品，
同时，也会分享一些完全由AI创作、但我认可其美感与价值的音乐。

“池田樱子的音乐天地”，不只是一个音乐平台。
它更像是我与这个时代共同完成的一次表达实验。

在这里，
过去与未来，真实与技术，人与AI，
共同构成一种新的音乐可能性。`,
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
      siteTitle: "池田さくらの音楽世界",
      introText1: `十数年前、2枚のアルバム（全23曲）を発表しました。
それらはすべて、私自身が作曲・作詞したオリジナル作品です。`,
      introText2:
        `そして今、
それらの音楽を新しいかたちで表現しています。`,
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
      aboutText: `池田さくら

十数年前、私は「面具（めんぐ）」という名前で活動していたインディーズ音楽家でした。
当時の私は男性で、2枚のアルバム、全23曲のオリジナル作品を発表しました。

作曲・作詞・歌唱のすべてを一人で手がけ、
最も原始的な形で、自分の感情と表現を音楽として残していました。
それは、確かに大切で、かけがえのない始まりでした。

今あらためて当時の作品を振り返ると、
その純粋さには今でも価値を感じています。
しかし同時に、はっきりと分かっていることがあります。

当時の制作環境や表現力の限界の中で生まれたそれらの作品は、
私が本当に表現したかった形そのものではありませんでした。
それは「その時点で成立していた一つの形」に過ぎなかったのです。
そして、「面具」という存在もまた、同じでした。

十数年が過ぎ、「面具」というアイデンティティは終わりました。

私は仮面を外し、変化を経て、
今は「池田さくら」として存在しています。

外側は変わりましたが、
音楽で自分を表現したいという衝動は、ずっと変わっていません。

そしてAI技術の登場によって、
私は新しい表現の方法に出会いました。

それは単なるツールではなく、
自分の内側にある音やイメージを、より正確に現実へと引き出すための“拡張”です。

だからこそ、私が最初に選んだのは「新しく作ること」ではなく、
「過去に戻ること」でした。

23曲のオリジナル作品をAIによって再構築し、
さらに日本語と英語へと展開することで、
それらの音楽に新たな生命を与えました。

これは単なるカバーではありません。
過去の表現を、もう一度完成させるための再構築です。

これからも私はオリジナル作品を発表し続けていきます。
同時に、AIによって生まれた作品の中で、私自身が価値を感じたものも共有していきます。

「池田さくらの音楽世界」は、単なる音楽サイトではありません。
それは、私とこの時代が共に作り上げる表現の実験場です。

ここでは、
過去と未来、現実とテクノロジー、人とAIが交わり、
新しい音楽の可能性が生まれていきます。`,
      playSong: "再生",
      hideLyrics: "歌詞を閉じる",
      showLyrics: "歌詞を見る",
      songTitle: "破茧成火",
      nowPlaying: "再生中",
      close: "閉じる"
    }
  };

  const t = translations[language];
useEffect(() => {
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
  const songs = [
  {
    id: 1,
    title: "破茧成火",
   file: "https://media.sakuramusicworld.com/pojianchenghuo.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら） 
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
    file: "https://media.sakuramusicworld.com/Owari.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
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
    title: "Burn the whole damn world",
    file: "https://media.sakuramusicworld.com/Burn the Whole Damn World.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

One lonely night I couldn't hide from voices in my mind
So I let the chaos rise and leave the past far behind

I chose this road although I knew it poisoned heart and soul
Even if the storm would break the person I once controlled
let it roll

All I ever wanted was a quiet life that felt like home
But every rule they wrote for me was never mine alone

All those words are about the way a life is meant to be
Shatter when the smallest doubt begins to set me free
One crack — I see

Some lives, Some dreams, Disappear into the night
All the strength I gave them came back twisted into bitter spite

If you can't, See the fire, hidden in my soul
Why should I keep begging just to live inside your mold
Better break the chains and tear apart your tight control

All I ever wanted was a quiet life that felt like home
But every rule they wrote for me was never mine alone

All those words about the way a life is meant to be
Shatter when the smallest doubt begins to set me free
One crack — I see

Some lives, Some dreams, Disappear into the night
All the strength I gave them came back twisted into bitter spite

If you can't, See the fire, hidden in my soul
Why should I keep begging just to live inside your mold
Better break the chains and tear apart your tight control


If the world still hates me, wants me gone
I'll fucking light the whole damn world on fire

If the end of the world starts tonight
I will watch it with a smile and light`
  },
  {
    id: 4,
    title: "好想和你在一起",
    file: "https://media.sakuramusicworld.com/haoxianghenizaiyiqi.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

伤到了如今 终于让我看清 
自己想要的幸福在哪里 
这个世界也许 真的有奇迹 
让我爱上身边的你

既然选择你 就不会再犹豫 
相扶到老是我们的约定 
友谊最终变成 纯洁的爱情
好好珍惜坚持到底 

好想和你在一起 永远不分离
好想你保护我为我挡风遮雨
就算我任性耍我的坏脾气
你也不会离我而去

所以我有你疼惜 值得我抱紧
在你怀里爱我直到下个世纪
就算能拥有全世界
也不如一个你 更让我开心

既然选择你 就不会再犹豫 
相扶到老是我们的约定 
友谊最终变成 纯洁的爱情
好好珍惜坚持到底 

好想和你在一起 永远不分离
好想你保护我为我挡风遮雨
就算我任性耍我的坏脾气
你也不会离我而去

所以我有你疼惜 值得我抱紧
在你怀里爱我直到下个世纪
就算能拥有全世界
也不如一个你 更让我开心

好想和你在一起 永远不分离
好想你保护我为我挡风遮雨
就算我任性耍我的坏脾气
你也不会离我而去

所以我有你疼惜 值得我抱紧
在你怀里爱我直到下个世纪
就算能拥有全世界
也不如一个你 更让我开心
`
  },
  {
    id: 5,
    title: "乱世の剣と影",
    file: "https://media.sakuramusicworld.com/Kenga.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
Vocal / 演唱 / 歌：AI

義経弁慶 雪舞う空に
鬼も侍も 影を連ねて
千の誓いを 結ぶ縁に
遠い運命 一線で結んで

南の将 北の剣士 西の忍び 東の風で
秘伝の巻物 奪い合って
一太刀交え 天を裂いて
影と影とが 火花散らして

老いた剣士もなお恋して
百年越えて 想い抱いて
若き浪人も負けはしないで
禁じられた恋 時代越えて

武蔵が振るう 二天一流
奥義を極め なお求めて
権と欲に溺れた者は
己を断ち 刃で昇って

一番憧れ 忍びの伝で
幾千の術を 変えて舞って
どれだけ読んでも 届かなくて
八方自在に 姿を変えて

次に名高き 半妖の剣で
愚かに見えても 縁を結んで
夢を幾度も 見続けて
ただ一人だけ 巡り逢えなくて

似た運命を 背負う僧で
迷いの中から 姫を救って
三人の契り 命を賭けて
民のためにと 身を捧げて

老いた剣士もなお恋して
百年越えて 想い抱いて
若き浪人も負けはしないで
禁じられた恋 時代越えて

武蔵が振るう 二天一流
奥義を極め なお求めて
権と欲に溺れた者は
己を断ち 刃で昇って

一番憧れ 忍びの伝で
幾千の術を 変えて舞って
どれだけ読んでも 届かなくて
八方自在に 姿を変えて

次に名高き 半妖の剣で
愚かに見えても 縁を結んで
夢を幾度も 見続けて
ただ一人だけ 巡り逢えなくて

似た運命を 背負う僧で
迷いの中から 姫を救って
三人の契り 命を賭けて
民のためにと 身を捧げて`
  },
  {
    id: 6,
    title: "Bad Girl's Game",
    file: "https://media.sakuramusicworld.com/bad girl.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

Go go, Come on

I'm really that cold now
I'm really that careless
I'm really just leaving you

Even if I'm restless
Even if I'm heartless
What are you gonna do

No matter how you try
We simply can't go on
No party forever lasts

I'm telling you just quit
Or you will only hurt
I never loved you at all

Wasn't it said before
Just play and that's enough
Why do you copy my empty words
After we said goodbye
No strings left behind
Just go find somebody who loves you more

Wasn't it said before
Just play and that's enough
You're really the biggest fool alive
You knew that everything
I said meant nothing
Every word I spoke could change overnight

Let it go
Don't see me again
Or guilt will be chasing my soul

Let it go now
Don't drag it along
From now on just forget me

Or else I will suffer the blame inside

This time you miscalculated
I left without any chains
All of your sorrow and pain
Has nothing to do with me
A girl like me
Was only playing with you
Stop making scenes again
Pack up your bags and leave
You lost nothing, I gained nothing
I'm not that perfect too
I'm strange, you're difficult
No one betrayed the other
Two lonely hearts pretending romance together
We said it's just a game
Do your words still count the same

Don't drag it on again
Let's simply end it here
I'll have another lover
You'll find another one too
Some day if we meet
Neither will feel alone
There won't be too much pain
Just maybe a small regret
Time will erase the scars
Leaving half of the past
Forgetting isn't that hard
Just let the river flow
Step out from all that dark
Turn back and face the road
Maybe it wasn't love
Just only a habit

I'm really that cold now
I'm really that careless
I'm really just leaving you

Even if I'm restless
Even if I'm heartless
What are you gonna do 哦哦哦

No matter how you try
We simply can't go on
No party forever lasts — yeah yeah yeah

I'm telling you just quit
Or you will only hurt
I never loved you at all 哦哦哦

Wasn't it said before
Just play and that's enough
Why do you copy my empty words
After we said goodbye
No strings left behind
Just go find somebody who loves you more

Wasn't it said before
Just play and that's enough
You're really the biggest fool alive
You knew that everything
I said meant nothing
Every word I spoke could change overnight

Let it go
Don't see me again
Or guilt will be chasing my soul

Let it go now
Don't drag it along
From now on just forget me

Or else I will suffer the blame inside

Or else I will suffer the blame inside`
  },
  {
    id: 7,
    title: "一缕残魂随君在",
    file: "https://media.sakuramusicworld.com/yilvcanhun.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

青灯孤影里 我魂归故梦成殇
孤城之上 寒云压月 夜色如霜
纵是风更狂 雪更急 归路已凉
人世间 只剩情长

原来命无常 一念生死两茫茫
与你相逢 是我此生 最深情长
忽然刀光一瞬断我旧时光
只留下 一缕残魂 随你身旁

在天堂 我看着你悲伤
不顾一切 飞回你身旁 
想保护你 不让你再受伤 
伸出手却碰不到你脸庞 

无论我 怎样子抓狂 
阴阳相隔 无力去抵抗 
靠近你想 再闻闻你芬芳 
却发现你已白发苍苍 

原来命无常 一念生死两茫茫
与你相逢 是我此生 最深情长
忽然刀光一瞬断我旧时光
只留下 一缕残魂 随你身旁

在天堂 我看着你悲伤
不顾一切 飞回你身旁 
想保护你 不让你再受伤 
伸出手却碰不到你脸庞 

无论我 怎样子抓狂 
阴阳相隔 无力去抵抗 
靠近你想 再闻闻你芬芳 
却发现你已白发苍苍 


只要能在你身边游荡彷徨 
我什么都愿意哪怕魂飞魄散

在天堂 我看着你悲伤
不顾一切 飞回你身旁 
想保护你 不让你再受伤 
伸出手却碰不到你脸庞 

无论我 怎样子抓狂 
阴阳相隔 无力去抵抗 
靠近你想 再闻闻你芬芳 
却发现你已白发苍苍 `
  },
  {
    id: 8,
    title: "友よ、またどこかで",
    file: "https://media.sakuramusicworld.com/Yujin.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
Vocal / 演唱 / 歌：AI

君はただ僕を　友と呼んだだけ
なのにこの胸は　今でも消えない

最後の一瞬　何が見えたのか
きっとその時　天使連れていく

友よ今どこで　生まれ変わってる
すべての記憶　消えてしまってる

たとえ僕のこと　忘れていてもいい
ただ安らかに　眠れていればいい

あの日の夜　長い闇の中
君のその笑顔　少しずつ浮かぶ

思い出すたび　すべての欠片
喜び悲しみ　全部消えない

誰も君のこと　忘れはしない
その胸の中に　光があるから

この世の友情　続かなくても
来世でもまた　出会えるといい

友よ今どこで　生まれ変わってる
すべての記憶　消えてしまってる

たとえ僕のこと　忘れていてもいい
ただ安らかに　眠れていればいい

あの日の夜　長い闇の中
君のその笑顔　少しずつ浮かぶ

思い出すたび　すべての欠片
喜び悲しみ　全部消えない

誰も君のこと　忘れはしない
その胸の中に　光があるから

この世の友情　続かなくても
来世でもまた　出会えるといい

誰も君のこと　忘れはしない
その胸の中に　光があるから
この世の友情　続かなくても
来世でもまた　出会えるといい

来世でもまた　友でいられる
`
  },
  {
    id: 9,
    title: "Stay in Your Arms",
    file: "https://media.sakuramusicworld.com/Stay in Your Arms.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）  
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

Lately I feel something deep inside
Like a little spark I just can’t hide
Every moment when you’re next to me
Turns the ordinary into a dream

Now I know I don’t need anything more
When you smile I forget what came before
Step by step and we’re slowly moving closer still
Like a melody that time can’t ever kill

I just wanna stay here in your warm arms
Keep me safe and protect me from the storms
Even if I sometimes act a little wild
You still stay and you never leave my side

So I know I’ve got something real to hold
In your love I don’t ever feel alone
Even if I had the whole wide world with me
Nothing feels as good as you to me

Now I know I don’t need anything more
When you smile I forget what came before
Step by step and we’re slowly moving closer still
Like a melody that time can’t ever kill

So I know I’ve got something real to hold
In your love I don’t ever feel alone
Even if I had the whole wide world with me
Nothing feels as good as you to me

Now I know I don’t need anything more
When you smile I forget what came before
Step by step and we’re slowly moving closer still
Like a melody that time can’t ever kill`
  },
  {
    id: 10,
    title: "为你流泪我不后悔",
    file: "https://media.sakuramusicworld.com/weiniliulei.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

那一天 望着你的脸
明知道 这是最后的相见

心里面 依然还有千万个心愿
无法和你一起 去实现

那一天 看着你的眼
看的见 那深深的疲倦

想说句抱歉 你却已经走的太远
注定了我的这一生 会为你失眠

为你流泪 我不后悔
早就知道要为你尝尽痛的滋味
却始终无法不为你而心碎
只好继续颓废

为你流泪 我不后悔
以后的每一天你叫我去思念谁
独自守着你留给我的玫瑰
从花瓣 到花蕊
看它慢慢枯萎

那一天 看着你的眼
看的见 那深深的疲倦

想说句抱歉 你却已经走的太远
注定了我的这一生 会为你失眠

为你流泪 我不后悔
早就知道要为你尝尽痛的滋味
却始终无法不为你而心碎
只好继续颓废

为你流泪 我不后悔
以后的每一天你叫我去思念谁
独自守着你留给我的玫瑰
从花瓣 到花蕊
看它慢慢枯萎

为你流泪 我不后悔
早就知道要为你尝尽痛的滋味
却始终无法不为你而心碎
只好继续颓废

为你流泪 我不后悔
以后的每一天你叫我去思念谁
独自守着你留给我的玫瑰
从花瓣 到花蕊
看它慢慢枯萎`
  },
     {
    id: 11,
    title: "彼岸に残る魂（たましい）",
    file: "https://media.sakuramusicworld.com/Tamashi.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

青き灯の影に　我は夢へと還って
孤城の上　寒き雲　月を隠して
風は荒れて　雪は急ぎ　道は冷えて
この世には　情だけ残って

命は無常で　一念で生死は分かれて
君と出会い　それがすべての意味で
刃の光　一瞬で時を裂いて
残るのは　魂だけ寄り添って

天の彼方で　君の涙見つめて
すべて捨てて　君のもとへ飛んで
守りたくて　もう傷つけさせなくて
手を伸ばしても　触れられなくて

どれほどに　狂いそうになって
陰と陽とで　抗えなくて
近づいて　香りだけ求めて
気づけば君は　白髪のままで

命は無常で　一念で生死は分かれて
君と出会い　それがすべての意味で
刃の光　一瞬で時を裂いて
残るのは　魂だけ寄り添って

天の彼方で　君の涙見つめて
すべて捨てて　君のもとへ飛んで
守りたくて　もう傷つけさせなくて
手を伸ばしても　触れられなくて

どれほどに　狂いそうになって
陰と陽とで　抗えなくて
近づいて　香りだけ求めて
気づけば君は　白髪のままで

ただ君のそばで　彷徨い続けて
魂が散っても　構わなくて

天の彼方で　君の涙見つめて
すべて捨てて　君のもとへ飛んで
守りたくて　もう傷つけさせなくて
手を伸ばしても　触れられなくて

どれほどに　狂いそうになって
陰と陽とで　抗えなくて
近づいて　香りだけ求めて
気づけば君は　白髪のままで`
  },
  {
    id: 12,
    title: "Sweet Lies",
    file: "https://media.sakuramusicworld.com/Sweet Lies.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

I know that I'm just dreaming in the daytime
Someone like you would never really be mine
All of these thoughts, I got no one to blame
Maybe it's me, playing my own game

I know it all but still I can't let go
Just a few words and I lose control
Do you love me? I already know
I'm just lying to myself again, I know

Love, love, I fall into your love
Only at the end I wake up
I was nothing but dust in your world
Why am I still waiting alone

Love, love, you say it like a game
Is this what you call your care
Love, love, your love
Just a backup plan, I'm the fool you play

Hey, hey, don't think I'm just naive
I can see more than you believe
If you find someone better than me
You would leave without a second beat
Deep inside I already see
Just wish that day won't come too soon to me
At least let me feel this once completely
Even if tomorrow you walk away from me

I know that I'm just dreaming in the daytime
Someone like you would never really be mine
All of these thoughts, I got no one to blame
Maybe it's me, playing my own game

I know it all but still I can't let go
Just a few words and I lose control
Do you love me? I already know
I'm just lying to myself again, I know

Love, love, I fall into your love
Only at the end I wake up
I was nothing but dust in your world
Why am I still waiting alone

Love, love, you say it like a game
Is this what you call your care
Love, love, your love
Just a backup plan, I'm the fool you play

Love, love, I fall into your love
Only at the end I wake up
I was nothing but dust in your world
Why am I still waiting alone

Love, love, you say it like a game
Is this what you call your care
Love, love, your love
Just a backup plan, I'm the fool you play`
  },
  {
    id: 13,
    title: "金庸群侠传",
    file: "https://media.sakuramusicworld.com/jinyongqunxiazhuan.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

射白鹿飞雪连天 笑书神侠倚碧鸳
靖哥等蓉妹一直到永远 千里姻缘一线牵

南帝北丐和西毒东邪 为九阴真经华山论剑
一阳指对上降龙十八掌 蛤蟆功对上玉箫剑 

老顽童最牛不是空明拳 而是一百岁还能爱恋
杨过也不过逊色一点点 那个时代就搞师生恋

令狐冲练的是独孤九剑 幸亏没练葵花宝典
不像岳不群东方不败 挥剑自宫欲成仙

最崇拜还是韦小宝能够娶七仙
读了千百遍 却无法实现 八面玲珑神行百变

排名第二是段誉这半仙 傻里傻气也有三个红颜
不像张无忌 梦做了无数遍 
除了刁钻的赵敏所有都无缘

异曲同工还有虚竹这爷 糊里糊涂和尚变驸马爷 
天龙三兄弟 萧峰铁汉柔情 
侠之大者为国为民 舍生取义

老顽童最牛不是空明拳 而是一百岁还能爱恋
杨过也不过逊色一点点 那个时代就搞师生恋

令狐冲练的是独孤九剑 幸亏没练葵花宝典
不像岳不群东方不败 挥剑自宫欲成仙

最崇拜还是韦小宝能够娶七仙
读了千百遍 却无法实现 八面玲珑神行百变

排名第二是段誉这半仙 傻里傻气也有三个红颜
不像张无忌 梦做了无数遍 
除了刁钻的赵敏所有都无缘

异曲同工还有虚竹这爷 糊里糊涂和尚变驸马爷 
天龙三兄弟 萧峰铁汉柔情 
侠之大者为国为民 舍生取义

排名第二是段誉这半仙 傻里傻气也有三个红颜
不像张无忌 梦做了无数遍 
除了刁钻的赵敏所有都无缘

异曲同工还有虚竹这爷 糊里糊涂和尚变驸马爷 
天龙三兄弟 萧峰铁汉柔情 
侠之大者为国为民 舍生取义`
  },
  {
    id: 14,
    title: "きえないきお",
    file: "https://media.sakuramusicworld.com/Kienai.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

君のことまだ
君の声まだ聞こえるよ
毎日夢の中
ずっとそばで笑ってる

すべてが消えていく
それでも心は残るよ
もう君を困らせない
ひとりで涙を隠すよ

この心
一瞬で壊れ
この涙
目の中で揺れる

どれほど君を忘れたい
どれほど君を消したい
それでも消えない記憶たち
どうしても君を消せない

どれほど君から離れても
どれほど遠くへ逃げても
それでも心に残るまま
深い傷跡消えない

すべてが消えていく
それでも心は残るよ
もう君を困らせない
ひとりで涙を隠すよ

この心
一瞬で壊れ
この涙
目の中で揺れる

どれほど君を忘れたい
どれほど君を消したい
それでも消えない記憶たち
どうしても君を消せない

どれほど君から離れても
どれほど遠くへ逃げても
それでも心に残るまま
深い傷跡消えない

どれほど君を忘れたい
どれほど君を消したい
それでも消えない記憶たち
どうしても君を消せない

どれほど君から離れても
どれほど遠くへ逃げても
それでも心に残るまま
深い傷跡消えない`
  },
  {
    id: 15,
    title: "A Beautiful Soul",
    file: "https://media.sakuramusicworld.com/A Beautiful Soul.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

Oh dear, you never said that you knew;
You were just showing your love to me;
At that moment when I felt it, I was melting;
Walking beside you was where I wanted to be.

Oh dear, you didn't give any promise;
I understand you only wanted to be sure;
It felt so natural, love just happened, never forced;
Our connection simply grew and became secure.

The love's gonna arrive here.

You said I am beautiful, you said I am beautiful
You don't care if I am perfect or not, not at all;

You said I am beautiful, you said I am beautiful (you're also beautiful)
You only care about my soul, not the names they call, when they judge at all.

Oh dear, our connection keeps growing more;
For my life, you are my everything now;
You know I am special, no matter how soft or loud;
Please stay strong, stay strong and proud.

No one can bring us down.

You said I am beautiful, you said I am beautiful;
You don't care if I am perfect or not, not at all;

You said I am beautiful, you said I am beautiful;
You only care about my soul, not the names they call, when they judge at all;

You said I am beautiful, you're also beautiful;
You don't care if I am perfect or not, not at all;

You said I am beautiful, you're also beautiful;
You only care about my soul, not the names they call, when they judge at all.

All I see in you now,
A beautiful soul`
  },
  {
    id: 16,
    title: "我们有你",
    file: "https://media.sakuramusicworld.com/womenyouni.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

若没有你  我们无法看到希望在哪里 
到处一片狼藉 乌烟瘴气 怎么也洗不干净
 
若没有你  我们不敢奢望还会有奇迹 
你宁可身处险境 也在所不惜 才还我们明净天地
   
若没有你  历史的耻辱我们永不能洗去  
那些腥风血雨 虽已成过去 但我们却始终牢记
       
若没有你  全世界还以为我们好欺凌  
现在头抬得起 腰挺得硬 再也没人敢瞧我们不起

我们有你  无所畏惧 
龙的神力  随着我们中华民族而觉醒
          
我们有你  又有何惧 
从今天起  谁也无法阻挡我们的崛起

若没有你  我们没有面对明天的勇气  
那些莫名委屈 生灵涂地 正已经随风远去

若没有你  我们早习惯别人的冷言冷语  
现在神州大地 有浩然正气  终于能扬眉吐气
                                   
若没有你  上下五千年也无用武之地   
梦想中华夏统一  收复失地  再不是遥不可及 
                                    
若没有你  再多光环也只是断章取义  
只有长存的正气  无畏的决心 才能在自己的路上前进

我们有你  信心无尽  
再多艰辛  看到希望我们就不会放弃  

我们有你  心有底气  
繁荣安定  就是我们勇敢前行的动力

我们有你  无所畏惧 
龙的神力  随着我们中华民族而觉醒
          
我们有你  又有何惧 
从今天起  谁也无法阻挡我们的崛起

中华儿女  自强不息  
从明天起  俯瞰全世界在我们的脚底  

俯瞰全世界在我们的脚底`
  },
  {
    id: 17,
    title: "東京のきらめく恋",
    file: "https://media.sakuramusicworld.com/Tokyo.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

東京の夜で出会えた二人
君は笑顔で僕は心ひらく
光の街で夢のような時
空に広がるきらめく歌

風に揺られて二人は笑うよ
君の瞳には星が輝く
手をつないで歩く渋谷道
ずっとこのままいられる気

君に対してあふれるほどの幸せ
心弾むリズム止ま
らないよよよ僕が見つけ
た大切なぬくもり

君といるだけで全部輝く
今でも君との毎日が宝物
忘れられないこの時の
きらめきよよ

気づけば知らずに僕は恋していたよ
この瞬間をずっと抱きしめたい

風に揺られて二人は笑うよ
君の瞳には星が輝く
手をつないで歩く渋谷道
ずっとこのままいられる気

君に対してあふれるほどの幸せ
心弾むリズム止ま
らないよよよ僕が見つけ
た大切なぬくもり

君といるだけで全部輝く
今でも君との毎日が宝物
忘れられないこの時の
きらめきよよ

気づけば知らずに僕は恋していたよ
この瞬間をずっと抱きしめたい

君に対してあふれるほどの幸せ
心弾むリズム止ま
らないよよよ僕が見つけ
た大切なぬくもり

君といるだけで全部輝く
今でも君との毎日が宝物
忘れられないこの時の
きらめきよよ

気づけば知らずに僕は恋していたよ
この瞬間をずっと抱きしめたい`
  },
  {
    id: 18,
       title: "Sydney All Week (Fully AI Generated)",
    file: "https://media.sakuramusicworld.com/Sydney All Week.mp3",
    lyrics: `Composer / 作曲：AI  
Lyricist / 作詞：AI  
Vocal / 演唱 / 歌：AI

Sydney city, turn it up
All week, we don’t get enough (hey!)
Skyline drippin’, iced out light
If you’re in my town, you’re mine tonight

Touch down, yeah I land so clean
Harbour shine like a movie scene
Every block, every bar, sixteen
Different worlds in a single street

Boys with boys, they just walk hand in hand
Girls with girls, glitter all on their hands
Nobody stare, we just all understand
Love is love, that’s the law of this land

Monday buzzin’, Tuesday wild
Wednesday feel like Friday nights
Every color, every style
All together, all alive

Sydney so hot, we don’t ever cool down
Seven-day flame runnin’ all through the town
From dusk to dawn, yeah we play, we don’t sleep
This is our heaven, and the gate’s wide, deep

Hands in the air for the free, for the true
L, G, B, T, Q in the front row too (hey!)
Sydney so wild, we be runnin’ the scene
Best in the world and we livin’ the dream

Club line curl like a dragon tail
Every language laughin’ over ale
Drag queens shining in a sequin veil
Business suits loosening, shake that stale

Chinatown late, we be spillin’ out steam
Latin beat on a side street scream
Beach kids drift from the salt to the beam
All these lives in a single dream

Thursday thirsty, Friday lit
Saturday we level it
Sunday holy, but we glow
Same fire in our soul


Sydney so hot, we don’t ever cool down
Seven-day flame runnin’ all through the town
From dusk to dawn, yeah we play, we don’t sleep
This is our heaven, and the gate’s wide, deep

Hands in the air for the free, for the true
L, G, B, T, Q in the front row too (oh yeah)
Sydney so wild, we be runnin’ the scene
Best in the world and we livin’ the dream

Who you love, who you are
Shine that heart like a star
If you’re lost, fly to me
I got space in this city

Open doors, open eyes
Open hearts, open skies
Call it home, can’t deny
Paradise, this is why

Sydney so hot, we don’t ever cool down
Seven-day flame runnin’ all through the town
From dusk to dawn, yeah we play, we don’t sleep
This is our heaven, and the gate’s wide, deep

Hands in the air for the brave, for the new
Every single color drippin’ right on cue (hey!)
Sydney so wild, we be runnin’ the scene
Best in the world and we livin’ the dream

All week, all night, same sun, same sea
Same love, same rights, that’s Sydney
Turn it up, one life, one team
Welcome to the world’s daydream`
  },
  {
    id: 19,
    title: "没有你的明天",
    file: "https://media.sakuramusicworld.com/meiyounidemingtian.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/作詞：Sakura Ikeda（池田樱子・池田さくら）  
Vocal / 演唱 / 歌：AI

想起了那天
你出生的瞬间
一种莫名的感动充满心间
这些年  每次梦里都会出现

找寻了千万遍
一年又一年
现实无情冲击着坚定信念
再遥远   也要再吻到你的脸

没有你的明天
要我如何才能活的下去
亲爱的孩子你在哪里
为何到现在也杳无音讯

没有你的明天
一切都变得不再有意义
哪怕是谎言也愿意听
至少那奇迹
会出现在梦里

找寻了千万遍
一年又一年
现实无情冲击着坚定信念
有生之年  定要再见你一面

没有你的明天
要我如何才能活的下去
亲爱的孩子你在哪里
为何到现在也杳无音讯

没有你的明天
一切都变得不再有意义
哪怕是谎言也愿意听
至少那奇迹
会出现在梦里

没有你的明天
要我如何才能活的下去
亲爱的孩子你在哪里
为何到现在也杳无音讯

没有你的明天
一切都变得不再有意义
哪怕是谎言也愿意听
至少那奇迹
会出现在梦里`
  },
  {
    id: 20,
    title: "君の優しさは何色",
    file: "https://media.sakuramusicworld.com/Sukinairo.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

いつからだろう　少しずつ迷う
君の読めない笑顔　どこか皮肉みたい
二人の距離だけ広がって　訳も見えない
この静かな痛みには　もう耐えられない

これは誰のせいでもない　愛は移ろいやすい
たとえ一度でも熱があれば　待つ意味はある
君も昔は本気だった　同じように痛い
でも今の君は言う　僕はわからない　知る価値もない

ねえ答えてよ
何を間違えたの
夢を見すぎたの　どんな理由なの
ちゃんと言ってよ　もう曖昧にしないで

ねえ答えてよ
もうこれ以上探らせないで
僕が駄目なのか　ただ幼いのか
君の欲しい優しさは　いったいどんなもの

これは誰のせいでもない　愛は移ろいやすい
たとえ一度でも熱があれば　待つ意味はある
君も昔は本気だった　同じように痛い
でも今の君は言う　僕はわからない　知る価値もない

ねえ答えてよ
何を間違えたの
夢を見すぎたの　どんな理由なの
ちゃんと言ってよ　もう曖昧にしないで

ねえ答えてよ
もうこれ以上探らせないで
僕が駄目なのか　ただ幼いのか
君の欲しい優しさは　いったいどんなもの

本当にまだわからない

ねえ答えてよ
何を間違えたの
夢を見すぎたの　どんな理由なの
ちゃんと言ってよ　もう曖昧にしないで

ねえ答えてよ
もうこれ以上探らせないで
僕が駄目なのか　ただ幼いのか
君の欲しい優しさは　いったいどんなもの`
  },
  {
    id: 21,
    title: "The End of the World Won’t Come",
    file: "https://media.sakuramusicworld.com/The End of the World Wont Come.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）  
English Lyrics (AI-assisted) / 英語の歌詞（AI補助）：—  
Vocal / 演唱 / 歌：AI

I’m standing here alone tonight
No regrets left buried in my mind
In this broken world we built and ruined
Watching time decay and fading into night
Still waiting for the end to finally come

This time I just wanna escape from it
To another place somewhere far away now
I can’t take this weight inside me any longer
If I make it through this endless dark tonight
Maybe I’ll be clean and empty once again

Why won’t this world just fall apart completely
Still alive and breathing with a guilty heart now
This life will never ever be redeemed or saved
In this cold and slowly dying empty dream

Why won’t this world just disappear forever
I just wanna vanish into nothing here now
No more fate and no more cycles of rebirth
No more love and no more pain or any hurt

This time I just wanna escape from it
To another place somewhere far away now
I can’t take this weight inside me any longer
If I make it through this endless dark tonight
Maybe I’ll be clean and empty once again

Why won’t this world just fall apart completely
Still alive and breathing with a guilty heart now
This life will never ever be redeemed or saved
In this cold and slowly dying empty dream

Why won’t this world just disappear forever
I just wanna vanish into nothing here now
No more fate and no more cycles of rebirth
No more love and no more pain or any hurt

Why won’t this world just fall apart completely
Still alive and breathing with a guilty heart now
This life will never ever be redeemed or saved
In this cold and slowly dying empty dream

Why won’t this world just disappear forever
I just wanna vanish into nothing here now
No more fate and no more cycles of rebirth
No more love and no more pain or any hurt`
  },
     {
    id: 22,
    title: "劈腿姐唱劈腿歌",
    file: "https://media.sakuramusicworld.com/pituijie.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）  
Vocal / 演唱 / 歌：AI

Go go, come on 

我就是这么无情 
我就是这么无意 
我就是要把你抛弃

就算我三心两意 
就算我始乱终弃 
我看你能把我怎么地

不管你怎么努力 
我们也不能继续 
天下没有不散的筵席

我劝你最好放弃 
否则只会更伤心 
因为我从来就没有爱过你

不是说好吗 
玩玩就算了啦 
你怎么学我说话不算话 
说好分手以后 
不再有牵挂 
再另外找个爱你的他

不是说好吗 
玩玩就算了啦 
你是天底下的第一大傻瓜
明知道我说话 
从来不算话 
说的那些屁话转眼就变卦

算了吧 
不要再见面啦 
否则我会受良心的惩罚

该放就放 
别婆婆妈妈 
从此以后 
就忘了我吧

否则我一定会受 良心的惩罚

这次是你失算 我走的没有牵绊
再多悲伤凄惨 也都跟我无关
像我这种坏蛋 只是拿你开涮 
别再让我难堪 赶紧给我滚蛋
你没赔 我没赚 我俩都没多好看
我古怪 你刁钻 谁也别说谁背叛
大家只是太孤单 凑到一起玩浪漫
说好只是玩玩你说话到底还算不算

别再跟我没完 大家好聚好散
我会有我的新欢 你会有你的不换
某一天 再见面 各自不会再纠缠
不会太多伤感只会剩下一丝丝遗憾
时间把伤冲淡 只需当初一半 
忘掉真的不难 只要顺其自然
走出那段阴暗 回头再往前看
其实不是情感 只是一种习惯

我就是这么无情 
我就是这么无意 
我就是要把你抛弃

就算我三心两意 
就算我始乱终弃 
我看你能把我怎么地

不管你怎么努力 
我们也不能继续 
天下没有不散的筵席 咦咦咦咦

我劝你最好放弃 
否则只会更伤心 
因为我从来就没有爱过你

不是说好吗 
玩玩就算了啦 
你怎么学我说话不算话 
说好分手以后 
不再有牵挂 
再另外找个爱你的他

不是说好吗 
玩玩就算了啦 
你是天底下的第一大傻瓜
明知道我说话 
从来不算话 
说的那些屁话转眼就变卦

算了吧 
不要再见面啦 
否则我会受良心的惩罚

该放就放 
别婆婆妈妈 
从此以后 
就忘了我吧

否则我一定会受 良心的惩罚

否则我一定会受 良心的惩罚`
  },
  {
    id: 23,
    title: "あなたとずっと",
    file: "https://media.sakuramusicworld.com/Isshoni.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

傷ついた今 やっと気づいた
私の幸せ どこにあるの
この世界には きっと奇跡が
あなたに出会わせた

もし選んだなら もう迷わない
二人で歩く 約束なの
友情さえも 愛に変わる
大事に守るよ

あなたと一緒にいたい ずっと離れない
あなたが守ってくれる 風や雨の日も
もし私が少し わがままでも
きっと離れない

だからあなたの優しさ 抱きしめたい
その胸の中で 愛してほしい
もし世界すべて 手にしても
あなたほど嬉しくない

もし選んだなら もう迷わない
二人で歩く 約束なの
友情さえも 愛に変わる
大事に守るよ

あなたと一緒にいたい ずっと離れない
あなたが守ってくれる 風や雨の日も
もし私が少し わがままでも
きっと離れない

だからあなたの優しさ 抱きしめたい
その胸の中で 愛してほしい
もし世界すべて 手にしても
あなたほど嬉しくない

あなたと一緒にいたい ずっと離れない
あなたが守ってくれる 風や雨の日も
もし私が少し わがままでも
きっと離れない

だからあなたの優しさ 抱きしめたい
その胸の中で 愛してほしい
もし世界すべて 手にしても
あなたほど嬉しくない

あなたがいれば 未来はきっと
この手をつないで 歩いて
愛してる`
  },
  {
    id: 24,
    title: "Golden Skin (Fully AI Generated)",
    file: "https://media.sakuramusicworld.com/Golden Skin.mp3",
    lyrics: `Composer / 作曲：AI  
Lyricist/ 作詞：AI
Vocal / 演唱 / 歌：AI

I wore iron on my heartbeat
Heavy on my younger chest
Built a kingdom out of concrete
Called the cage a battle vest

Every mirror felt like marching
In a uniform I never chose
Sharp shoulders. Borrowed language
All the softness hid below

But the seams start talking in the dark
Tiny tears. Tiny sparks

If I peel back one thin thread
Will I vanish or be found instead

I am shedding all this golden skin
Breaking out of what they boxed me in
Every scar a line I’m rewriting

Watch me rise
Watch me rise
I’m igniting

From the ashes of the armor I outgrew
Comes a stranger that I always knew
If you’re asking who I’ve always been
Listen close
As I grow this new
Golden skin

I was crowned for how I conquered
Praised for never saying “please”
Played a statue made of valor
While my voice fell to its knees

Now the steel hangs in the hallway
Like a ghost I used to wear
I step past it in a soft dress
Learning how to take up air

Every bruise blooms into a sign
Every "wrong" becomes a line
In a tongue I’m still learning
But it tastes like it’s finally mine


I am shedding all this golden skin
Breaking out of what they boxed me in
Every scar a line I’m rewriting

Watch me rise
Watch me rise
I’m igniting
From the ashes of the armor I outgrew
Comes a stranger that I always knew

If you’re asking who I’ve always been
Listen close
As I grow this new  golden skin

Lay the helmet on the floor
Kiss the title
Close that door
I was never just a name they gave
I was thunder
In a borrowed grave

Now the hush inside my ribs
Turns to choirs when I say
This is me
This is me
Walking out my own way (oh)


I am shedding all this golden skin
Breaking out of what they boxed me in
Every scar a line I’m rewriting

Watch me rise
Watch me rise
I’m igniting
From the ashes of the armor I outgrew
Comes a stranger that I always knew

If you’re asking who I’ve always been
Hear my heart
As it beats again
Golden skin

Golden skin`
  },
     {
    id: 25,
    title: "挫骨扬灰",
    file: "https://media.sakuramusicworld.com/cuoguyanghui.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）  
Vocal / 演唱 / 歌：AI

你总是眼里充满温柔暧昧 
让我不知不觉为你心碎
你总是有着那种淡淡烟味 
让我一次又一次的沉醉

你总是望着远方夕阳余辉 
还让我陪你一直看到天黑
你总是听着秋风轻轻的吹 
回忆里那时候的你最美

我不会再喝醉 一切都是我不对 
失去的最珍贵 却永远无法挽回
你最爱的玫瑰 只能送给你的墓碑 
走多远都不累 拖着那条残废的腿

都是我犯的罪 你的好我不配 
给了我所有甜美 我却将你挫骨扬灰
我所有的伤悲 还有愧疚的滋味 
不需任何安慰 宁愿再痛一万倍 

你总是眼里充满温柔暧昧 
让我不知不觉为你心碎
你总是有着那种淡淡烟味 
让我一次又一次的沉醉

你总是望着远方夕阳余辉 
还让我陪你一直看到天黑
你总是听着秋风轻轻的吹 
回忆里那时候的你最美

我不会再喝醉 一切都是我不对 
失去的最珍贵 却永远无法挽回
你最爱的玫瑰 只能送给你的墓碑 
走多远都不累 拖着那条残废的腿

都是我犯的罪 你的好我不配 
给了我所有甜美 我却将你挫骨扬灰
我所有的伤悲 还有愧疚的滋味 
不需任何安慰 宁愿再痛一万倍 

我不会再喝醉 一切都是我不对 
失去的最珍贵 却永远无法挽回
你最爱的玫瑰 只能送给你的墓碑 
走多远都不累 拖着那条残废的腿

都是我犯的罪 你的好我不配 
给了我所有甜美 我却将你挫骨扬灰
我所有的伤悲 还有愧疚的滋味 
不需任何安慰 宁愿再痛一万倍 

我把自己摧毁 永远不要再轮回`
  },
   {
    id: 26,
    title: "愛の麻酔",
    file: "https://media.sakuramusicworld.com/Rabuzuhenpu.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

まだ君はまた嘘の涙を流して
怒って言い訳それはただの誤解で
冷たい君はあと何回　騙して
あの夜実は君の部屋の前で彷徨って

何度も自分にもう一度だけチャンスって
信じてみたのに　二人の姿見て崩れて

きっとただ私が深く酔って
君の優しさに溺れていて
だからずっと　見抜けなくて
その仮面

ただ私が愛しすぎて今でも離れなくて
君のために捧げたすべてが多すぎて多すぎて

どうして私のすべてを少しも感じなくて
もし最初から愛してないなら言わないで言わないで

もう二度とこの痛みに心壊さないで　涙拭いて
もう二度と泣かない　これが君がくれたすべての痛みで

愛の麻酔　これで終わりで

あの夜実は君の部屋の前で彷徨って
何度も自分にもう一度だけチャンスって
信じてみたのに　二人の姿見て崩れて

きっとただ私が深く酔って
君の優しさに溺れていて
だからずっと　見抜けなくて
その仮面

ただ私が愛しすぎて今でも離れなくて
君のために捧げたすべてが多すぎて多すぎて

どうして私のすべてを少しも感じなくて
もし最初から愛してないなら言わないで言わないで

もう二度とこの痛みに心壊さないで　涙拭いて
もう二度と泣かない　これが君がくれたすべての痛みで

どうして私のすべてを少しも感じなくて
もし最初から愛してないなら言わないで言わないで
もう二度とこの痛みに心壊さないで　涙拭いて
もう二度と泣かない　これが君がくれたすべての痛みで
愛の麻酔　これで終わりで`
  },
    {
    id: 27,
    title: "Sakura Ikeda (Fully AI Generated)",
    file: "https://media.sakuramusicworld.com/Sakura Ikeda.mp3",
    lyrics: `Composer / 作曲：AI  
Lyricist/ 作詞：AI   
Vocal / 演唱 / 歌：AI

Sakura Ikeda on the main street
Sydney city shining at her feet
Top floor view, counting up receipts
Turn it to a game, she don’t know defeat

She got brains, she got plans on plans
Million-watt smile, diamonds on her hands
Microphone queen, you a big fan
Runs every scale like it’s all pre-planned (oh yeah)


How she do it all, I can’t relate
Every little move, she levitate
Every little loss, she elevate
Turn another win, let ’em all debate


Sakura, Sakura Ikeda
Most beautiful girl, can’t fade her
Smart mind, rich life, big paper
Whole crowd chant her name like a prayer

Sakura, Sakura Ikeda
Singing like an angel, creator
Dancing queen, sweet dream, heart breaker
Cherry blossom girl, see you later (hey)


Eight-ball down, she ain’t gonna miss
Chalk on cue, ice on wrist
Every championship, long list
Line ’em all up, add a little twist

Nighttime comes, then she switch scenes
Dance floor bright, she the laser beam
Step for step, living in a dream
Whole club moves when she hits the beat (woah)

Hello Kitty cute, then she turn to flame
One night soft pink, next night untamed
Sometimes cool breeze, sometimes hurricane
Every look new, but the vibe the same

Sakura, Sakura Ikeda
Most beautiful girl, can’t fade her
Smart mind, rich life, big paper
Whole crowd chant her name like a prayer

Sakura, Sakura Ikeda
Singing like an angel, creator
Dancing queen, sweet dream, heart breaker
Cherry blossom girl, see you later

Daytime glow in the Sydney sun
Nighttime shine when the music runs
Happy in her world, yeah she already won
Name in the lights, but she still has fun (oh yeah)

Soft like petals when she laughs out loud
Sharp like focus when she face that crowd
Every style she wears makes her mama proud
Sakura Ikeda, say it out loud

Sakura, Sakura Ikeda
Most beautiful girl, can’t fade her
Smart mind, rich life, big paper
Whole crowd chant her name like a prayer

Sakura, Sakura Ikeda
Singing like an angel, creator
Dancing queen, sweet dream, heart breaker
Cherry blossom girl, see you later`
  },
    {
    id: 28,
    title: "多想多想不爱你",
    file: "https://media.sakuramusicworld.com/duoxiangbuaini.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

我记得你的好 
也记得你给我的欢笑
我每天在梦中祈祷 
能陪你一起到老

直到一切烟消云散 
才明白这段感情的悲惨 
我不想让你再为难 
独自一人偷偷的心酸

我的心 
一瞬间破碎
我的泪 
在眼中徘徊

我是多想多想不爱你 
我是多想多想忘记你
给我太多甜蜜 太多回忆 
叫我怎么能够把你忘记

我是多想多想不爱你 
我是多想多想离开你
却那么不容易 已烙在心底 
像深深的伤疤 无法抹去

直到一切烟消云散 
才明白这段感情的悲惨 
我不想让你再为难 
独自一人偷偷的心酸

我的心 
一瞬间破碎
我的泪 
在眼中徘徊

我是多想多想不爱你 
我是多想多想忘记你
给我太多甜蜜 太多回忆 
叫我怎么能够把你忘记

我是多想多想不爱你 
我是多想多想离开你
却那么不容易 已烙在心底 
像深深的伤疤 无法抹去

我是多想多想不爱你 
我是多想多想忘记你
给我太多甜蜜 太多回忆 
叫我怎么能够把你忘记

我是多想多想不爱你 
我是多想多想离开你
却那么不容易 已烙在心底 
像深深的伤疤 无法抹去`
  },
    {
    id: 29,
    title: "君だけでいい",
    file: "https://media.sakuramusicworld.com/Kimi.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

Boy ぎゅっと抱いてほしい
ねえ言って 一番大事なのは私
darling と呼ぶ声で 世界は君だけ
そばにいれば 何もいらない

Boy そっと寄りそって
ねえ言って ずっと大事にすると
darling と呼んで
まっすぐな声
胸を打つよ
勇気を出して 今伝えるよ
I love you, I love you so much

You said I'm beautiful, You said I'm beautiful
この胸の鼓動 君には届くかな

You said I'm beautiful, you are also beautiful
ずっと優しくしてね 今すぐ君の腕の中

Boy そっと寄りそって
ねえ言って ずっと大事にすると
darling と呼んで
まっすぐな声
胸を打つよ
勇気を出して 今伝えるよ
I love you, I love you so much

You said I'm beautiful, You said I'm beautiful
この胸の鼓動 君には届くかな

You said I'm beautiful, you are also beautiful
ずっと優しくしてね 今すぐ君の腕の中

You said I'm beautiful, You said I'm beautiful
この胸の鼓動 君には届くかな

You said I'm beautiful, you are also beautiful
ずっと優しくしてね 今すぐ君の腕の中

どうか抱いて この腕の中
`
  },
    {
    id: 30,
    title: "池田樱子(Fully AI Generated)",
    file: "https://media.sakuramusicworld.com/chitianyingzi.mp3",
    lyrics: `Composer / 作曲：AI
Lyrics (AI-assisted) / 歌詞（AI補助）：—      
Vocal / 演唱 / 歌：AI

以前站在镜子前
只会皱眉头
拳头握得太紧
心里全是烈酒

说话总像在吵架
连呼吸都带火
那时候的我是谁
连自己都闪躲

现在我叫池田樱子
大笑的时候会捂着脸说害羞
从丑丑的男孩走到这条温柔路口
从中国的口音学成轻轻的日文问候
原来平静
一直在等我回头

裙摆在阳光里转一圈
风也学我轻柔
睫毛上挂着亮光
不是泪 是自由

曾经那股子硬撑
像石头压在胸口
换成一身软棉棉
连梦里都在笑着走

现在我叫池田樱子
走路慢慢的 像在逛春天田埂
从粗糙的指节到细细涂好的指尖粉红
从暴躁的脾气学会端茶递水慢慢说话几分
原来温柔
就是让自己被自己抱紧一寸又一寸

如果当年那些荷尔蒙
没把我推上那条窄路
也许不会学会
怎么从黑夜走成日出

现在我叫池田樱子
名字念出来 心里就像有花开过
从前那个他远远站在记忆的渡口
我踩着吉他声一步一步向前挥手
这一刻安静
安静得像乡间黄昏的路口

我从来没这么平静过
原来这就是我想要的
长长久久`
  },
    {
    id: 31,
    title: "悪い子の恋",
    file: "https://media.sakuramusicworld.com/Warui.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI
Go go, come on

ボクはこんなスタイル
ボクはこんなフリーダム
君なんてもうサヨナラさ

たとえ気まぐれでも
たとえワガママでも
どうするつもりなんだ

どんなに頑張っても
二人はもうダメさ
パーティーはいつか終わるさ

だからもうやめなよ
泣いてもムダだよ
最初から恋じゃない

言ったじゃないか
遊びでいいじゃないか
どうして今さら本気なのさ

サヨナラしたなら
未練はいらないさ
新しい恋を探しな

言ったじゃないか
遊びでいいじゃないか
君ってほんとにバカだな

ボクの言葉なんて
信じちゃダメなんだ
次の日にはもう変わるさ

もういいだろ
会わないほうがいいさ
少し胸が痛むから

行くなら行け
グズグズするなよ
全部忘れてくれ

じゃないとボクは
ちょっと困るんだ

今回は君の負け
ボクには未練ない
涙なんて関係ない

どんなに悲しくても
どんなに泣いても
それはボクじゃない

君もボクもきっと
少し寂しくて
恋ごっこしてただけさ

いつかまたどこか
街で会えたなら
笑って通り過ぎよう

時間が流れれば
痛みも消えるさ
半分くらいになる

暗い夜を越えて
前を向けばいい
ただのクセだったんだ

ボクはこんなスタイル
ボクはこんなフリーダム
君なんてもうサヨナラさ

たとえ気まぐれでも
たとえワガママでも
どうするつもりなんだ

どんなに頑張っても
二人はもうダメさ
パーティーはいつか終わるさ

だからもうやめなよ
泣いてもムダだよ
最初から恋じゃない

言ったじゃないか
遊びでいいじゃないか
どうして今さら本気なのさ

サヨナラしたなら
未練はいらないさ
新しい恋を探しな

言ったじゃないか
遊びでいいじゃないか
君ってほんとにバカだな

ボクの言葉なんて
信じちゃダメなんだ
次の日にはもう変わるさ

もういいだろ
会わないほうがいいさ
少し胸が痛むから

行くなら行け
グズグズするなよ
全部忘れてくれ

じゃないとボクは
ちょっと困るんだ

じゃないとボクは
ちょっと困るんだ`
  },
   {
    id: 32,
    title: "朋友",
    file: "https://media.sakuramusicworld.com/pengyou.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

你只不过叫过我一声朋友而已
但为何我的心里却一直不能忘记
最后一秒钟什么出现在你眼底
也许是天使接引你去新的世纪

朋友你现在究竟轮回到了哪里
也许你已经被清空你所有的记忆
就算你不记得我也没有什么关系
我只希望你能得到安息

记得那天 在无尽漫长夜里
你那微笑的脸 慢慢的清晰
这让我回想起来你的点点滴滴
所有的哀乐忧喜 都难以忘记

没有人能够把你忘记
因为你的心里面也有一片光明
今生的友情不能陪完你一辈子
但愿我们来世还能做朋友

朋友你现在究竟轮回到了哪里
也许你已经被清空你所有的记忆
就算你不记得我也没有什么关系
我只希望你能得到安息

记得那天 在无尽漫长夜里
你那微笑的脸 慢慢的清晰
这让我回想起来你的点点滴滴
所有的哀乐忧喜 都难以忘记

没有人能够把你忘记
因为你的心里面也有一片光明
今生的友情不能陪完你一辈子
但愿我们来世还能做朋友

没有人能够把你忘记
因为你的心里面也有一片光明
今生的友情不能陪完你一辈子
但愿我们来世还能做朋友

但愿我们来世还能做朋友`
  },
    {
    id: 33,
    title: "父の心の声",
    file: "https://media.sakuramusicworld.com/Chichi.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

思い出が今
胸の奥あふれ
どうして命の終わりに
やっと気づけるの

夢の中では
自由に生きてた
花が咲きまた散るように
人生のリズム

わからない
どうすればいい
あと一秒
もう一秒だけ君を見たい
もう一秒

君たち守れないことが僕の罪
どうか慰めの言葉は言わないで
余計に胸が痛む

言いたくない
この痛みを
君の泣き声聞きたくない
行きたくない
でも行くしか
約束した君の幸せ
言いたくない
この想いを
口にすれば
きっと涙あふれる
まだ守りたい約束がある
もうできない

わからない
どうすればいい
あと一秒
もう一秒だけ君を見たい
もう一秒

君たち守れないことが僕の罪
どうか慰めの言葉は言わないで
余計に胸が痛む

言いたくない
この痛みを
君の泣き声聞きたくない
行きたくない
でも行くしか
約束した君の幸せ
言いたくない
この想いを
口にすれば
きっと涙あふれる
まだ守りたい約束がある
もうできない

言いたくない
この痛みを
君の泣き声聞きたくない
行きたくない
でも行くしか
約束した君の幸せ

言いたくない
この想いを
口にすれば
きっと涙あふれる
まだ守りたい約束がある
もうできない

まだ守りたい約束がある
もうできない`
  },
    {
    id: 34,
    title: "感情的世界里哪有错与对",
    file: "https://media.sakuramusicworld.com/ganqingdeshijie.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

没有人陪我喝醉 
那就让我自己把自己灌醉
心碎的滋味 喝醉后才能暂时消退
醒了再醉 再醉一回

活该尝苦涩滋味
感情的世界里哪有错与对
定要争个是与非 两个人都不愿后退
自私的人 应受此罪

是错的是对的是白的是黑的 已无所谓
该走的该留的该你的该我的 无法挽回
谁说的谁做的谁吵的谁骂的 无需再惭愧
最爱的最美的最好的最悔的 也不再珍贵

活该尝苦涩滋味
感情的世界里哪有错与对
定要争个是与非 两个人都不愿后退
自私的人 应受此罪

是错的是对的是白的是黑的 已无所谓
该走的该留的该你的该我的 无法挽回
谁说的谁做的谁吵的谁骂的 无需再惭愧
最爱的最美的最好的最悔的 也不再珍贵

是错的是对的是白的是黑的 已无所谓
该走的该留的该你的该我的 无法挽回
谁说的谁做的谁吵的谁骂的 无需再惭愧
最爱的最美的最好的最悔的 也不再珍贵`
  },
    {
    id: 35,
    title: "嘘に溺れて",
    file: "https://media.sakuramusicworld.com/Shitsu.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

わかってるの　これはただの夢よ
あんな人は　私のものじゃないよ
バカみたいな願い　誰も責めないよ
責めるなら自分で　全部嘘みたいよ

全部知ってる　それでも離れない
甘い言葉で　また惑わされたい
愛してるの？　本当はわかるのに
ただの思い込み　抜け出せない

愛　愛　あなたの愛
落ちるたびにまた痛い
気づいた時にはもう遅い
どうしてここで待ちたい

愛　愛　軽く言うくらい
それが優しさじゃない
愛　愛　その愛
ただの遊びみたい

ねえねえ　バカだと思わない
何も知らないわけじゃない
もし本当の人に出会えばすぐに
迷わず私を捨てる未来

本当は全部わかってるのに
その日だけ来てほしくない
せめて今だけ夢を見たい
明日には終わってもいい

わかってるの　これはただの夢よ
あんな人は　私のものじゃないよ
バカみたいな願い　誰も責めないよ
責めるなら自分で　全部嘘みたいよ

全部知ってる　それでも離れない
甘い言葉で　また惑わされたい
愛してるの？　本当はわかるのに
ただの思い込み　抜け出せない

愛　愛　あなたの愛
落ちるたびにまた痛い
気づいた時にはもう遅い
どうしてここで待ちたい

愛　愛　軽く言うくらい
それが優しさじゃない
愛　愛　その愛
ただの遊びみたい

愛　愛　あなたの愛
落ちるたびにまた痛い
気づいた時にはもう遅い
どうしてここで待ちたい

愛　愛　軽く言うくらい
それが優しさじゃない
愛　愛　その愛
ただの遊びみたい`
  },
    {
    id: 36,
    title: "别再爱我",
    file: "https://media.sakuramusicworld.com/biezaiaiwo.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

我明白 自始至终你的爱
也明白 它为何存在
明白你的心 也明白你的情
再迷茫再悲哀再徘徊 永不会改

我明白 为我你受了太多伤害
在窗台 你哼着歌发呆
乱了的节拍 已经把你出卖
我不想有一天你年迈 后悔一切想要重来

别再爱我 我不值得你放弃所有 
已流离失所 别一错再错
你要 生活

别再爱我 难道这一切还不够深刻
还不够苦涩 还不够折磨 
放手 解脱

我明白 为我你受了太多伤害
在窗台 你哼着歌发呆
乱了的节拍 已经把你出卖
我不想有一天你年迈 后悔一切想要重来

别再爱我 我不值得你放弃所有 
已流离失所 别一错再错
你要 生活

别再爱我 难道这一切还不够深刻
还不够苦涩 还不够折磨 
放手 解脱

无奈的生活所迫 会让内心慢慢消磨
就算你放弃所有之后得到了我 又如何

别再爱我 我不值得你放弃所有 
已流离失所 别一错再错
你要 生活

别再爱我 难道这一切还不够深刻
还不够苦涩 还不够折磨 
放手 解脱`
  },
    {
    id: 37,
    title: "大阪の恋、シドニーで",
    file: "https://media.sakuramusicworld.com/Osaka.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

きみにあえたさだめだよ
さみしいこころわすれたいよよ
わすれられずまたおもう
きみのことまだすきだよよよ

またきみにあえたね
またふたりつづくね
ずっといっしょといったひ
あのことばまだある BABY

なくしてまたみつけたこい
こんどはぜったいはなさない
ながいじかんもきえてない
きみはやっぱりきみ

これからふたりでえがくみらい
わたしのすべてきみにあげる
これがあいだよふたりだけの
ずっとたいせつはなさない
そのきみ

またきみにあえたね
またふたりつづくね
ずっといっしょといったひ
あのことばまだある BABY

なくしてまたみつけたこい
こんどはぜったいはなさない
ながいじかんもきえてない
きみはやっぱりきみ

これからふたりでえがくみらい
わたしのすべてきみにあげる
これがあいだよふたりだけの
ずっとたいせつはなさない
そのきみ

なくしてまたみつけたこい
こんどはぜったいはなさない
ながいじかんもきえてない
きみはやっぱりきみ

これからふたりでえがくみらい
わたしのすべてきみにあげる
これがあいだよふたりだけの
ずっとたいせつはなさない
そのきみ`
  },
        {
    id: 38,
    title: "好好对你",
    file: "https://media.sakuramusicworld.com/haohaoduini.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

你眼里 总充满忧郁
你心里 放我在哪里
你总把心事 默默藏在心底
要我 如何去懂你

我眼里 你却是唯一
我心里 全被你占据
任时间迁移 你我慢慢的老去
我会 用尽一生的力气好好对你

哪怕有一天我发现 发现你的谎言 发现你对我的欺骗
我也会装作没看见 只看见你的双眼 还有和你的每个瞬间
哪怕有一天你改变 改变你的诺言 改变你看我的视线
我也没有任何怨言 有的只是眷恋 还想再多爱你一天

我眼里 你却是唯一
我心里 全被你占据
任时间迁移 你我慢慢的老去
我会 用尽一生的力气好好对你

哪怕有一天我发现 发现你的谎言 发现你对我的欺骗
我也会装作没看见 只看见你的双眼 还有和你的每个瞬间
哪怕有一天你改变 改变你的诺言 改变你看我的视线
我也没有任何怨言 有的只是眷恋 还想再多爱你一天

哪怕有一天我发现 发现你的谎言 发现你对我的欺骗
我也会装作没看见 只看见你的双眼 还有和你的每个瞬间
哪怕有一天你改变 改变你的诺言 改变你看我的视线
我也没有任何怨言 有的只是眷恋 还想再多爱你一天`
  },
        {
    id: 39,
    title: "涙しても後悔しない",
    file: "https://media.sakuramusicworld.com/Kokai.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

あの日に　君の顔見て
わかってた　これが最後で

この胸に　まだいくつもの願い抱いて
君と二人で　叶えられなくて

あの日に　君の瞳
見えていた　深い疲れ

ごめんねと　言えないまま遠く離れて
この先ずっと　君で眠れなくて

君のために　涙流して
後悔なんて　一つもなくて
痛みさえも　最初から知っていて
それでもまだ　心は壊れて

君のために　涙流して
これから先は　誰を想って
ひとりきりで　残された花抱いて
花びらから　その奥まで
静かにただ　枯れていって

あの日に　君の瞳
見えていた　深い疲れ

ごめんねと　言えないまま遠く離れて
この先ずっと　君で眠れなくて

君のために　涙流して
後悔なんて　一つもなくて
痛みさえも　最初から知っていて
それでもまだ　心は壊れて

君のために　涙流して
これから先は　誰を想って
ひとりきりで　残された花抱いて
花びらから　その奥まで
静かにただ　枯れていって

君のために　涙流して
後悔なんて　一つもなくて
痛みさえも　最初から知っていて
それでもまだ　心は壊れて

君のために　涙流して
これから先は　誰を想って
ひとりきりで　残された花抱いて
花びらから　その奥まで
静かにただ　枯れていって`
  },
        {
    id: 40,
    title: "为什么世界末日没成真",
    file: "https://media.sakuramusicworld.com/shijiemori.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

这次我站在这里
没有留恋的东西
在这 罪恶的世界里
再看一眼这个最后的世纪
等待 末日的降临

这次我真的愿意
去另一个世界里
不再 无力的撑下去 
再过一夜这个人间的炼狱
以为 会有纯净的洗涤

为什么世界末日没成真
我还要继续做我的罪人
无法解脱我的今生
还有那肮脏的灵魂

为什么世界末日没成真
我宁愿化作宇宙一粒尘
没有轮回没有来生
无爱无恨不会沉沦

这次我真的愿意
去另一个世界里
不再 无力的撑下去 
再过一夜这个人间的炼狱
以为 会有纯净的洗涤

为什么世界末日没成真
我还要继续做我的罪人
无法解脱我的今生
还有那肮脏的灵魂

为什么世界末日没成真
我宁愿化作宇宙一粒尘
没有轮回没有来生
无爱无恨不会沉沦

为什么世界末日没成真
我还要继续做我的罪人
无法解脱我的今生
还有那肮脏的灵魂

为什么世界末日没成真
我宁愿化作宇宙一粒尘
没有轮回没有来生
无爱无恨不会沉沦`
  },
        {
    id: 41,
    title: "自由という名の炎",
    file: "https://media.sakuramusicworld.com/Muryo.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

ついにある日 沈黙してた本当の自分を
もう隠さずに 思いきり自由に生きる

この道を選び たとえ前が棘だらけでも
笑われても 人生すべて背いていても
それでいい

ただ胸を張って 生きていたい本当の自分
なのになぜ この世界は頭を下げろと言う

あの理屈やルール 正しさだと言う声も
たった一つの問いさえも耐えられなくて
ぶつかれば 砕ける

ある人 ある魂 いつの間に消えた
すべて捧げたのに 返るのは冷たい無視

どうしても 永遠に 認めないなら
ならなぜ僕はまだ あなたの作った鎖で
この世界を壊し 偽りの僕を裂く

ただ胸を張って 生きていたい本当の自分
なのになぜ この世界は頭を下げろと言う

あの理屈やルール 正しさだと言う声も
たった一つの問いさえも耐えられなくて
ぶつかれば 砕ける

ある人 ある魂 いつの間に消えた
すべて捧げたのに 返るのは冷たい無視

どうしても 永遠に 認めないなら
ならなぜ僕はまだ あなたの作った鎖で
この世界を壊し 偽りの僕を裂く

あの人 あの声 すべて花火のよう
疑いの声さえ 僕の怒りを燃やす

結局は 誰もが 本当の僕を知らない
ならなぜ僕はまだ 仮面をつけたままで
すべて壊して 今こそ羽ばたく炎
yeah yeah`
  },
        {
    id: 42,
    title: "自欺欺人的爱",
    file: "https://media.sakuramusicworld.com/ziqiqiren.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

我也知道我是在做白日梦
高富帅的他怎麽会是我的
痴心妄想的我谁也怪不得
要怪就怪自己 把自己骗了

我都知道可我就是捨不得
几句甜言蜜语我又昏了头了
爱不爱我 难道我不晓得
不过是自欺欺人 我实在太傻了

爱 爱 我陷入你的爱
要到结束才明白
原来只是你心中一颗尘埃
为何还要 我苦苦的等待

爱 爱 你随口就说出来
难道这就是你所谓的关怀
爱 爱 你的爱
只是骑驴找马 拿我当傻瓜对待

嗨嗨 不要以为我是阿呆
什麽都不明白
你要是遇见你的傻甜白
会毫不犹豫把我一脚踹开
我心裡其实什麽都明白
只希望那天不要来的太快
最起码能让我这次爱个痛快
哪怕注定明天就被你甩

我也知道我是在做白日梦
高富帅的他怎麽会是我的
痴心妄想的我谁也怪不得
要怪就怪自己 把自己骗了

我都知道可我就是捨不得
几句甜言蜜语我又昏了头了
爱不爱我 难道我不晓得
不过是自欺欺人 我实在太傻了

爱 爱 我陷入你的爱
要到结束才明白
原来只是你心中一颗尘埃
为何还要 我苦苦的等待

爱 爱 你随口就说出来
难道这就是你所谓的关怀
爱 爱 你的爱
只是骑驴找马 拿我当傻瓜对待

爱 爱 我陷入你的爱
要到结束才明白
原来只是你心中一颗尘埃
为何还要 我苦苦的等待

爱 爱 你随口就说出来
难道这就是你所谓的关怀
爱 爱 你的爱
只是骑驴找马 拿我当傻瓜对待`
  },
        {
    id: 43,
    title: "嘘ごと愛してる",
    file: "https://media.sakuramusicworld.com/Shizuka.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

君の目に　いつも影がある
その胸に　僕はどこにいる
君はいつも想い　隠しているまま
どうすれば　触れられるの

僕の目に　君だけがいる
この胸は　全部君で満ちる
時が流れても　二人変わっても
ずっとこのまま　君を守る

たとえいつか僕が気づいて　君の嘘も　全部見えても
それでもただ見ないふりして　君の瞳　そのすべてを見る
たとえいつか君が変わって　その言葉も　違ってきても
それでもまだ離れられない　あと少しだけ　愛していたい

僕の目に　君だけがいる
この胸は　全部君で満ちる
時が流れても　二人変わっても
ずっとこのまま　君を守る

たとえいつか僕が気づいて　君の嘘も　全部見えても
それでもただ見ないふりして　君の瞳　そのすべてを見る
たとえいつか君が変わって　その言葉も　違ってきても
それでもまだ離れられない　あと少しだけ　愛していたい

たとえいつか僕が気づいて　君の嘘も　全部見えても
それでもただ見ないふりして　君の瞳　そのすべてを見る
たとえいつか君が変わって　その言葉も　違ってきても
それでもまだ離れられない　あと少しだけ　愛していたい`
  },
            {
    id: 44,
    title: "我的男孩",
    file: "https://media.sakuramusicworld.com/nanhai.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

Boy 好想你把我抱紧
对我说 最疼我的人是你
你叫一句darling 我的全世界 就只剩下你
有你陪我什么都愿意

Boy 能不能靠着你
对我说 你会好好珍惜
再叫一句darling
直截了当的
击碎我的心
我鼓起了勇气 只想告诉你
I love you, I love you so much

You said I'm beautiful, You said I'm beautiful
你能否感受到我的心跳 我不知道

You said I'm beautiful, you are also beautiful
希望你永远能对我好 你是否也想我 拥入你怀抱

Boy 能不能靠着你
对我说 你会好好珍惜
再叫一句darling
直截了当的
击碎我的心
我鼓起了勇气 只想告诉你
I love you, I love you so much

You said I'm beautiful, You said I'm beautiful
你能否感受到我的心跳 我不知道

You said I'm beautiful, you are also beautiful
希望你永远能对我好 你是否也想我 拥入你怀抱

You said I'm beautiful, You said I'm beautiful
你能否感受到我的心跳 我不知道

You said I'm beautiful, you are also beautiful
希望你永远能对我好 你是否也想我 拥入你怀抱

请抱紧我在你怀抱`
  },
            {
    id: 45,
    title: "残された悔い",
    file: "https://media.sakuramusicworld.com/Zannendesu.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

もう一度は歌えない
なぜなら声は枯れて
誰も二度は生きられない
時間だけが流れて

言葉さえ戻らない
君はもう遠くへ
誰も二度は愛せない
残るのはただ悔い

何も背負わない瞬間
なぜか涙こぼれて

どうすれば君の笑顔を忘れられるのか
どうすればあの輝きを手放せるのか
優しさの意味さえまだ理解できずに
繰り返してる 愛の境界

過ぎ去ったあの日々の中で
君の言葉を避けていた
でも今はその声が
遠すぎて届かない

言葉さえ戻らない
君はもう遠くへ
誰も二度は愛せない
残るのはただ悔い

何も背負わない瞬間
なぜか涙こぼれて

どうすれば君の笑顔を忘れられるのか
どうすればあの輝きを手放せるのか
優しさの意味さえまだ理解できずに
繰り返してる 愛の境界

過ぎ去ったあの日々の中で
君の言葉を避けていた
でも今はその声が
遠すぎて届かない`
  },
            {
    id: 46,
    title: "多年后",
    file: "https://media.sakuramusicworld.com/duonianhou.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

爱上了你 命中注定 绝望的心 还说要噢噢忘记

忘不掉你 只能继续 继续想你 无力抗昂昂昂拒

多年后再次遇见你 没想到还能继续 
说天荒地老 说至死不渝 当年的傻话 你竟没忘记 BABY

人说失而复得来的感情最值得珍惜 
这次我绝对不放弃 
多年的感情 并没有消去
你依然还是你

从此在我们需要一起扮演的角色里
我的全部都属于你 
这就是爱情 属于我和你 
会好好珍惜 不想再失去
那个你

多年后再次遇见你 没想到还能继续 
说天荒地老 说至死不渝 当年的傻话 你竟没忘记 BABY

人说失而复得来的感情最值得珍惜 
这次我绝对不放弃 
多年的感情 并没有消去
你依然还是你

从此在我们需要一起扮演的角色里
我的全部都属于你 
这就是爱情 属于我和你 
会好好珍惜 不想再失去
那个你


人说失而复得来的感情最值得珍惜 
这次我绝对不放弃 
多年的感情 并没有消去
你依然还是你

从此在我们需要一起扮演的角色里
我的全部都属于你 
这就是爱情 属于我和你 
会好好珍惜 不想再失去
那个你`
  },
            {
    id: 47,
    title: "君のいない明日",
    file: "https://media.sakuramusicworld.com/Ashita.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

あの日のこと
君が生まれた日
胸の奥まで満ちたあの想い
今でも　夢の中に出てくる

探してきたよ
何年もずっと
現実だけが心を壊すよ
どれほど　遠くても会いに行く

君のいない明日
どう生きればいいの
愛しい君はどこにいるの
なぜ今も何も聞こえない

君のいない明日
すべて意味がないよ
嘘でもいいから聞かせてよ
その奇跡だけ
夢で会いたい

探してきたよ
何年もずっと
現実だけが心を壊すよ
この命ある限り探し続ける

君のいない明日
どう生きればいいの
愛しい君はどこにいるの
なぜ今も何も聞こえない

君のいない明日
すべて意味がないよ
嘘でもいいから聞かせてよ
その奇跡だけ
夢で会いたい

君のいない明日
どう生きればいいの
愛しい君はどこにいるの
なぜ今も何も聞こえない

君のいない明日
すべて意味がないよ
嘘でもいいから聞かせてよ
その奇跡だけ
夢で会いたい`
  },
    {
    id: 48,
    title: "那些父亲没说的话",
    file: "https://media.sakuramusicworld.com/naxiefuqinmeishuodehua.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

往事涌上心头
脑海中一一掠过
为何要到生命的尽头
才能够领悟获得

没有一天像我
梦想中潇洒过活
一瞬间就能花开花落
人生未知的节奏

我不知道 
该如何停留
多一秒钟
哪怕能再多看你们一秒
就多看一秒

不能继续照顾保护你们是我的错
请别再说宽慰我的理由
那会让我加倍难受

我不想说 
我的伤痛
不想听到你们伤心哭声
我不想走 
我也想留
承诺过会让你们快乐
我不想说 
我的感受
说出口 
只会让你们泪流
还想完成对你们的承诺
我已不能够

我不知道 
该如何停留
多一秒钟
哪怕能再多看你们一秒
就多看一秒

不能继续照顾保护你们是我的错
请别再说宽慰我的理由
那会让我加倍难受

我不想说 
我的伤痛
不想听到你们伤心哭声
我不想走 
我也想留
承诺过会让你们快乐
我不想说 
我的感受
说出口 
只会让你们泪流
还想完成对你们的承诺
我已不能够

我不想说 
我的伤痛
不想听到你们伤心哭声
我不想走 
我也想留
承诺过会让你们快乐

我不想说 
我的感受
说出口 
只会让你们泪流
还想完成对你们的承诺
我已不能够

还想完成对你们的承诺
我已不能够`
  },
    {
    id: 49,
    title: "后知后觉",
    file: "https://media.sakuramusicworld.com/houzhihoujue.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

曾经拥有一段美丽的恋情
你对我好我却次次都伤你
那时的我总是不知道珍惜
现在风吹云散成为了过去

年少轻狂的我不值得体惜
你对我的好我却用来任性
直到那天你悄无声息的远离
我才明白我内心的感情

我对你有那么那么多的愧疚
伤害你的话我再也不说 哦哦
我给你有那么那么多的伤痛 
你给我的却全是快乐

我现在对你有那么那么多的不舍
极度怀念你对我的执着 哦哦
发现不知不觉我竟然已爱上你了
后知后觉太晚已经无法对你说

年少轻狂的我不值得体惜
你对我的好我却用来任性
直到那天你悄无声息的远离
我才明白我内心的感情

我对你有那么那么多的愧疚
伤害你的话我再也不说 哦哦
我给你有那么那么多的伤痛 
你给我的却全是快乐

我现在对你有那么那么多的不舍
极度怀念你对我的执着 哦哦
发现不知不觉我竟然已爱上你了
后知后觉太晚已经无法对你说

我对你有那么那么多的愧疚
伤害你的话我再也不说 哦哦
我给你有那么那么多的伤痛 
你给我的却全是快乐

我现在对你有那么那么多的不舍
极度怀念你对我的执着 哦哦
发现不知不觉我竟然已爱上你了
后知后觉太晚已经无法对你说`
  },
    {
    id: 50,
    title: "正しさなんていらない",
    file: "https://media.sakuramusicworld.com/Tadashi.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

誰もいないこの夜に
ひとりで自分を酔わせていく
壊れた心は 酔いでしか少し癒えない
覚めてまた 飲み干していく

苦さなんて当然だろう
愛の中に正しさなどない
白黒つけようとして 二人とも引けなくて
わがままが 罰になる

正しいか 間違いか 白か黒か もうどうでもいい
行くべきか 残るべきか 誰のものか 戻らない
誰が言い 誰がやり 誰が責めたか 恥じなくていい
愛した日 美しかった日 すべてもう遠いだけ

苦さなんて当然だろう
愛の中に正しさなどない
白黒つけようとして 二人とも引けなくて
わがままが 罰になる

正しいか 間違いか 白か黒か もうどうでもいい
行くべきか 残るべきか 誰のものか 戻らない
誰が言い 誰がやり 誰が責めたか 恥じなくていい
愛した日 美しかった日 すべてもう遠いだけ

正しいか 間違いか 白か黒か もうどうでもいい
行くべきか 残るべきか 誰のものか 戻らない
誰が言い 誰がやり 誰が責めたか 恥じなくていい
愛した日 美しかった日 すべてもう遠いだけ`
  },
    {
    id: 51,
    title: "你要的温柔究竟是哪一种",
    file: "https://media.sakuramusicworld.com/niyaodewenrou.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

不知道从什么时候 开始感觉困惑
你那神秘莫测的笑容 似乎是种嘲讽
我们之间越来越陌生 却找不到任何理由
这种无声无息的争吵 我真的无法承受

这真不是谁的错  谁叫爱情变化莫测 
只要曾经有过感动 那就值得我去等候
你也曾真心付出过 也曾一样的疼
可是现在你对我说 你不懂我 我也不值得懂

请你对我说 
究竟是我做错什么
做错了梦吗 什么理由 
说出口别再让我糊涂懵懂

请你对我说 
别再让我不断猜测
是我没用 只懂得冲动 
你要的温柔究竟是哪一种

这真不是谁的错  谁叫爱情变化莫测 
只要曾经有过感动 那就值得我去等候
你也曾真心付出过 也曾一样的疼
可是现在你对我说 你不懂我 我也不值得懂

请你对我说 
究竟是我做错什么
做错了梦吗 什么理由 
说出口别再让我糊涂懵懂

请你对我说 
别再让我不断猜测
是我没用 只懂得冲动 
你要的温柔究竟是哪一种

我是真的不懂

请你对我说 
究竟是我做错什么
做错了梦吗 什么理由 
说出口别再让我糊涂懵懂

请你对我说 
别再让我不断猜测
是我没用 只懂得冲动 
你要的温柔究竟是哪一种`
  },
    {
    id: 52,
    title: "壊してしまった愛",
    file: "https://media.sakuramusicworld.com/Kowashite.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

君はいつも瞳に優しさを宿して
僕は気づかぬまま君に心砕ける
君はいつもどこかに残る淡い煙で
僕は何度でもまた深く沈み込む

君はいつも遠くの空の夕焼け見て
僕をそばに置いて夜までいさせて
君はいつも秋の風を静かに感じて
思い出の中では君が一番きれい

僕はもう酔わない すべては僕のせいで
失ったそのすべて 二度とは戻らない
君が好きな花は ただ墓に置くだけで
どこまでも行ける 引きずるこの足で

すべて僕の罪だ 君にはふさわしくない
与えてくれたすべて 僕は壊してしまう
胸に残る痛み そして消えない後悔
慰めなどいらない もっと痛くていい

君はいつも瞳に優しさを宿して
僕は気づかぬまま君に心砕ける
君はいつもどこかに残る淡い煙で
僕は何度でもまた深く沈み込む

君はいつも遠くの空の夕焼け見て
僕をそばに置いて夜までいさせて
君はいつも秋の風を静かに感じて
思い出の中では君が一番きれい

僕はもう酔わない すべては僕のせいで
失ったそのすべて 二度とは戻らない
君が好きな花は ただ墓に置くだけで
どこまでも行ける 引きずるこの足で

すべて僕の罪だ 君にはふさわしくない
与えてくれたすべて 僕は壊してしまう
胸に残る痛み そして消えない後悔
慰めなどいらない もっと痛くていい

僕はもう酔わない すべては僕のせいで
失ったそのすべて 二度とは戻らない
君が好きな花は ただ墓に置くだけで
どこまでも行ける 引きずるこの足で

すべて僕の罪だ 君にはふさわしくない
与えてくれたすべて 僕は壊してしまう
胸に残る痛み そして消えない後悔
慰めなどいらない もっと痛くていい

僕はすべて壊して 二度とは戻らない`
  },
    {
    id: 53,
    title: "悔",
    file: "https://media.sakuramusicworld.com/hui.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

歌无法再唱一遍 
因为情绪已宣泄
谁也无法再活一遍 
因为时间已经消却
话无法再说一遍 
因为人已经走远
谁也无法再爱一遍 
都是无用的悔

在没有牵挂的瞬间 
我突然不知为何的流泪

我不知要如何忘记你的笑容
也不知要如何去忘记你给的灿烂
你宽容的心我却不能体会
不断挑战 爱的极限

在我们过去的生活之中
你说的话我从不想听
可现在你的声音
是那么的不可及

话无法再说一遍 
因为人已经走远
谁也无法再爱一遍 
都是无用的悔

在没有牵挂的瞬间 
我突然不知为何的流泪

我不知要如何忘记你的笑容
也不知要如何去忘记你给的灿烂
你宽容的心我却不能体会
不断挑战 爱的极限

在我们过去的生活之中
你说的话我从不想听
可现在你的声音
是那么的不可及`
  },
     {
    id: 54,
    title: "もう愛さないで",
    file: "https://media.sakuramusicworld.com/Aisanaide.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

わかってる　最初からその想い
わかってる　なぜそこにあるのか
わかってる　その心もその気持ちも
迷い悲しみも揺れても　変わらない

わかってる　僕のせいで傷ついた
窓のそば　歌いながら止まる
崩れたリズムが　すべてを語る
いつかその時に　すべてを悔やむだろう

もう愛さないで　僕のためにすべて捨てるなよ
壊れていくよ　これ以上は戻れないよ
君は　生きろ

もう愛さないで　これでもまだ足りないのか
まだこの痛み　まだこの苦しみも
手を離せよ
自由になれよ

わかってる　僕のせいで傷ついた
窓のそば　歌いながら止まる
崩れたリズムが　すべてを語る
いつかその時に　すべてを悔やむだろう

もう愛さないで　僕のためにすべて捨てるなよ
壊れていくよ　これ以上は戻れないよ
君は　生きろ

もう愛さないで　これでもまだ足りないのか
まだこの痛み　まだこの苦しみも
手を離せよ
自由になれよ

この現実の中で　心は削られていくよ
すべてを捨てても　残るものは何もない

もう愛さないで　僕のためにすべて捨てるなよ
壊れていくよ　これ以上は戻れないよ
君は　生きろ

もう愛さないで　これでもまだ足りないのか
まだこの痛み　まだこの苦しみも
手を離せよ
自由になれよ`
  },
     {
    id: 55,
    title: "爱的麻醉",
    file: "https://media.sakuramusicworld.com/aidemazui.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI

你还在流着那虚伪的眼泪
生气的辩解那只是个误会
狠心的你究竟要 骗我几回

那夜其实是我在你门口徘徊
努力说服自己再给你一次机会
结果却看见 你们的缠绵 让我崩溃

也许只是我太沉醉 你所有的柔情滋味
所以才会 无法看穿 你的伪装

是我自己爱得太傻到现在还捨不得
为了你所付出的一切实在 太多太多太多

难道我所做的一切 你竟没有一点感动
如果真的从来没爱过我 别说别说别说

我绝不会再为此而心碎 擦乾所有的泪水
我不会再流泪 这是你给我所有的伤悲
爱的麻醉 最后一回

那夜其实是我在你门口徘徊
努力说服自己再给你一次机会
结果却看见 你们的缠绵 让我崩溃

也许只是我太沉醉 你所有的柔情滋味
所以才会 无法看穿 你的伪装

是我自己爱得太傻到现在还捨不得
为了你所付出的一切实在 太多太多太多

难道我所做的一切 你竟没有一点感动
如果真的从来没爱过我 别说别说别说

我绝不会再为此而心碎 擦乾所有的泪水
我不会再流泪 这是你给我所有的伤悲

难道我所做的一切 你竟没有一点感动
如果真的从来没爱过我 别说别说别说

我绝不会再为此而心碎 擦乾所有的泪水
我不会再流泪 这是你给我所有的伤悲
爱的麻醉 最后一回`
  },
      {
    id: 13,
    title: "那些父亲没说的话",
    file: "https://media.sakuramusicworld.com/naxiefuqinmeishuodehua.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI

往事涌上心头
脑海中一一掠过
为何要到生命的尽头
才能够领悟获得

没有一天像我
梦想中潇洒过活
一瞬间就能花开花落
人生未知的节奏

我不知道 
该如何停留
多一秒钟
哪怕能再多看你们一秒
就多看一秒

不能继续照顾保护你们是我的错
请别再说宽慰我的理由
那会让我加倍难受

我不想说 
我的伤痛
不想听到你们伤心哭声
我不想走 
我也想留
承诺过会让你们快乐
我不想说 
我的感受
说出口 
只会让你们泪流
还想完成对你们的承诺
我已不能够

我不知道 
该如何停留
多一秒钟
哪怕能再多看你们一秒
就多看一秒

不能继续照顾保护你们是我的错
请别再说宽慰我的理由
那会让我加倍难受

我不想说 
我的伤痛
不想听到你们伤心哭声
我不想走 
我也想留
承诺过会让你们快乐
我不想说 
我的感受
说出口 
只会让你们泪流
还想完成对你们的承诺
我已不能够

我不想说 
我的伤痛
不想听到你们伤心哭声
我不想走 
我也想留
承诺过会让你们快乐

我不想说 
我的感受
说出口 
只会让你们泪流
还想完成对你们的承诺
我已不能够

还想完成对你们的承诺
我已不能够`
  },
     {
    id: 57,
    title: "English Song is Coming Soon",
    file: "https://media.sakuramusicworld.com/Rabuzuhenpu.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI
`
  },
    {
    id: 58,
    title: "English Song is Coming Soon",
    file: "https://media.sakuramusicworld.com/Rabuzuhenpu.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist/ 作詞：Sakura Ikeda（池田樱子・池田さくら）    
Vocal / 演唱 / 歌：AI
`
  },
];
const videos = [
  {
    id: 1,
    title: "Stay In Your Arms",
    bvid: "BV1MkQCBNEKS"
  },
  {
    id: 2,
    title: "Sydney All Week",
    bvid: "BV1MdQ6BZE8L"
  },
  {
    id: 3,
    title: "青藏高原",
    bvid: "BV14nAGzMEbA"
  },
   {
    id: 4,
    title: "Sakura Ikeda",
    bvid: "BV1EYQSBvEWb"
  },
   {
    id: 5,
    title: "あなたとずっと",
    bvid: "BV16oQCB9EB1"
  },
   {
    id: 6,
    title: "没有你的明天",
    bvid: "BV15WXwBFEGn"
  },
   {
    id: 7,
    title: "Coming Soon",
    bvid: "Coming Soon"
  },
   {
    id: 8,
    title: "Coming Soon",
    bvid: "Coming Soon"
  },
   {
    id: 9,
    title: "Coming Soon",
    bvid: "Coming Soon"
  },
   {
    id: 10,
    title: "Coming Soon",
    bvid: "Coming Soon"
  },
];
  const galleryItems = Array.from({ length: 180 }, (_, index) => ({
  id: index + 1,
  type: "image",
  src: `/gallery/photo${index + 1}.jpg`,
  alt: `photo ${index + 1}`
}));
  galleryItems.push({
  id: 101,
  type: "bilibili",
  bvid: "BV1fvXiG",
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
const stopAllMedia = (currentElement) => {
  document.querySelectorAll("audio, video").forEach((media) => {
    if (media !== currentElement) {
      media.pause();
    }
  });
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
              <article className="song-card" key={song.id} id={`song-${song.id}`}>
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

  <button
    className="ghost-button small"
    onClick={() => {
      const url = `${window.location.origin}/?song=${song.id}`;
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    }}
  >
    Share
  </button>
</div>
                </div>

                {song.isBilibili ? (
  <div className="video-frame-wrap">
    <iframe
      className="video-frame"
      src={`https://player.bilibili.com/player.html?bvid=${song.bilibiliBvid}&page=1&autoplay=0`}
      title={song.title}
      frameBorder="0"
      allow="fullscreen"
      allowFullScreen
      scrolling="no"
    />
  </div>
) : (
<audio
  controls
  className="audio-player"
  ref={index === featuredSongIndex ? featuredAudioRef : null}
  onPlay={(e) => stopAllMedia(e.currentTarget)}
  onEnded={() => {
    const nextSong = songs[index + 1];
    if (nextSong) {
      const next = document.getElementById(`song-${nextSong.id}`);
      if (next) {
        const nextAudio = next.querySelector("audio");
        if (nextAudio) {
          nextAudio.play();
          next.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }}
>
    <source src={song.file} type="audio/mpeg" />
  </audio>
)}

                {openLyricsId === song.id && (
  <div className="lyrics-box">
    <pre>{song.lyrics}</pre>
  </div>
)}
              </article>
            ))}
          </div>
        </section>
<section id="videos" className="section videos">
  <div className="section-heading">
    <h2>{t.videosTitle}</h2>
    <p>{t.videosDesc}</p>
  </div>

  <div className="video-list">
    {videos.map((video) => (
     <div className="video-card" key={video.id} id={`video-${video.id}`}>
              <h4>{video.title}</h4>

<button
  className="ghost-button small"
  onClick={() => {
    const url = `${window.location.origin}/?video=${video.id}`;
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  }}
>
  Share
</button>
        <h4>{video.title}</h4>

        <div className="video-frame-wrap">
          <iframe
            className="video-frame"
            src={`https://player.bilibili.com/player.html?bvid=${video.bvid}&page=1&autoplay=0`}
            title={video.title}
            frameBorder="0"
            allow="fullscreen"
            allowFullScreen
            scrolling="no"
          />
        </div>
      </div>
    ))}
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
                  {showBackToTop && (
  <button className="back-to-top" onClick={scrollToTop}>
    ↑
  </button>
)}
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
