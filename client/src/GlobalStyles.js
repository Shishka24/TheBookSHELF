import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      
      /* --font-heading: 'Permanent Marker', Arial, Helvetica, sans-serif;
      --font-body: 'Kosugi', Arial, Helvetica, sans-serif;
      --padding-page: 24px;  */
      
      --color-pink: #ffe6e6;
      --color-grey: #f5f5f5;
      --color-red: #ff6666;
      --color-turquoise:#adebeb;
      --color--purple:#993366;
      --heading-font-family: 'Teko', sans-serif;
  }
  
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
      border: 0;
      box-sizing: border-box;
      vertical-align: baseline;
      list-style-type: none;
      font-size: 20px ;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
      background: linear-gradient(110deg, #37FFF9 20%, #FC803D 60%);
      
     
      /* background-color: lightblue; */
      opacity: 0.9;
    }
    
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
  }

  h1,
h2,
h3,
label,
button {
  /* color: #fff; */
  font-family: "Teko", sans-serif;
  font-size: 15px;
  /* border-radius:10px; */
  text-align: center;
  color:black;
  /* margin-left: 4px; */
}
p,
a,
li,
blockquote,
input {
  font-family: "Teko", sans-serif;
  font-size: 18px ;
}

  input {
    font-size: 24px;
    border-radius: 2px;
    padding: 0 12px;
    /* width:450px; */
    /* width:200px; */
  }
 
    img{
        width:200px ;
        border-radius:25px;
    }
    @media screen and (max-width: 600px) {
      flex: 100%;
      max-width: 100%;  
    }
`;
