import { gl } from "../../globals.js";

export class GLBuffer 
{
	constructor()
	{
		GLBuffer.prototype.buffers = new Array();
		GLBuffer.prototype.curr_buffer = -1;  
	}

	BindBuffer(buffer_type)
	{
		let DidBind = false;
		if (GLBuffer.prototype.curr_buffer != -1)
		{
			gl.bindBuffer(buffer_type, GLBuffer.prototype.curr_buffer);
			DidBind = true;
		}
		return DidBind;
	}

	BindSpecificBuffer(buffer_type, buffer)
	{
		let DidBind = false;
		if (GLBuffer.prototype.buffers.includes(buffer))
		{
			gl.bindBuffer(buffer_type, buffer);
			DidBind = true;
		}
		return DidBind;
	}
}