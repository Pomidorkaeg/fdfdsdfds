var a=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(e,r,s)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,o=(a,o)=>{for(var l in o||(o={}))r.call(o,l)&&t(a,l,o[l]);if(e)for(var l of e(o))s.call(o,l)&&t(a,l,o[l]);return a},l=(a,t)=>{var o={};for(var l in a)r.call(a,l)&&t.indexOf(l)<0&&(o[l]=a[l]);if(null!=a&&e)for(var l of e(a))t.indexOf(l)<0&&s.call(a,l)&&(o[l]=a[l]);return o};import{j as c}from"./ui-vendor.Aj3LcMY4.js";import{r as d}from"./react-vendor.BJjQsoCL.js";import{c as n}from"./index.DPZqcWpi.js";const f=d.forwardRef(((a,e)=>{var r=a,{className:s}=r,t=l(r,["className"]);return c.jsx("div",o({ref:e,className:n("rounded-lg border bg-card text-card-foreground shadow-sm",s)},t))}));f.displayName="Card";const m=d.forwardRef(((a,e)=>{var r=a,{className:s}=r,t=l(r,["className"]);return c.jsx("div",o({ref:e,className:n("flex flex-col space-y-1.5 p-6",s)},t))}));m.displayName="CardHeader";const i=d.forwardRef(((a,e)=>{var r=a,{className:s}=r,t=l(r,["className"]);return c.jsx("h3",o({ref:e,className:n("text-2xl font-semibold leading-none tracking-tight",s)},t))}));i.displayName="CardTitle";const p=d.forwardRef(((a,e)=>{var r=a,{className:s}=r,t=l(r,["className"]);return c.jsx("p",o({ref:e,className:n("text-sm text-muted-foreground",s)},t))}));p.displayName="CardDescription";const N=d.forwardRef(((a,e)=>{var r=a,{className:s}=r,t=l(r,["className"]);return c.jsx("div",o({ref:e,className:n("p-6 pt-0",s)},t))}));N.displayName="CardContent";d.forwardRef(((a,e)=>{var r=a,{className:s}=r,t=l(r,["className"]);return c.jsx("div",o({ref:e,className:n("flex items-center p-6 pt-0",s)},t))})).displayName="CardFooter";export{f as C,m as a,i as b,p as c,N as d};
