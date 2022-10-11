export class Time
{
	start_time = undefined;
	constructor(autostart)
	{
		if (autostart === true) { this.start(); }  
	}

	start()
	{
		Time.prototype.active = true;
		if (this.start_time === undefined)
		{
			this.start_time = this.now();		
			Time.prototype.now = this.now;
			Time.prototype.prev_time = 0.0;
			Time.prototype._elapsed = 0.0;
			Time.prototype.elapsed_time = function elapsed_time()
			{
				Time.prototype._elapsed = (Time.prototype.now.call() - this.prev_time) / 1000;
				this.prev_time = Time.prototype.now.call();
			}
		}
		else 
		{
			return "[-] Clock is already active . . .";
		}
		return Time.prototype.active;
	}

	stop()
	{
		Time.prototype.prev_time = undefined;
		Time.prototype._elapsed = undefined;
		Time.prototype.elapsed_time = undefined;
		this.start_time = undefined;
		Time.prototype.active = false;
	}

	now()
	{
		return (typeof performance === "undefined" ? Date : performance).now();
	}
}