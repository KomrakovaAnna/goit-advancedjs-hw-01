import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form");let a={email:"",message:""};const l=e=>{const t=JSON.parse(localStorage.getItem("feedback-form-state"));if(t!==null){a=t;for(const o in t)t.hasOwnProperty(o)&&(e.elements[o].value=t[o])}};l(r);const s=e=>{a[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))},m=e=>{e.preventDefault();const t=a.email,o=a.message;if(t===""||o===""){alert("Fill please all fields");return}else console.log(a),e.target.reset(),localStorage.removeItem("feedback-form-data")};r.addEventListener("input",s);r.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
