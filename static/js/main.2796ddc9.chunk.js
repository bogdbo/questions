(this.webpackJsonpquestions=this.webpackJsonpquestions||[]).push([[0],{142:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t),n.d(t,"url",(function(){return fe}));var c=n(38),a=n(122),i=n(225),r=n(0),s=n.n(r),o=(n(142),n(76)),j=n(212),u=n(224),d=n(88),l=n(20),b=n(27),O=n(13),h=n(207),x=n(227),f=n(211),p=n(205),g=n(210),m=n(228),v=n(209),q=n(6),y=Object(p.a)((function(e){return{tabs:Object(O.a)({marginLeft:"20px"},e.breakpoints.down("xs"),{marginLeft:"0"})}}));function Q(){var e=Object(c.b)(),t=e.logout,n=e.loginWithRedirect,a=e.isAuthenticated,i=Object(l.f)(),o=s.a.useState("/"),j=Object(b.a)(o,2),u=j[0],O=j[1];Object(r.useEffect)((function(){O(i.location.pathname)}),[i]);var p=y();return Object(q.jsx)(h.a,{position:"static",children:Object(q.jsxs)(v.a,{children:[Object(q.jsxs)(x.a,{display:"flex",alignItems:"center",flexGrow:1,children:[Object(q.jsx)(x.a,{display:{xs:"none",sm:"block"},children:Object(q.jsx)(d.a,{variant:"h6",children:"\u2049\ufe0f Questions \u2049\ufe0f"})}),a&&Object(q.jsxs)(m.a,{className:p.tabs,value:u,onChange:function(e,t){O(t),i.push(t)},children:[Object(q.jsx)(g.a,{label:"\u2699\ufe0f Manage",value:"/"}),Object(q.jsx)(g.a,{label:"\ud83d\udd79\ufe0f Play",value:"/play"})]})]}),a?Object(q.jsx)(f.a,{color:"inherit",onClick:function(){return t({returnTo:fe})},children:"Logout"}):Object(q.jsx)(f.a,{variant:"outlined",color:"inherit",onClick:function(){return n()},children:"Login"})]})})}var k=n(23),w=n(60),A=n(117);var C=n(4);function L(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(q.jsx)(x.a,Object(w.a)(Object(w.a)({marginTop:"10%",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",justifyItems:"center"},n),{},{children:t}))}function M(e){var t=function(){var e=Object(c.b)(),t=e.getAccessTokenSilently,n=e.isAuthenticated,a=Object(r.useState)(),i=Object(b.a)(a,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){n&&t().then((function(e){var t=Object(k.createHttpLink)({uri:"https://bogdbo-questions-api.herokuapp.com/graphql"}),n=Object(A.a)((function(t,n){var c=n.headers;return{headers:Object(w.a)(Object(w.a)({},c),{},{Authorization:"Bearer ".concat(e)})}}));o(new k.ApolloClient({cache:new k.InMemoryCache,link:n.concat(t)}))}))}),[n,t]),s}();return t?Object(q.jsx)(k.ApolloProvider,{client:t,children:e.children}):Object(q.jsx)(L,{children:Object(q.jsx)(j.a,{})})}var N,I,S=n(61),T=n.n(S),B=n(28),U=n(86),E=n(50),J=n(226),P=n(125),W=n(217),$=n(219),_=n(214),R=n(216),z=n(218),F=n(213),H=n(121),D=n.n(H),G=n(215),K=Object(k.gql)(N||(N=Object(E.a)(["\n  mutation addQuestion($id: Int!) {\n    deleteQuestion(id: $id)\n  }\n"])));function X(e){var t=e.question,n=Object(k.useMutation)(K),c=Object(b.a)(n,2),a=c[0],i=c[1].loading,s=Object(r.useCallback)(Object(U.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({variables:{id:t.id},update:function(e,n){if(!0===n.data.deleteQuestion){var c=e.readQuery({query:Y})||[];c.questions&&e.writeQuery({query:Y,data:{questions:Object(B.a)(c.questions.filter((function(e){return e.id!==t.id})))}})}}});case 2:case"end":return e.stop()}}),e)}))),[a,t.id]),o=!i&&t.id>=0;return Object(q.jsxs)(F.a,{children:[Object(q.jsx)(_.a,{align:"left",children:t.content}),Object(q.jsx)(_.a,{align:"right",children:Object(q.jsx)(G.a,{disabled:!o,onClick:s,children:o?Object(q.jsx)(D.a,{}):Object(q.jsx)(j.a,{size:"1em"})})})]})}var V,Y=Object(k.gql)(I||(I=Object(E.a)(["\n  query getQuestions {\n    questions {\n      id\n      content\n      createdBy\n      createdAtUtc\n    }\n  }\n"])));function Z(){var e,t=Object(k.useQuery)(Y),n=t.data,c=t.error;return t.loading||null==n?Object(q.jsx)(L,{children:Object(q.jsx)(d.a,{variant:"body1",children:"Loading questions"})}):c?Object(q.jsx)(L,{children:Object(q.jsx)(d.a,{variant:"body1",children:"Error loading questions"})}):(null===(e=n.questions)||void 0===e?void 0:e.length)<=0?Object(q.jsx)(L,{children:Object(q.jsx)(d.a,{variant:"body1",children:"No questions added"})}):Object(q.jsx)(R.a,{component:P.a,children:Object(q.jsxs)(W.a,{children:[Object(q.jsx)(z.a,{children:Object(q.jsxs)(F.a,{children:[Object(q.jsx)(_.a,{align:"left",children:"Question"}),Object(q.jsx)(_.a,{align:"right"})]})}),Object(q.jsx)($.a,{children:n.questions.map((function(e){return Object(q.jsx)(X,{question:e},e.id)}))})]})})}var ee=Object(k.gql)(V||(V=Object(E.a)(["\n  mutation addQuestions($questions: [String!]) {\n    addQuestions(questions: $questions) {\n      id\n      content\n      createdAtUtc\n      createdBy\n    }\n  }\n"])));function te(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(k.useMutation)(ee),i=Object(b.a)(a,2),s=i[0],o=i[1],j=o.error,u=o.loading,d=Object(r.useCallback)(Object(U.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),t=n.split("\n").filter((function(e){return e&&e.length>0})),e.next=4,s({variables:{questions:t},optimisticResponse:{__typename:"Mutation",addQuestions:t.map((function(e){return ne(e)}))},update:function(e,t){var n=t.data,c=e.readQuery({query:Y});e.writeQuery({query:Y,data:{questions:[].concat(Object(B.a)(n.addQuestions),Object(B.a)(c.questions))}})}});case 4:case"end":return e.stop()}}),e)}))),[s,n,c]);return Object(q.jsxs)(x.a,{display:"flex",flexDirection:"column",children:[Object(q.jsx)(J.a,{variant:"outlined",multiline:!0,rows:5,label:"Type in a new question",value:n,onChange:function(e){return c(e.target.value)}}),Object(q.jsx)(x.a,{marginTop:"10px",display:"flex",justifyContent:"flex-end",children:Object(q.jsx)(f.a,{disabled:0===n.length||u,variant:"contained",color:"primary",onClick:d,children:"Add question"})}),Object(q.jsx)("span",{children:j?j.message:""})]})}function ne(e){return{__typename:"Question",id:-Math.floor(1e8*Math.random()),content:e,createdBy:-1,createdAtUtc:""}}function ce(){var e=Object(c.b)();return Object(q.jsx)(x.a,{marginBottom:"10px",children:Object(q.jsxs)(d.a,{variant:"h6",children:["Welcome ",e.user.name," \ud83d\udc4b"]})})}function ae(){return Object(q.jsxs)(x.a,{padding:5,children:[Object(q.jsx)(ce,{}),Object(q.jsx)(te,{}),Object(q.jsx)(Z,{})]})}var ie,re=n(220),se=n(223),oe=n(221),je=n(222),ue=n(229),de=Object(k.gql)(ie||(ie=Object(E.a)(["\n  query getRandomQuestion {\n    randomQuestion {\n      id\n      content\n      createdAtUtc\n    }\n  }\n"]))),le=Object(p.a)((function(){return{nextQuestion:{marginTop:"15px",width:"100%"}}}));function be(){var e=Object(k.useQuery)(de,{notifyOnNetworkStatusChange:!0}),t=e.data,n=e.loading,c=e.refetch,a=e.error,i=null===t||void 0===t?void 0:t.randomQuestion,r=le();return Object(q.jsxs)(x.a,{padding:5,children:[Object(q.jsx)(ue.a,{in:!0,children:Object(q.jsxs)(re.a,{children:[Object(q.jsx)(oe.a,{title:Object(q.jsx)(d.a,{children:"test"})}),Object(q.jsx)(je.a,{children:"\ud83d\udc4d\ufe0f"}),Object(q.jsxs)(se.a,{children:[n&&Object(q.jsx)(L,{marginTop:0,children:Object(q.jsx)(j.a,{})}),!n&&!a&&Object(q.jsxs)(x.a,{textAlign:"center",children:[!i&&Object(q.jsx)(d.a,{children:"No questions left \ud83d\ude3f"}),i&&Object(q.jsx)(d.a,{children:i.content})]}),a&&Object(q.jsx)(d.a,{color:"error",children:a.message})]})]},null===i||void 0===i?void 0:i.id)}),(n||!a)&&Object(q.jsx)(f.a,{className:r.nextQuestion,color:"primary",disabled:n,onClick:function(){return c()},children:"Next question"})]})}var Oe=function(){var e=Object(c.b)(),t=e.isAuthenticated,n=e.isLoading;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Q,{}),Object(q.jsxs)(u.a,{maxWidth:"md",className:"App",children:[t&&Object(q.jsx)(M,{children:Object(q.jsxs)(l.c,{children:[Object(q.jsx)(l.a,{exact:!0,path:"/play",children:Object(q.jsx)(be,{})}),Object(q.jsx)(l.a,{exact:!0,path:"/",children:Object(q.jsx)(ae,{})})]})}),n&&Object(q.jsx)(L,{children:Object(q.jsx)(j.a,{})}),!t&&!n&&Object(q.jsx)(L,{children:Object(q.jsx)(d.a,{variant:"h5",children:"Please login"})})]})]})},he=n(18),xe=n.n(he),fe=window.location.origin+"/questions",pe=Object(a.a)();xe.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(c.a,{domain:"boiculese.auth0.com",clientId:"9umXUJ235FysjsLWAvJKHE43jN7toi4P",audience:"https://bogdbo-questions-api.herokuapp.com",scope:"start:questions",redirectUri:fe,children:Object(q.jsx)(i.a,{theme:pe,children:Object(q.jsx)(o.a,{basename:"/questions",children:Object(q.jsx)(Oe,{})})})})}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.2796ddc9.chunk.js.map