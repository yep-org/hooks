(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var a=n(3),l=n(7),r=(n(0),n(93)),b={id:"useBoolean",title:"useBoolean"},o={unversionedId:"useBoolean",id:"useBoolean",isDocsHomePage:!1,title:"useBoolean",description:"\u4f18\u96c5\u7684\u7ba1\u7406 boolean \u503c\u7684 Hook\u3002",source:"@site/docs/useBoolean.md",slug:"/useBoolean",permalink:"/hooks/docs/useBoolean",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useBoolean.md",version:"current",sidebar:"someSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/hooks/docs/"},next:{title:"useToggle",permalink:"/hooks/docs/useToggle"}},u=[{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",children:[]},{value:"API",id:"api",children:[{value:"Result",id:"result",children:[]},{value:"Params",id:"params",children:[]}]}],c={toc:u};function i(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u4f18\u96c5\u7684\u7ba1\u7406 boolean \u503c\u7684 Hook\u3002"),Object(r.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\nfunction Demo  ()  {\n  const { state, toggle, setTrue, setFalse } = useBoolean(true)\n  return (\n    <div>\n      <p>\n        Effects\uff1a\n        <Switch checked={state} onChange={toggle} />\n      </p>\n      <p>\n        <Button type="default" onClick={() => toggle()}>\n          Toggle\n        </Button>\n        <Button type="danger" onClick={setFalse} style={{ margin: \'0 16px\' }}>\n          Set false\n        </Button>\n        <Button type="primary" onClick={setTrue}>\n          Set true\n        </Button>\n      </p>\n    </div>\n  );\n}\n\n')),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const {\n  state, \n  toggle,\n  setTrue,\n  setFalse\n} = useBoolean(\n  defaultValue?: boolean,\n);\n")),Object(r.b)("h3",{id:"result"},"Result"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u53c2\u6570"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"state"),Object(r.b)("td",{parentName:"tr",align:null},"\u72b6\u6001\u503c"),Object(r.b)("td",{parentName:"tr",align:null},"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"toggle"),Object(r.b)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u72b6\u6001\u66f4\u6539\u7684\u51fd\u6570,\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\u4fee\u6539\u72b6\u6001\u503c"),Object(r.b)("td",{parentName:"tr",align:null},"(value?: any) => void")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"setTrue"),Object(r.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u72b6\u6001\u503c\u4e3a true"),Object(r.b)("td",{parentName:"tr",align:null},"() => void")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"setFalse"),Object(r.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u72b6\u6001\u503c\u4e3a false"),Object(r.b)("td",{parentName:"tr",align:null},"() => void")))),Object(r.b)("h3",{id:"params"},"Params"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u53c2\u6570"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"defaultValue"),Object(r.b)("td",{parentName:"tr",align:null},"\u53ef\u9009\u9879\uff0c\u4f20\u5165\u9ed8\u8ba4\u7684\u72b6\u6001\u503c"),Object(r.b)("td",{parentName:"tr",align:null},"boolean ","|"," undefined"),Object(r.b)("td",{parentName:"tr",align:null},"false")))))}i.isMDXComponent=!0}}]);