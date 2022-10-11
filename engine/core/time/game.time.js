import { Time } from "./base/time.base.js";

export class GameTime extends Time 
{
	constructor()
	{
		super(true);
	}

	DeltaTime()
	{
		super.elapsed_time();
		return Time.prototype._elapsed;
	}
}