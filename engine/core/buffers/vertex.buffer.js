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
		super.set_curr_vbo(gl.createBuffer());
		let vbos = super.get_vbos();
		vbos.push(super.get_curr_vbo());
		if (bind_new) this.BindBuffer(buffer_type);
	}

	BindBuffer(buffer_type)
	{
		let DidBind = false;
		if (super.get_curr_vbo() != -1)
		{
			gl.bindBuffer(buffer_type, super.get_curr_vbo());
			DidBind = true;
		}
		return DidBind;
	}

	BindSpecificBuffer(buffer_type, buffer)
	{
		let DidBind = false;
		if (super.get_vbos().includes(buffer))
		{
			gl.bindBuffer(buffer_type, buffer);
			DidBind = true;
		}
		return DidBind;
	}

	BufferData(buffer_type, data)
	{
		gl.bufferData(buffer_type, data, gl.STATIC_DRAW);     
	}  
}