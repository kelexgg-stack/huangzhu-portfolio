import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Play, Trees, Layers3, ScanLine, Aperture, Mail, Phone, MapPin } from 'lucide-react';
import portraitSrc from './assets/huang-zhu-portrait.jpg';
import poster01 from './assets/poster-01.jpg';
import poster02 from './assets/poster-02.jpg';
import poster03 from './assets/poster-03.jpg';
import poster04 from './assets/poster-04.jpg';
import poster05 from './assets/poster-05.jpg';
import poster06 from './assets/poster-06.jpg';
import stillCloseup from './assets/still-closeup.jpg';
import stillInterior from './assets/still-interior.jpg';
import stillLadder from './assets/still-ladder.jpg';
import stillEntry from './assets/still-entry.jpg';
import './styles.css';

const projects=[
 {n:'01',name:'保利',type:'项目影像',src:'/videos/01-baoli.mp4',poster:poster01},
 {n:'02',name:'景观规划',type:'景观规划演示',src:'/videos/02-landscape-planning.mp4',poster:poster02},
 {n:'03',name:'兰州保利',type:'项目影像',src:'/videos/03-lanzhou-baoli.mp4',poster:poster03},
 {n:'04',name:'万华麓岛',type:'项目影像',src:'/videos/04-wanhua-ludao.mp4',poster:poster04},
 {n:'05',name:'宇博产业园',type:'项目影像',src:'/videos/05-yubo-park.mp4',poster:poster05},
 {n:'06',name:'宇博产业园 02',type:'项目影像',src:'/videos/06-yubo-park-02.mp4',poster:poster06}
];
const skills=[
 [Trees,'植被资产与布局','熟悉 UE5 Foliage 植被系统，完成植被资产制作、群落布局与动态调整。'],
 [Layers3,'LOD 与性能优化','关注模型 LOD、实时渲染效率和场景性能，兼顾画面品质与运行表现。'],
 [ScanLine,'三维表现与渲染','具备建模、效果图渲染和空间场景表现经验，可从视觉目标反推方案。'],
 [Aperture,'跨团队场景协作','有项目沟通与方案对接经验，能协同完成场景搭建并推进落地。']
];
const career=[
 ['2021.09 — 2022.06','三维场景建模与效果表现','场景模型制作、材质整理与项目配合'],
 ['2022.08 — 2024.12','场景美术 / 效果图表现','模型与效果图渲染、项目方案沟通及协作'],
 ['2025.01 — 2025.06','场景美术 / 效果图表现','场景设计表现与项目团队协作'],
 ['2025.08 — 至今','UE5 实时植被场景','群落布局、动态调整与 LOD 优化']
];
const stills=[
 {n:'01',title:'立面特写',image:stillCloseup},
 {n:'02',title:'室内空间',image:stillInterior},
 {n:'03',title:'天梯景观',image:stillLadder},
 {n:'04',title:'入口空间',image:stillEntry}
];
function Brand(){return <a className="brand" href="#top"><span className="brandmark">H<span>.</span></span><span>HUANG ZHU<small>ENVIRONMENT ARTIST</small></span></a>}
function SectionHead({n,en,zh}){return <div className="section-head"><span className="kicker">{n} / {en}</span><span className="head-line"/><span className="subhead">{zh}</span></div>}
function ProjectCollection(){const[active,setActive]=React.useState(0);const[autoPlay,setAutoPlay]=React.useState(false);const selected=projects[active];return <div className="video-collection"><aside className="video-playlist"><span className="playlist-kicker">VIDEO COLLECTION / 06</span><h3>作品合集</h3><p className="playlist-note">选择一个项目，观看场景影像。</p><div className="playlist-items">{projects.map((p,i)=><button className={'playlist-item'+(i===active?' active':'')} type="button" key={p.n} aria-pressed={i===active} onClick={()=>{setActive(i);setAutoPlay(true)}}><span className="playlist-number">{p.n}</span><span className="playlist-copy"><b>{p.name}</b><small>{p.type}</small></span><span className="playlist-state">{i===active?'NOW PLAYING':'VIEW'}</span></button>)}</div><div className="playlist-footer"><span>6 FILMS</span><span>REAL-TIME ENVIRONMENTS</span></div></aside><div className="collection-player"><div className="collection-screen"><video key={selected.src} className="collection-video" src={selected.src} poster={selected.poster} controls playsInline preload="metadata" autoPlay={autoPlay} aria-label={selected.name+'项目视频'}/>{!autoPlay&&<button className="collection-play" type="button" onClick={()=>setAutoPlay(true)} aria-label={'播放'+selected.name+'项目视频'}><Play size={22} fill="currentColor"/><span>播放作品</span></button>}<div className="screen-index">{selected.n} <i>/ 06</i></div></div><div className="collection-caption"><div><span className="kicker">CURRENT PROJECT</span><h3>{selected.name}</h3></div><span>{selected.type}</span></div></div></div>}
function App(){const [sticky,setSticky]=React.useState(false);React.useEffect(()=>{const update=()=>{const hero=document.querySelector('.hero');setSticky(Boolean(hero&&window.scrollY>=hero.offsetHeight-80))};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update)},[]);return <>
 <header className={`nav${sticky?' is-sticky':''}`}><Brand/><nav><a href="#about">关于</a><a href="#work">作品</a><a href="#strength">专长</a></nav><a className="nav-cta" href="mailto:1085512324@qq.com">联系我 <ArrowUpRight size={14}/></a></header>
 <main>
  <section className="hero" id="top"><div className="hero-media"><video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85"><source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4" type="video/mp4"/></video></div><div className="hero-shade"/><div className="hero-meta"><span>独立创作 · 2024—2025</span><span>自然环境 / 实时渲染</span></div><div className="hero-copy"><div className="eyebrow"><i/> UE ENVIRONMENT ARTIST <span>—</span> VEGETATION</div><h1>让自然<br/><em>生长</em>于虚拟世界<span className="period">.</span></h1><div className="hero-bottom"><p>专注于虚幻引擎中的植被与自然场景创作。<br/>在真实与想象之间，构建值得停留的世界。</p><a className="round-link" href="#about" aria-label="向下滚动"><ArrowDown size={20}/></a><div className="hero-index"><b>01</b><span>—</span> 04</div></div></div><div className="hero-caption">FIG. 01 &nbsp; / &nbsp; FIELD STUDY — MISTY WOODLAND</div></section>
  <section className="about section-pad" id="about"><SectionHead n="01" en="ABOUT" zh="关于我"/><div className="about-grid"><div className="portrait-wrap"><img src={portraitSrc} alt="黄柱个人照片"/><span className="portrait-stamp">FIELD NOTES<br/>NO. 024</span><span className="portrait-caption">STUDY OF LIGHT &amp; FOLIAGE — 2024</span></div><div className="about-content"><div className="about-title"><span className="vertical-label">PROFILE / 001</span><div><h2>黄柱<span> Huang Zhu</span></h2><p className="role">UE 引擎美术 <i> / </i> 植被场景</p></div></div><p className="bio">你好，我是黄柱，拥有三维场景建模与渲染经验，目前专注于 UE5 实时植被场景创作。熟悉 Foliage 植被系统，关注植物资产从制作到场景落地的完整流程。</p><p className="bio muted">我重视自然植被的生长逻辑、场景氛围和实时性能，也有与项目团队协作、对接场景方案并推进落地的经验。</p><div className="facts"><div><small>专注方向</small><b>植被 · 自然场景</b></div><div><small>创作工具</small><b>UE5</b></div><div><small>工作年限</small><b>2021 — 至今</b></div></div><div className="career"><div className="career-heading"><span>EXPERIENCE</span><span>经历概览</span></div>{career.map(([date,title,desc])=><div key={date}><time>{date}</time><b>{title}</b><small>{desc}</small></div>)}</div><a href="mailto:1085512324@qq.com" className="text-link">聊聊合作 <ArrowUpRight size={16}/></a></div></div></section>
  <section className="work section-pad" id="work"><SectionHead n="02" en="SELECTED WORK" zh="精选项目"/><div className="work-intro"><h2>场景，<em>动态呈现。</em></h2><p>项目影像与场景演示<br/>SELECTED PROJECT FILMS · 06 WORKS</p></div><ProjectCollection/><div className="stills-block"><div className="stills-heading"><div><span className="kicker">STILL STUDIES / 04 FRAMES</span><h3>空间与细节，<em>静态呈现。</em></h3></div><p>场景静帧<br/>SELECTED RENDERS</p></div><div className="stills-grid">{stills.map((still)=><figure className="still-card" key={still.n}><div className="still-image"><img src={still.image} alt={still.title} loading="lazy"/></div><figcaption><span>{still.n} / 04</span><strong>{still.title}</strong><span>UE · ENVIRONMENT</span></figcaption></figure>)}</div></div></section>
  <section className="strength section-pad" id="strength"><SectionHead n="03" en="WHAT I DO" zh="个人优势"/><div className="strength-layout"><div className="strength-title"><p className="kicker">CRAFT &amp; PROCESS</p><h2>从一片叶子，<br/>到一整个<span>世界。</span></h2><p className="strength-note">让技术服务于感受<br/>让细节构成可信的整体</p><div className="spec-line"><span>CORE SKILLS</span><span>EST. IN THE FIELD</span></div></div><div className="strength-cards">{skills.map(([Icon,title,body],i)=><article className="skill-card" key={title}><div className="skill-top"><span>0{i+1} / 04</span><Icon size={21} strokeWidth={1.25}/></div><h3>{title}</h3><p>{body}</p><ArrowUpRight className="skill-arrow" size={17}/></article>)}</div></div></section>
  <section className="contact"><div className="contact-backdrop"/><div className="contact-content"><span className="kicker">04 / GET IN TOUCH</span><p className="contact-pre">有一个自然生长的想法？</p><h2>一起创造<br/><em>下一片风景。</em></h2><a className="contact-button" href="mailto:1085512324@qq.com">开启一次对话 <ArrowUpRight size={18}/></a><div className="contact-details"><a href="mailto:1085512324@qq.com"><Mail/> 1085512324@qq.com</a><a href="tel:+8618582587248"><Phone/> +86 185 8258 7248</a><span><MapPin/> 开放远程合作</span></div></div><div className="contact-aside">AVAILABLE FOR SELECT PROJECTS<br/>2025 — 2026</div><footer><Brand/><span>© 2026 HUANG ZHU — ALL RIGHTS RESERVED</span><a href="#top">返回顶部 ↑</a></footer></section>
 </main>
 </>}
createRoot(document.getElementById('root')).render(<App/>);
