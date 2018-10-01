<template>
  <div style="height: 100%;">
		<nav style="height: 23%">
	  	<!-- *************************** keyboard shortcuts******************************** -->
			<div id="pageAreas">
				<div id="pageAreasHeader">Shortcuts:</div>
				<ul>
					<li id="AKmenu" tabindex="0">menu: CTRL-0</li>
					<li id="AKactModelPanel" tabindex="0">model panel: CTRL-1</li>
					<li id="AKmodelDesigner" tabindex="0">model designer: CTRL-2</li>
					<li id="AKguiDesigner" tabindex="0">gui designer: CTRL-3</li>
					<li id="AKlistView" tabindex="0">list view: CTRL-4</li>
					<li id="AKPropertyEditor" tabindex="0">property editor: CTRL-5</li>
				</ul>
			</div>
	  <!-- ****************************** menu panel *********************************** -->
			<div id="menuPanel">
				<h1 class="menu_header">AsTeRICS Configuration Suite</h1>
				<div id="mainMenuPanel" class="tabpanel" role="menu">

					<ul id="mainMenuTablist" class="tablist" role="tablist">
						<li 
							id="tab1"
							class="tab menuTab"
							aria-controls="panel1"
							aria-selected="true"
							role="tab"
							tabindex="0">
							System
						</li>
						<li id="tab2" 
							class="tab menuTab"
							aria-controls="panel2"
							role="tab"
							aria-selected="false"
							tabindex="-1">
							Components
						</li>
						<li id="tab3" 
							class="tab menuTab"
							aria-controls="panel3"
							role="tab"
							aria-selected="false"
							tabindex="-1">
							Edit
						</li>
						<li id="tab4" 
							class="tab menuTab"
							aria-controls="panel4"
							role="tab"
							aria-selected="false"
							tabindex="-1">
							Misc.
						</li>
					</ul>

					<div id="panel1" class="panel menuPanel" aria-labelledby="tab1" role="tabpanel">
						<section style="width: 30%;" class="buttonGroup">
							<ul class="buttonList">
								<li>
									<button type="button" class="menuButton" id="connectAREBtn">
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/connect.png"
												alt="Connect to ARE"
											/>
											Connect<br />to ARE
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="disconnectAREBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/disconnect.png"
												alt="Disconnect from ARE"
											/>
											Disconnect<br />from ARE
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="uploadModelBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/Upload.png"
												alt="Upload model"
											/>
											Upload<br />Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="downloadModelBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/Download.png"
												alt="Download model"
											/>
											Download<br />Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="downloadCompCollBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/DownloadBundle.png"
												alt="Download component collection"
											/>
											Download<br />Component Collection
										</div>
									</button>
								</li>
							</ul>
							<h2>ARE</h2>
						</section>
						<section style="width: 30%;" class="buttonGroup">
							<ul class="buttonList">
								<li>
									<button type="button" class="menuButton" id="storeModelAREBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/storeup.png"
												alt="Store model on ARE"
											/>
											Store<br />Model on ARE
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="loadModelAREBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/storedown.png"
												alt="Load model from storage"
											/>
											Load Model<br />from Storage
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="activateStoredModelBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/storerun.png"
												alt="Activate a stored model"
											/>
											Activate a<br />Stored Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="deleteStoredModelBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/storedelete.png"
												alt="Delete a stored model"
											/>
											Delete a<br />Stored Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="setAsAutorunBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/autorun.png"
												alt="Set as autorun"
											/>
											Set as<br />Autorun
										</div>
									</button>
								</li>
							</ul>
							<h2>ARE Storage</h2>
						</section>
						<section style="width: 20%;" class="buttonGroup">
							<ul class="buttonList">
								<li>
									<button type="button" class="menuButton" id="startModelBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/StartModel.png"
												alt="Start model"
											/>
											Start<br />Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="pauseModelBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/PauseModel.png"
												alt="Pause model"
											/>
											Pause<br />Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="stopModelBtn" disabled>
										<div class="buttonContents">
											<img
												src="../../libraries/webacs/view/images/StopModel.png"
												alt="Stop model"
											/>
											Stop<br />Model
										</div>
									</button>
								</li>
							</ul>
							<h2>Model</h2>
						</section>
						<section style="width: 20%;" class="buttonGroup bg_right">
							<ul class="buttonList">
								<li>
									<button type="button" class="menuButton" id="newModelBtn">
										<div class="buttonContents">
											<img src="../../libraries/webacs/view/images/new.png" alt="New model" />
											New<br />Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="openModelBtn">
										<div class="buttonContents">
											<img src="../../libraries/webacs/view/images/open.png" alt="Open model" />
											Open<br />Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="closeModelBtn">
										<div class="buttonContents">
											<img src="../../libraries/webacs/view/images/Close.png" alt="Close model" />
											Close<br />Model
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="menuButton" id="saveModelBtn">
										<div class="buttonContents">
											<img src="../../libraries/webacs/view/images/save.png" alt="Save model" />
											Save<br />Model
										</div>
									</button>
								</li>
							</ul>
							<h2>Local</h2>
						</section>
					</div>

					<div id="panel2" class="panel menuPanel" aria-labelledby="tab2" role="tabpanel">
					<section class="buttonGroup">
						<ul class="buttonList componentsMenu">
							<li class="componentsMenu-item">
								<img src="../../libraries/webacs/view/images/sensor.png" alt="Sensors" />
									Sensors
									<ul id="sensorsBtnList" class="compMenuL1 compMenu hiddenMenu">
									</ul>
							</li>
							<li class="componentsMenu-item">
								<img src="../../libraries/webacs/view/images/processor.png" alt="Open model" />
									Processors
									<ul id="processorsBtnList" class="compMenuL1 compMenu hiddenMenu">
									</ul>
							</li>
							<li class="componentsMenu-item">
								<img src="../../libraries/webacs/view/images/actuator.png" alt="Save model" />
									Actuators
									<ul id="actuatorsBtnList" class="compMenuL1 compMenu hiddenMenu">
									</ul>
							</li>
						</ul>
						<h2>Components</h2>
					</section>	
					<section class="buttonGroup bg_right">
						<input id="quickselect" list="componentsDataList">
						<datalist id="componentsDataList">
						</datalist>
						<input id="insertButton" type="button" value="Insert"/>
						<label for="quickselect">Quickselect</label>
					</section>	
					</div>

					<div id="panel3" class="panel menuPanel" aria-labelledby="tab3" role="tabpanel">
					<section class="buttonGroup">
						<ul class="buttonList">
							<li>
								<button type="button" class="menuButton" id="editModelIDBtn" disabled>
									<div class="buttonContents">
										<img
											src="../../libraries/webacs/view/images/editModelName.png"
											alt="Edit Model ID"
										/>
										Edit<br />Model ID
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="showModelDescBtn" disabled>
									<div class="buttonContents">
										<img
											src="../../libraries/webacs/view/images/editModelDescription.png"
											alt="Edit Model Description"
										/>
										Show Model<br />Description
									</div>
								</button>
							</li>
						</ul>
						<h2>Model Properties</h2>
					</section>
					<section class="buttonGroup bg_right">
						<ul class="buttonList">
							<li>
								<button type="button" class="menuButton" id="cutBtn">
									<div class="buttonContents">
										<img src="../../libraries/webacs/view/images/cut.png" alt="Cut" />
										Cut
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="copyBtn">
									<div class="buttonContents">
										<img src="../../libraries/webacs/view/images/copy.png" alt="Copy" />
										Copy
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="pasteBtn">
									<div class="buttonContents">
										<img src="../../libraries/webacs/view/images/paste.png" alt="Paste" />
										Paste
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="deleteSelectionBtn">
									<div class="buttonContents">
										<img
											src="../../libraries/webacs/view/images/delete.png"
											alt="Delete Selection"
										/>
										Delete<br />Selection
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="undoBtn">
									<div class="buttonContents">
										<img
											src="../../libraries/webacs/view/images/undo.png"
											alt="Undo"
										/>
										Undo
										</div>
									</button>
								</li>
							<li>
								<button type="button" class="menuButton" id="redoBtn">
									<div class="buttonContents">
										<img
											src="../../libraries/webacs/view/images/redo.png"
											alt="Redo"
										/>
										Redo
									</div>
								</button>
							</li>
						</ul>
						<h2>Edit</h2>
					</section>
					</div>

					<div id="panel4" class="panel menuPanel" aria-labelledby="tab4" role="tabpanel">
					<section class="buttonGroup bg_right">
						<ul class="buttonList">
							<li>
								<button type="button" class="menuButton" id="componentCollMgrBtn" disabled>
									<div class="buttonContents">
										<img
											src="../../libraries/webacs/view/images/ConfigureBundle.png"
											alt="Component Collection Manager"
										/>
										Component<br />Collection Manager
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="optionsBtn" disabled>
									<div class="buttonContents">
										<img src="../../libraries/webacs/view/images/Options.png" alt="Options" />
										Options
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="printBtn" disabled>
									<div class="buttonContents">
										<img src="../../libraries/webacs/view/images/Printer.png" alt="Print" />
										Print
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="helpBtn" title="Help (F1)">
									<div class="buttonContents">
										<img src="../../libraries/webacs/view/images/Question.png" alt="Help (F1)" />
										Help
									</div>
								</button>
							</li>
							<li>
								<button type="button" class="menuButton" id="aboutBtn">
									<div class="buttonContents">
										<img src="../../libraries/webacs/view/images/about.png" alt="About" />
										About
									</div>
								</button>
							</li>
						</ul>
						<h2>Miscellaneous</h2>
					</section>
					</div>
				</div>    
			</div>
		</nav>


		<!-- ***************** canvas panel ******************** -->
		<section id="canvasMotherPanel" class="tabpanel" role="tabpanel">
			<ul id="canvasPanelTabList" class="tablist" role="tablist">
			</ul>
		</section>
 
		<!-- ************** property editor panel ************** -->
    <section id="propertyEditorMotherPanel">
			<ul id="propertyEditorTabList" class="tablist" role="tablist">
			</ul>
		</section>
	
		<!-- ************** status and zoom bar **************** -->
		<footer id="statusAndZoomBar">
			<div id="statusBar">
				<span class="bold">ARE status: </span>
				<span id="AREstatus">Disconnected</span>
				<span id="synchronisationStatus"></span>
			</div>	
			<div id="zoomBar">
				<span id="zoomPercent">100%</span>
				<input type="range" name="zoomSlider" id="zoomSlider" min="20" max="200" />
			</div>
		</footer>
	
		<!-- ************** dialog boxes *********************** -->
		<div id="loadModelFromStorageDialog" class="displayNone" title="Load Model from ARE Storage">
			<select name="files" id="loadModelFromStorageSelector">
				<option value="none">--- please choose file ---</option>
			</select>
		</div>
	
		<div id="storeModelOnAREDialog" class="displayNone" title="Store Model on ARE">
			<input type="text" id="storeModelFilename"/>
		</div>
	
		<div id="activateStoredModelDialog" class="displayNone" title="Activate Stored Model">
			<select name="files" id="activateStoredModelSelector">
				<option value="none">--- please choose file ---</option>
			</select>
		</div>

		<div id="deleteStoredModelDialog" class="displayNone" title="Delete Stored Model">
			<select name="files" id="deleteStoredModelSelector">
				<option value="none">--- please choose file ---</option>
			</select>
		</div>
  </div>
</template>

<script>
// external libraries
import "@/libraries/webacs/lib/jquery-1.11.1.min.js";
import "@/libraries/webacs/lib/jquery-ui-1.11.4.custom/jquery-ui.min.js";
// import "@/libraries/webacs/lib/jquery-ui-1.11.4.custom/jquery-ui.min.css";
// import "@/libraries/webacs/lib/loglevel.min.js";
// import "@/libraries/webacs/lib/kinetic-v5.1.0.min.js";
import "@/libraries/webacs/lib/FileSaver/FileSaver.min.js";
import "@/libraries/webacs/lib/Blob/Blob.js";
import "@/libraries/webacs/lib/rest_library/JSmap.js";
import "@/libraries/webacs/lib/rest_library/areCommunicator.js";

// namespace
import loadNameSpace from "@/libraries/webacs/acsNamespace.js";

// misc
import setupEventManager from "@/libraries/webacs/eventManager.js";

// model
import createConstants from "@/libraries/webacs/model/mConst.js";
import createClipboard from "@/libraries/webacs/model/clipBoard.js";
import createAction from "@/libraries/webacs/model/action.js";
import createAddEventChannelAction from "@/libraries/webacs/model/addEventChannelAction.js";
import createAddDataChannelAction from "@/libraries/webacs/model/addDataChannelAction.js";
import createAddComponentAction from "@/libraries/webacs/model/addComponentAction.js";
import createAddItemsAction from "@/libraries/webacs/model/addItemsAction.js";
import createRemoveItemListAction from "@/libraries/webacs/model/removeItemListAction.js";
import createDragDropAction from "@/libraries/webacs/model/dragDropAction.js";
import createGuiDragDropAction from "@/libraries/webacs/model/guiDragDropAction.js";
import createGuiResizeAction from "@/libraries/webacs/model/guiResizeAction.js";
import createProperty from "@/libraries/webacs/model/property.js";
import createChannel from "@/libraries/webacs/model/channel.js";
import createDataChannel from "@/libraries/webacs/model/dataChannel.js";
import createEventChannel from "@/libraries/webacs/model/eventChannel.js";
import createPort from "@/libraries/webacs/model/port.js";
import createEvent from "@/libraries/webacs/model/event.js";
import createGui from "@/libraries/webacs/model/gui.js";
import createModelGui from "@/libraries/webacs/model/modelGui.js";
import createMetaData from "@/libraries/webacs/model/metaData.js";
import createVisualAreaMaker from "@/libraries/webacs/model/visualAreaMarker.js";
import createComponent from "@/libraries/webacs/model/component.js";
import createGroupComponent from "@/libraries/webacs/model/groupComponent.js";
import createModel from "@/libraries/webacs/model/model.js";
import createModelList from "@/libraries/webacs/model/modelList.js";
import createAreStatus from "@/libraries/webacs/model/areStatus.js";

// view
import createView from "@/libraries/webacs/view/view.js";
import createVConst from "@/libraries/webacs/view/vConst.js";
import createTabPanel from "@/libraries/webacs/view/tabPanel.js";
import createVisualAreaMarkerView from "@/libraries/webacs/view/visualAreaMarkerView.js";
import createComponentView from "@/libraries/webacs/view/componentView.js";
import createGroupComponentView from "@/libraries/webacs/view/groupComponentView.js";
import createGuiViewElement from "@/libraries/webacs/view/guiViewElement.js";
import createGuiView from "@/libraries/webacs/view/guiView.js";
import createChannelView from "@/libraries/webacs/view/channelView.js";
import createEventChannelView from "@/libraries/webacs/view/eventChannelView.js";
import createDataChannelView from "@/libraries/webacs/view/dataChannelView.js";
import createModelView from "@/libraries/webacs/view/modelView.js";
import createMenuView from "@/libraries/webacs/view/menuView.js";
import createCanvasView from "@/libraries/webacs/view/canvasView.js";
import createPropertyEditor from "@/libraries/webacs/view/propertyEditor.js";
import createEditorProperties from "@/libraries/webacs/view/editorProperties.js";
import createListComponentView from "@/libraries/webacs/view/listComponentView.js";
import createListView from "@/libraries/webacs/view/listView.js";

// main script
import createWebACS from "@/libraries/webacs/webACS.js";

import * as Kinetic from "kinetic";
import * as log from "loglevel";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      WebACS: null
    };
  },
  computed: {
    ...mapGetters(["webapp"])
  },
  mounted() {
    this.$store.commit("setWebACSVisibility", true);
    let ACS = {};
    loadNameSpace(ACS);
    setupEventManager(ACS);

    // model
    createConstants(ACS);
    createClipboard(ACS);
    createAction(ACS);
    createAddEventChannelAction(ACS);
    createAddDataChannelAction(ACS);
    createAddComponentAction(ACS);
    createAddItemsAction(ACS);
    createRemoveItemListAction(ACS);
    createDragDropAction(ACS);
    createGuiDragDropAction(ACS);
    createGuiResizeAction(ACS);
    createProperty(ACS);
    createChannel(ACS);
    createDataChannel(ACS);
    createEventChannel(ACS);
    createPort(ACS);
    createEvent(ACS);
    createGui(ACS);
    createModelGui(ACS);
    createMetaData(ACS);
    createVisualAreaMaker(ACS);
    createComponent(ACS);
    createGroupComponent(ACS);
    createModel(ACS, log);
    createModelList(ACS);
    createAreStatus(ACS);

    // view
    createView(ACS);
    createVConst(ACS);
    createTabPanel(ACS);
    createVisualAreaMarkerView(ACS);
    createComponentView(ACS, Kinetic);
    createGroupComponentView(ACS);
    createGuiViewElement(ACS, Kinetic);
    createGuiView(ACS, Kinetic);
    createChannelView(ACS, Kinetic);
    createEventChannelView(ACS);
    createDataChannelView(ACS);
    createModelView(ACS, Kinetic);
    createMenuView(ACS, log);
    createCanvasView(ACS);
    createPropertyEditor(ACS);
    createEditorProperties(ACS);
    createListComponentView(ACS);
    createListView(ACS);

    // main script
    createWebACS(ACS);

    this.WebACS = ACS.webACS();
  }
};
</script>

<style scoped>
@import "../../libraries/webacs/styles/webACS.css";
@import "../../libraries/webacs/lib/jquery-ui-1.11.4.custom/jquery-ui.min.css";
</style>
