(this.webpackJsonpquestions=this.webpackJsonpquestions||[]).push([[0],{142:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t),n.d(t,"url",(function(){return pe}));var c=n(38),a=n(122),i=n(225),r=n(0),s=n.n(r),o=(n(142),n(76)),j=n(212),l=n(224),d=n(88),u=n(20),b=n(24),O=n(13),h=n(207),x=n(227),p=n(211),f=n(205),g=n(210),m=n(228),v=n(209),y=n(6),q=Object(f.a)((function(e){return{tabs:Object(O.a)({marginLeft:"20px"},e.breakpoints.down("xs"),{marginLeft:"0"})}}));function Q(){var e=Object(c.b)(),t=e.logout,n=e.loginWithRedirect,a=e.isAuthenticated,i=Object(u.f)(),o=s.a.useState("/"),j=Object(b.a)(o,2),l=j[0],O=j[1];Object(r.useEffect)((function(){O(i.location.pathname)}),[i]);var f=q();return Object(y.jsx)(h.a,{position:"static",children:Object(y.jsxs)(v.a,{children:[Object(y.jsxs)(x.a,{display:"flex",alignItems:"center",flexGrow:1,children:[Object(y.jsx)(x.a,{display:{xs:"none",sm:"block"},children:Object(y.jsx)(d.a,{variant:"h6",children:"\u2049\ufe0f Questions \u2049\ufe0f"})}),a&&Object(y.jsxs)(m.a,{className:f.tabs,value:l,onChange:function(e,t){O(t),i.push(t)},children:[Object(y.jsx)(g.a,{label:"\u2699\ufe0f Manage",value:"/"}),Object(y.jsx)(g.a,{label:"\ud83d\udd79\ufe0f Play",value:"/play"})]})]}),a?Object(y.jsx)(p.a,{color:"inherit",onClick:function(){return t({returnTo:pe})},children:"Logout"}):Object(y.jsx)(p.a,{variant:"outlined",color:"inherit",onClick:function(){return n()},children:"Login"})]})})}var w=n(23),k=n(60),A=n(117);var C=n(4);function N(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(y.jsx)(x.a,Object(k.a)(Object(k.a)({marginTop:"10%",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",justifyItems:"center"},n),{},{children:t}))}function L(e){var t=function(){var e=Object(c.b)(),t=e.getAccessTokenSilently,n=e.isAuthenticated,a=Object(r.useState)(),i=Object(b.a)(a,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){n&&t().then((function(e){var t=Object(w.createHttpLink)({uri:"https://bogdbo-questions-api.herokuapp.com/graphql"}),n=Object(A.a)((function(t,n){var c=n.headers;return{headers:Object(k.a)(Object(k.a)({},c),{},{Authorization:"Bearer ".concat(e)})}}));o(new w.ApolloClient({cache:new w.InMemoryCache,link:n.concat(t)}))}))}),[n,t]),s}();return t?Object(y.jsx)(w.ApolloProvider,{client:t,children:e.children}):Object(y.jsx)(N,{children:Object(y.jsx)(j.a,{})})}var M,B,I=n(61),S=n.n(I),T=n(28),U=n(86),E=n(50),P=n(226),J=n(125),W=n(217),$=n(219),_=n(214),z=n(216),R=n(218),F=n(213),H=n(121),D=n.n(H),G=n(215),K=Object(w.gql)(M||(M=Object(E.a)(["\n  mutation addQuestion($id: Int!) {\n    deleteQuestion(id: $id)\n  }\n"])));function X(e){var t=e.question,n=Object(w.useMutation)(K),c=Object(b.a)(n,2),a=c[0],i=c[1].loading,s=Object(r.useCallback)(Object(U.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({variables:{id:t.id},update:function(e,n){if(!0===n.data.deleteQuestion){var c=e.readQuery({query:Y})||[];c.questions&&e.writeQuery({query:Y,data:{questions:Object(T.a)(c.questions.filter((function(e){return e.id!==t.id})))}})}}});case 2:case"end":return e.stop()}}),e)}))),[a,t.id]),o=!i&&t.id>=0;return Object(y.jsxs)(F.a,{children:[Object(y.jsx)(_.a,{align:"left",children:t.content}),Object(y.jsx)(_.a,{align:"right",children:Object(y.jsx)(G.a,{disabled:!o,onClick:s,children:o?Object(y.jsx)(D.a,{}):Object(y.jsx)(j.a,{size:"1em"})})})]})}var V,Y=Object(w.gql)(B||(B=Object(E.a)(["\n  query getQuestions {\n    questions {\n      id\n      content\n      createdBy\n      createdAtUtc\n    }\n  }\n"])));function Z(){var e,t=Object(w.useQuery)(Y),n=t.data,c=t.error;return t.loading||null==n?Object(y.jsx)(N,{children:Object(y.jsx)(d.a,{variant:"body1",children:"Loading questions"})}):c?Object(y.jsx)(N,{children:Object(y.jsx)(d.a,{variant:"body1",children:"Error loading questions"})}):(null===(e=n.questions)||void 0===e?void 0:e.length)<=0?Object(y.jsx)(N,{children:Object(y.jsx)(d.a,{variant:"body1",children:"No questions added"})}):Object(y.jsx)(z.a,{component:J.a,children:Object(y.jsxs)(W.a,{children:[Object(y.jsx)(R.a,{children:Object(y.jsxs)(F.a,{children:[Object(y.jsx)(_.a,{align:"left",children:"Question"}),Object(y.jsx)(_.a,{align:"right"})]})}),Object(y.jsx)($.a,{children:n.questions.map((function(e){return Object(y.jsx)(X,{question:e},e.id)}))})]})})}var ee=Object(w.gql)(V||(V=Object(E.a)(["\n  mutation addQuestions($questions: [String!]) {\n    addQuestions(questions: $questions) {\n      id\n      content\n      createdAtUtc\n      createdBy\n    }\n  }\n"])));function te(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(w.useMutation)(ee),i=Object(b.a)(a,2),s=i[0],o=i[1],j=o.error,l=o.loading,d=Object(r.useCallback)(Object(U.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),t=n.split("\n").filter((function(e){return e&&e.length>0})),e.next=4,s({variables:{questions:t},optimisticResponse:{__typename:"Mutation",addQuestions:t.map((function(e){return ne(e)}))},update:function(e,t){var n=t.data,c=e.readQuery({query:Y});e.writeQuery({query:Y,data:{questions:[].concat(Object(T.a)(n.addQuestions),Object(T.a)(c.questions))}})}});case 4:case"end":return e.stop()}}),e)}))),[s,n,c]);return Object(y.jsxs)(x.a,{display:"flex",flexDirection:"column",children:[Object(y.jsx)(P.a,{variant:"outlined",multiline:!0,rows:5,label:"Type in one or more questions",placeholder:"Multiple questions can be entered by separating them with with a new line",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)(x.a,{marginTop:"10px",display:"flex",justifyContent:"flex-end",children:Object(y.jsx)(p.a,{disabled:0===n.length||l,variant:"contained",color:"primary",onClick:d,children:"Add question"})}),Object(y.jsx)("span",{children:j?j.message:""})]})}function ne(e){return{__typename:"Question",id:-Math.floor(1e8*Math.random()),content:e,createdBy:-1,createdAtUtc:""}}function ce(){var e=Object(c.b)();return Object(y.jsx)(x.a,{marginBottom:"10px",children:Object(y.jsxs)(d.a,{variant:"h6",children:["Welcome ",e.user.name," \ud83d\udc4b"]})})}function ae(){return Object(y.jsxs)(x.a,{padding:5,children:[Object(y.jsx)(ce,{}),Object(y.jsx)(te,{}),Object(y.jsx)(Z,{})]})}var ie,re=n(220),se=n(223),oe=n(221),je=n(222),le=n(229),de=Object(w.gql)(ie||(ie=Object(E.a)(["\n  query getRandomQuestion {\n    randomQuestion {\n      id\n      content\n      createdAtUtc\n      createdByName\n    }\n  }\n"]))),ue=Object(f.a)((function(){return{nextQuestion:{marginTop:"15px",width:"100%"}}}));function be(){var e=Object(w.useLazyQuery)(de,{fetchPolicy:"network-only"}),t=Object(b.a)(e,2),n=t[0],c=t[1],a=c.data,i=c.loading,r=c.error,s=c.called,o=null===a||void 0===a?void 0:a.randomQuestion,l=ue();return Object(y.jsxs)(x.a,{padding:5,children:[Object(y.jsx)(le.a,{in:!0,children:Object(y.jsxs)(re.a,{children:[Object(y.jsx)(oe.a,{title:Object(y.jsx)(d.a,{children:null===o||void 0===o?void 0:o.createdByName})}),Object(y.jsx)(je.a,{children:"\ud83d\udc4d\ufe0f"}),Object(y.jsxs)(se.a,{children:[i&&Object(y.jsx)(N,{marginTop:0,children:Object(y.jsx)(j.a,{})}),!i&&!r&&Object(y.jsxs)(x.a,{textAlign:"center",children:[s&&!o&&Object(y.jsx)(d.a,{children:"No questions left \ud83d\ude3f"}),o&&Object(y.jsx)(d.a,{children:o.content}),!s&&Object(y.jsx)(d.a,{children:"Start by pressing the 'Next question' button"})]}),r&&Object(y.jsx)(d.a,{color:"error",children:r.message})]})]},null===o||void 0===o?void 0:o.id)}),(i||!r)&&Object(y.jsx)(p.a,{className:l.nextQuestion,color:"primary",disabled:i,onClick:function(){return n()},children:"\u23e9 Next question"})]})}var Oe=function(){var e=Object(c.b)(),t=e.isAuthenticated,n=e.isLoading;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Q,{}),Object(y.jsxs)(l.a,{maxWidth:"md",className:"App",children:[t&&Object(y.jsx)(L,{children:Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{exact:!0,path:"/play",children:Object(y.jsx)(be,{})}),Object(y.jsx)(u.a,{exact:!0,path:"/",children:Object(y.jsx)(ae,{})})]})}),n&&Object(y.jsx)(N,{children:Object(y.jsx)(j.a,{})}),!t&&!n&&Object(y.jsx)(N,{children:Object(y.jsx)(d.a,{variant:"h5",children:"Please login"})})]})]})},he=n(18),xe=n.n(he),pe=window.location.origin+"/questions",fe=Object(a.a)();xe.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(c.a,{domain:"boiculese.auth0.com",clientId:"9umXUJ235FysjsLWAvJKHE43jN7toi4P",audience:"https://bogdbo-questions-api.herokuapp.com",scope:"start:questions",redirectUri:pe,children:Object(y.jsx)(i.a,{theme:fe,children:Object(y.jsx)(o.a,{basename:"/questions",children:Object(y.jsx)(Oe,{})})})})}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.7fecb420.chunk.js.map