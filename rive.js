const charFace = 1;
const charHair = 1;
const charHairColor = 1;
const charSkin = 1;

const stateMachine = "selector";

const riveInstance = new rive.Rive({
	src: "the_arcane-face.riv", //get rive file
	canvas: document.getElementById("rive"), //get correct canvas
	autoplay: true,
	stateMachines: stateMachine, // get correct stateMachine
	automaticallyHandleEvents: true, // Automatically handle RiveHTTPEvents
	onLoad: onLoadHandler,
	autoBind: true,
});

// Handle the onLoad event
function onLoadHandler() {
	// Prevent a blurry canvas by using the device pixel ratio
	riveInstance.resizeDrawingSurfaceToCanvas();

	riveInstance.setNumberStateAtPath("face", charFace, "Avatar");
	riveInstance.setNumberStateAtPath("skin", charSkin, "Avatar");
	riveInstance.setNumberStateAtPath("hair", charHair, "Avatar");
	riveInstance.setNumberStateAtPath("hairColor", charHairColor, "Avatar");
}

// Resize the drawing surface if the window resizes
window.addEventListener(
	"resize",
	() => {
		riveInstance.resizeDrawingSurfaceToCanvas();
	},
	false
);
