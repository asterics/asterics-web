(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1002:function(e,t,r){"use strict";r.r(t);var a=r(38),i=Object(a.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"application-launcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-launcher","aria-hidden":"true"}},[e._v("#")]),e._v(" Application Launcher")]),e._v(" "),a("p",[e._v("Component Type: Actuator (Subcategory: File System)")]),e._v(" "),a("p",[e._v("The ApplicationLauncher component can be used to run an external executable application or to open a URL in the platform default browser. The command and arguments values can either be set as property or dynamically configured through the respective input ports. The launch of the application or the opening of the URL can also be triggered by an incoming event (launchNow). The property executeOnPlatform selects the platforms on which the configured application or URL will be launched.")]),e._v(" "),a("p",[e._v("Together with the Keyboard- or RemoteKeyboard components, the ApplicationLauncher plugin can perform complex automation tasks, for example open Skype, choose a contact and make a call.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(593),alt:"Screenshot: ApplicationLauncher plugin",title:"Screenshot: ApplicationLauncher plugin"}})]),e._v(" "),a("p",[e._v("ApplicationLauncher plugin")]),e._v(" "),a("h2",{attrs:{id:"input-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("filename [string]:")]),e._v(" File name of executable file which shall be started without arguments. The application is started automatically, if onlyByEvent is false. See "),a("em",[e._v("Propterties -> defaultApplication")]),e._v(" description for details.")]),e._v(" "),a("li",[a("strong",[e._v("arguments [string]:")]),e._v(" Sets the arguments of the command. The application is started automatically, if onlyByEvent is false. See "),a("em",[e._v("Propterties -> arguments")]),e._v(" description for details.")]),e._v(" "),a("li",[a("strong",[e._v("stdIn [string]:")]),e._v(" Sends the incoming string to the standard input stream of the started process.")])]),e._v(" "),a("h2",{attrs:{id:"output-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("stdOut [string]:")]),e._v(" The standard output stream of the started process.")]),e._v(" "),a("li",[a("strong",[e._v("stdErr [string]:")]),e._v(" The standard error stream of the started process.")]),e._v(" "),a("li",[a("strong",[e._v("exitValue [integer]:")]),e._v(" The exit value of the started process.")])]),e._v(" "),a("h2",{attrs:{id:"event-listener-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("launchNow:")]),e._v(" An incoming event on this port will start the (default or lastest received) application")]),e._v(" "),a("li",[a("strong",[e._v("closeNow:")]),e._v(" An incoming event on this port will close the current application")])]),e._v(" "),a("h2",{attrs:{id:"event-triggerer-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Triggerer Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("startedSuccessfully:")]),e._v(" The process started successfully.")]),e._v(" "),a("li",[a("strong",[e._v("startedWithError:")]),e._v(" The process started with error.")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("executeOnPlatform [combobox (ALL, WINDOWS, LINUX, MACOSX)]:")]),e._v(" If != ALL, the application will only be launched if the ARE runs on the defined platform.")]),e._v(" "),a("li",[a("strong",[e._v("executionMode [combobox (START_APPLICATION, OPEN_URL)]:")]),e._v(" If START_APPLICATION, the command defined in defaultApplication will be launched with the given arguments. If OPEN_URL, the URL defined in arguments will be launched with the platform default browser. The platform-specific browser launch commands are configurable in the file areProperties. For general information about platform-specific launch commands, see "),a("a",{attrs:{href:"https://dwheeler.com/essays/open-files-urls.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("open files and URLs"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("strong",[e._v("defaultApplication [string]:")]),e._v(" Full path and filename of the default application"),a("br"),e._v("\nThe full path can be provided with quotes, but quotes are not mandatory. So "),a("em",[e._v("C:\\Program Files\\internet explorer\\iexplore.exe")]),e._v(" and "),a("em",[e._v('"C:\\Program Files\\internet explorer\\iexplore.exe"')]),e._v(" are equal and both working.")]),e._v(" "),a("li",[a("strong",[e._v("arguments [string]:")]),e._v(" the commandline arguments for the application (in mode START_APPLICATION) or the URL to open (in mode OPEN_URL)."),a("br"),e._v("\nFor Mode START_APPLICATION: Given arguments are split considering whitespaces and quotes. So e.g. the arguments property "),a("em",[e._v('xterm -e "sudo sh test.sh"')]),e._v(" will be split in 3 components "),a("em",[e._v("xterm")]),e._v(", "),a("em",[e._v("-e")]),e._v(" and "),a("em",[e._v('"sudo sh test.sh"')]),e._v(". However quotes are removed at runtime, so "),a("em",[e._v("sudo sh test.sh")]),e._v(" without quotes will be passed to the ProcessBuilder used at Java level to start the program."),a("br"),e._v('\nHint for Windows: for cmd.exe "&" is a special character and cannot be used in an argument. If the "&" is needed, mask it with an "^", therefore using "^&" instead of "&" in the argument.'),a("br"),e._v('\nFor Mode OPEN_URL: URLs can be passed as-is on any platform, no masking of "&" characters is needed.')]),e._v(" "),a("li",[a("strong",[e._v("workingDirectory [string]:")]),e._v(" the working directory for the application (. is used for home directory of the application)")]),e._v(" "),a("li",[e._v('**closeCmd [string]😗*Optional close cmd, e.g. if started cmd has forked processes (e.g. OSKA) use: taskkill.exe /IM "OSKA Keyboard.exe" /T')]),e._v(" "),a("li",[a("strong",[e._v("autoLaunch [boolean]:")]),e._v(" Defines if the default application is automatically launched at startup")]),e._v(" "),a("li",[a("strong",[e._v("autoClose [boolean]:")]),e._v(" Defines if the current application is closed when the model is stopped")]),e._v(" "),a("li",[a("strong",[e._v("onlyByEvent [boolean]:")]),e._v(" If this property is set to true, incoming application files names will not be started immediately (only the launchNow event will start the application)")])]),e._v(" "),a("EditLink")],1)},[],!1,null,null,null);t.default=i.exports},593:function(e,t,r){e.exports=r.p+"assets/img/applicationlauncher.9f17bcc1.jpg"}}]);