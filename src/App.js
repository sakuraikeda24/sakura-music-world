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

  const songs = [
  {
    id: 1,
    title: "破茧成火",
    file: "/破茧成火.mp3",
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
    file: "/終わらない終末.mp3",
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
    file: "/Burn the Whole Damn World.mp3",
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
    file: "/好想和你在一起.mp3",
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
    file: "/乱世の剣と影.mp3",
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
    file: "/bad girl.mp3",
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
    file: "/一缕残魂随君在.mp3",
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
    file: "/友よ、またどこかで .mp3",
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
    file: "/Stay in Your Arms.mp3",
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
    file: "/为你流泪我不后悔.mp3",
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
    file: "/彼岸に残る魂（たましい）.mp3",
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
    id: 11,
    title: "Sweet Lies",
    file: "/Sweet Lies.mp3",
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
    id: 12,
    title: "那些父亲没说的话",
    file: "/那些父亲没说的话.mp3",
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
    id: 13,
    title: "きえないきお",
    file: "/きえないきお.mp3",
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
    id: 14,
    title: "A Beautiful Soul",
    file: "/A Beautiful Soul.mp3",
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
    id: 15,
    title: "我们有你",
    file: "/我们有你.mp3",
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
    id: 16,
    title: "東京のきらめく恋",
    file: "/東京のきらめく恋.mp3",
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
    id: 17,
    title: "Sydney All Week(Generated by AI)",
    bilibiliBvid: "BV1t1QoBzEZ7&cid",
isBilibili: true,
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
    id: 18,
    title: "song 18",
    file: "/song 18.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI`
  },
  {
    id: 19,
    title: "song 19",
    file: "/song 19.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI`
  },
  {
    id: 20,
    title: "song 20",
    file: "/song 20.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI`
  },
  {
    id: 21,
    title: "song 21",
    file: "/song 21.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI`
  },
  {
    id: 22,
    title: "song 22",
    file: "/song 22.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI`
  },
  {
    id: 23,
    title: "song 23",
    file: "/song 23.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI`
  },
  {
    id: 24,
    title: "song 24",
    file: "/song 24.mp3",
    lyrics: `Composer / 作曲：Sakura Ikeda（池田樱子・池田さくら）  
Lyricist (Chinese / Japanese) / 作词・作詞：Sakura Ikeda（池田樱子・池田さくら）   
Vocal / 演唱 / 歌：AI`
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

        <section id="videos" className="section">
          <div className="section-heading">
            <h2>{t.videosTitle}</h2>
            <p>{t.videosDesc}</p>
          </div>

        <div className="video-card">
  <div className="video-frame-wrap">
<iframe
  className="video-frame"
  src="https://player.bilibili.com/player.html?bvid=BV14nAGzMEbA&page=1&autoplay=0"
  title="Music Video"
  frameBorder="0"
  allow="fullscreen"
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
