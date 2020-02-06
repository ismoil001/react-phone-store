// import React, {Component} from 'react';
// import './tasma.scss'
// import {Link} from "react-router-dom";
// import areaimg from './img/contentare.jpg'
// import areaimg2 from './img/contentarea2.png'
// import areanews from './img/area-news-img.png'
// import daryo from './img/daryo.png'
// import share from './img/guide-logo2.png'
// import link from './img/link.png'
//
// class Index extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="nav-wrapper container py-4">
//                     <div className="row">
//                         <div
//                             className="nav-group align-items-center mn-box-shadow col bg-mn-gray d-flex mn-border-radius">
//                             <label className="switch">
//                                 <input type="checkbox"/>
//                                 <span className="slider round"></span>
//                             </label>
//                             <Link className='hot-news pr-2 px-3'>
//                                 Hot news
//                             </Link>
//                             <Link className='nav-item text-dark mn-text-gray px-3'>
//                                 Trending
//                             </Link>
//                             <Link className='nav-item text-dark mn-text-gray px-3'>
//                                 Top
//                             </Link>
//                             <Link className='nav-item text-dark mn-text-gray px-3'>
//                                 Read latter
//                             </Link>
//                             <Link className='nav-item text-dark mn-text-gray px-3'>
//                                 Sport
//                             </Link>
//                         </div>
//                         <div className="mn-box-shadow bg-white nav-search mn-border-radius">
//                             <span className="search-icon"> </span>
//                             <input placeholder='Search' type="text" className="form-control mn-border-radius"/>
//                             <span className="filter-icon">Filter</span>
//                         </div>
//                     </div>
//
//                 </div>
//                 <div className="guid-wrapper bg-white text-center">
//                     <span className='brand-text'>Tasma</span>
//                     <div className='bg-white guide-logo'><span className="tooltiptext">Tooltip text</span></div>
//                     <div className='bg-white guide-logo'><span className="tooltiptext">Tooltip text</span></div>
//                     <div className='bg-white guide-logo'><span className="tooltiptext">Tooltip text</span></div>
//                     <div className='bg-white guide-logo'><span className="tooltiptext">Tooltip text</span></div>
//                 </div>
//                 <div className="d-flex">
//                     <div className="content-area">
//                         <h4>Today</h4>
//                         <div className="row">
//                             <div className="col-md-10 mn-text-gray">
//                                 <p>The latest news collected for you</p>
//                             </div>
//                             <div className="col-md-2 mn-text-gray text-center">
//                                 <span>See All</span>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-md-6 top-head-news radius-10 z-inx1">
//                                 <div className="hover01 column">
//                                     <figure>
//                                         <section className="bg-linear"></section>
//                                         <img src={areaimg}/>
//                                     </figure>
//                                 </div>
//                                 <span className='area-text z-inx1'>
//                                 Bloomberg pledges $70   <br/>
//                                 <span>12/12/2020</span>
//                             </span>
//                             </div>
//                             <div className="col-md-6 top-head-news radius-10 z-inx1">
//                                 <div className="hover01 column">
//                                     <div>
//                                         <figure>
//                                             <section className="bg-linear"></section>
//                                             <img src={areaimg2}/>
//                                         </figure>
//                                     </div>
//                                 </div>
//                                 <span className='area-text z-inx1'>
//                                 Bloomberg pledges $70   <br/>
//                                 <span>12/12/2020</span>
//                             </span>
//                             </div>
//                         </div>
//                         <div className="area-news row">
//                             <div className="col-12 pr-0 z-inx1 radius-10 row bg-white news-content">
//                                 <div className="p-3 row">
//                                     <div className="radius-10 pl-0 w-auto pr-2">
//                                         <img src={areanews} className='news-img' alt="News"/>
//                                     </div>
//                                     <div className="col pr-5">
//                                 <span className='news-text'>Bloomberg pledges $70 billion to bolster black
//                                     America in new plan</span>
//                                         <p className='mn-text-gray mt-2 mb-0'> TULSA, Okla. — Former New York Mayor
//                                             Michael
//                                             Bloomberg will announce on Sunday his
//                                             presidential campaign’s plan aimed at bolstering economic</p>
//                                     </div>
//                                 </div>
//                                 <span className="w-100 position-absolute my-line"> </span>
//                                 <div className="mt-2  pt-3 pl-3 pb-3 pr-0 row col bg-white news-add">
//                                     <div className="col logo-site">
//                                         <img src={daryo} alt=""/>
//                                         <span className="mn-text-gray ml-2">Daryo.uz</span>
//                                         <span className="mn-text-gray ml-2">•</span>
//                                         <span className="mn-text-gray ml-2">2 min ago</span>
//                                     </div>
//                                     <div className="col text-right">
//                                         <img src={share} alt=""/>
//                                         <img className='ml-3' src={link} alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="aside row ml-4">
//                         <div className="row mt-5 pt-4">
//                             <div className="col">
//                                 <div className="sign-up d-flex mn-border-radius">
//                                     <div className="sign pl-4 py-2 px-3">
//                                         <span className="text-success d-flex">Sign in <div className="round ml-3"></div></span>
//                                     </div>
//                                     <div className="py-2 mx-1 px-3 mn-text-gray">
//                                         Login width
//                                     </div>
//                                     <div className="icons d-flex py-2 pr-4 px-3">
//                                         <div className="icon text-center">
//                                             <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                                                  width="15" height="15">
//                                                 <path fill="none" d="M0 0h24v24H0z"/>
//                                                 <path
//                                                     d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
//                                                     fill="rgba(255,255,255,1)"/>
//                                             </svg>
//                                         </div>
//                                         <div className="icon ml-2 text-center">
//                                             <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
//                                                  width="15" height="15">
//                                                 <path fill="none" d="M0 0h24v24H0z"/>
//                                                 <path
//                                                     d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"
//                                                     fill="rgba(255,255,255,1)"/>
//                                             </svg>
//                                         </div>
//                                         <div className="icon ml-2 text-center">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15"
//                                                  height="15">
//                                                 <path fill="none" d="M0 0h24v24H0z"/>
//                                                 <path
//                                                     d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
//                                                     fill="rgba(255,255,255,1)"/>
//                                             </svg>
//                                         </div>
//                                         <div className="icon ml-2 text-center">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15"
//                                                  height="15">
//                                                 <path fill="none" d="M0 0h24v24H0z"/>
//                                                 <path
//                                                     d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
//                                                     fill="rgba(255,255,255,1)"/>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//         );
//     }
// }
//
// export default Index;