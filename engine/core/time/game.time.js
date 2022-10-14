import { Time } from "./base/time.base.js";

export class GameTime extends Time 
{
	fps = 144
	_DeltaTime = 0.0;
	constructor()
	{
		super(true);
	}

	DeltaTime()
	{
		super.elapsed_time();
		this._DeltaTime = Time.prototype._elapsed;
		return this._DeltaTime;
	}

	async next_frame(render)
	{
    	let FullFrameTime = 1000.0 / this.fps;
    	if (this._DeltaTime < FullFrameTime)
    	{
        	const DeltaCurrFrame = FullFrameTime - this._DeltaTime;
        	setTimeout(function()
        	{
            	render();
        	}, DeltaCurrFrame);
    	} else { render(); }

		this.DeltaTime();
    	let frame_time = FullFrameTime - this._DeltaTime;
    	return frame_time;
	};
}