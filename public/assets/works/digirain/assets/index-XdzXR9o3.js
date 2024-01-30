(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const M=33,C=`LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

PオSSイムSイPスMインCイヅンTエアルMアヂピSCイ1アDポRロSイT1ンオンアリアSサエペPロVイデンTデレCTウSアSスメンダンウLラマXイメモヂハルMヅCイムSオMンイSンオビS0

AペリアMか

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

PラエセンTイウMヂCタレCウサンダエンエモQウイデMドロルMQウアSンイSイアヂピSCイテMポラドロレMエイウS0

EイウSVイタエアウテMンエSCイウンTエウMQウイレMエSTアDVエンイアMか

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

VエリTアリアSPロVイデンT1デセルンTペRSピCイアTイSCオRポリSアリQウアMンオSTルMイLルMトタMイタQウエアSペRンアTウRヒCCオRルPTイエTモヂか

OPTイオCオMモヂマGンアMレCウサンダエンオSTルMCウM0

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

VオルPタテSマイオレSアリQウイDQウイアアリQウアMラボレオPTイオエンイMヒC1アヂGンイSSイモSQウイブSダMかNアTウSレM1CウLパエXPリCアボレイCイエンヂSンウLラアSスメンダQウアエラTレCウサンダエイSテ!

LオレMイPスMドロRSイTアメTCオンセCテTウRアヂピSイCインGエリT0

IPサMテMポラFウギアTアリアS1QウアSイエXCエPTウリ1デレCTウSオPTイオVオルPタテSBランヂTイイSVエンイアMエVエンイエTCオンセQウアTウRリベロデビTイS1VオルPタテハルMVエリタTイSエアルMテンエTウRドロレMンウMQウアM0
`,d=async()=>{new Array(M).fill(0).forEach(async(r,n)=>{C.split(`
`).forEach(async(c,s)=>{const e=document.createElement("p"),t=Math.round(Math.random()*1)===0?"-":"",o=t==="-"?Math.random()*5:Math.random()*55;e.setAttribute("class","line-of-code"),e.style.right=`${Math.random()*120}vw`,e.style.top=`${t}${o}vh`,await u(e,c,n,s)})})},u=async(r,n,c,s)=>{let e="";n.split("").forEach(async(t,o)=>await new Promise(async l=>{setTimeout(()=>{var S,T;let a=parseFloat(r.style.top.split("v")[0]);e+=t,r.textContent=e.length>1?e.substring(0,e.length-2):"";const i=document.createElement("span");i.textContent=e[e.length-1],i.setAttribute("class","cursor"),r.appendChild(i),a+=.3*(o+.3),r.style.top=`${a}vh`,(S=document.getElementById("root"))==null||S.appendChild(r),o>=n.length-1&&((T=document.getElementById("root"))==null||T.removeChild(r)),l()},111*(c+1+s+1+o+1)+(333*(c+1)+333*(s+1)))}))},f=()=>{d()};f();
