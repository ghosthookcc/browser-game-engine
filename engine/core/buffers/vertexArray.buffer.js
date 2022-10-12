import { gl } from "../globals.js";

import { GLBuffer } from "./base/buffer.base.js";

export class VAO extends GLBuffer
{
	constructor()
	{
		super();
	}

	VertexAttribPtr(attrib_idx, size_per_pair, type, normalized, stride, data_start_ptr)
	{
		gl.vertexAttribPointer(attrib_idx, size_per_pair, type, normalized, stride, data_start_ptr);
	}

	EnableVertexAttrib(attrib_idx)
	{
		gl.enableVertexAttribArray(attrib_idx);
	}

	GetAttribLoc(program, attrib_name)
	{
		gl.getAttribLocation(GLBuffer.prototype.ShaderObj.getProgram(), attrib_name);
	}
}