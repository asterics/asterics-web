(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{782:function(e,t,s){e.exports=s.p+"assets/img/lipmouse.57247ec7.jpg"},783:function(e,t,s){e.exports=s.p+"assets/img/lipmouseapplication.da7bc790.jpg"},938:function(e,t,s){"use strict";s.r(t);var r=s(38),i=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"lipmouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lipmouse","aria-hidden":"true"}},[e._v("#")]),e._v(" Lipmouse")]),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory:Sensor Modules)")]),e._v(" "),r("p",[e._v("This component provides signals from the Lipmouse module, which allows computer control via a mouthpiece. The user can create input signals with 3 degrees of freedom by interacting with the mouthpiece: left/right, up/down and sip/puff. The horizontal and vertical movements are measured via force sensors inside the lipmouse module. The sip/puff actions are measured via a pressure sensor. The lipmouse can be adjusted to very low force that it can be used by persons with severly reduced motor capabilites (e.g. late stage musculuar dystrophy or quadraplegia up to C1/C2 lesions).")]),e._v(" "),r("p",[r("img",{attrs:{src:s(782),alt:"Screenshot: Lipmouse plugin",title:"Screenshot: Lipmouse plugin"}})]),e._v(" "),r("p",[e._v("The Lipmouse sensor plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v('The Lipmouse module must be connected to a USB port. Firmware for the lipmouse sensor can be found in the folder CIMs/Lipmouse_CIM. The free "teensy loader" tool can be used to update the firmware of the lipmouse module. An alternative stand-alone firmware and configuration GUI is provided in the folder CIMs/StandAlone_Modules_FLipWare. Detailed design documentation will be provided in the future.')]),e._v(" "),r("p",[r("img",{attrs:{src:s(783),alt:"Lipmouse sensor application",title:"Lipmouse sensor application"}})]),e._v(" "),r("p",[e._v("Lipmouse sensor application")]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("X [integer]:")]),e._v(" the force applied to the Lipmouse mouthpiece in x-direction")]),e._v(" "),r("li",[r("strong",[e._v("Y [integer]:")]),e._v(" the force applied to the Lipmouse mouthpiece in y-direction")]),e._v(" "),r("li",[r("strong",[e._v("pressure [integer]:")]),e._v(" the pressure value applied to the sip/puff - sensor")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("calibration:")]),e._v(" if this event is received, the x/y force value is set to 0 (removing any drift of the sensor values)")]),e._v(" "),r("li",[r("strong",[e._v("setLed1:")]),e._v(" if this event is received, Led1 will be turned on")]),e._v(" "),r("li",[r("strong",[e._v("clearLed1:")]),e._v(" if this event is received, Led1 will be turned off")]),e._v(" "),r("li",[r("strong",[e._v("setLed2:")]),e._v(" if this event is received, Led2 will be turned on")]),e._v(" "),r("li",[r("strong",[e._v("clearLed2:")]),e._v(" if this event is received, Led2 will be turned off")]),e._v(" "),r("li",[r("strong",[e._v("setLed3:")]),e._v(" if this event is received, Led3 will be turned on")]),e._v(" "),r("li",[r("strong",[e._v("clearLed3:")]),e._v(" if this event is received, Led3 will be turned off")])]),e._v(" "),r("h2",{attrs:{id:"event-triggerer-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Triggerer Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("sip:")]),e._v(" will be triggered when pressure decreases under the selected sip treshold and increses back before the selected sipTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("longSip:")]),e._v(" will be triggered when pressure decreases under the selected sip treshold and increases back after the selected sipTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("sipStart:")]),e._v(" will be triggered at the moment when pressure decreases under the selected sip treshold")]),e._v(" "),r("li",[r("strong",[e._v("sipEnd:")]),e._v(" will be triggered at the moment when pressure increases above the selected sip treshold")]),e._v(" "),r("li",[r("strong",[e._v("puff:")]),e._v(" will be triggered when pressure increases above the selected puff treshold and decreases back before the selected puffTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("longPuff:")]),e._v(" will be triggered when pressure increases above the selected puff treshold and decreases back after the selected puffTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("puffStart:")]),e._v(" will be triggered at the moment when pressure increases above the selected puff treshold")]),e._v(" "),r("li",[r("strong",[e._v("puffEnd:")]),e._v(" will be triggered at the moment when pressure decreases under the selected puff treshold")]),e._v(" "),r("li",[r("strong",[e._v("button1Pressed:")]),e._v(" will be triggered when button1 of the lipmouse is pressed")]),e._v(" "),r("li",[r("strong",[e._v("button1Released:")]),e._v(" will be triggered when button1 of the lipmouse is released")]),e._v(" "),r("li",[r("strong",[e._v("button2Pressed:")]),e._v(" will be triggered when button2 of the lipmouse is pressed")]),e._v(" "),r("li",[r("strong",[e._v("button2Released:")]),e._v(" will be triggered when button2 of the lipmouse is released")]),e._v(" "),r("li",[r("strong",[e._v("button3Pressed:")]),e._v(" will be triggered when button3 of the lipmouse is pressed")]),e._v(" "),r("li",[r("strong",[e._v("button3Released:")]),e._v(" will be triggered when button3 of the lipmouse is released")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("uniqueID [integer]:")]),e._v(" a unique identifier, useful if more then one lipmouse modules are used (dynamic property).")]),e._v(" "),r("li",[r("strong",[e._v("periodicADCUpdate [integer]:")]),e._v(" the update rate for force and pressure values in milliseconds.")]),e._v(" "),r("li",[r("strong",[e._v("sipThreshold [integer]:")]),e._v(" threshold value for sip actions.")]),e._v(" "),r("li",[r("strong",[e._v("sipTime [integer]:")]),e._v(" threshold time for sip/longSip events.")]),e._v(" "),r("li",[r("strong",[e._v("puffThreshold [integer]:")]),e._v(" threshold value for puff actions.")]),e._v(" "),r("li",[r("strong",[e._v("puffTime [integer]:")]),e._v(" threshold time for puff/longPuff events.")])]),e._v(" "),r("EditLink")],1)},[],!1,null,null,null);t.default=i.exports}}]);