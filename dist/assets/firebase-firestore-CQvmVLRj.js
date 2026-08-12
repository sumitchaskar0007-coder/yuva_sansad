import{l as Si,m as Ci,y as bi,d as me,k as es,p as Di,u as Ni,o as ki,z as xi,F as Oi,L as Fi,h as ae,I as Re,A as Li,e as Mi,M as Ui,S as qi,_ as Bi,C as zi,r as nr,c as $i,X as ji,B as Gi,D as en,G as Qi,H as Ki,W as _t,J as Wi,K as rr}from"./firebase-core-DjYB1kBr.js";const sr="@firebase/firestore",ir="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Fi("@firebase/firestore");function Ne(){return Pe.logLevel}function g(r,...e){if(Pe.logLevel<=ae.DEBUG){const t=e.map(An);Pe.debug(`Firestore (${$e}): ${r}`,...t)}}function ce(r,...e){if(Pe.logLevel<=ae.ERROR){const t=e.map(An);Pe.error(`Firestore (${$e}): ${r}`,...t)}}function _e(r,...e){if(Pe.logLevel<=ae.WARN){const t=e.map(An);Pe.warn(`Firestore (${$e}): ${r}`,...t)}}function An(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ts(r,n,t)}function ts(r,e,t){let n=`FIRESTORE (${$e}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ce(n),new Error(n)}function S(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||ts(e,s,n)}function A(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Oi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(G.UNAUTHENTICATED)))}shutdown(){}}class Xi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ji{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){S(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ue,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ue)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(S(typeof n.accessToken=="string",31837,{l:n}),new ns(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string",2055,{h:e}),new G(e)}}class Yi{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=G.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Zi{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Yi(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(G.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class or{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eo{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$i(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){S(this.o===void 0,3512);const n=i=>{i.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new or(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(S(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new or(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=to(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function w(r,e){return r<e?-1:r>e?1:0}function on(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),s=e.codePointAt(t);if(n!==s){if(n<128&&s<128)return w(n,s);{const i=rs(),o=no(i.encode(ar(r,t)),i.encode(ar(e,t)));return o!==0?o:w(n,s)}}t+=n>65535?2:1}return w(r.length,e.length)}function ar(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function no(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return w(r[t],e[t]);return w(r.length,e.length)}function Me(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="__name__";class Z{constructor(e,t,n){t===void 0?t=0:t>e.length&&T(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&T(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Z.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Z?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Z.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return w(e.length,t.length)}static compareSegments(e,t){const n=Z.isNumericId(e),s=Z.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Z.extractNumericId(e).compare(Z.extractNumericId(t)):on(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Re.fromString(e.substring(4,e.length-2))}}class C extends Z{construct(e,t,n){return new C(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new C(t)}static emptyPath(){return new C([])}}const ro=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends Z{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return ro.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ur}static keyField(){return new z([ur])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new p(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new p(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.path=e}static fromPath(e){return new y(C.fromString(e))}static fromName(e){return new y(C.fromString(e).popFirst(5))}static empty(){return new y(C.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&C.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return C.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new y(new C(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(r,e,t){if(!t)throw new p(m.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function so(r,e,t,n){if(e===!0&&n===!0)throw new p(m.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function cr(r){if(!y.isDocumentKey(r))throw new p(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function lr(r){if(y.isDocumentKey(r))throw new p(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function is(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function wn(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":T(12329,{type:typeof r})}function le(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new p(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wn(r);throw new p(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r,e){const t={typeString:r};return e&&(t.value=e),t}function ut(r,e){if(!is(r))throw new p(m.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new p(m.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=-62135596800,dr=1e6;class b{static now(){return b.fromMillis(Date.now())}static fromDate(e){return b.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*dr);return new b(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hr)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dr}_compareTo(e){return this.seconds===e.seconds?w(this.nanoseconds,e.nanoseconds):w(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:b._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ut(e,b._jsonSchema))return new b(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}b._jsonSchemaVersion="firestore/timestamp/1.0",b._jsonSchema={type:F("string",b._jsonSchemaVersion),seconds:F("number"),nanoseconds:F("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static fromTimestamp(e){return new I(e)}static min(){return new I(new b(0,0))}static max(){return new I(new b(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=-1;function io(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=I.fromTimestamp(n===1e9?new b(t+1,0):new b(t,n));return new ge(s,y.empty(),e)}function oo(r){return new ge(r.readTime,r.key,tt)}class ge{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ge(I.min(),y.empty(),tt)}static max(){return new ge(I.max(),y.empty(),tt)}}function ao(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=y.comparator(r.documentKey,e.documentKey),t!==0?t:w(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class co{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(r){if(r.code!==m.FAILED_PRECONDITION||r.message!==uo)throw r;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new d(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof d?t:d.resolve(t)}catch(t){return d.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):d.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):d.reject(t)}static resolve(e){return new d(((t,n)=>{t(e)}))}static reject(e){return new d(((t,n)=>{n(e)}))}static waitFor(e){return new d(((t,n)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=d.resolve(!1);for(const n of e)t=t.next((s=>s?d.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new d(((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((l=>{o[c]=l,++a,a===i&&n(o)}),(l=>s(l)))}}))}static doWhile(e,t){return new d(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}function lo(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ge(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ft.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=-1;function Lt(r){return r==null}function Rt(r){return r===0&&1/r==-1/0}function ho(r){return typeof r=="number"&&Number.isInteger(r)&&!Rt(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="";function fo(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=fr(e)),e=mo(r.get(t),e);return fr(e)}function mo(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case os:t+="";break;default:t+=i}}return t}function fr(r){return r+os+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ae(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function as(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.comparator=e,this.root=t||B.EMPTY}insert(e,t){return new D(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,B.BLACK,null,null))}remove(e){return new D(this.comparator,this.root.remove(e,this.comparator).copy(null,null,B.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gt(this.root,e,this.comparator,!1)}getReverseIterator(){return new gt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gt(this.root,e,this.comparator,!0)}}class gt{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class B{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??B.RED,this.left=s??B.EMPTY,this.right=i??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new B(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return B.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw T(43730,{key:this.key,value:this.value});if(this.right.isRed())throw T(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw T(27949);return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw T(57766)}get value(){throw T(16141)}get color(){throw T(16727)}get left(){throw T(29726)}get right(){throw T(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.comparator=e,this.data=new D(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _r(this.data.getIterator())}getIteratorFrom(e){return new _r(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof U)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new U(this.comparator);return t.data=e,t}}class _r{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new X([])}unionWith(e){let t=new U(z.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new X(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Me(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new us("Invalid base64 string: "+i):i}})(e);return new $(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new $(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return w(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$.EMPTY_BYTE_STRING=new $("");const _o=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(r){if(S(!!r,39018),typeof r=="string"){let e=0;const t=_o.exec(r);if(S(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:k(r.seconds),nanos:k(r.nanos)}}function k(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ye(r){return typeof r=="string"?$.fromBase64String(r):$.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="server_timestamp",ls="__type__",hs="__previous_value__",ds="__local_write_time__";function Vn(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[ls])===null||t===void 0?void 0:t.stringValue)===cs}function Mt(r){const e=r.mapValue.fields[hs];return Vn(e)?Mt(e):e}function nt(r){const e=pe(r.mapValue.fields[ds].timestampValue);return new b(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,n,s,i,o,a,u,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l}}const Vt="(default)";class rt{constructor(e,t){this.projectId=e,this.database=t||Vt}static empty(){return new rt("","")}get isDefaultDatabase(){return this.database===Vt}isEqual(e){return e instanceof rt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="__type__",po="__max__",pt={mapValue:{}},ms="__vector__",Pt="value";function Ee(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Vn(r)?4:Eo(r)?9007199254740991:yo(r)?10:11:T(28295,{value:r})}function se(r,e){if(r===e)return!0;const t=Ee(r);if(t!==Ee(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return nt(r).isEqual(nt(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=pe(s.timestampValue),a=pe(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return ye(s.bytesValue).isEqual(ye(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return k(s.geoPointValue.latitude)===k(i.geoPointValue.latitude)&&k(s.geoPointValue.longitude)===k(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return k(s.integerValue)===k(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=k(s.doubleValue),a=k(i.doubleValue);return o===a?Rt(o)===Rt(a):isNaN(o)&&isNaN(a)}return!1})(r,e);case 9:return Me(r.arrayValue.values||[],e.arrayValue.values||[],se);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(mr(o)!==mr(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!se(o[u],a[u])))return!1;return!0})(r,e);default:return T(52216,{left:r})}}function st(r,e){return(r.values||[]).find((t=>se(t,e)))!==void 0}function Ue(r,e){if(r===e)return 0;const t=Ee(r),n=Ee(e);if(t!==n)return w(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return w(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=k(i.integerValue||i.doubleValue),u=k(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(r,e);case 3:return gr(r.timestampValue,e.timestampValue);case 4:return gr(nt(r),nt(e));case 5:return on(r.stringValue,e.stringValue);case 6:return(function(i,o){const a=ye(i),u=ye(o);return a.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=w(a[c],u[c]);if(l!==0)return l}return w(a.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=w(k(i.latitude),k(o.latitude));return a!==0?a:w(k(i.longitude),k(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return pr(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var a,u,c,l;const h=i.fields||{},f=o.fields||{},_=(a=h[Pt])===null||a===void 0?void 0:a.arrayValue,v=(u=f[Pt])===null||u===void 0?void 0:u.arrayValue,R=w(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((l=v==null?void 0:v.values)===null||l===void 0?void 0:l.length)||0);return R!==0?R:pr(_,v)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===pt.mapValue&&o===pt.mapValue)return 0;if(i===pt.mapValue)return 1;if(o===pt.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=on(u[h],l[h]);if(f!==0)return f;const _=Ue(a[u[h]],c[l[h]]);if(_!==0)return _}return w(u.length,l.length)})(r.mapValue,e.mapValue);default:throw T(23264,{le:t})}}function gr(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return w(r,e);const t=pe(r),n=pe(e),s=w(t.seconds,n.seconds);return s!==0?s:w(t.nanos,n.nanos)}function pr(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Ue(t[s],n[s]);if(i)return i}return w(t.length,n.length)}function qe(r){return an(r)}function an(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=pe(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ye(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return y.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=an(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${an(t.fields[o])}`;return s+"}"})(r.mapValue):T(61005,{value:r})}function Tt(r){switch(Ee(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mt(r);return e?16+Tt(e):16;case 5:return 2*r.stringValue.length;case 6:return ye(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Tt(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Ae(n.fields,((i,o)=>{s+=i.length+Tt(o)})),s})(r.mapValue);default:throw T(13486,{value:r})}}function un(r){return!!r&&"integerValue"in r}function Pn(r){return!!r&&"arrayValue"in r}function yr(r){return!!r&&"nullValue"in r}function Er(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function It(r){return!!r&&"mapValue"in r}function yo(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[fs])===null||t===void 0?void 0:t.stringValue)===ms}function Je(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ae(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Je(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Je(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Eo(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===po}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.value=e}static empty(){return new H({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!It(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Je(t)}setAll(e){let t=z.emptyPath(),n={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=Je(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());It(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return se(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];It(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Ae(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new H(Je(this.value))}}function _s(r){const e=[];return Ae(r.fields,((t,n)=>{const s=new z([t]);if(It(n)){const i=_s(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new X(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Q(e,0,I.min(),I.min(),I.min(),H.empty(),0)}static newFoundDocument(e,t,n,s){return new Q(e,1,t,I.min(),n,s,0)}static newNoDocument(e,t){return new Q(e,2,t,I.min(),I.min(),H.empty(),0)}static newUnknownDocument(e,t){return new Q(e,3,t,I.min(),I.min(),H.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=H.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=H.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Q&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.position=e,this.inclusive=t}}function Tr(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=y.comparator(y.fromName(o.referenceValue),t.key):n=Ue(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ir(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!se(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t="asc"){this.field=e,this.dir=t}}function To(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{}class L extends gs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Ao(e,t,n):t==="array-contains"?new Ro(e,n):t==="in"?new Vo(e,n):t==="not-in"?new Po(e,n):t==="array-contains-any"?new So(e,n):new L(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new vo(e,n):new wo(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ue(t,this.value)):t!==null&&Ee(this.value)===Ee(t)&&this.matchesComparison(Ue(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ie extends gs{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ie(e,t)}matches(e){return ps(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ps(r){return r.op==="and"}function ys(r){return Io(r)&&ps(r)}function Io(r){for(const e of r.filters)if(e instanceof ie)return!1;return!0}function cn(r){if(r instanceof L)return r.field.canonicalString()+r.op.toString()+qe(r.value);if(ys(r))return r.filters.map((e=>cn(e))).join(",");{const e=r.filters.map((t=>cn(t))).join(",");return`${r.op}(${e})`}}function Es(r,e){return r instanceof L?(function(n,s){return s instanceof L&&n.op===s.op&&n.field.isEqual(s.field)&&se(n.value,s.value)})(r,e):r instanceof ie?(function(n,s){return s instanceof ie&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&Es(o,s.filters[a])),!0):!1})(r,e):void T(19439)}function Ts(r){return r instanceof L?(function(t){return`${t.field.canonicalString()} ${t.op} ${qe(t.value)}`})(r):r instanceof ie?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ts).join(" ,")+"}"})(r):"Filter"}class Ao extends L{constructor(e,t,n){super(e,t,n),this.key=y.fromName(n.referenceValue)}matches(e){const t=y.comparator(e.key,this.key);return this.matchesComparison(t)}}class vo extends L{constructor(e,t){super(e,"in",t),this.keys=Is("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class wo extends L{constructor(e,t){super(e,"not-in",t),this.keys=Is("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Is(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>y.fromName(n.referenceValue)))}class Ro extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pn(t)&&st(t.arrayValue,this.value)}}class Vo extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&st(this.value.arrayValue,t)}}class Po extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(st(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!st(this.value.arrayValue,t)}}class So extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>st(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Pe=null}}function Ar(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Co(r,e,t,n,s,i,o)}function Sn(r){const e=A(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>cn(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Lt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>qe(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>qe(n))).join(",")),e.Pe=t}return e.Pe}function Cn(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!To(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Es(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ir(r.startAt,e.startAt)&&Ir(r.endAt,e.endAt)}function ln(r){return y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function bo(r,e,t,n,s,i,o,a){return new Ut(r,e,t,n,s,i,o,a)}function bn(r){return new Ut(r)}function vr(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Do(r){return r.collectionGroup!==null}function Ye(r){const e=A(r);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new U(z.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Ct(i,n))})),t.has(z.keyField().canonicalString())||e.Te.push(new Ct(z.keyField(),n))}return e.Te}function ee(r){const e=A(r);return e.Ie||(e.Ie=No(e,Ye(r))),e.Ie}function No(r,e){if(r.limitType==="F")return Ar(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ct(s.field,i)}));const t=r.endAt?new St(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new St(r.startAt.position,r.startAt.inclusive):null;return Ar(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function hn(r,e,t){return new Ut(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function qt(r,e){return Cn(ee(r),ee(e))&&r.limitType===e.limitType}function As(r){return`${Sn(ee(r))}|lt:${r.limitType}`}function ke(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>Ts(s))).join(", ")}]`),Lt(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>qe(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>qe(s))).join(",")),`Target(${n})`})(ee(r))}; limitType=${r.limitType})`}function Bt(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of Ye(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,a,u){const c=Tr(o,a,u);return o.inclusive?c<=0:c<0})(n.startAt,Ye(n),s)||n.endAt&&!(function(o,a,u){const c=Tr(o,a,u);return o.inclusive?c>=0:c>0})(n.endAt,Ye(n),s))})(r,e)}function ko(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function vs(r){return(e,t)=>{let n=!1;for(const s of Ye(r)){const i=xo(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function xo(r,e,t){const n=r.field.isKeyField()?y.comparator(e.key,t.key):(function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Ue(u,c):T(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return T(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ae(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return as(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new D(y.comparator);function he(){return Oo}const ws=new D(y.comparator);function We(...r){let e=ws;for(const t of r)e=e.insert(t.key,t);return e}function Rs(r){let e=ws;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function we(){return Ze()}function Vs(){return Ze()}function Ze(){return new Ce((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Fo=new D(y.comparator),Lo=new U(y.comparator);function V(...r){let e=Lo;for(const t of r)e=e.add(t);return e}const Mo=new U(w);function Uo(){return Mo}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rt(e)?"-0":e}}function Ps(r){return{integerValue:""+r}}function qo(r,e){return ho(e)?Ps(e):Dn(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this._=void 0}}function Bo(r,e,t){return r instanceof it?(function(s,i){const o={fields:{[ls]:{stringValue:cs},[ds]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vn(i)&&(i=Mt(i)),i&&(o.fields[hs]=i),{mapValue:o}})(t,e):r instanceof ot?Cs(r,e):r instanceof at?bs(r,e):(function(s,i){const o=Ss(s,i),a=wr(o)+wr(s.Ee);return un(o)&&un(s.Ee)?Ps(a):Dn(s.serializer,a)})(r,e)}function zo(r,e,t){return r instanceof ot?Cs(r,e):r instanceof at?bs(r,e):t}function Ss(r,e){return r instanceof bt?(function(n){return un(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class it extends zt{}class ot extends zt{constructor(e){super(),this.elements=e}}function Cs(r,e){const t=Ds(e);for(const n of r.elements)t.some((s=>se(s,n)))||t.push(n);return{arrayValue:{values:t}}}class at extends zt{constructor(e){super(),this.elements=e}}function bs(r,e){let t=Ds(e);for(const n of r.elements)t=t.filter((s=>!se(s,n)));return{arrayValue:{values:t}}}class bt extends zt{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function wr(r){return k(r.integerValue||r.doubleValue)}function Ds(r){return Pn(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.field=e,this.transform=t}}function jo(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof ot&&s instanceof ot||n instanceof at&&s instanceof at?Me(n.elements,s.elements,se):n instanceof bt&&s instanceof bt?se(n.Ee,s.Ee):n instanceof it&&s instanceof it})(r.transform,e.transform)}class Go{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function At(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class $t{}function Ns(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Nn(r.key,Y.none()):new ct(r.key,r.data,Y.none());{const t=r.data,n=H.empty();let s=new U(z.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new ve(r.key,n,new X(s.toArray()),Y.none())}}function Qo(r,e,t){r instanceof ct?(function(s,i,o){const a=s.value.clone(),u=Vr(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,e,t):r instanceof ve?(function(s,i,o){if(!At(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Vr(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ks(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function et(r,e,t,n){return r instanceof ct?(function(i,o,a,u){if(!At(i.precondition,o))return a;const c=i.value.clone(),l=Pr(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(r,e,t,n):r instanceof ve?(function(i,o,a,u){if(!At(i.precondition,o))return a;const c=Pr(i.fieldTransforms,u,o),l=o.data;return l.setAll(ks(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((h=>h.field)))})(r,e,t,n):(function(i,o,a){return At(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,e,t)}function Ko(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Ss(n.transform,s||null);i!=null&&(t===null&&(t=H.empty()),t.set(n.field,i))}return t||null}function Rr(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Me(n,s,((i,o)=>jo(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ct extends $t{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ve extends $t{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ks(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Vr(r,e,t){const n=new Map;S(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,zo(o,a,t[s]))}return n}function Pr(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,Bo(i,o,e))}return n}class Nn extends $t{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wo extends $t{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Qo(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=et(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=et(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Vs();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=Ns(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),V())}isEqual(e){return this.batchId===e.batchId&&Me(this.mutations,e.mutations,((t,n)=>Rr(t,n)))&&Me(this.baseMutations,e.baseMutations,((t,n)=>Rr(t,n)))}}class kn{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){S(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let s=(function(){return Fo})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new kn(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,P;function Yo(r){switch(r){case m.OK:return T(64938);case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0;default:return T(15467,{code:r})}}function xs(r){if(r===void 0)return ce("GRPC error has no .code"),m.UNKNOWN;switch(r){case O.OK:return m.OK;case O.CANCELLED:return m.CANCELLED;case O.UNKNOWN:return m.UNKNOWN;case O.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case O.INTERNAL:return m.INTERNAL;case O.UNAVAILABLE:return m.UNAVAILABLE;case O.UNAUTHENTICATED:return m.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case O.NOT_FOUND:return m.NOT_FOUND;case O.ALREADY_EXISTS:return m.ALREADY_EXISTS;case O.PERMISSION_DENIED:return m.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case O.ABORTED:return m.ABORTED;case O.OUT_OF_RANGE:return m.OUT_OF_RANGE;case O.UNIMPLEMENTED:return m.UNIMPLEMENTED;case O.DATA_LOSS:return m.DATA_LOSS;default:return T(39323,{code:r})}}(P=O||(O={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Re([4294967295,4294967295],0);function Sr(r){const e=rs().encode(r),t=new Ui;return t.update(e),new Uint8Array(t.digest())}function Cr(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Re([t,n],0),new Re([s,i],0)]}class xn{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new He(`Invalid padding: ${t}`);if(n<0)throw new He(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new He(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new He(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Re.fromNumber(this.fe)}pe(e,t,n){let s=e.add(t.multiply(Re.fromNumber(n)));return s.compare(Zo)===1&&(s=new Re([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Sr(e),[n,s]=Cr(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(n,s,i);if(!this.ye(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xn(i,s,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.fe===0)return;const t=Sr(e),[n,s]=Cr(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(n,s,i);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class He extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,lt.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new jt(I.min(),s,new D(w),he(),V())}}class lt{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lt(n,t,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,n,s){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=s}}class Os{constructor(e,t){this.targetId=e,this.De=t}}class Fs{constructor(e,t,n=$.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class br{constructor(){this.ve=0,this.Ce=Dr(),this.Fe=$.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=V(),t=V(),n=V();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:T(38017,{changeType:i})}})),new lt(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Dr()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,S(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ea{constructor(e){this.We=e,this.Ge=new Map,this.ze=he(),this.je=yt(),this.Je=yt(),this.He=new D(w)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:T(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,n=e.De.count,s=this.st(t);if(s){const i=s.target;if(ln(i))if(n===0){const o=new y(i.path);this.Xe(t,o,Q.newNoDocument(o,I.min()))}else S(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const a=this._t(e),u=a?this.ut(a,e,o):1;if(u!==0){this.rt(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,c)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=ye(n).toUint8Array()}catch(u){if(u instanceof us)return _e("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new xn(o,s,i)}catch(u){return _e(u instanceof He?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.fe===0?null:a}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,o)=>{const a=this.st(o);if(a){if(i.current&&ln(a.target)){const u=new y(a.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,Q.newNoDocument(u,e))}i.Ne&&(t.set(o,i.Le()),i.ke())}}));let n=V();this.Je.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new jt(e,t,this.He,this.ze,n);return this.ze=he(),this.je=yt(),this.Je=yt(),this.He=new D(w),s}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new br,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new U(w),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new U(w),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||g("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new br),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function yt(){return new D(y.comparator)}function Dr(){return new D(y.comparator)}const ta={asc:"ASCENDING",desc:"DESCENDING"},na={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ra={and:"AND",or:"OR"};class sa{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dn(r,e){return r.useProto3Json||Lt(e)?e:{value:e}}function Dt(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ls(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ia(r,e){return Dt(r,e.toTimestamp())}function te(r){return S(!!r,49232),I.fromTimestamp((function(t){const n=pe(t);return new b(n.seconds,n.nanos)})(r))}function On(r,e){return fn(r,e).canonicalString()}function fn(r,e){const t=(function(s){return new C(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Ms(r){const e=C.fromString(r);return S($s(e),10190,{key:e.toString()}),e}function mn(r,e){return On(r.databaseId,e.path)}function tn(r,e){const t=Ms(e);if(t.get(1)!==r.databaseId.projectId)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new y(qs(t))}function Us(r,e){return On(r.databaseId,e)}function oa(r){const e=Ms(r);return e.length===4?C.emptyPath():qs(e)}function _n(r){return new C(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function qs(r){return S(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Nr(r,e,t){return{name:mn(r,e),fields:t.value.mapValue.fields}}function aa(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(c,l){return c.useProto3Json?(S(l===void 0||typeof l=="string",58123),$.fromBase64String(l||"")):(S(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),$.fromUint8Array(l||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(c){const l=c.code===void 0?m.UNKNOWN:xs(c.code);return new p(l,c.message||"")})(o);t=new Fs(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=tn(r,n.document.name),i=te(n.document.updateTime),o=n.document.createTime?te(n.document.createTime):I.min(),a=new H({mapValue:{fields:n.document.fields}}),u=Q.newFoundDocument(s,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];t=new vt(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=tn(r,n.document),i=n.readTime?te(n.readTime):I.min(),o=Q.newNoDocument(s,i),a=n.removedTargetIds||[];t=new vt([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=tn(r,n.document),i=n.removedTargetIds||[];t=new vt([],i,s,null)}else{if(!("filter"in e))return T(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Jo(s,i),a=n.targetId;t=new Os(a,o)}}return t}function ua(r,e){let t;if(e instanceof ct)t={update:Nr(r,e.key,e.value)};else if(e instanceof Nn)t={delete:mn(r,e.key)};else if(e instanceof ve)t={update:Nr(r,e.key,e.data),updateMask:pa(e.fieldMask)};else{if(!(e instanceof Wo))return T(16599,{Rt:e.type});t={verify:mn(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof it)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ot)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof at)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bt)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw T(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ia(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T(27497)})(r,e.precondition)),t}function ca(r,e){return r&&r.length>0?(S(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?te(s.updateTime):te(i);return o.isEqual(I.min())&&(o=te(i)),new Go(o,s.transformResults||[])})(t,e)))):[]}function la(r,e){return{documents:[Us(r,e.path)]}}function ha(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Us(r,s);const i=(function(c){if(c.length!==0)return zs(ie.create(c,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(c){if(c.length!==0)return c.map((l=>(function(f){return{field:xe(f.field),direction:ma(f.dir)}})(l)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=dn(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{Vt:t,parent:s}}function da(r){let e=oa(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){S(n===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=(function(h){const f=Bs(h);return f instanceof ie&&ys(f)?f.getFilters():[f]})(t.where));let o=[];t.orderBy&&(o=(function(h){return h.map((f=>(function(v){return new Ct(Oe(v.field),(function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(v.direction))})(f)))})(t.orderBy));let a=null;t.limit&&(a=(function(h){let f;return f=typeof h=="object"?h.value:h,Lt(f)?null:f})(t.limit));let u=null;t.startAt&&(u=(function(h){const f=!!h.before,_=h.values||[];return new St(_,f)})(t.startAt));let c=null;return t.endAt&&(c=(function(h){const f=!h.before,_=h.values||[];return new St(_,f)})(t.endAt)),bo(e,s,o,i,a,"F",u,c)}function fa(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bs(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Oe(t.unaryFilter.field);return L.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Oe(t.unaryFilter.field);return L.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Oe(t.unaryFilter.field);return L.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oe(t.unaryFilter.field);return L.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return T(61313);default:return T(60726)}})(r):r.fieldFilter!==void 0?(function(t){return L.create(Oe(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return T(58110);default:return T(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ie.create(t.compositeFilter.filters.map((n=>Bs(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return T(1026)}})(t.compositeFilter.op))})(r):T(30097,{filter:r})}function ma(r){return ta[r]}function _a(r){return na[r]}function ga(r){return ra[r]}function xe(r){return{fieldPath:r.canonicalString()}}function Oe(r){return z.fromServerFormat(r.fieldPath)}function zs(r){return r instanceof L?(function(t){if(t.op==="=="){if(Er(t.value))return{unaryFilter:{field:xe(t.field),op:"IS_NAN"}};if(yr(t.value))return{unaryFilter:{field:xe(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Er(t.value))return{unaryFilter:{field:xe(t.field),op:"IS_NOT_NAN"}};if(yr(t.value))return{unaryFilter:{field:xe(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xe(t.field),op:_a(t.op),value:t.value}}})(r):r instanceof ie?(function(t){const n=t.getFilters().map((s=>zs(s)));return n.length===1?n[0]:{compositeFilter:{op:ga(t.op),filters:n}}})(r):T(54877,{filter:r})}function pa(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $s(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t,n,s,i=I.min(),o=I.min(),a=$.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new de(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new de(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.gt=e}}function Ea(r){const e=da({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?hn(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.Dn=new Ia}addToCollectionParentIndex(e,t){return this.Dn.add(t),d.resolve()}getCollectionParents(e,t){return d.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return d.resolve()}deleteFieldIndex(e,t){return d.resolve()}deleteAllFieldIndexes(e){return d.resolve()}createTargetIndexes(e,t){return d.resolve()}getDocumentsMatchingTarget(e,t){return d.resolve(null)}getIndexType(e,t){return d.resolve(0)}getFieldIndexes(e,t){return d.resolve([])}getNextCollectionGroupToUpdate(e){return d.resolve(null)}getMinOffset(e,t){return d.resolve(ge.min())}getMinOffsetFromCollectionGroup(e,t){return d.resolve(ge.min())}updateCollectionGroup(e,t,n){return d.resolve()}updateIndexEntries(e,t){return d.resolve()}}class Ia{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new U(C.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new U(C.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},js=41943040;class W{static withCacheSize(e){return new W(e,W.DEFAULT_COLLECTION_PERCENTILE,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W.DEFAULT_COLLECTION_PERCENTILE=10,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,W.DEFAULT=new W(js,W.DEFAULT_COLLECTION_PERCENTILE,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),W.DISABLED=new W(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Be(0)}static ur(){return new Be(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="LruGarbageCollector",Aa=1048576;function Or([r,e],[t,n]){const s=w(r,t);return s===0?w(e,n):s}class va{constructor(e){this.Tr=e,this.buffer=new U(Or),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Or(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wa{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){g(xr,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ge(t)?g(xr,"Ignoring IndexedDB error during garbage collection: ",t):await je(t)}await this.Rr(3e5)}))}}class Ra{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return d.resolve(Ft.ue);const n=new va(t);return this.Vr.forEachTarget(e,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(g("LruGarbageCollector","Garbage collection skipped; disabled"),d.resolve(kr)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kr):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,s,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s)))).next((h=>(n=h,a=Date.now(),this.removeTargets(e,n,t)))).next((h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((h=>(c=Date.now(),Ne()<=ae.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),d.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h}))))}}function Va(r,e){return new Ra(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.changes=new Ce((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Q.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?d.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&et(n.mutation,s,X.empty(),b.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,V()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=V()){const s=we();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=We();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=we();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,V())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,s){let i=he();const o=Ze(),a=(function(){return Ze()})();return t.forEach(((u,c)=>{const l=n.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof ve)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),et(l.mutation,c,l.mutation.getFieldMask(),b.now())):o.set(c.key,X.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,l)=>o.set(c,l))),t.forEach(((c,l)=>{var h;return a.set(c,new Sa(l,(h=o.get(c))!==null&&h!==void 0?h:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Ze();let s=new D(((o,a)=>o-a)),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let l=n.get(u)||X.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(s.get(a.batchId)||V()).add(u);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Vs();l.forEach((f=>{if(!i.has(f)){const _=Ns(t.get(f),n.get(f));_!==null&&h.set(f,_),i=i.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return d.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return(function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Do(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):d.resolve(we());let a=tt,u=i;return o.next((c=>d.forEach(c,((l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(e,l).next((f=>{u=u.insert(l,f)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,V()))).next((l=>({batchId:a,changes:Rs(l)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new y(t)).next((n=>{let s=We();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=We();return this.indexManager.getCollectionParents(e,i).next((a=>d.forEach(a,(u=>{const c=(function(h,f){return new Ut(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next((l=>{l.forEach(((h,f)=>{o=o.insert(h,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,Q.newInvalidDocument(l)))}));let a=We();return o.forEach(((u,c)=>{const l=i.get(u);l!==void 0&&et(l.mutation,c,X.empty(),b.now()),Bt(t,c)&&(a=a.insert(u,c))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return d.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:te(s.createTime)}})(t)),d.resolve()}getNamedQuery(e,t){return d.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Ea(s.bundledQuery),readTime:te(s.readTime)}})(t)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.overlays=new D(y.comparator),this.kr=new Map}getOverlay(e,t){return d.resolve(this.overlays.get(t))}getOverlays(e,t){const n=we();return d.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.wt(e,t,i)})),d.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.kr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(n)),d.resolve()}getOverlaysForCollection(e,t,n){const s=we(),i=t.length+1,o=new y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new D(((c,l)=>c-l));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=we(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=we(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>a.set(c,l))),!(a.size()>=s)););return d.resolve(a)}wt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(n.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Xo(t,n));let i=this.kr.get(t);i===void 0&&(i=V(),this.kr.set(t,i)),this.kr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.sessionToken=$.EMPTY_BYTE_STRING}getSessionToken(e){return d.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,d.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.qr=new U(q.Qr),this.$r=new U(q.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new q(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new q(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new y(new C([])),n=new q(t,e),s=new q(t,e+1),i=[];return this.$r.forEachInRange([n,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new y(new C([])),n=new q(t,e),s=new q(t,e+1);let i=V();return this.$r.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new q(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class q{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return y.comparator(e.key,t.key)||w(e.Hr,t.Hr)}static Ur(e,t){return w(e.Hr,t.Hr)||y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new U(q.Qr)}checkEmpty(e){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ho(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(e,t){return d.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?Rn:this.er-1)}getAllMutationBatches(e){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new q(t,0),s=new q(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,s],(o=>{const a=this.Zr(o.Hr);i.push(a)})),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new U(w);return t.forEach((s=>{const i=new q(s,0),o=new q(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(a=>{n=n.add(a.Hr)}))})),d.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;y.isDocumentKey(i)||(i=i.child(""));const o=new q(new y(i),0);let a=new U(w);return this.Yr.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Hr)),!0)}),o),d.resolve(this.ei(a))}ei(e){const t=[];return e.forEach((n=>{const s=this.Zr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){S(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return d.forEach(t.mutations,(s=>{const i=new q(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new q(t,0),s=this.Yr.firstAfterOrEqual(n);return d.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,d.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.ni=e,this.docs=(function(){return new D(y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return d.resolve(n?n.document.mutableCopy():Q.newInvalidDocument(t))}getEntries(e,t){let n=he();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Q.newInvalidDocument(s))})),d.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=he();const o=t.path,a=new y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ao(oo(l),n)<=0||(s.has(l.key)||Bt(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(e,t,n,s){T(9500)}ri(e,t){return d.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Oa(this)}getSize(e){return d.resolve(this.size)}}class Oa extends Pa{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(n)})),d.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.persistence=e,this.ii=new Ce((t=>Sn(t)),Cn),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.si=0,this.oi=new Fn,this.targetCount=0,this._i=Be.ar()}forEachTarget(e,t){return this.ii.forEach(((n,s)=>t(s))),d.resolve()}getLastRemoteSnapshotVersion(e){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return d.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),d.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Be(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,d.resolve()}updateTargetData(e,t){return this.hr(t),d.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,d.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),d.waitFor(i).next((()=>s))}getTargetCount(e){return d.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return d.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),d.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),d.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),d.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return d.resolve(n)}containsKey(e,t){return d.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ft(0),this.ci=!1,this.ci=!0,this.li=new Na,this.referenceDelegate=e(this),this.hi=new Fa(this),this.indexManager=new Ta,this.remoteDocumentCache=(function(s){return new xa(s)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new ya(t),this.Ti=new ba(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Da,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new ka(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);const s=new La(this.ui.next());return this.referenceDelegate.Ii(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return d.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class La extends co{constructor(e){super(),this.currentSequenceNumber=e}}class Ln{constructor(e){this.persistence=e,this.Ai=new Fn,this.Ri=null}static Vi(e){return new Ln(e)}get mi(){if(this.Ri)return this.Ri;throw T(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),d.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),d.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),d.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.mi,(n=>{const s=y.fromPath(n);return this.fi(e,s).next((i=>{i||t.removeEntry(s,I.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return d.or([()=>d.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Nt{constructor(e,t){this.persistence=e,this.gi=new Ce((n=>fo(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Va(this,t)}static Vi(e,t){return new Nt(e,t)}Ii(){}di(e){return d.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return d.forEach(this.gi,((n,s)=>this.Sr(e,n,s).next((i=>i?d.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,t).next((a=>{a||(n++,i.removeEntry(o,I.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),d.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),d.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),d.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),d.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Tt(e.data.value)),t}Sr(e,t,n){return d.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return d.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=s}static Es(e,t){let n=V(),s=V();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Mn(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Li()?8:lo(Mi())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ps(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Ma;return this.ws(e,t,o).next((a=>{if(i.result=a,this.Rs)return this.Ss(e,t,o,a.size)}))})).next((()=>i.result))}Ss(e,t,n,s){return n.documentReadCount<this.Vs?(Ne()<=ae.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",ke(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),d.resolve()):(Ne()<=ae.DEBUG&&g("QueryEngine","Query:",ke(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.fs*s?(Ne()<=ae.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",ke(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ee(t))):d.resolve())}ps(e,t){if(vr(t))return d.resolve(null);let n=ee(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=hn(t,null,"F"),n=ee(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=V(...i);return this.gs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((u=>{const c=this.bs(t,a);return this.Ds(t,c,o,u.readTime)?this.ps(e,hn(t,null,"F")):this.vs(e,c,t,u)}))))})))))}ys(e,t,n,s){return vr(t)||s.isEqual(I.min())?d.resolve(null):this.gs.getDocuments(e,n).next((i=>{const o=this.bs(t,i);return this.Ds(t,o,n,s)?d.resolve(null):(Ne()<=ae.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ke(t)),this.vs(e,o,t,io(s,tt)).next((a=>a)))}))}bs(e,t){let n=new U(vs(e));return t.forEach(((s,i)=>{Bt(e,i)&&(n=n.add(i))})),n}Ds(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,n){return Ne()<=ae.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",ke(t)),this.gs.getDocumentsMatchingQuery(e,t,ge.min(),n)}vs(e,t,n,s){return this.gs.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="LocalStore",qa=3e8;class Ba{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new D(w),this.Ms=new Ce((i=>Sn(i)),Cn),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ca(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function za(r,e,t,n){return new Ba(r,e,t,n)}async function Qs(r,e){const t=A(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=V();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(n,u).next((c=>({Bs:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function $a(r,e){const t=A(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(a,u,c,l){const h=c.batch,f=h.keys();let _=d.resolve();return f.forEach((v=>{_=_.next((()=>l.getEntry(u,v))).next((R=>{const E=c.docVersions.get(v);S(E!==null,48541),R.version.compareTo(E)<0&&(h.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),l.addEntry(R)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(u,h)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let u=V();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function Ks(r){const e=A(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function ja(r,e){const t=A(r),n=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const a=[];e.targetChanges.forEach(((l,h)=>{const f=s.get(h);if(!f)return;a.push(t.hi.removeMatchingKeys(i,l.removedDocuments,h).next((()=>t.hi.addMatchingKeys(i,l.addedDocuments,h))));let _=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken($.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,n)),s=s.insert(h,_),(function(R,E,x){return R.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=qa?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(f,_,l)&&a.push(t.hi.updateTargetData(i,_))}));let u=he(),c=V();if(e.documentUpdates.forEach((l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))})),a.push(Ga(i,o,e.documentUpdates).next((l=>{u=l.Ls,c=l.ks}))),!n.isEqual(I.min())){const l=t.hi.getLastRemoteSnapshotVersion(i).next((h=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(l)}return d.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function Ga(r,e,t){let n=V(),s=V();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=he();return t.forEach(((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):g(Un,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)})),{Ls:o,ks:s}}))}function Qa(r,e){const t=A(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Rn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Ka(r,e){const t=A(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.hi.getTargetData(n,e).next((i=>i?(s=i,d.resolve(s)):t.hi.allocateTargetId(n).next((o=>(s=new de(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Fs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function gn(r,e,t){const n=A(r),s=n.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ge(o))throw o;g(Un,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(s.target)}function Fr(r,e,t){const n=A(r);let s=I.min(),i=V();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,c,l){const h=A(u),f=h.Ms.get(l);return f!==void 0?d.resolve(h.Fs.get(f)):h.hi.getTargetData(c,l)})(n,o,ee(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?s:I.min(),t?i:V()))).next((a=>(Wa(n,ko(e),a),{documents:a,qs:i})))))}function Wa(r,e,t){let n=r.xs.get(e)||I.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.xs.set(e,n)}class Lr{constructor(){this.activeTargetIds=Uo()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ha{constructor(){this.Fo=new Lr,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Lr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="ConnectivityMonitor";class Ur{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){g(Mr,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){g(Mr,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et=null;function pn(){return Et===null?Et=(function(){return 268435456+Math.round(2147483648*Math.random())})():Et++,"0x"+Et.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="RestConnection",Ja={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ya{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.Ko=this.databaseId.database===Vt?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,i){const o=pn(),a=this.Go(e,t.toUriEncodedString());g(nn,`Sending RPC '${e}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:c}=new URL(a),l=es(c);return this.jo(e,a,u,n,l).then((h=>(g(nn,`Received RPC '${e}' ${o}: `,h),h)),(h=>{throw _e(nn,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",n),h}))}Jo(e,t,n,s,i,o){return this.Wo(e,t,n,s,i)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$e})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const n=Ja[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j="WebChannelConnection";class eu extends Ya{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,s,i){const o=pn();return new Promise(((a,u)=>{const c=new ji;c.setWithCredentials(!0),c.listenOnce(Gi.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case en.NO_ERROR:const h=c.getResponseJson();g(j,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case en.TIMEOUT:g(j,`RPC '${e}' ${o} timed out`),u(new p(m.DEADLINE_EXCEEDED,"Request time out"));break;case en.HTTP_ERROR:const f=c.getStatus();if(g(j,`RPC '${e}' ${o} failed with status:`,f,"response text:",c.getResponseText()),f>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const v=_==null?void 0:_.error;if(v&&v.status&&v.message){const R=(function(x){const N=x.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(N)>=0?N:m.UNKNOWN})(v.status);u(new p(R,v.message))}else u(new p(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new p(m.UNAVAILABLE,"Connection failed."));break;default:T(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{g(j,`RPC '${e}' ${o} completed.`)}}));const l=JSON.stringify(s);g(j,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",l,n,15)}))}P_(e,t,n){const s=pn(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qi(),a=Ki(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const l=i.join("");g(j,`Creating RPC '${e}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);this.T_(h);let f=!1,_=!1;const v=new Za({Ho:E=>{_?g(j,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(f||(g(j,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),g(j,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},Yo:()=>h.close()}),R=(E,x,N)=>{E.listen(x,(K=>{try{N(K)}catch(oe){setTimeout((()=>{throw oe}),0)}}))};return R(h,_t.EventType.OPEN,(()=>{_||(g(j,`RPC '${e}' stream ${s} transport opened.`),v.s_())})),R(h,_t.EventType.CLOSE,(()=>{_||(_=!0,g(j,`RPC '${e}' stream ${s} transport closed`),v.__(),this.I_(h))})),R(h,_t.EventType.ERROR,(E=>{_||(_=!0,_e(j,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),v.__(new p(m.UNAVAILABLE,"The operation could not be completed")))})),R(h,_t.EventType.MESSAGE,(E=>{var x;if(!_){const N=E.data[0];S(!!N,16349);const K=N,oe=(K==null?void 0:K.error)||((x=K[0])===null||x===void 0?void 0:x.error);if(oe){g(j,`RPC '${e}' stream ${s} received error:`,oe);const ft=oe.status;let De=(function(Pi){const tr=O[Pi];if(tr!==void 0)return xs(tr)})(ft),mt=oe.message;De===void 0&&(De=m.INTERNAL,mt="Unknown error status: "+ft+" with message "+oe.message),_=!0,v.__(new p(De,mt)),h.close()}else g(j,`RPC '${e}' stream ${s} received:`,N),v.a_(N)}})),R(a,Wi.STAT_EVENT,(E=>{E.stat===rr.PROXY?g(j,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===rr.NOPROXY&&g(j,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{v.o_()}),0),v}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function rn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(r){return new sa(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-n);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="PersistentStream";class Hs{constructor(e,t,n,s,i,o,a,u){this.Fi=e,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ws(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(ce(t.toString()),ce("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===t&&this.W_(n,s)}),(n=>{e((()=>{const s=new p(m.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return g(qr,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(g(qr,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tu extends Hs{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=aa(this.serializer,e),n=(function(i){if(!("targetChange"in i))return I.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?te(o.readTime):I.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=_n(this.serializer),t.addTarget=(function(i,o){let a;const u=o.target;if(a=ln(u)?{documents:la(i,u)}:{query:ha(i,u).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ls(i,o.resumeToken);const c=dn(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=Dt(i,o.snapshotVersion.toTimestamp());const c=dn(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a})(this.serializer,e);const n=fa(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=_n(this.serializer),t.removeTarget=e,this.k_(t)}}class nu extends Hs{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return S(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,S(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){S(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=ca(e.writeResults,e.commitTime),n=te(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=_n(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ua(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{}class su extends ru{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,fn(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(m.UNKNOWN,i.toString())}))}Jo(e,t,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(e,fn(t,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new p(m.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class iu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ce(t),this._a=!1):g("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="RemoteStore";class ou{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{n.enqueueAndForget((async()=>{be(this)&&(g(Se,"Restarting streams for network reachability change."),await(async function(u){const c=A(u);c.Ia.add(4),await ht(c),c.Aa.set("Unknown"),c.Ia.delete(4),await Qt(c)})(this))}))})),this.Aa=new iu(n,s)}}async function Qt(r){if(be(r))for(const e of r.da)await e(!0)}async function ht(r){for(const e of r.da)await e(!1)}function Xs(r,e){const t=A(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),$n(t)?zn(t):Qe(t).x_()&&Bn(t,e))}function qn(r,e){const t=A(r),n=Qe(t);t.Ta.delete(e),n.x_()&&Js(t,e),t.Ta.size===0&&(n.x_()?n.B_():be(t)&&t.Aa.set("Unknown"))}function Bn(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(I.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qe(r).H_(e)}function Js(r,e){r.Ra.$e(e),Qe(r).Y_(e)}function zn(r){r.Ra=new ea({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Qe(r).start(),r.Aa.aa()}function $n(r){return be(r)&&!Qe(r).M_()&&r.Ta.size>0}function be(r){return A(r).Ia.size===0}function Ys(r){r.Ra=void 0}async function au(r){r.Aa.set("Online")}async function uu(r){r.Ta.forEach(((e,t)=>{Bn(r,e)}))}async function cu(r,e){Ys(r),$n(r)?(r.Aa.la(e),zn(r)):r.Aa.set("Unknown")}async function lu(r,e,t){if(r.Aa.set("Online"),e instanceof Fs&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(r,e)}catch(n){g(Se,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await kt(r,n)}else if(e instanceof vt?r.Ra.Ye(e):e instanceof Os?r.Ra.it(e):r.Ra.et(e),!t.isEqual(I.min()))try{const n=await Ks(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Ra.Pt(o);return a.targetChanges.forEach(((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.Ta.get(c);l&&i.Ta.set(c,l.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,c)=>{const l=i.Ta.get(u);if(!l)return;i.Ta.set(u,l.withResumeToken($.EMPTY_BYTE_STRING,l.snapshotVersion)),Js(i,u);const h=new de(l.target,u,c,l.sequenceNumber);Bn(i,h)})),i.remoteSyncer.applyRemoteEvent(a)})(r,t)}catch(n){g(Se,"Failed to raise snapshot:",n),await kt(r,n)}}async function kt(r,e,t){if(!Ge(e))throw e;r.Ia.add(1),await ht(r),r.Aa.set("Offline"),t||(t=()=>Ks(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{g(Se,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Qt(r)}))}function Zs(r,e){return e().catch((t=>kt(r,t,e)))}async function Kt(r){const e=A(r),t=Te(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Rn;for(;hu(e);)try{const s=await Qa(e.localStore,n);if(s===null){e.Pa.length===0&&t.B_();break}n=s.batchId,du(e,s)}catch(s){await kt(e,s)}ei(e)&&ti(e)}function hu(r){return be(r)&&r.Pa.length<10}function du(r,e){r.Pa.push(e);const t=Te(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function ei(r){return be(r)&&!Te(r).M_()&&r.Pa.length>0}function ti(r){Te(r).start()}async function fu(r){Te(r).na()}async function mu(r){const e=Te(r);for(const t of r.Pa)e.X_(t.mutations)}async function _u(r,e,t){const n=r.Pa.shift(),s=kn.from(n,e,t);await Zs(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Kt(r)}async function gu(r,e){e&&Te(r).Z_&&await(async function(n,s){if((function(o){return Yo(o)&&o!==m.ABORTED})(s.code)){const i=n.Pa.shift();Te(n).N_(),await Zs(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Kt(n)}})(r,e),ei(r)&&ti(r)}async function Br(r,e){const t=A(r);t.asyncQueue.verifyOperationInProgress(),g(Se,"RemoteStore received new credentials");const n=be(t);t.Ia.add(3),await ht(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Qt(t)}async function pu(r,e){const t=A(r);e?(t.Ia.delete(2),await Qt(t)):e||(t.Ia.add(2),await ht(t),t.Aa.set("Unknown"))}function Qe(r){return r.Va||(r.Va=(function(t,n,s){const i=A(t);return i.ia(),new tu(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:au.bind(null,r),e_:uu.bind(null,r),n_:cu.bind(null,r),J_:lu.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),$n(r)?zn(r):r.Aa.set("Unknown")):(await r.Va.stop(),Ys(r))}))),r.Va}function Te(r){return r.ma||(r.ma=(function(t,n,s){const i=A(t);return i.ia(),new nu(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:fu.bind(null,r),n_:gu.bind(null,r),ea:mu.bind(null,r),ta:_u.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Kt(r)):(await r.ma.stop(),r.Pa.length>0&&(g(Se,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new jn(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gn(r,e){if(ce("AsyncQueue",`${e}: ${r}`),Ge(r))return new p(m.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{static emptySet(e){return new Fe(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||y.comparator(t.key,n.key):(t,n)=>y.comparator(t.key,n.key),this.keyedMap=We(),this.sortedSet=new D(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Fe;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.fa=new D(y.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):T(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ze{constructor(e,t,n,s,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new ze(e,t,Fe.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Eu{constructor(){this.queries=$r(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const s=A(t),i=s.queries;s.queries=$r(),i.forEach(((o,a)=>{for(const u of a.wa)u.onError(n)}))})(this,new p(m.ABORTED,"Firestore shutting down"))}}function $r(){return new Ce((r=>As(r)),qt)}async function ni(r,e){const t=A(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(n=2):(i=new yu,n=e.ba()?0:1);try{switch(n){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Gn(o,`Initialization of query '${ke(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Qn(t)}async function ri(r,e){const t=A(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Tu(r,e){const t=A(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.wa)a.Ca(s)&&(n=!0);o.ya=s}}n&&Qn(t)}function Iu(r,e,t){const n=A(r),s=n.queries.get(e);if(s)for(const i of s.wa)i.onError(t);n.queries.delete(e)}function Qn(r){r.Da.forEach((e=>{e.next()}))}var yn,jr;(jr=yn||(yn={})).Fa="default",jr.Cache="cache";class si{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new ze(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ze.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==yn.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.key=e}}class oi{constructor(e){this.key=e}}class Au{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=V(),this.mutatedKeys=V(),this.Xa=vs(e),this.eu=new Fe(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new zr,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((l,h)=>{const f=s.get(l),_=Bt(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let E=!1;f&&_?f.data.isEqual(_.data)?v!==R&&(n.track({type:3,doc:_}),E=!0):this.iu(f,_)||(n.track({type:2,doc:_}),E=!0,(u&&this.Xa(_,u)>0||c&&this.Xa(_,c)<0)&&(a=!0)):!f&&_?(n.track({type:0,doc:_}),E=!0):f&&!_&&(n.track({type:1,doc:f}),E=!0,(u||c)&&(a=!0)),E&&(_?(o=o.add(_),i=R?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{eu:o,ru:n,Ds:a,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((l,h)=>(function(_,v){const R=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T(20277,{At:E})}};return R(_)-R(v)})(l.type,h.type)||this.Xa(l.doc,h.doc))),this.su(n),s=s!=null&&s;const a=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new ze(this.query,e.eu,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new zr,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=V(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new oi(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new ii(n))})),t}uu(e){this.Ha=e.qs,this.Za=V();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ze.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Kn="SyncEngine";class vu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class wu{constructor(e){this.key=e,this.lu=!1}}class Ru{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Ce((a=>As(a)),qt),this.Tu=new Map,this.Iu=new Set,this.du=new D(y.comparator),this.Eu=new Map,this.Au=new Fn,this.Ru={},this.Vu=new Map,this.mu=Be.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Vu(r,e,t=!0){const n=di(r);let s;const i=n.Pu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await ai(n,e,t,!0),s}async function Pu(r,e){const t=di(r);await ai(t,e,!0,!1)}async function ai(r,e,t,n){const s=await Ka(r.localStore,ee(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await Su(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Xs(r.remoteStore,s),a}async function Su(r,e,t,n,s){r.gu=(h,f,_)=>(async function(R,E,x,N){let K=E.view.nu(x);K.Ds&&(K=await Fr(R.localStore,E.query,!1).then((({documents:mt})=>E.view.nu(mt,K))));const oe=N&&N.targetChanges.get(E.targetId),ft=N&&N.targetMismatches.get(E.targetId)!=null,De=E.view.applyChanges(K,R.isPrimaryClient,oe,ft);return Qr(R,E.targetId,De._u),De.snapshot})(r,h,f,_);const i=await Fr(r.localStore,e,!0),o=new Au(e,i.qs),a=o.nu(i.documents),u=lt.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(a,r.isPrimaryClient,u);Qr(r,t,c._u);const l=new vu(e,t,o);return r.Pu.set(e,l),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),c.snapshot}async function Cu(r,e,t){const n=A(r),s=n.Pu.get(e),i=n.Tu.get(s.targetId);if(i.length>1)return n.Tu.set(s.targetId,i.filter((o=>!qt(o,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gn(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&qn(n.remoteStore,s.targetId),En(n,s.targetId)})).catch(je)):(En(n,s.targetId),await gn(n.localStore,s.targetId,!0))}async function bu(r,e){const t=A(r),n=t.Pu.get(e),s=t.Tu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),qn(t.remoteStore,n.targetId))}async function Du(r,e,t){const n=Mu(r);try{const s=await(function(o,a){const u=A(o),c=b.now(),l=a.reduce(((_,v)=>_.add(v.key)),V());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let v=he(),R=V();return u.Os.getEntries(_,l).next((E=>{v=E,v.forEach(((x,N)=>{N.isValidDocument()||(R=R.add(x))}))})).next((()=>u.localDocuments.getOverlayedDocuments(_,v))).next((E=>{h=E;const x=[];for(const N of a){const K=Ko(N,h.get(N.key).overlayedDocument);K!=null&&x.push(new ve(N.key,K,_s(K.value.mapValue),Y.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,x,a)})).next((E=>{f=E;const x=E.applyToLocalDocumentSet(h,R);return u.documentOverlayCache.saveOverlays(_,E.batchId,x)}))})).then((()=>({batchId:f.batchId,changes:Rs(h)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new D(w)),c=c.insert(a,u),o.Ru[o.currentUser.toKey()]=c})(n,s.batchId,t),await dt(n,s.changes),await Kt(n.remoteStore)}catch(s){const i=Gn(s,"Failed to persist write");t.reject(i)}}async function ui(r,e){const t=A(r);try{const n=await ja(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Eu.get(i);o&&(S(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?S(o.lu,14607):s.removedDocuments.size>0&&(S(o.lu,42227),o.lu=!1))})),await dt(t,n,e)}catch(n){await je(n)}}function Gr(r,e,t){const n=A(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Pu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach(((l,h)=>{for(const f of h.wa)f.va(a)&&(c=!0)})),c&&Qn(u)})(n.eventManager,e),s.length&&n.hu.J_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Nu(r,e,t){const n=A(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Eu.get(e),i=s&&s.key;if(i){let o=new D(y.comparator);o=o.insert(i,Q.newNoDocument(i,I.min()));const a=V().add(i),u=new jt(I.min(),new Map,new D(w),o,a);await ui(n,u),n.du=n.du.remove(i),n.Eu.delete(e),Wn(n)}else await gn(n.localStore,e,!1).then((()=>En(n,e,t))).catch(je)}async function ku(r,e){const t=A(r),n=e.batch.batchId;try{const s=await $a(t.localStore,e);li(t,n,null),ci(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await dt(t,s)}catch(s){await je(s)}}async function xu(r,e,t){const n=A(r);try{const s=await(function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next((h=>(S(h!==null,37113),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h)))).next((()=>u.mutationQueue.performConsistencyCheck(c))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l))).next((()=>u.localDocuments.getDocuments(c,l)))}))})(n.localStore,e);li(n,e,t),ci(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await dt(n,s)}catch(s){await je(s)}}function ci(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function li(r,e,t){const n=A(r);let s=n.Ru[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ru[n.currentUser.toKey()]=s}}function En(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||hi(r,n)}))}function hi(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(qn(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Wn(r))}function Qr(r,e,t){for(const n of t)n instanceof ii?(r.Au.addReference(n.key,e),Ou(r,n)):n instanceof oi?(g(Kn,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||hi(r,n.key)):T(19791,{yu:n})}function Ou(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(g(Kn,"New document in limbo: "+t),r.Iu.add(n),Wn(r))}function Wn(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new y(C.fromString(e)),n=r.mu.next();r.Eu.set(n,new wu(t)),r.du=r.du.insert(t,n),Xs(r.remoteStore,new de(ee(bn(t.path)),n,"TargetPurposeLimboResolution",Ft.ue))}}async function dt(r,e,t){const n=A(r),s=[],i=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach(((a,u)=>{o.push(n.gu(u,e,t).then((c=>{var l;if((c||t)&&n.isPrimaryClient){const h=c?!c.fromCache:(l=t==null?void 0:t.targetChanges.get(u.targetId))===null||l===void 0?void 0:l.current;n.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=Mn.Es(u.targetId,c);i.push(h)}})))})),await Promise.all(o),n.hu.J_(s),await(async function(u,c){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>d.forEach(c,(f=>d.forEach(f.Is,(_=>l.persistence.referenceDelegate.addReference(h,f.targetId,_))).next((()=>d.forEach(f.ds,(_=>l.persistence.referenceDelegate.removeReference(h,f.targetId,_)))))))))}catch(h){if(!Ge(h))throw h;g(Un,"Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const _=l.Fs.get(f),v=_.snapshotVersion,R=_.withLastLimboFreeSnapshotVersion(v);l.Fs=l.Fs.insert(f,R)}}})(n.localStore,i))}async function Fu(r,e){const t=A(r);if(!t.currentUser.isEqual(e)){g(Kn,"User change. New user:",e.toKey());const n=await Qs(t.localStore,e);t.currentUser=e,(function(i,o){i.Vu.forEach((a=>{a.forEach((u=>{u.reject(new p(m.CANCELLED,o))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await dt(t,n.Bs)}}function Lu(r,e){const t=A(r),n=t.Eu.get(e);if(n&&n.lu)return V().add(n.key);{let s=V();const i=t.Tu.get(e);if(!i)return s;for(const o of i){const a=t.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}function di(r){const e=A(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=ui.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nu.bind(null,e),e.hu.J_=Tu.bind(null,e.eventManager),e.hu.pu=Iu.bind(null,e.eventManager),e}function Mu(r){const e=A(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ku.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xu.bind(null,e),e}class xt{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gt(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return za(this.persistence,new Ua,e.initialUser,this.serializer)}Du(e){return new Gs(Ln.Vi,this.serializer)}bu(e){return new Ha}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xt.provider={build:()=>new xt};class Uu extends xt{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){S(this.persistence.referenceDelegate instanceof Nt,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new wa(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?W.withCacheSize(this.cacheSizeBytes):W.DEFAULT;return new Gs((n=>Nt.Vi(n,t)),this.serializer)}}class Tn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Gr(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fu.bind(null,this.syncEngine),await pu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Eu})()}createDatastore(e){const t=Gt(e.databaseInfo.databaseId),n=(function(i){return new eu(i)})(e.databaseInfo);return(function(i,o,a,u){return new su(i,o,a,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,a){return new ou(n,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gr(this.syncEngine,t,0)),(function(){return Ur.C()?new Ur:new Xa})())}createSyncEngine(e,t){return(function(s,i,o,a,u,c,l){const h=new Ru(s,i,o,a,u,c);return l&&(h.fu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=A(s);g(Se,"RemoteStore shutting down."),i.Ia.add(5),await ht(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Tn.provider={build:()=>new Tn};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ce("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="FirestoreClient";class qu{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=G.UNAUTHENTICATED,this.clientId=vn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{g(Ie,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(g(Ie,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Gn(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function sn(r,e){r.asyncQueue.verifyOperationInProgress(),g(Ie,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Qs(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>{_e("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{g("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{_e("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),r._offlineComponents=e}async function Kr(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Bu(r);g(Ie,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Br(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Br(e.remoteStore,s))),r._onlineComponents=e}async function Bu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){g(Ie,"Using user provided OfflineComponentProvider");try{await sn(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===m.FAILED_PRECONDITION||s.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;_e("Error using user provided cache. Falling back to memory cache: "+t),await sn(r,new xt)}}else g(Ie,"Using default OfflineComponentProvider"),await sn(r,new Uu(void 0));return r._offlineComponents}async function mi(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(g(Ie,"Using user provided OnlineComponentProvider"),await Kr(r,r._uninitializedComponentsProvider._online)):(g(Ie,"Using default OnlineComponentProvider"),await Kr(r,new Tn))),r._onlineComponents}function zu(r){return mi(r).then((e=>e.syncEngine))}async function _i(r){const e=await mi(r),t=e.eventManager;return t.onListen=Vu.bind(null,e.syncEngine),t.onUnlisten=Cu.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pu.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bu.bind(null,e.syncEngine),t}function $u(r,e,t={}){const n=new ue;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new fi({next:f=>{l.Ou(),o.enqueueAndForget((()=>ri(i,h)));const _=f.docs.has(a);!_&&f.fromCache?c.reject(new p(m.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&f.fromCache&&u&&u.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new si(bn(a.path),l,{includeMetadataChanges:!0,ka:!0});return ni(i,h)})(await _i(r),r.asyncQueue,e,t,n))),n.promise}function ju(r,e,t={}){const n=new ue;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new fi({next:f=>{l.Ou(),o.enqueueAndForget((()=>ri(i,h))),f.fromCache&&u.source==="server"?c.reject(new p(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new si(a,l,{includeMetadataChanges:!0,ka:!0});return ni(i,h)})(await _i(r),r.asyncQueue,e,t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="firestore.googleapis.com",Hr=!0;class Xr{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new p(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pi,this.ssl=Hr}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Hr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=js;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Aa)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}so("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gi((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wt{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new p(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Hi;switch(n.type){case"firstParty":return new Zi(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new p(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Wr.get(t);n&&(g("ComponentProvider","Removing Datastore"),Wr.delete(t),n.terminate())})(this),Promise.resolve()}}function Gu(r,e,t,n={}){var s;r=le(r,Wt);const i=es(e),o=r._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Di(`https://${u}`),Ni("Firestore",!0)),o.host!==pi&&o.host!==u&&_e("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:n});if(!ki(c,a)&&(r._setSettings(c),n.mockUserToken)){let l,h;if(typeof n.mockUserToken=="string")l=n.mockUserToken,h=G.MOCK_USER;else{l=xi(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new p(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new G(f)}r._authCredentials=new Xi(new ns(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ht(this.firestore,e,this._query)}}class M{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new M(this.firestore,e,this._key)}toJSON(){return{type:M._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ut(t,M._jsonSchema))return new M(e,n||null,new y(C.fromString(t.referencePath)))}}M._jsonSchemaVersion="firestore/documentReference/1.0",M._jsonSchema={type:F("string",M._jsonSchemaVersion),referencePath:F("string")};class fe extends Ht{constructor(e,t,n){super(e,t,bn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new M(this.firestore,null,new y(e))}withConverter(e){return new fe(this.firestore,e,this._path)}}function lc(r,e,...t){if(r=me(r),ss("collection","path",e),r instanceof Wt){const n=C.fromString(e,...t);return lr(n),new fe(r,null,n)}{if(!(r instanceof M||r instanceof fe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(C.fromString(e,...t));return lr(n),new fe(r.firestore,null,n)}}function Qu(r,e,...t){if(r=me(r),arguments.length===1&&(e=vn.newId()),ss("doc","path",e),r instanceof Wt){const n=C.fromString(e,...t);return cr(n),new M(r,null,new y(n))}{if(!(r instanceof M||r instanceof fe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(C.fromString(e,...t));return cr(n),new M(r.firestore,r instanceof fe?r.converter:null,new y(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="AsyncQueue";class Yr{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ws(this,"async_queue_retry"),this.oc=()=>{const n=rn();n&&g(Jr,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=rn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=rn();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ue;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ge(e))throw e;g(Jr,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,ce("INTERNAL UNHANDLED ERROR: ",Zr(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=jn.createAndSchedule(this,e,t,n,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&T(47125,{hc:Zr(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Zr(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Ke extends Wt{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Yr,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yr(e),this._firestoreClient=void 0,await e}}}function hc(r,e){const t=typeof r=="object"?r:Si(),n=typeof r=="string"?r:Vt,s=Ci(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=bi("firestore");i&&Gu(s,...i)}return s}function Hn(r){if(r._terminated)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ku(r),r._firestoreClient}function Ku(r){var e,t,n;const s=r._freezeSettings(),i=(function(a,u,c,l){return new go(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,gi(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new qu(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this._byteString=e}static fromBase64String(e){try{return new J($.fromBase64String(e))}catch(t){throw new p(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new J($.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:J._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ut(e,J._jsonSchema))return J.fromBase64String(e.bytes)}}J._jsonSchemaVersion="firestore/bytes/1.0",J._jsonSchema={type:F("string",J._jsonSchemaVersion),bytes:F("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return w(this._lat,e._lat)||w(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ne._jsonSchemaVersion}}static fromJSON(e){if(ut(e,ne._jsonSchema))return new ne(e.latitude,e.longitude)}}ne._jsonSchemaVersion="firestore/geoPoint/1.0",ne._jsonSchema={type:F("string",ne._jsonSchemaVersion),latitude:F("number"),longitude:F("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:re._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ut(e,re._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new re(e.vectorValues);throw new p(m.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}re._jsonSchemaVersion="firestore/vectorValue/1.0",re._jsonSchema={type:F("string",re._jsonSchemaVersion),vectorValues:F("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=/^__.*__$/;class Hu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ve(e,this.data,this.fieldMask,t,this.fieldTransforms):new ct(e,this.data,t,this.fieldTransforms)}}class yi{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ve(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ei(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T(40011,{Ec:r})}}class Xn{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Xn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:n,mc:!1});return s.fc(e),s}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:n,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ot(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ei(this.Ec)&&Wu.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Xu{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Gt(e)}Dc(e,t,n,s=!1){return new Xn({Ec:e,methodName:t,bc:n,path:z.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ti(r){const e=r._freezeSettings(),t=Gt(r._databaseId);return new Xu(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ju(r,e,t,n,s,i={}){const o=r.Dc(i.merge||i.mergeFields?2:0,e,t,s);Yn("Data must be an object, but it was:",o,n);const a=Ii(n,o);let u,c;if(i.merge)u=new X(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=In(e,h,t);if(!o.contains(f))throw new p(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);vi(l,f)||l.push(f)}u=new X(l),c=o.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=o.fieldTransforms;return new Hu(new H(a),u,c)}class Yt extends Jt{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yt}}class Jn extends Jt{_toFieldTransform(e){return new $o(e.path,new it)}isEqual(e){return e instanceof Jn}}function Yu(r,e,t,n){const s=r.Dc(1,e,t);Yn("Data must be an object, but it was:",s,n);const i=[],o=H.empty();Ae(n,((u,c)=>{const l=Zn(e,u,t);c=me(c);const h=s.gc(l);if(c instanceof Yt)i.push(l);else{const f=Zt(c,h);f!=null&&(i.push(l),o.set(l,f))}}));const a=new X(i);return new yi(o,a,s.fieldTransforms)}function Zu(r,e,t,n,s,i){const o=r.Dc(1,e,t),a=[In(e,n,t)],u=[s];if(i.length%2!=0)throw new p(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(In(e,i[f])),u.push(i[f+1]);const c=[],l=H.empty();for(let f=a.length-1;f>=0;--f)if(!vi(c,a[f])){const _=a[f];let v=u[f];v=me(v);const R=o.gc(_);if(v instanceof Yt)c.push(_);else{const E=Zt(v,R);E!=null&&(c.push(_),l.set(_,E))}}const h=new X(c);return new yi(l,h,o.fieldTransforms)}function Zt(r,e){if(Ai(r=me(r)))return Yn("Unsupported field value:",e,r),Ii(r,e);if(r instanceof Jt)return(function(n,s){if(!Ei(s.Ec))throw s.wc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const a of n){let u=Zt(a,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return qo(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=b.fromDate(n);return{timestampValue:Dt(s.serializer,i)}}if(n instanceof b){const i=new b(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Dt(s.serializer,i)}}if(n instanceof ne)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof J)return{bytesValue:Ls(s.serializer,n._byteString)};if(n instanceof M){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:On(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof re)return(function(o,a){return{mapValue:{fields:{[fs]:{stringValue:ms},[Pt]:{arrayValue:{values:o.toArray().map((c=>{if(typeof c!="number")throw a.wc("VectorValues must only contain numeric values.");return Dn(a.serializer,c)}))}}}}}})(n,s);throw s.wc(`Unsupported field value: ${wn(n)}`)})(r,e)}function Ii(r,e){const t={};return as(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ae(r,((n,s)=>{const i=Zt(s,e.Vc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Ai(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof b||r instanceof ne||r instanceof J||r instanceof M||r instanceof Jt||r instanceof re)}function Yn(r,e,t){if(!Ai(t)||!is(t)){const n=wn(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function In(r,e,t){if((e=me(e))instanceof Xt)return e._internalPath;if(typeof e=="string")return Zn(r,e);throw Ot("Field path arguments must be of type string or ",r,!1,void 0,t)}const ec=new RegExp("[~\\*/\\[\\]]");function Zn(r,e,t){if(e.search(ec)>=0)throw Ot(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Xt(...e.split("."))._internalPath}catch{throw Ot(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ot(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new p(m.INVALID_ARGUMENT,a+r+u)}function vi(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new M(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ri("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tc extends wi{data(){return super.data()}}function Ri(r,e){return typeof e=="string"?Zn(r,e):e instanceof Xt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new p(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rc{convertValue(e,t="none"){switch(Ee(e)){case 0:return null;case 1:return e.booleanValue;case 2:return k(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ye(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw T(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ae(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[Pt].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((o=>k(o.doubleValue)));return new re(i)}convertGeoPoint(e){return new ne(k(e.latitude),k(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Mt(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(nt(e));default:return null}}convertTimestamp(e){const t=pe(e);return new b(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=C.fromString(e);S($s(n),9688,{name:e});const s=new rt(n.get(1),n.get(3)),i=new y(n.popFirst(5));return s.isEqual(t)||ce(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class Xe{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ve extends wi{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ri("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new p(m.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ve._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ve._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ve._jsonSchema={type:F("string",Ve._jsonSchemaVersion),bundleSource:F("string","DocumentSnapshot"),bundleName:F("string"),bundle:F("string")};class wt extends Ve{data(e={}){return super.data(e)}}class Le{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Xe(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new wt(this._firestore,this._userDataWriter,n.key,n,new Xe(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const u=new wt(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xe(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const u=new wt(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xe(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:ic(a.type),doc:u,oldIndex:c,newIndex:l}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new p(m.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Le._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vn.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ic(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(r){r=le(r,M);const e=le(r.firestore,Ke);return $u(Hn(e),r._key).then((t=>oc(e,r,t)))}Le._jsonSchemaVersion="firestore/querySnapshot/1.0",Le._jsonSchema={type:F("string",Le._jsonSchemaVersion),bundleSource:F("string","QuerySnapshot"),bundleName:F("string"),bundle:F("string")};class Vi extends rc{constructor(e){super(),this.firestore=e}convertBytes(e){return new J(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new M(this.firestore,null,t)}}function fc(r){r=le(r,Ht);const e=le(r.firestore,Ke),t=Hn(e),n=new Vi(e);return nc(r._query),ju(t,r._query).then((s=>new Le(e,n,r,s)))}function mc(r,e,t,...n){r=le(r,M);const s=le(r.firestore,Ke),i=Ti(s);let o;return o=typeof(e=me(e))=="string"||e instanceof Xt?Zu(i,"updateDoc",r._key,e,t,n):Yu(i,"updateDoc",r._key,e),er(s,[o.toMutation(r._key,Y.exists(!0))])}function _c(r){return er(le(r.firestore,Ke),[new Nn(r._key,Y.none())])}function gc(r,e){const t=le(r.firestore,Ke),n=Qu(r),s=sc(r.converter,e);return er(t,[Ju(Ti(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Y.exists(!1))]).then((()=>n))}function er(r,e){return(function(n,s){const i=new ue;return n.asyncQueue.enqueueAndForget((async()=>Du(await zu(n),s,i))),i.promise})(Hn(r),e)}function oc(r,e,t){const n=t.docs.get(e._key),s=new Vi(r);return new Ve(r,s,e._key,n,new Xe(t.hasPendingWrites,t.fromCache),e.converter)}function pc(){return new Jn("serverTimestamp")}(function(e,t=!0){(function(s){$e=s})(qi),Bi(new zi("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new Ke(new Ji(n.getProvider("auth-internal")),new eo(o,n.getProvider("app-check-internal")),(function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new p(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rt(c.options.projectId,l)})(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),nr(sr,ir,e),nr(sr,ir,"esm2017")})();export{hc as a,Qu as b,gc as c,_c as d,dc as e,lc as f,fc as g,pc as s,mc as u};
