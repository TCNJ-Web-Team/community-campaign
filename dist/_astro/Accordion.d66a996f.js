import{j as o}from"./jsx-runtime.b9e88e07.js";import{r as i}from"./index.03be2d59.js";/* empty css                           */function m({children:n,header:s,idName:a,startOpen:e}){const[c,r]=i.useState(e),t=()=>{r(!c)};return o.jsxs("div",{className:"accordion",id:a,children:[o.jsxs("h2",{className:`${c?"accordion-header start-open active":"accordion-header"}`,onClick:t,children:[o.jsx("span",{children:s}),o.jsx("span",{className:"arrow",children:c?"-":"+"})]}),o.jsx("div",{className:`${c?"accordion-content start-open active":"accordion-content"}`,children:n})]})}export{m as default};
