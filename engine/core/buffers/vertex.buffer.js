import { gl } from "../globals.js";

import { GLBuffer } from "./base/buffer.base.js";

export class VBO extends GLBuffer
{
	constructor()
	{
		super();

		this.vbo_buffers = new Array();
		this.curr_vbo = -1;  
	}

	get_vbos()
	{
		return this.vbo_buffers;
	}

	get_curr_vbo()
	{
		return this.curr_vbo;
	}
	set_curr_vbo(buffer)
	{
		this.curr_vbo = buffer;
	}

	Buffer(buffer_type, bind_new)
	{
		this.set_curr_vbo(gl.createBuffer());
		let vbos = this.get_vbos();
		vbos.push(this.get_curr_vbo());
		if (bind_new) this.BindBuffer(buffer_type);
	}

	BindBuffer(buffer_type)
	{
		let DidBind = false;
		if (this.get_curr_vbo() != -1)
		{
			gl.bindBuffer(buffer_type, this.get_curr_vbo());
			DidBind = true;
		}
		return DidBind;
	}

	BindSpecificBuffer(buffer_type, buffer)
	{
		let DidBind = false;
		if (this.get_vbos().includes(buffer))
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