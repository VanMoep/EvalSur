(this["webpackJsonpcreate-new-map-react-leaflet"]=this["webpackJsonpcreate-new-map-react-leaflet"]||[]).push([[0],{130:function(e,a,t){e.exports=t(187)},135:function(e,a,t){},136:function(e,a,t){},187:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(13),s=t.n(o),l=(t(135),t(43)),i=t(44),c=t(30),p=t(47),m=t(46),u=t(83),h=t(72),d=t(84),g=(t(136),t(137),t(138),t(139),t(80)),y=t(81),f=t(82),E=t(4),b=t.n(E),O=t(88),C=t.n(O),w=t(89),v=t.n(w),k=t(98),M=t.n(k),S=t(104),x=t.n(S),D=t(99),P=t.n(D),R=t(103),T=t.n(R),j=t(101),B=t.n(j),A=t(105),I=t.n(A),L=t(97),_=t.n(L),z=t(96),F=t.n(z),N=t(102),q=t.n(N),V=t(100),Z=t.n(V),H=t(95),J=t.n(H),G=t(106),Q=t.n(G),U=t(107),Y=t.n(U),K=t(62),W=t.n(K),X=t(108),$=t.n(X),ee=t(110),ae=t.n(ee),te=t(112),ne=t.n(te),re=t(77),oe=t.n(re),se=t(109),le=t.n(se),ie=t(113),ce=t.n(ie),pe=t(114),me=t.n(pe),ue=t(76),he=t.n(ue),de=t(111),ge=t.n(de),ye=t(94),fe=t.n(ye),Ee=function(e){switch(e){case"position":return r.a.createElement(v.a,{style:{color:be(e)}});case"center":return r.a.createElement(fe.a,{style:{color:be(e)}});case"bakery":return r.a.createElement(J.a,{style:{color:be(e),margin:"2px"}});case"college":return r.a.createElement(F.a,{style:{color:be(e),margin:"2px"}});case"kindergarten":return r.a.createElement(_.a,{style:{color:be(e),margin:"2px"}});case"school":return r.a.createElement(M.a,{style:{color:be(e),margin:"2px"}});case"supermarket":return r.a.createElement(P.a,{style:{color:be(e),margin:"2px"}});case"swimming":return r.a.createElement(Z.a,{style:{color:be(e),margin:"2px"}});case"cinema":return r.a.createElement(B.a,{style:{color:be(e),margin:"2px"}});case"playground":return r.a.createElement(q.a,{style:{color:be(e),margin:"2px"}});case"park":return r.a.createElement(T.a,{style:{color:be(e),margin:"2px"}});case"pharmacy":return r.a.createElement(x.a,{style:{color:be(e),margin:"2px"}});case"chemist":return r.a.createElement(I.a,{style:{color:be(e),margin:"2px"}});case"unknown":return r.a.createElement(Q.a,{style:{color:be(e),margin:"2px"}});default:return r.a.createElement(Y.a,{style:{color:be(e),margin:"2px"}})}},be=function(e){switch(e){case"position":case"center":return he.a[500];case"bakery":return $.a[500];case"supermarket":return le.a[500];case"swimming":return W.a[500];case"cinema":return ae.a[500];case"playground":return ge.a[500];case"park":return W.a[500];case"pharmacy":return ne.a[500];case"unknown":return oe.a[500];case"school":return ce.a[500];case"kindergarten":return me.a[500];default:return oe.a[900]}},Oe=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).getIconForType=n.getIconForType.bind(Object(c.a)(n)),n}return Object(i.a)(t,[{key:"getIconForType",value:function(e){return b.a.divIcon({className:"custom-icon",html:C.a.renderToString(Ee(e))})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.osmData.map((function(a,t){return r.a.createElement(g.a,{key:"marker-".concat(t),position:[a.lat,a.lon],icon:e.getIconForType(a.type)},r.a.createElement(y.a,null,r.a.createElement("span",null,a.type),":",r.a.createElement("span",null,a.name)))})),r.a.createElement(f.a,{center:{lat:this.props.searchCenter[0],lng:this.props.searchCenter[1]},fillColor:"blue",radius:this.props.radius}),r.a.createElement(g.a,{key:"marker-searchCenter",position:[this.props.searchCenter[0],this.props.searchCenter[1]],icon:this.getIconForType("position")}),r.a.createElement(g.a,{key:"marker-mapCenter",position:[this.props.mapCenter[0],this.props.mapCenter[1]],icon:this.getIconForType("center")}))}}]),t}(r.a.Component),Ce=t(189),we=t(121),ve=t.n(we),ke=t(235),Me=t(49),Se=t(120),xe=t.n(Se),De=t(64),Pe=t(242),Re=t(227),Te=t(228),je=t(229),Be=t(230),Ae=t(231),Ie=t(233),Le=t(234),_e=t(224),ze=t(116),Fe=t.n(ze),Ne=t(243),qe=t(245),Ve=t(232),Ze=t(226),He=t(117),Je=t.n(He),Ge=t(118),Qe=t.n(Ge),Ue=t(119),Ye=t.n(Ue),Ke=Object(_e.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}));function We(e){var a=e.osmDataCounted,t=e.osmData,n=e.range,o=Ke(),s=r.a.useState(!1),l=Object(De.a)(s,2),i=l[0],c=l[1],p=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement(Ce.a,{onClick:function(){c(!0)},style:{padding:"10px"}},Object.keys(a).map((function(e){return r.a.createElement(Ne.a,{title:e,"aria-label":e},r.a.createElement(Ze.a,{badgeContent:a[e],style:{color:be(e)}},Ee(e)))}))),r.a.createElement(Pe.a,{fullScreen:!0,open:i,onClose:p},r.a.createElement(Re.a,{className:o.appBar},r.a.createElement(Te.a,null,r.a.createElement(je.a,{edge:"start",color:"inherit",onClick:p,"aria-label":"close"},r.a.createElement(Fe.a,null)),r.a.createElement(Me.a,{variant:"h6",className:o.title},"POIs within ",n,"m range"))),r.a.createElement(Be.a,{dense:!0},t.map((function(e,a){return r.a.createElement(Ae.a,{alignItems:"flex-start",key:"listitem-".concat(a)},r.a.createElement(Ve.a,null,r.a.createElement(qe.a,null,Ee(e.type))),r.a.createElement(Ie.a,{primary:e.name,secondary:e.address.street+" "+e.address.housenumber+", "+e.address.postcode+" "+e.address.city}),r.a.createElement(Le.a,null,r.a.createElement(je.a,{color:"primary",disabled:!e.phone,onClick:function(){return window.open("tel:"+e.phone,"_blank")}},r.a.createElement(Je.a,null))),r.a.createElement(Le.a,null,r.a.createElement(je.a,{color:"primary",disabled:!e.website,onClick:function(){return window.open(e.website,"_blank")}},r.a.createElement(Qe.a,null))),r.a.createElement(Le.a,null,r.a.createElement(je.a,{color:"primary",onClick:function(){return window.open("https://www.google.com/maps/dir/?api=1&destination="+e.lat+"%2C"+e.lon,"_blank")}},r.a.createElement(Ye.a,null))))})))))}var Xe=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return this.props.loading?r.a.createElement(Ce.a,{style:{padding:"5px"}},r.a.createElement(ke.a,{container:!0,spacing:3},r.a.createElement(ke.a,{item:!0,xs:2},r.a.createElement(xe.a,null)),r.a.createElement(ke.a,{item:!0,xs:10},r.a.createElement(Me.a,{align:"center"},"loading OSM data")))):Object.getOwnPropertyNames(this.props.osmDataCounted).length>0?r.a.createElement(We,{osmDataCounted:this.props.osmDataCounted,osmData:this.props.osmData,range:this.props.range}):this.props.osmError?r.a.createElement(Ce.a,{style:{padding:"5px"}},r.a.createElement(ke.a,{container:!0,spacing:3},r.a.createElement(ke.a,{item:!0,xs:2},r.a.createElement(ve.a,{color:"error"})),r.a.createElement(ke.a,{item:!0,xs:10},r.a.createElement(Me.a,{align:"center",color:"error"},this.props.osmError.message)))):r.a.createElement(r.a.Fragment,null)}}]),t}(r.a.Component),$e=t(65),ea=t.n($e),aa=t(123),ta=t.n(aa),na=t(236),ra=t(241),oa=t(240),sa=t(238),la=t(239),ia=t(237),ca=t(122),pa=t.n(ca),ma=t(244);function ua(e){var a=e.defaultRange,t=e.handleRangeChange,n=e.loadOSMData,o=r.a.useState(!1),s=Object(De.a)(o,2),l=s[0],i=s[1],c=function(){i(!1)};return r.a.createElement("div",null,r.a.createElement(na.a,{size:"small",onClick:function(){i(!0)}},r.a.createElement(pa.a,null)),r.a.createElement(Pe.a,{open:l,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(ia.a,{id:"alert-dialog-title"},"set range to search for POIs"),r.a.createElement(sa.a,null,r.a.createElement(la.a,{id:"alert-dialog-description"},r.a.createElement(ke.a,{container:!0,spacing:2},r.a.createElement(ke.a,{item:!0}),r.a.createElement(ke.a,{item:!0,xs:!0},r.a.createElement(Me.a,{id:"discrete-slider-always",gutterBottom:!0}),r.a.createElement(ma.a,{value:a,onChange:t,"aria-labelledby":"discrete-slider-always",step:500,defaultValue:1500,min:500,max:3e3,marks:[{value:500,label:"0.5 km"},{value:1500,label:"1.5 km"},{value:3e3,label:"3 km"}],getAriaValueText:function(e){return"".concat(e,"km")},valueLabelDisplay:"off"})),r.a.createElement(ke.a,{item:!0})))),r.a.createElement(oa.a,null,r.a.createElement(ra.a,{onClick:c},"Cancel"),r.a.createElement(ra.a,{onClick:function(){i(!1),n()},color:"primary",autoFocus:!0},"Load"))))}var ha=t(78),da=(t(147),function(e){Object(p.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).leafletMap=null,e.setLeafletMapRef=function(a){return e.leafletMap=a&&a.leafletElement},e.state={defaultZoom:13,defaultCenter:[0,9],osmRequest:null,defaultRange:1500,osmData:[],osmDataCounted:{},loading:!1},e.loadOSMData=e.loadOSMData.bind(Object(c.a)(e)),e.getTypeByTags=e.getTypeByTags.bind(Object(c.a)(e)),e.handleRangeChange=e.handleRangeChange.bind(Object(c.a)(e)),e.handleMove=e.handleMove.bind(Object(c.a)(e)),e.handleOSMResponse=e.handleOSMResponse.bind(Object(c.a)(e)),e}return Object(i.a)(n,[{key:"loadOSMData",value:function(){var e=this;this.setState({loading:!0,osmError:null});var a=t(148),n=this.state.osmRequest;n=n.replaceAll("<RANGE>",this.state.defaultRange).replaceAll("<LAT>",this.leafletMap.getCenter().lat).replaceAll("<LON>",this.leafletMap.getCenter().lng),console.log("requesting OSM data for position",this.leafletMap.getCenter(),n),a(n).then((function(a){e.handleOSMResponse(a)})).catch((function(a){e.setState({loading:!1,osmError:a})}))}},{key:"handleOSMResponse",value:function(e){var a=this,t=[],n={};e.filter((function(e){return("node"===e.type||"way"===e.type)&&e.lat&&e.tags})).map((function(e,r){var o=a.getTypeByTags(e.tags);t.push({name:e.tags.name,lat:"node"===e.type?e.lat:e.center.lat,lon:"node"===e.type?e.lon:e.center.lon,type:o,address:{city:e.tags["addr:city"],housenumber:e.tags["addr:housenumber"],postcode:e.tags["addr:postcode"],street:e.tags["addr:street"]},openingHours:e.tags.opening_hours,website:e.tags.website,phone:e.tags.phone}),n.hasOwnProperty(o)?n[o]=n[o]+1:n[o]=1})),this.setState({osmData:t,osmDataCounted:n,loading:!1,osmError:null,defaultCenter:[this.leafletMap.getCenter().lat,this.leafletMap.getCenter().lng]})}},{key:"getTypeByTags",value:function(e){return e.hasOwnProperty("shop")&&"bakery"===e.shop?"bakery":e.hasOwnProperty("shop")&&"supermarket"===e.shop?"supermarket":e.hasOwnProperty("shop")&&"chemist"===e.shop?"chemist":e.hasOwnProperty("amenity")&&"cinema"===e.amenity?"cinema":e.hasOwnProperty("sport")&&"swimming"===e.sport?"swimming":e.hasOwnProperty("amenity")&&"pharmacy"===e.amenity?"pharmacy":e.hasOwnProperty("amenity")&&"ice_cream"===e.amenity?"ice_cream":e.hasOwnProperty("amenity")&&"school"===e.amenity?"school":e.hasOwnProperty("amenity")&&"college"===e.amenity?"college":e.hasOwnProperty("amenity")&&"kindergarten"===e.amenity?"kindergarten":e.hasOwnProperty("leisure")&&"park"===e.leisure?"park":e.hasOwnProperty("leisure")&&"playground"===e.leisure?"playground":"unknown"}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(a){e.setState({defaultCenter:[a.coords.latitude,a.coords.longitude]})})),fetch("/EvalSur/data/overpassQL.txt",{mode:"no-cors"}).then((function(a){return a.text().then((function(a){console.log("request for osm",a),e.setState({osmRequest:a})}))}));var a=new ha.b({provider:new ha.a,style:"bar",showMarker:!1});this.leafletMap.addControl(a)}},{key:"handleRangeChange",value:function(e,a){this.setState({defaultRange:a})}},{key:"handleMove",value:function(e){this.setState({mapCenter:[e.target.getCenter().lat,e.target.getCenter().lng]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{ref:this.setLeafletMapRef,fullscreenControl:!0,center:this.state.defaultCenter,zoom:this.state.defaultZoom,onMove:this.handleMove},r.a.createElement(h.b,{position:"topright"},r.a.createElement(h.b.BaseLayer,{checked:!0,name:"CartoDB.VoyagerLabelsUnder"},r.a.createElement(d.a,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),r.a.createElement(h.b.BaseLayer,{checked:!0,name:"CartoDB.Positron"},r.a.createElement(d.a,{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]',subdomains:"abcd"})),r.a.createElement(h.b.BaseLayer,{name:"OpenStreetMap.BZH"},r.a.createElement(d.a,{url:"https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),r.a.createElement(h.b.BaseLayer,{name:"OpenStreetMap.Mapnik"},r.a.createElement(d.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),r.a.createElement(h.b.BaseLayer,{name:"Stamen.Toner"},r.a.createElement(d.a,{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]',subdomains:"abcd",ext:"png"})),r.a.createElement(h.b.BaseLayer,{name:"Stadia.AlidadeSmooth"},r.a.createElement(d.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://stadiamaps.com/">Stadia Maps</a>, \xa9 <a href="https://openmaptiles.org/">OpenMapTiles</a> \xa9 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),r.a.createElement(h.b.BaseLayer,{name:"Stadia.AlidadeSmoothDark"},r.a.createElement(d.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://stadiamaps.com/">Stadia Maps</a>, \xa9 <a href="https://openmaptiles.org/">OpenMapTiles</a> \xa9 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'}))),r.a.createElement(Oe,{osmData:this.state.osmData,searchCenter:this.state.defaultCenter,mapCenter:this.state.mapCenter?this.state.mapCenter:this.state.defaultCenter,radius:this.state.defaultRange}),r.a.createElement(ea.a,{position:"topleft"},r.a.createElement(na.a,{size:"small",onClick:function(){navigator.geolocation.getCurrentPosition((function(a){e.leafletMap.setView([a.coords.latitude,a.coords.longitude])}))}},r.a.createElement(ta.a,null))),r.a.createElement(ea.a,{position:"topleft"},r.a.createElement(ua,{defaultRange:this.state.defaultRange,handleRangeChange:this.handleRangeChange,loadOSMData:this.loadOSMData})),r.a.createElement(ea.a,{position:"bottomleft"},r.a.createElement(Xe,{osmDataCounted:this.state.osmDataCounted,osmData:this.state.osmData,loading:this.state.loading,osmError:this.state.osmError,range:this.state.defaultRange}))))}}]),n}(r.a.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(da,null)),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.1d9e9db3.chunk.js.map