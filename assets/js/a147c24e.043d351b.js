"use strict";(self.webpackChunkcodewithpablo_docs=self.webpackChunkcodewithpablo_docs||[]).push([[800],{4419:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"aliases","title":"\ud83d\udd17 Aliases in Vite & TypeScript","description":"To simplify imports and improve code readability, we use aliases in this project. Instead of using long relative paths like:","source":"@site/docs/aliases.md","sourceDirName":".","slug":"/aliases","permalink":"/codewithpablo-docs/docs/aliases","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"\ud83d\udcdd Commit Guidelines","permalink":"/codewithpablo-docs/docs/commits"},"next":{"title":"\ud83e\udd1d Contributing","permalink":"/codewithpablo-docs/docs/contributing"}}');var t=s(4848),o=s(8453);const r={},a="\ud83d\udd17 Aliases in Vite & TypeScript",c={},l=[{value:"\u2699\ufe0f <strong>Where are Aliases Configured?</strong>",id:"\ufe0f-where-are-aliases-configured",level:2},{value:"<strong>1\ufe0f\u20e3 <code>vite.config.ts</code> (Main Configuration)</strong>",id:"1\ufe0f\u20e3-viteconfigts-main-configuration",level:3},{value:"<strong>2\ufe0f\u20e3 <code>tsconfig.json</code> (For TypeScript Support)</strong>",id:"2\ufe0f\u20e3-tsconfigjson-for-typescript-support",level:3},{value:"<strong>3\ufe0f\u20e3 <code>vite.config.ts</code> (Vitest Section - For Testing)</strong>",id:"3\ufe0f\u20e3-viteconfigts-vitest-section---for-testing",level:3},{value:"\u2705 <strong>Benefits of Using Aliases</strong>",id:"-benefits-of-using-aliases",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-aliases-in-vite--typescript",children:"\ud83d\udd17 Aliases in Vite & TypeScript"})}),"\n",(0,t.jsxs)(n.p,{children:["To simplify imports and improve code readability, we use ",(0,t.jsx)(n.strong,{children:"aliases"})," in this project. Instead of using long relative paths like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import Home from "../../pages/Home";\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can use an alias:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import Home from "@/pages/Home";\n'})}),"\n",(0,t.jsx)(n.p,{children:"This makes the code cleaner and easier to maintain."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"\ufe0f-where-are-aliases-configured",children:["\u2699\ufe0f ",(0,t.jsx)(n.strong,{children:"Where are Aliases Configured?"})]}),"\n",(0,t.jsx)(n.p,{children:"Aliases are set up in the following files:"}),"\n",(0,t.jsx)(n.h3,{id:"1\ufe0f\u20e3-viteconfigts-main-configuration",children:(0,t.jsxs)(n.strong,{children:["1\ufe0f\u20e3 ",(0,t.jsx)(n.code,{children:"vite.config.ts"})," (Main Configuration)"]})}),"\n",(0,t.jsxs)(n.p,{children:["In Vite, aliases are configured using the ",(0,t.jsx)(n.code,{children:"resolve.alias"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { defineConfig } from "vite";\nimport path from "path";\n\nexport default defineConfig({\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "src"),\n    },\n  },\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2\ufe0f\u20e3-tsconfigjson-for-typescript-support",children:(0,t.jsxs)(n.strong,{children:["2\ufe0f\u20e3 ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," (For TypeScript Support)"]})}),"\n",(0,t.jsxs)(n.p,{children:["To ensure TypeScript recognizes the alias, add it to the ",(0,t.jsx)(n.code,{children:"paths"})," field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "baseUrl": "./",\n    "paths": {\n      "@/*": ["src/*"]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3\ufe0f\u20e3-viteconfigts-vitest-section---for-testing",children:(0,t.jsxs)(n.strong,{children:["3\ufe0f\u20e3 ",(0,t.jsx)(n.code,{children:"vite.config.ts"})," (Vitest Section - For Testing)"]})}),"\n",(0,t.jsxs)(n.p,{children:["If using ",(0,t.jsx)(n.strong,{children:"Vitest"})," for testing, you need to ensure that aliases work in test environments:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { defineConfig } from "vitest/config";\nimport path from "path";\n\nexport default defineConfig({\n  test: {\n    alias: {\n      "@": path.resolve(__dirname, "src"),\n    },\n  },\n});\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"-benefits-of-using-aliases",children:["\u2705 ",(0,t.jsx)(n.strong,{children:"Benefits of Using Aliases"})]}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd39 ",(0,t.jsx)(n.strong,{children:"Improves readability"})," \u2192 No more long relative imports (",(0,t.jsx)(n.code,{children:"../../../"}),").",(0,t.jsx)(n.br,{}),"\n","\ud83d\udd39 ",(0,t.jsx)(n.strong,{children:"Easier refactoring"})," \u2192 Moving files won't break imports.",(0,t.jsx)(n.br,{}),"\n","\ud83d\udd39 ",(0,t.jsx)(n.strong,{children:"Better organization"})," \u2192 Code structure is cleaner and more maintainable.",(0,t.jsx)(n.br,{}),"\n","\ud83d\udd39 ",(0,t.jsx)(n.strong,{children:"Compatible with TypeScript & Vitest"})," \u2192 Ensures smooth development and testing experience."]}),"\n",(0,t.jsxs)(n.p,{children:["With these configurations, you can now use ",(0,t.jsx)(n.code,{children:"@/"})," to reference the ",(0,t.jsx)(n.code,{children:"src"})," folder in any part of your project! \ud83d\ude80"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);