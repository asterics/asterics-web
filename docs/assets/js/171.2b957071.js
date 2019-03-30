(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1136:function(t,e,i){"use strict";i.r(e);var r=i(38),n=Object(r.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"integrate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#integrate","aria-hidden":"true"}},[t._v("#")]),t._v(" Integrate")]),t._v(" "),r("p",[t._v("Component Type: Processor (Subcategory: Basic Math)")]),t._v(" "),r("p",[t._v("The integrate component performs successive addition of incoming signal values. This is useful for transforming relative movement information coming from a sensor into absolute position values.")]),t._v(" "),r("p",[r("img",{attrs:{src:i(696),alt:"Screenshot: Integrate plugin",title:"Screenshot: Integrate plugin"}})]),t._v(" "),r("p",[t._v("Integrate plugin")]),t._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("in [double]:")]),t._v(" The input port for signal values.")])]),t._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("out [double]:")]),t._v(" Output of the integrated values.")])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("reset:")]),t._v(" An incoming event at this port sets the current accumulator value to the rest value (specified in the rest property field).")])]),t._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("resetValue [double]:")]),t._v(" The initial value of the accumulator, which is set when starting the model or when an event comes in at the elp_rest event listener port.")]),t._v(" "),r("li",[r("strong",[t._v("upperLimit [double]:")]),t._v(" The maximum accumulator value (the integration sum will stay at this value and not get higher even if positive values come in at the input port).")]),t._v(" "),r("li",[r("strong",[t._v("lowerLimit [double]:")]),t._v(" The minimum accumulator value (the integration sum will stay at this value and not get lower even if negative values come in at the input port) Upper and lower limit are useful e.g. to set bounds for mouse movement etc.")]),t._v(" "),r("li",[r("strong",[t._v("wrapAround [boolean]:")]),t._v(" If this property is set to true, the accumulator value is set to the lower_limit if it gets greater than the upper_limit (overflow), and to the upper_limit if it would get lower than the lower_limit (underflow).")])]),t._v(" "),r("EditLink")],1)},[],!1,null,null,null);e.default=n.exports},696:function(t,e,i){t.exports=i.p+"assets/img/integrate.dfb8529f.jpg"}}]);