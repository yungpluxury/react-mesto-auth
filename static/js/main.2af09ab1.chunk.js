(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{19:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),o=n.n(c),s=(n(19),n(5)),i=n(25),l=n(3),u=n(2),d=(n(31),n.p+"static/media/logo.03b78ada.svg"),m=n(10),b=n(0);var j=function(e){var t=e.loggedIn,n=e.email,a=e.onLogout,r=Object(u.h)().pathname,c="".concat("/sign-in"===r?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),o="".concat("/sign-in"===r?"/sign-up":"/sign-in");return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("img",{className:"header__logo",src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),t?Object(b.jsxs)("div",{className:"header__auth-info",children:[Object(b.jsx)("span",{className:"header__email",children:n}),Object(b.jsx)("button",{className:"header__auth-info-signout",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(b.jsx)(m.b,{to:o,className:"header__link",children:c})]})},h=r.a.createContext();var p=function(e){var t=e.card,n=e.onCardClick,r=e.onCardLike,c=e.onCardDelete,o=Object(a.useContext)(h),s=t.owner._id===o._id?Object(b.jsx)("button",{className:"element__trash-icon",type:"button",onClick:function(){c(t)}}):null,i=t.likes.some((function(e){return e._id===o._id})),l="element__like \n    ".concat(i?"element__like_active":"");return console.log(t),Object(b.jsxs)("figure",{className:"element",children:[Object(b.jsx)("img",{className:"element__image",src:t.link,alt:"".concat(t.name),onClick:function(){n(t)}}),s,Object(b.jsxs)("figcaption",{className:"element__name-container",children:[Object(b.jsx)("h2",{className:"element__name",children:t.name}),Object(b.jsxs)("div",{className:"element__like-container",children:[Object(b.jsx)("button",{type:"button",className:l,onClick:function(){r(t)}}),Object(b.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]})]})};var O=function(e){var t=e.isEditAvatarPopupOpen,n=e.isEditProfilePopupOpen,r=e.isAddPlacePopupOpen,c=e.cards,o=e.onCardClick,s=e.onCardLike,i=e.onCardDelete,l=Object(a.useContext)(h);return Object(b.jsxs)("main",{className:"content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile__avatar-container",children:[Object(b.jsx)("button",{type:"button",className:"profile__avatar-edit-button",onClick:t}),Object(b.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})]}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsxs)("div",{className:"profile__head",children:[Object(b.jsx)("h1",{className:"profile__name",children:l.name}),Object(b.jsx)("button",{type:"button",className:"profile__edit-button",onClick:n})]}),Object(b.jsx)("p",{className:"profile__description",children:l.about})]}),Object(b.jsx)("button",{type:"button",className:"profile__add-button",onClick:r})]}),Object(b.jsx)("section",{className:"elements",children:c.map((function(e){return Object(b.jsx)(p,{card:e,onCardClick:o,onCardLike:s,onCardDelete:i},e._id)}))})]})};var f=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear(),". Mesto Russia"]})})};var x=function(e){var t=e.card,n=e.onClose;return Object(b.jsx)("div",{className:"popup_function_image popup ".concat(t.isOpen?"popup_is-opened":""),children:Object(b.jsxs)("div",{className:"popup__image-container",children:[Object(b.jsx)("button",{className:"popup__close-button popup__close-button_function_image",onClick:n}),Object(b.jsx)("img",{src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name,className:"popup__image"}),Object(b.jsx)("p",{className:"popup__image-description",children:null===t||void 0===t?void 0:t.name})]})})};var g=function(e){var t=e.children,n=e.name,a=e.title,r=e.textButton,c=e.isOpen,o=e.onClose,s=e.onSubmit,i=e.isDisabled;return Object(b.jsx)("section",{className:"popup popup_function_".concat(n," ").concat(c?"popup_is-opened":""),children:Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("button",{className:"popup__close-button",type:"button",onClick:o}),Object(b.jsx)("h2",{className:"popup__title",children:a}),Object(b.jsxs)("form",{className:"form",name:n,onSubmit:s,noValidate:!0,children:[t,Object(b.jsx)("button",{className:"form__save-button",type:"submit",disabled:i,children:r})]})]})})},v=n(9);function _(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),o=Object(l.a)(c,2),i=o[0],u=o[1],d=Object(a.useState)(!1),m=Object(l.a)(d,2),b=m[0],j=m[1],h=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(e),u(t),j(n)}),[r,u,j]);return{values:n,errors:i,isValid:b,handleChange:function(e){var t=e.target,a=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},n),{},Object(v.a)({},a,c))),u(Object(s.a)(Object(s.a)({},i),{},Object(v.a)({},a,t.validationMessage))),j(t.closest(".form").checkValidity())},resetForm:h}}var C=function(e){var t=e.onUpdateAvatar,n=e.isOpen,r=e.onClose,c=_(),o=c.values,s=c.errors,i=c.isValid,l=c.handleChange,u=c.resetForm;return Object(a.useEffect)((function(){u()}),[n,u]),Object(b.jsxs)(g,{name:"popup-add-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textButton:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",isOpen:n,onClose:r,onSubmit:function(e){e.preventDefault(),t(o)},isDisabled:!i,children:[Object(b.jsx)("input",{className:s.avatar?"form__element-text form__element-text_type-error":"form__element-text",type:"url",id:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440","aria-label":"\u0441\u0441\u044b\u043b\u043a\u0430",name:"avatar",value:o.avatar||"",onChange:l,required:!0}),Object(b.jsx)("span",{id:"avatar-link-error",className:s.avatar?"form__input-error_active":"form__input-error",children:s.avatar})]})};var A=function(e){var t=e.onUpdateUser,n=e.isOpen,r=e.onClose,c=_(),o=c.values,s=c.errors,i=c.isValid,l=c.handleChange,u=c.resetForm,d=Object(a.useContext)(h);return Object(a.useEffect)((function(){d&&u(d)}),[d,n,u]),Object(b.jsxs)(g,{name:"popup-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:r,onSubmit:function(e){e.preventDefault(),t(o)},isDisabled:!i,children:[Object(b.jsx)("input",{className:s.name?"form__element-text form__element-text_type-error":"form__element-text",type:"text",id:"profile-name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",name:"name",minLength:"2",maxLength:"40",value:o.name||"",onChange:l,required:!0}),Object(b.jsx)("span",{id:"name-error",className:s.name?"form__input-error_active":"form__input-error",children:s.name}),Object(b.jsx)("input",{className:s.about?"form__element-text form__element-text_type-error":"form__element-text",type:"text",id:"profile-about",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",name:"about",minLength:"2",maxLength:"200",value:o.about||"",onChange:l,required:!0}),Object(b.jsx)("span",{id:"about-error",className:s.about?"form__input-error_active":"form__input-error",children:s.name})]})};var N=function(e){var t=e.onAddPlace,n=e.isOpen,r=e.onClose,c=_(),o=c.values,s=c.errors,i=c.isValid,l=c.handleChange,u=c.resetForm;return Object(a.useEffect)((function(){u()}),[n,u]),Object(b.jsxs)(g,{name:"popup-add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:n,onClose:r,onSubmit:function(e){e.preventDefault(),t(o)},isDisabled:!i,children:[Object(b.jsx)("input",{className:s.name?"form__element-text form__element-text_type-error":"form__element-text",type:"text","aria-label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430",id:"photo-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",value:o.name||"",onChange:l,required:!0}),Object(b.jsx)("span",{id:"name-error",className:s.name?"form__input-error_active":"form__input-error",children:s.name}),Object(b.jsx)("input",{className:s.link?"form__element-text form__element-text_type-error":"form__element-text",type:"url","aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",minLength:"7",maxLength:"300",value:o.link||"",onChange:l,required:!0}),Object(b.jsx)("span",{id:"link-error",className:s.name?"form__input-error_active":"form__input-error",children:s.link})]})};var k=function(e){var t=e.onDeleteCard,n=e.isOpen,a=e.onClose;return Object(b.jsx)(g,{name:"popup-remove-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",textButton:"\u0414\u0430",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),t()}})};var y=function(e){var t=e.title,n=e.text,a=e.active,r=e.children,c=e.onSubmit;return Object(b.jsx)("div",{className:"auth",children:Object(b.jsxs)("div",{className:"auth__container",children:[Object(b.jsx)("h2",{className:"auth__title",children:t}),Object(b.jsxs)("form",{className:"auth__form",onSubmit:c,action:"#",noValidate:!0,children:[r,Object(b.jsx)("button",{type:"submit",className:"auth__button",children:n})]}),Object(b.jsxs)("p",{className:"auth__text ".concat(a),children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(b.jsx)(m.b,{to:"/sign-in",className:"auth__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var E=function(e){var t=e.onLogin,n=r.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],o=a[1];function i(e){var t=e.target,n=t.name,a=t.value;o(Object(s.a)(Object(s.a)({},c),{},Object(v.a)({},n,a)))}return Object(b.jsx)(y,{title:"\u0412\u0445\u043e\u0434",text:"\u0412\u043e\u0439\u0442\u0438",active:"",children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"email",value:c.email,className:"auth__item auth__item_type_email",name:"email",onChange:i,placeholder:"Email",required:!0,minLength:"2",maxLength:"40"}),Object(b.jsx)("span",{id:"email-error",className:"auth__item-error"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"password",value:c.password,className:"auth__item auth__item_type_password",name:"password",onChange:i,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"2",maxLength:"200"}),Object(b.jsx)("span",{id:"password-error",className:"auth__item-error"})]})]}),onSubmit:function(e){e.preventDefault();var n=c.email,a=c.password;t(n,a)}})};var L=function(e){var t=e.onRegister,n=r.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],o=a[1];function i(e){var t=e.target,n=t.name,a=t.value;o(Object(s.a)(Object(s.a)({},c),{},Object(v.a)({},n,a)))}return Object(b.jsx)(y,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",active:"auth__text_active",children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"email",value:c.email,className:"auth__item auth__item_type_email",name:"email",onChange:i,placeholder:"Email",required:!0,minLength:"2",maxLength:"40"}),Object(b.jsx)("span",{id:"email-error",className:"auth__item-error"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"password",value:c.password,className:"auth__item auth__item_type_password",name:"password",onChange:i,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"2",maxLength:"200"}),Object(b.jsx)("span",{id:"password-error",className:"auth__item-error"})]})]}),onSubmit:function(e){e.preventDefault();var n=c.email,a=c.password;t(n,a)}})},I=n(26),w=["component"];var T=function(e){var t=e.component,n=Object(I.a)(e,w);return Object(b.jsx)(u.b,{children:function(){return!0===n.loggedIn?Object(b.jsx)(t,Object(s.a)({},n)):Object(b.jsx)(u.a,{to:"./login"})}})};var S=function(e){var t=e.isOpen,n=e.onClose,a=e.message,r=e.name;return Object(b.jsx)("section",{className:"popup popup_function_".concat(r," ").concat(t?"popup_is-opened":""),children:Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("button",{className:"popup__close-button",type:"button",onClick:n}),Object(b.jsx)("img",{src:a.icon,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",className:"form__tooltip-icon"}),Object(b.jsx)("p",{className:"form__tooltip-text",children:a.text})]})})},B=n(23),W=n(24),V=new(function(){function e(t){Object(B.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(W.a)(e,[{key:"_checkErrors",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkErrors)}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkErrors)}},{key:"setUserInfoByApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkErrors)}},{key:"addCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkErrors)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch(this._url+"/cards/likes/".concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then(this._checkErrors)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkErrors)}},{key:"changeUserAvatar",value:function(e){return console.log(e),fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkErrors)}},{key:"getData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-25",headers:{authorization:"1e3ace66-7bc0-4085-a74d-3975b1264152","Content-Type":"application/json"}}),G="https://auth.nomoreparties.co",H="data:image/png;base64,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",Q="data:image/png;base64,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";var P=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),d=o[0],m=o[1],p=Object(a.useState)({icon:"",text:""}),g=Object(l.a)(p,2),v=g[0],_=g[1],y=Object(a.useState)(!1),I=Object(l.a)(y,2),w=I[0],B=I[1],W=Object(u.g)();function P(){localStorage.removeItem("jwt"),m(""),r(!1),W.push("/sign-in")}Object(a.useEffect)((function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");(t=e,fetch("".concat(G,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," - ").concat(e.statusText))}))).then((function(e){e&&m(e.data.email),r(!0),W.push("/")})).catch((function(e){console.error(e),_({icon:Q,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),B(!0)}))}var t}),[]);var U=Object(a.useState)({isOpen:!1,owner:{name:""}}),D=Object(l.a)(U,2),F=D[0],q=D[1],Y=Object(a.useState)({name:"Loading...",about:""}),M=Object(l.a)(Y,2),Z=M[0],z=M[1],R=Object(a.useState)([]),K=Object(l.a)(R,2),J=K[0],X=K[1],$=Object(a.useState)(""),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),re=Object(l.a)(ae,2),ce=re[0],oe=re[1],se=Object(a.useState)(!1),ie=Object(l.a)(se,2),le=ie[0],ue=ie[1],de=Object(a.useState)(!1),me=Object(l.a)(de,2),be=me[0],je=me[1],he=Object(a.useState)(!1),pe=Object(l.a)(he,2),Oe=pe[0],fe=pe[1];function xe(e){"Escape"===e.key&&ve()}function ge(e){e.target.classList.contains("popup")&&ve()}function ve(){q({isOpen:!1,owner:{name:""}}),je(!1),oe(!1),ue(!1),fe(!1),B(!1)}return Object(a.useEffect)((function(){return window.addEventListener("keydown",xe),window.addEventListener("mousedown",ge),function(){window.removeEventListener("keydown",xe),window.removeEventListener("mousedown",ge)}})),Object(a.useEffect)((function(){V.getUserInfo().then((function(e){z(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(a.useEffect)((function(){V.getInitialCards().then((function(e){X(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]),Object(b.jsx)("div",{className:"page",children:Object(b.jsxs)(h.Provider,{value:Z,children:[Object(b.jsx)(j,{loggedIn:n,email:d,onLogout:P}),Object(b.jsxs)(u.d,{children:[Object(b.jsx)(T,{exact:!0,path:"/",loggedIn:n,handleLogout:P,component:O,onCardClick:function(e){q(Object(s.a)({isOpen:!0},e))},isEditAvatarPopupOpen:function(){oe(!0)},isEditProfilePopupOpen:function(){ue(!0)},isAddPlacePopupOpen:function(){je(!0)},cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Z._id}));V.changeLikeCardStatus(e._id,t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));X(n)})).catch((function(e){return console.log("Error: ".concat(e))}))},onCardDelete:function(e){fe(!0),ne(e._id)}}),Object(b.jsx)(u.b,{path:"/sign-in",children:Object(b.jsx)(E,{onLogin:function(e,t){(function(e,t){return fetch("".concat(G,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," - ").concat(e.statusText))}))})(e,t).then((function(t){localStorage.setItem("jwt",t.token),m(e),r(!0),W.push("/"),_({icon:H,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438!"}),B(!0)})).catch((function(e){console.error(e),_({icon:Q,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),B(!0)}))}})}),Object(b.jsx)(u.b,{path:"/sign-up",children:Object(b.jsx)(L,{onRegister:function(e,t){(function(e,t){return fetch("".concat(G,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," - ").concat(e.statusText))}))})(e,t).then((function(e){e&&(localStorage.setItem("jwt",e.jwt),m(e.data.email)),W.push("/sign-in"),_({icon:H,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),B(!0)})).catch((function(e){console.error(e),_({icon:Q,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),B(!0)}))}})}),Object(b.jsx)(u.b,{children:n?Object(b.jsx)(u.a,{to:"/"}):Object(b.jsx)(u.a,{to:"/sign-in"})})]}),Object(b.jsx)(f,{}),Object(b.jsx)(S,{isOpen:w,onClose:ve,message:v,name:"tooltip"}),Object(b.jsx)(x,{card:F,onClose:ve}),Object(b.jsx)(C,{isOpen:ce,onClose:ve,onUpdateAvatar:function(e){var t=e.avatar;V.changeUserAvatar({avatar:t}).then((function(e){z(e),ve()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(b.jsx)(A,{isOpen:le,onClose:ve,onUpdateUser:function(e){V.setUserInfoByApi(e).then((function(e){z(e),ve()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(b.jsx)(N,{isOpen:be,onClose:ve,onAddPlace:function(e){V.addCard(e).then((function(e){X([e].concat(Object(i.a)(J))),ve()})).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(b.jsx)(k,{isOpen:Oe,onClose:ve,onDeleteCard:function(){V.deleteCard(te).then((function(e){var t=J.filter((function(e){return e._id===te?null:e}));X(t),ve()})).catch((function(e){return console.log("Error: ".concat(e))}))}})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(P,{})})}),document.getElementById("root")),U()}},[[38,1,2]]]);
//# sourceMappingURL=main.2af09ab1.chunk.js.map