const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DpjChaYO.js","./oVdGDvos.js","./Alert.nSy8dVLQ.css","./B1YV8vfa.js","./Counter.DzzD2H2q.css","./VuzQEWu9.js","./D6OGsdO_.js"])))=>i.map(i=>d[i]);
import{a as J,K as ln,I as Mn,L as rn,M as L,r as En,D as Un,N as an,O as K,P as $,Q as Bn,R as In,_ as V,s as jn,S as un,U as $n,k as sn,V as N,n as Nn,W as zn,X as Hn,x as Fn,Y as Vn,Z as qn,g as Wn}from"./oVdGDvos.js";import{t as Kn,u as Xn}from"./D6OGsdO_.js";const Yn=/\d/,Qn=["-","_","/","."];function Zn(n=""){if(!Yn.test(n))return n!==n.toLowerCase()}function cn(n,l){const e=Qn,t=[];if(!n||typeof n!="string")return t;let o="",r,u;for(const s of n){const d=e.includes(s);if(d===!0){t.push(o),o="",r=void 0;continue}const p=Zn(s);if(u===!1){if(r===!1&&p===!0){t.push(o),o=s,r=p;continue}if(r===!0&&p===!1&&o.length>1){const f=o.at(-1);t.push(o.slice(0,Math.max(0,o.length-1))),o=f+s,r=p;continue}}o+=s,r=p,u=d}return t.push(o),t}function Gn(n){return n?n[0].toUpperCase()+n.slice(1):""}function M(n,l){return n?(Array.isArray(n)?n:cn(n)).map(e=>Gn(e)).join(""):""}function pn(n,l){return n?(Array.isArray(n)?n:cn(n)).map(e=>e.toLowerCase()).join("-"):""}const I=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class j{constructor(l,e,t){this.property=l,this.normal=e,t&&(this.space=t)}}j.prototype.property={};j.prototype.normal={};j.prototype.space=null;function dn(n,l){const e={},t={};let o=-1;for(;++o<n.length;)Object.assign(e,n[o].property),Object.assign(t,n[o].normal);return new j(e,t,l)}function X(n){return n.toLowerCase()}class k{constructor(l,e){this.property=l,this.attribute=e}}k.prototype.space=null;k.prototype.boolean=!1;k.prototype.booleanish=!1;k.prototype.overloadedBoolean=!1;k.prototype.number=!1;k.prototype.commaSeparated=!1;k.prototype.spaceSeparated=!1;k.prototype.commaOrSpaceSeparated=!1;k.prototype.mustUseProperty=!1;k.prototype.defined=!1;let Jn=0;const i=R(),y=R(),fn=R(),a=R(),h=R(),E=R(),S=R();function R(){return 2**++Jn}const Y=Object.freeze(Object.defineProperty({__proto__:null,boolean:i,booleanish:y,commaOrSpaceSeparated:S,commaSeparated:E,number:a,overloadedBoolean:fn,spaceSeparated:h},Symbol.toStringTag,{value:"Module"})),W=Object.keys(Y);class nn extends k{constructor(l,e,t,o){let r=-1;if(super(l,e),tn(this,"space",o),typeof t=="number")for(;++r<W.length;){const u=W[r];tn(this,W[r],(t&Y[u])===Y[u])}}}nn.prototype.defined=!0;function tn(n,l,e){e&&(n[l]=e)}const ne={}.hasOwnProperty;function U(n){const l={},e={};let t;for(t in n.properties)if(ne.call(n.properties,t)){const o=n.properties[t],r=new nn(t,n.transform(n.attributes||{},t),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(r.mustUseProperty=!0),l[t]=r,e[X(t)]=t,e[X(r.attribute)]=t}return new j(l,e,n.space)}const gn=U({space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),hn=U({space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function mn(n,l){return l in n?n[l]:l}function yn(n,l){return mn(n,l.toLowerCase())}const vn=U({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:yn,properties:{xmlns:null,xmlnsXLink:null}}),bn=U({transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:h,ariaCurrent:null,ariaDescribedBy:h,ariaDetails:null,ariaDisabled:y,ariaDropEffect:h,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:h,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h,ariaLevel:a,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:h,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:h,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:y,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}}),ee=U({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:yn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:E,acceptCharset:h,accessKey:h,action:null,allow:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:h,autoFocus:i,autoPlay:i,blocking:h,capture:null,charSet:null,checked:i,cite:null,className:h,cols:a,colSpan:null,content:null,contentEditable:y,controls:i,controlsList:h,coords:a|E,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:fn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:h,height:a,hidden:i,high:a,href:null,hrefLang:null,htmlFor:h,httpEquiv:h,id:null,imageSizes:null,imageSrcSet:null,inert:i,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:h,itemRef:h,itemScope:i,itemType:h,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:i,low:a,manifest:null,max:null,maxLength:a,media:null,method:null,min:null,minLength:a,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i,optimum:a,pattern:null,ping:h,placeholder:null,playsInline:i,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:h,required:i,reversed:i,rows:a,rowSpan:a,sandbox:h,scope:null,scoped:i,seamless:i,selected:i,shadowRootClonable:i,shadowRootDelegatesFocus:i,shadowRootMode:null,shape:null,size:a,sizes:null,slot:null,span:a,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:a,step:null,style:null,tabIndex:a,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:y,width:a,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:h,axis:null,background:null,bgColor:null,border:a,borderColor:null,bottomMargin:a,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:a,leftMargin:a,link:null,longDesc:null,lowSrc:null,marginHeight:a,marginWidth:a,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:a,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:a,valueType:null,version:null,vAlign:null,vLink:null,vSpace:a,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i,disableRemotePlayback:i,prefix:null,property:null,results:a,security:null,unselectable:null}}),le=U({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:mn,properties:{about:S,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:h,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:i,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:E,g2:E,glyphName:E,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:S,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:S,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:S,rev:S,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:S,requiredFeatures:S,requiredFonts:S,requiredFormats:S,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:S,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:S,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:S,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),te=/^data[-\w.:]+$/i,on=/-[a-z]/g,oe=/[A-Z]/g;function re(n,l){const e=X(l);let t=l,o=k;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&te.test(l)){if(l.charAt(4)==="-"){const r=l.slice(5).replace(on,ue);t="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=l.slice(4);if(!on.test(r)){let u=r.replace(oe,ae);u.charAt(0)!=="-"&&(u="-"+u),l="data"+u}}o=nn}return new o(t,l)}function ae(n){return"-"+n.toLowerCase()}function ue(n){return n.charAt(1).toUpperCase()}const ie=dn([hn,gn,vn,bn,ee],"html");dn([hn,gn,vn,bn,le],"svg");const se=["p","h1","h2","h3","h4","h5","h6","li"];function z(n,l){return n.type===l||typeof n.type=="object"&&n.type.tag===l||n.tag===l}function en(n){return z(n,"text")||z(n,Symbol.for("v-txt"))}function Cn(n){var l;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((l=n.children)==null?void 0:l.default)=="function"?n.children.default():[]}function Q(n){if(!n)return"";if(Array.isArray(n))return n.map(Q).join("");if(en(n))return n.value||n.children||"";const l=Cn(n);return Array.isArray(l)?l.map(Q).filter(Boolean).join(""):""}function Sn(n,l=[]){if(Array.isArray(n))return n.flatMap(t=>Sn(t,l));let e=n;return l.some(t=>t==="*"||z(n,t))&&(e=Cn(n)||n,!Array.isArray(e)&&se.some(t=>z(n,t))&&(e=[e])),e}function kn(n,l=[]){return n=Array.isArray(n)?n:[n],l.length?n.flatMap(e=>kn(Sn(e,[l[0]]),l.slice(1))).filter(e=>!(en(e)&&Q(e).trim()==="")):n}function wn(n,l=[]){return typeof l=="string"&&(l=l.split(/[,\s]/).map(e=>e.trim()).filter(Boolean)),l.length?kn(n,l).reduce((e,t)=>(en(t)?typeof e[e.length-1]=="string"?e[e.length-1]+=t.children:e.push(t.children):e.push(t),e),[]):n}function ce(n,l){return l.reduce((e,t)=>{const o=pe(n,t);return o!==void 0&&(e[t]=o),e},{})}function pe(n,l){return l.split(".").reduce((e,t)=>e&&e[t],n)}const Z="default",Pn=/^@|^v-on:/,xn=/^:|^v-bind:/,de=/^v-model/,fe=["select","textarea","input"],ge=["math","svg"],he=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),me=J({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var d,p,f,g,b,O,x,C;const l=(f=(p=(d=Mn())==null?void 0:d.appContext)==null?void 0:p.app)==null?void 0:f.$nuxt,e=(l==null?void 0:l.$route)||(l==null?void 0:l._route),{mdc:t}=((g=l==null?void 0:l.$config)==null?void 0:g.public)||{},o={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?he:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...rn(((C=(x=n.data)==null?void 0:x.mdc)==null?void 0:C.components)||{}),...n.components},r=L(()=>{var _;const w=(((_=n.body)==null?void 0:_.children)||[]).map(T=>T.tag||T.type).filter(T=>!I.includes(T));return Array.from(new Set(w)).sort().join(".")}),u=En({...n.data});Un(()=>n.data,w=>{Object.assign(u,w)}),await Te(n.body,{tags:o});function s(w,_){const T=w.split(".").length-1;return w.split(".").reduce((D,c,m)=>m==T&&D?(D[c]=_,D[c]):typeof D=="object"?D[c]:void 0,u)}return{tags:o,contentKey:r,route:e,runtimeData:u,updateRuntimeData:s}},render(n){var O,x;const{tags:l,tag:e,body:t,data:o,contentKey:r,route:u,unwrap:s,runtimeData:d,updateRuntimeData:p}=n;if(!t)return null;const f={...o,tags:l,$route:u,runtimeData:d,updateRuntimeData:p},g=e!==!1?G(e||((O=f.component)==null?void 0:O.name)||f.component||"div"):void 0;return g?ln(g,{...(x=f.component)==null?void 0:x.props,class:n.class,...this.$attrs,key:r},{default:b}):b==null?void 0:b();function b(){const C=On(t,ln,{documentMeta:f,parentScope:f,resolveComponent:G});return C!=null&&C.default?s?wn(C.default(),typeof s=="string"?s.split(" "):["*"]):C.default():null}}});function ye(n,l,e){const{documentMeta:t,parentScope:o,resolveComponent:r}=e;if(n.type==="text")return l($,n.value);if(n.type==="comment")return l(Bn,null,n.value);const u=n.tag,s=Dn(n,t.tags);if(n.tag==="binding")return ve(n,l,t,o);const d=Tn(s)?g=>g:r,p=d(s);typeof p=="object"&&(p.tag=u);const f=be(n,t);return l(p,f,On(n,l,{documentMeta:t,parentScope:{...o,...f},resolveComponent:d}))}function On(n,l,e){const{documentMeta:t,parentScope:o,resolveComponent:r}=e,s=(n.children||[]).reduce((p,f)=>{if(!xe(f))return p[Z].children.push(f),p;const g=Pe(f);return p[g]=p[g]||{props:{},children:[]},f.type==="element"&&(p[g].props=f.props,p[g].children.push(...f.children||[])),p},{[Z]:{props:{},children:[]}});return Object.entries(s).reduce((p,[f,{props:g,children:b}])=>(b.length&&(p[f]=(O={})=>{const x=ce(O,Object.keys(g||{}));let C=b.map(w=>ye(w,l,{documentMeta:t,parentScope:{...o,...x},resolveComponent:r}));return g!=null&&g.unwrap&&(C=wn(C,g.unwrap)),Oe(C)}),p),{})}function ve(n,l,e,t={}){var p,f;const o={...e.runtimeData,...t,$document:e,$doc:e},r=/\.|\[(\d+)\]/,s=((p=n.props)==null?void 0:p.value.trim().split(r).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},o),d=(f=n.props)==null?void 0:f.defaultValue;return l($,s??d??"")}function be(n,l){const{tag:e="",props:t={}}=n;return Object.keys(t).reduce(function(o,r){if(r==="__ignoreMap")return o;const u=t[r];if(de.test(r))return Ce(r,u,o,l,{native:fe.includes(e)});if(r==="v-bind")return Se(r,u,o,l);if(Pn.test(r))return ke(r,u,o,l);if(xn.test(r))return we(r,u,o,l);const{attribute:s}=re(ie,r);return Array.isArray(u)&&u.every(d=>typeof d=="string")?(o[s]=u.join(" "),o):(o[s]=u,o)},{})}function Ce(n,l,e,t,{native:o}){var d;const r=((d=n.match(/^v-model:([^=]+)/))==null?void 0:d[1])||"modelValue",u=o?"value":r,s=o?"onInput":`onUpdate:${r}`;return e[u]=q(l,t.runtimeData),e[s]=p=>{var f;t.updateRuntimeData(l,o?(f=p.target)==null?void 0:f.value:p)},e}function Se(n,l,e,t){const o=q(l,t);return e=Object.assign(e,o),e}function ke(n,l,e,t){return n=n.replace(Pn,""),e.on=e.on||{},e.on[n]=()=>q(l,t),e}function we(n,l,e,t){return n=n.replace(xn,""),e[n]=q(l,t),e}const G=n=>{if(typeof n=="string"){if(I.includes(n))return n;const l=an(M(n),!1);return!n||(l==null?void 0:l.name)==="AsyncComponentWrapper"||typeof l=="string"?l:"setup"in l?K(()=>new Promise(e=>e(l))):l}return n};function q(n,l){const e=n.split(".").reduce((t,o)=>typeof t=="object"?t[o]:void 0,l);return typeof e>"u"?In(n):e}function Pe(n){let l="";for(const e of Object.keys(n.props||{}))if(!(!e.startsWith("#")&&!e.startsWith("v-slot:"))){l=e.split(/[:#]/,2)[1];break}return l||Z}function xe(n){return n.tag==="template"}function Tn(n){return ge.includes(n)}function Oe(n){const l=[];for(const e of n){const t=l[l.length-1];e.type===$&&(t==null?void 0:t.type)===$?t.children=t.children+e.children:l.push(e)}return l}async function Te(n,l){if(!n)return;const e=Array.from(new Set(t(n,l)));await Promise.all(e.map(async o=>{if(o!=null&&o.render||o!=null&&o.ssrRender||o!=null&&o.__ssrInlineRender)return;const r=G(o);r!=null&&r.__asyncLoader&&!r.__asyncResolved&&await r.__asyncLoader()}));function t(o,r){const u=o.tag;if(o.type==="text"||u==="binding"||o.type==="comment")return[];const s=Dn(o,r.tags);if(Tn(s))return[];const d=[];o.type!=="root"&&!I.includes(s)&&d.push(s);for(const p of o.children||[])d.push(...t(p,r));return d}}function Dn(n,l){var t;const e=n.tag;return!e||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?e:l[e]||l[M(e)]||l[pn(n.tag)]||e}const De=Object.assign(me,{__name:"MDCRenderer"});function _e(n){return{type:"root",children:n.value.map(_n)}}function _n(n){if(typeof n=="string")return{type:"text",value:n};const[l,e,...t]=n;return{type:"element",tag:l,props:e,children:t.map(_n)}}const Re=()=>V(()=>import("./DpjChaYO.js"),__vite__mapDeps([0,1,2]),import.meta.url),Ae=()=>V(()=>import("./B1YV8vfa.js"),__vite__mapDeps([3,1,4]),import.meta.url),Rn=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl"],An=["Alert","Counter"],Le=Object.freeze(Object.defineProperty({__proto__:null,Alert:Re,Counter:Ae,globalComponents:Rn,localComponents:An},Symbol.toStringTag,{value:"Module"})),Me=J({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var w,_,T,D;const l=["render","ssrRender","__ssrInlineRender"],e=n,t=!1,o=L(()=>{let c=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(c=e.value.excerpt),c.type==="minimal"?_e(c):c}),r=L(()=>{var c,m;return!((m=(c=o.value)==null?void 0:c.children)!=null&&m.length)}),u=L(()=>{const{body:c,excerpt:m,...v}=e.value;return{...v,...e.data}}),s=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(c=>[c,`prose-${c}`])),{mdc:d}=jn().public||{},p={...(w=d==null?void 0:d.components)!=null&&w.prose&&e.prose!==!1?s:{},...((_=d==null?void 0:d.components)==null?void 0:_.map)||{},...rn(((D=(T=e.data)==null?void 0:T.mdc)==null?void 0:D.components)||{}),...e.components},f=L(()=>{}),g=L(()=>o.value?O(o.value,{tags:p}):{});function b(c){let m=c;if(typeof c=="string"){if(I.includes(c))return c;if(Rn.includes(M(c))?m=an(c,!1):An.includes(M(c))&&(m=K(()=>V(()=>Promise.resolve().then(()=>Le),void 0,import.meta.url).then(P=>P[M(c)]()))),typeof m=="string")return m}if(!m)return m;const v=m;return"__asyncLoader"in v?v:"setup"in v?K(()=>Promise.resolve(v)):v}function O(c,m){if(!c)return;const v=Array.from(new Set(x(c,m))),P={};for(const[A,B]of v)typeof B=="object"&&l.some(Ln=>Object.hasOwnProperty.call(B,Ln))||P[A]||(P[A]=b(B));return P}function x(c,m){const v=c.tag;if(c.type==="text"||v==="binding"||c.type==="comment")return[];const P=C(c,m.tags),A=[];c.type!=="root"&&!I.includes(P)&&A.push([v,P]);for(const B of c.children||[])A.push(...x(B,m));return A}function C(c,m){var P;const v=c.tag;return!v||typeof((P=c.props)==null?void 0:P.__ignoreMap)<"u"?v:m[v]||m[M(v)]||m[pn(c.tag)]||v}return(c,m)=>r.value?$n(c.$slots,"empty",{key:1,body:o.value,data:u.value,dataContentId:N(t)?n.value.id:void 0}):(sn(),un(De,{key:f.value,body:o.value,data:u.value,class:Nn(e.class),tag:e.tag,prose:e.prose,unwrap:e.unwrap,components:g.value,"data-content-id":N(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),Ee=Object.assign(Me,{__name:"ContentRenderer"}),H=(n,l)=>{const e=n._conditions;return e.length>0?`(${e.join(` ${l} `)})`:""},F=n=>{const l=[],e={_conditions:l,where(t,o,r){let u;switch(o.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(r)){const s=r.map(d=>`'${d}'`).join(", ");u=`"${String(t)}" ${o.toUpperCase()} (${s})`}else throw new TypeError(`Value for ${o} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(r)&&r.length===2)u=`"${String(t)}" ${o.toUpperCase()} '${r[0]}' AND '${r[1]}'`;else throw new Error(`Value for ${o} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":u=`"${String(t)}" ${o.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":u=`"${String(t)}" ${o.toUpperCase()} '${r}'`;break;default:u=`"${String(t)}" ${o} '${r}'`}return l.push(`${u}`),e},andWhere(t){const o=t(F());return l.push(H(o,"AND")),e},orWhere(t){const o=t(F());return l.push(H(o,"OR")),e}};return e},Ue=(n,l)=>{const e={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},t={__params:e,andWhere(r){const u=r(F());return e.conditions.push(H(u,"AND")),t},orWhere(r){const u=r(F());return e.conditions.push(H(u,"OR")),t},path(r){return t.where("path","=",zn(r))},skip(r){return e.offset=r,t},where(r,u,s){return t.andWhere(d=>d.where(String(r),u,s)),t},limit(r){return e.limit=r,t},select(...r){return r.length&&e.selectedFields.push(...r),t},order(r,u){return e.orderBy.push(`"${String(r)}" ${u}`),t},async all(){return l(n,o()).then(r=>r||[])},async first(){return l(n,o({limit:1})).then(r=>r[0]||null)},async count(r="*",u=!1){return l(n,o({count:{field:String(r),distinct:u}})).then(s=>s[0].count)}};function o(r={}){let u="SELECT ";if(r!=null&&r.count)u+=`COUNT(${r.count.distinct?"DISTINCT":""} ${r.count.field}) as count`;else{const d=Array.from(new Set(e.selectedFields));u+=d.length>0?d.map(p=>`"${String(p)}"`).join(", "):"*"}u+=` FROM ${Kn[String(n)]}`,e.conditions.length>0&&(u+=` WHERE ${e.conditions.join(" AND ")}`),e.orderBy.length>0?u+=` ORDER BY ${e.orderBy.join(", ")}`:u+=" ORDER BY stem ASC";const s=(r==null?void 0:r.limit)||e.limit;return s>0&&(e.offset>0?u+=` LIMIT ${s} OFFSET ${e.offset}`:u+=` LIMIT ${s}`),u}return t},Be=n=>{var e,t;const l=(t=(e=Hn())==null?void 0:e.ssrContext)==null?void 0:t.event;return Ue(n,(o,r)=>Ie(l,o,r))};async function Ie(n,l,e){return je(l,e)}async function je(n,l){return await V(()=>import("./VuzQEWu9.js"),__vite__mapDeps([5,1,6]),import.meta.url).then(t=>t.loadDatabaseAdapter(n)).then(t=>t.all(l))}const ze=J({__name:"[...slug]",async setup(n){let l,e;const t=Fn(),{data:o}=([l,e]=Vn(()=>Xn("page-"+t.path,()=>Be("content").path(t.path).first(),"$vHqkxevve1")),l=await l,e(),l);if(!o.value)throw qn({statusCode:404,statusMessage:"Page not found",fatal:!0});return(r,u)=>{const s=Ee;return N(o)?(sn(),un(s,{key:0,value:N(o)},null,8,["value"])):Wn("",!0)}}});export{ze as default};
