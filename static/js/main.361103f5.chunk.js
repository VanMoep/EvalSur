(this["webpackJsonpcreate-new-map-react-leaflet"]=this["webpackJsonpcreate-new-map-react-leaflet"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),s=a.n(o),l=(a(104),a(33)),i=a(34),c=a(27),p=a(37),m=a(35),u=a(63),h=a(55),g=a(64),y=a(3),d=a.n(y),f=(a(105),a(106),a(107),a(108),a(61)),b=a(62),E=a(68),O=a.n(E),w=a(76),v=a.n(w),k=a(81),M=a.n(k),x=a(77),S=a.n(x),D=a(80),C=a.n(D),P=a(79),T=a.n(P),j=a(82),A=a.n(j),B=a(75),I=a.n(B),L=a(74),z=a.n(L),R=a(78),_=a.n(R),F=a(69),N=a.n(F),q=a(83),Z=a.n(q),J=a(84),V=a.n(J),G=a(49),H=a.n(G),Q=a(85),U=a.n(Q),Y=a(87),K=a.n(Y),W=a(88),X=a.n(W),$=a(59),ee=a.n($),te=a(86),ae=a.n(te),re=a(89),ne=a.n(re),oe=a(90),se=a.n(oe),le=function(e){switch(e){case"bakery":return n.a.createElement(N.a,{style:{color:ie(e),margin:"2px"}});case"college":return n.a.createElement(z.a,{style:{color:ie(e),margin:"2px"}});case"kindergarten":return n.a.createElement(I.a,{style:{color:ie(e),margin:"2px"}});case"school":return n.a.createElement(v.a,{style:{color:ie(e),margin:"2px"}});case"supermarket":return n.a.createElement(S.a,{style:{color:ie(e),margin:"2px"}});case"swimming":return n.a.createElement(_.a,{style:{color:ie(e),margin:"2px"}});case"cinema":return n.a.createElement(T.a,{style:{color:ie(e),margin:"2px"}});case"playground":return n.a.createElement(C.a,{style:{color:ie(e),margin:"2px"}});case"pharmacy":return n.a.createElement(M.a,{style:{color:ie(e),margin:"2px"}});case"chemist":return n.a.createElement(A.a,{style:{color:ie(e),margin:"2px"}});case"unknown":return n.a.createElement(Z.a,{style:{color:ie(e),margin:"2px"}});default:return n.a.createElement(V.a,{style:{color:ie(e),margin:"2px"}})}},ie=function(e){switch(e){case"bakery":return U.a[500];case"supermarket":return ae.a[500];case"swimming":return H.a[500];case"cinema":return K.a[500];case"playground":return H.a[500];case"pharmacy":return X.a[500];case"unknown":return ee.a[500];case"school":return ne.a[500];case"kindergarten":return se.a[500];default:return ee.a[900]}},ce=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).getIconForType=r.getIconForType.bind(Object(c.a)(r)),r}return Object(i.a)(a,[{key:"getIconForType",value:function(e){return d.a.divIcon({className:"custom-icon",html:O.a.renderToString(le(e))})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.props.osmData.map((function(t,a){return n.a.createElement(f.a,{key:"marker-".concat(a),position:[t.lat,t.lon],icon:e.getIconForType(t.type)},n.a.createElement(b.a,null,n.a.createElement("span",null,t.type),n.a.createElement("span",null,t.name)))})))}}]),a}(n.a.Component),pe=a(182),me=a(179),ue=a(183),he=a(93),ge=a.n(he),ye=a(180),de=a(181),fe=a(91),be=a.n(fe),Ee=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.loading?n.a.createElement(me.a,{style:{padding:"5px"}},n.a.createElement(ye.a,{container:!0,spacing:3},n.a.createElement(ye.a,{item:!0,xs:2},n.a.createElement(be.a,null)),n.a.createElement(ye.a,{item:!0,xs:10},n.a.createElement(de.a,{align:"center"},"loading OSM data")))):Object.getOwnPropertyNames(this.props.osmData).length>0?n.a.createElement(me.a,{style:{padding:"10px"}},Object.keys(this.props.osmData).map((function(t){return n.a.createElement(ue.a,{title:t,"aria-label":t},n.a.createElement(pe.a,{badgeContent:e.props.osmData[t],style:{color:ie(t)}},le(t)))}))):this.props.osmError?n.a.createElement(me.a,{style:{padding:"5px"}},n.a.createElement(ye.a,{container:!0,spacing:3},n.a.createElement(ye.a,{item:!0,xs:2},n.a.createElement(ge.a,{color:"error"})),n.a.createElement(ye.a,{item:!0,xs:10},n.a.createElement(de.a,{align:"center",color:"error"},this.props.osmError.message)))):n.a.createElement(n.a.Fragment,null)}}]),a}(n.a.Component),Oe=a(52),we=a.n(Oe),ve=a(94),ke=a.n(ve),Me=a(95),xe=a.n(Me),Se=a(184),De=function(e){Object(p.a)(r,e);var t=Object(m.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).leafletMap=null,e.setLeafletMapRef=function(t){return e.leafletMap=t&&t.leafletElement},e.state={defaultZoom:13,defaultCenter:[0,9],osmRequest:null,defaultRange:1500,osmData:[],osmDataCounted:{},loading:!1},e.loadOSMData=e.loadOSMData.bind(Object(c.a)(e)),e.getTypeByTags=e.getTypeByTags.bind(Object(c.a)(e)),e}return Object(i.a)(r,[{key:"loadOSMData",value:function(){var e=this;this.setState({loading:!0,osmError:null});var t=a(116),r=this.state.osmRequest;r=r.replaceAll("<RANGE>",this.state.defaultRange).replaceAll("<LAT>",this.leafletMap.getCenter().lat).replaceAll("<LON>",this.leafletMap.getCenter().lng),console.log("requesting OSM data for position",this.leafletMap.getCenter(),r),t(r).then((function(t){var a=[],r={};t.filter((function(e){return("node"===e.type||"way"===e.type)&&e.lat&&e.tags})).map((function(t,n){var o=e.getTypeByTags(t.tags);a.push({name:t.tags.name,lat:"node"===t.type?t.lat:t.center.lat,lon:"node"===t.type?t.lon:t.center.lon,type:o}),r.hasOwnProperty(o)?r[o]=r[o]+1:r[o]=1})),e.setState({osmData:a,osmDataCounted:r,loading:!1,osmError:null})})).catch((function(t){e.setState({loading:!1,osmError:t})}))}},{key:"getTypeByTags",value:function(e){return e.hasOwnProperty("shop")&&"bakery"===e.shop?"bakery":e.hasOwnProperty("shop")&&"supermarket"===e.shop?"supermarket":e.hasOwnProperty("shop")&&"chemist"===e.shop?"chemist":e.hasOwnProperty("amenity")&&"cinema"===e.amenity?"cinema":e.hasOwnProperty("sport")&&"swimming"===e.sport?"swimming":e.hasOwnProperty("amenity")&&"pharmacy"===e.amenity?"pharmacy":e.hasOwnProperty("amenity")&&"ice_cream"===e.amenity?"ice_cream":e.hasOwnProperty("amenity")&&"school"===e.amenity?"school":e.hasOwnProperty("amenity")&&"college"===e.amenity?"college":e.hasOwnProperty("amenity")&&"kindergarten"===e.amenity?"kindergarten":e.hasOwnProperty("leisure")&&"park"===e.leisure?"park":e.hasOwnProperty("leisure")&&"playground"===e.amenity?"playground":"unknown"}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({defaultCenter:[t.coords.latitude,t.coords.longitude]})})),fetch("data/overpassQL.txt").then((function(t){return t.text().then((function(t){console.log(t),e.setState({osmRequest:t})}))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,{ref:this.setLeafletMapRef,fullscreenControl:!0,center:this.state.defaultCenter,zoom:this.state.defaultZoom},n.a.createElement(h.b,{position:"topright"},n.a.createElement(h.b.BaseLayer,{checked:!0,name:"CartoDB.VoyagerLabelsUnder"},n.a.createElement(g.a,{url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),n.a.createElement(h.b.BaseLayer,{checked:!0,name:"CartoDB.Positron"},n.a.createElement(g.a,{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]',subdomains:"abcd"})),n.a.createElement(h.b.BaseLayer,{name:"OpenStreetMap.BZH"},n.a.createElement(g.a,{url:"https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),n.a.createElement(h.b.BaseLayer,{name:"OpenStreetMap.Mapnik"},n.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),n.a.createElement(h.b.BaseLayer,{name:"Stamen.Toner"},n.a.createElement(g.a,{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> \u2014 Map data \xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]',subdomains:"abcd",ext:"png"})),n.a.createElement(h.b.BaseLayer,{name:"Stadia.AlidadeSmooth"},n.a.createElement(g.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://stadiamaps.com/">Stadia Maps</a>, \xa9 <a href="https://openmaptiles.org/">OpenMapTiles</a> \xa9 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'})),n.a.createElement(h.b.BaseLayer,{name:"Stadia.AlidadeSmoothDark"},n.a.createElement(g.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://stadiamaps.com/">Stadia Maps</a>, \xa9 <a href="https://openmaptiles.org/">OpenMapTiles</a> \xa9 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'}))),n.a.createElement(ce,{osmData:this.state.osmData}),n.a.createElement(we.a,{position:"topleft"},n.a.createElement(Se.a,{size:"small",onClick:function(){navigator.geolocation.getCurrentPosition((function(t){e.leafletMap.setView([t.coords.latitude,t.coords.longitude])}))}},n.a.createElement(ke.a,null))),n.a.createElement(we.a,{position:"topleft"},n.a.createElement(Se.a,{size:"small",onClick:function(){e.loadOSMData()}},n.a.createElement(xe.a,null))),n.a.createElement(we.a,{position:"bottomleft"},n.a.createElement(Ee,{osmData:this.state.osmDataCounted,loading:this.state.loading,osmError:this.state.osmError}))))}}]),r}(n.a.Component);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(De,null)),document.getElementById("root"))},99:function(e,t,a){e.exports=a(156)}},[[99,1,2]]]);
//# sourceMappingURL=main.361103f5.chunk.js.map