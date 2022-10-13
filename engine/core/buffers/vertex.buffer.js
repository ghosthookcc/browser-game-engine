import { gl } from "../globals.js";

import { GLBuffer } from "./base/buffer.base.js";

export class VBO extends GLBuffer
{
	constructor()
	{
		super();
	}

	Buffer(buffer_type, bind_new)
	{
		GLBuffer.prototype.curr_buffer = gl.createBuffer();
		GLBuffer.prototype.buffers.push(GLBuffer.prototype.curr_buffer);
		if (bind_new === true)
		{
			super.BindBuffer(buffer_type);
		}
	}

	BufferData(buffer_type, data)
	{
		gl.bufferData(buffer_type, data, gl.STATIC_DRAW);     
	}  
}