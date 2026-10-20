import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [ammo, setAmmo] = useState(24);
  const [notice, setNotice] = useState('READY FOR DEPLOYMENT');

  useEffect(() => {
    if (!playing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const keys = new Set<string>();
    const player = { x: 480, y: 280 };
    let hp = 100, bullets = 24, points = 0, lastHit = 0, aim = { x: 650, y: 270 };
    const foes = Array.from({length:5}, (_,i) => ({x:100+i*180,y:i%2?90:450,alive:true}));
    const down = (e:KeyboardEvent) => { keys.add(e.key.toLowerCase()); if(e.key.toLowerCase()==='r'){bullets=24;setAmmo(24);setNotice('MAGAZINE RELOADED')} };
    const up = (e:KeyboardEvent) => keys.delete(e.key.toLowerCase());
    const moveAim = (e:MouseEvent) => {const r=canvas.getBoundingClientRect();aim={x:(e.clientX-r.left)*960/r.width,y:(e.clientY-r.top)*540/r.height};};
    const fire = () => {if(bullets<=0){setNotice('OUT OF AMMO · PRESS R');return;}bullets--;setAmmo(bullets);const target=foes.filter(f=>f.alive).sort((a,b)=>Math.hypot(a.x-aim.x,a.y-aim.y)-Math.hypot(b.x-aim.x,b.y-aim.y))[0];if(target&&Math.hypot(target.x-aim.x,target.y-aim.y)<52){target.alive=false;points+=100;setScore(points);setNotice('TARGET DOWN +100')}else setNotice('SHOT FIRED');if(foes.every(f=>!f.alive)){foes.push(...Array.from({length:5},(_,i)=>({x:90+i*190,y:i%2?80:460,alive:true})));setNotice('NEW WAVE INCOMING')}};
    window.addEventListener('keydown',down);window.addEventListener('keyup',up);canvas.addEventListener('mousemove',moveAim);canvas.addEventListener('click',fire);
    let raf=0;
    const draw=(t:number)=>{ctx.clearRect(0,0,960,540);ctx.fillStyle='#0b151b';ctx.fillRect(0,0,960,540);ctx.strokeStyle='rgba(90,230,210,.1)';for(let x=0;x<960;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,540);ctx.stroke()}for(let y=0;y<540;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(960,y);ctx.stroke()}ctx.fillStyle='#1b303a';ctx.fillRect(42,42,876,456);ctx.strokeStyle='#3f7770';ctx.lineWidth=2;ctx.strokeRect(42,42,876,456);ctx.fillStyle='#25404a';ctx.fillRect(170,115,78,22);ctx.fillRect(710,385,86,25);ctx.fillRect(385,220,35,90);ctx.fillRect(560,170,30,80);
      let dx=0,dy=0;const speed=keys.has('shift')?3.5:2.4;if(keys.has('w'))dy-=speed;if(keys.has('s'))dy+=speed;if(keys.has('a'))dx-=speed;if(keys.has('d'))dx+=speed;player.x=Math.max(60,Math.min(900,player.x+dx));player.y=Math.max(60,Math.min(480,player.y+dy));
      foes.forEach(f=>{if(!f.alive)return;const a=Math.atan2(player.y-f.y,player.x-f.x);if(Math.hypot(player.x-f.x,player.y-f.y)>75){f.x+=Math.cos(a)*.38;f.y+=Math.sin(a)*.38}else if(t-lastHit>1100){hp=Math.max(0,hp-5);setHealth(hp);lastHit=t;setNotice('UNDER FIRE');if(hp===0){setPlaying(false);setNotice('MISSION FAILED · SCORE '+points)}}ctx.save();ctx.translate(f.x,f.y);ctx.fillStyle='rgba(0,0,0,.45)';ctx.beginPath();ctx.ellipse(0,15,17,8,0,0,7);ctx.fill();ctx.fillStyle='#eb7279';ctx.beginPath();ctx.roundRect(-12,-12,24,28,7);ctx.fill();ctx.fillStyle='#38232b';ctx.beginPath();ctx.arc(0,-14,9,0,7);ctx.fill();ctx.fillStyle='#ecfffc';ctx.fillRect(3,-17,4,3);ctx.restore()});
      ctx.save();ctx.translate(player.x,player.y);ctx.rotate(Math.atan2(aim.y-player.y,aim.x-player.x));ctx.fillStyle='rgba(0,0,0,.4)';ctx.beginPath();ctx.ellipse(0,15,17,8,0,0,7);ctx.fill();ctx.fillStyle='#4fcdbb';ctx.beginPath();ctx.roundRect(-12,-12,24,28,7);ctx.fill();ctx.fillStyle='#d9fff6';ctx.beginPath();ctx.arc(0,-14,9,0,7);ctx.fill();ctx.fillStyle='#d5e3df';ctx.fillRect(7,-3,24,5);ctx.restore();
      ctx.strokeStyle='#eafffa';ctx.lineWidth=2;ctx.beginPath();ctx.arc(aim.x,aim.y,9,0,7);ctx.moveTo(aim.x-15,aim.y);ctx.lineTo(aim.x-5,aim.y);ctx.moveTo(aim.x+5,aim.y);ctx.lineTo(aim.x+15,aim.y);ctx.moveTo(aim.x,aim.y-15);ctx.lineTo(aim.x,aim.y-5);ctx.moveTo(aim.x,aim.y+5);ctx.lineTo(aim.x,aim.y+15);ctx.stroke();raf=requestAnimationFrame(draw)};
    raf=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('keydown',down);window.removeEventListener('keyup',up);canvas.removeEventListener('mousemove',moveAim);canvas.removeEventListener('click',fire)};
  },[playing]);

  const page={minHeight:'100vh',background:'radial-gradient(ellipse at 78% 12%,#123b3c 0,transparent 38%),linear-gradient(140deg,#0b1117,#080d12 72%)',color:'#e8f2f0',fontFamily:'Arial,sans-serif'} as const;
  const button={padding:'14px 24px',border:0,background:'#62e6d1',color:'#06120f',fontWeight:900,letterSpacing:'.14em',cursor:'pointer'} as const;
  return <div style={page}><header style={{height:72,padding:'0 6vw',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'1px solid #ffffff1a',letterSpacing:'.14em',fontSize:13,fontWeight:800}}>PORTFOLIO <span style={{color:'#62e6d1'}}> / GAME LAB</span><span style={{color:'#91aaa6',fontSize:10}}>● SYSTEM ONLINE</span></header><main style={{maxWidth:1120,margin:'auto',padding:'54px 24px'}}><div style={{color:'#62e6d1',fontSize:10,letterSpacing:'.24em'}}>TACTICAL SIMULATION · TRAINING ZONE 07</div><div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:20,flexWrap:'wrap'}}><div><h1 style={{fontSize:'clamp(56px,10vw,100px)',lineHeight:.8,margin:'20px 0',letterSpacing:'-.04em'}}>NEON<br/><span style={{color:'#62e6d1'}}>OPS</span></h1><p style={{maxWidth:530,color:'#a6b9b7',fontSize:13,lineHeight:1.8}}>A compact tactical arena mission. Track targets, manage your magazine, and hold your position against incoming opponents.</p></div><div style={{display:'flex',gap:18,marginBottom:20}}><div><small style={{color:'#7c9693'}}>SCORE</small><h2 style={{margin:'6px 0'}}>{score}</h2></div><div><small style={{color:'#7c9693'}}>VITALS</small><h2 style={{margin:'6px 0'}}>{health}%</h2></div><div><small style={{color:'#7c9693'}}>AMMO</small><h2 style={{margin:'6px 0'}}>{ammo}/24</h2></div></div></div><section style={{border:'1px solid #62e6d155',background:'#091218',boxShadow:'0 25px 80px #0008'}}><div style={{padding:'13px 16px',display:'flex',justifyContent:'space-between',fontSize:10,letterSpacing:'.12em',color:'#9bb0ae',borderBottom:'1px solid #ffffff17'}}><span style={{color:'#62e6d1'}}>● LIVE ARENA FEED</span><span>SECTOR 07 — NIGHT SHIFT</span></div><div style={{position:'relative'}}><canvas ref={canvasRef} width={960} height={540} style={{width:'100%',display:'block',cursor:'crosshair'}}/>{!playing&&<div style={{position:'absolute',inset:0,background:'#061015c9',display:'grid',placeItems:'center',textAlign:'center',padding:20}}><div><div style={{color:'#62e6d1',fontSize:10,letterSpacing:'.22em'}}>{notice}</div><h2 style={{fontSize:'clamp(34px,6vw,60px)',lineHeight:.9,margin:'12px 0'}}>HOLD THE<br/>TRAINING LINE</h2><p style={{color:'#b5c6c4',fontSize:12,lineHeight:1.8}}>Clear targets to build your score. Stay alert:<br/>opponents close in when you stand still.</p><button style={button} onClick={()=>{setScore(0);setHealth(100);setAmmo(24);setNotice('READY FOR DEPLOYMENT');setPlaying(true)}}>▶ &nbsp; ENTER THE ARENA</button></div></div>}</div><div style={{padding:14,color:'#9aafad',fontSize:10,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8}}><span>MISSION <b style={{color:'white'}}>ENDURANCE</b></span><span>OPERATOR <b style={{color:'white'}}>ROOKIE-07</b></span><span>OBJECTIVE <b style={{color:'white'}}>STAY ALIVE</b></span></div></section><div style={{display:'flex',gap:9,flexWrap:'wrap',marginTop:16,fontSize:10,color:'#9aafad'}}>{['W A S D  MOVE','MOUSE  AIM','CLICK  FIRE','R  RELOAD','SHIFT  SPRINT'].map(x=><span key={x} style={{border:'1px solid #ffffff20',padding:'10px 12px'}}>{x}</span>)}</div></main><footer style={{textAlign:'center',padding:24,color:'#52676a',fontSize:9,letterSpacing:'.14em'}}>NEON OPS // PORTFOLIO GAME LAB · BUILT FOR THE WEB</footer></div>;
}

createRoot(document.getElementById('root')!).render(<App />);
