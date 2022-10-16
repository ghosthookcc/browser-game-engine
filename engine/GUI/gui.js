/* all of the html related code is temporary GUI until it can be done with webgl2 */
// start html GUI
const overlay = document.querySelectorAll(".overlay")[0]; 
const ol_fps = document.querySelectorAll(".FPS")[0];
const ol_frame_time = document.querySelectorAll(".FRAME_TIME")[0];

export function set_fps(fps) { ol_fps.innerHTML = parseInt(fps);  }
export function set_frame_time(frame_time) { ol_frame_time.innerHTML = parseFloat(frame_time).toFixed(2); }
// end html GUI