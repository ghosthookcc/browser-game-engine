/* all of the html related code is temporary GUI until it can be done with webgl2 */
// start html GUI
const overlay = document.querySelector("#overlay"); 
const ol_fps = document.querySelector("#FPS");
const ol_frame_time = document.querySelector("#FRAME_TIME");

export function set_fps(fps) { ol_fps.innerHTML = parseInt(fps);  }
export function set_frame_time(frame_time) { ol_frame_time.innerHTML = parseFloat(frame_time).toFixed(2); }

export function UpdateGUI()
{
	GHCC.GUI.set_fps(fps);
	GHCC.GUI.set_frame_time(frame_time);
}

// end html GUI