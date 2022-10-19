import { gl } from "../globals.js";

import { GLBuffer } from "./base/buffer.base.js";

export class VAO extends GLBuffer
{
	constructor()
	{
		super();
		this.attribs = {};

		this.vao_buffers = new Array();
		this.curr_vao = -1;
	}

	get_vaos()
	{
		return this.vao_buffers;
	}

	get_curr_vao()
	{
		return this.curr_vao;
	}
	set_curr_vao(buffer)
	{
		this.curr_vao = buffer;
	}

	Buffer(buffer_type, bind_new)
	{
		this.set_curr_vao(gl.createVertexArray());
		let vaos = this.get_vaos();
		vaos.push(this.get_curr_vao());
		if (bind_new) this.BindBuffer(buffer_type);
	}

	BindBuffer()
	{
		let DidBind = false;
		if (this.get_curr_vao() != -1)
		{
			gl.bindVertexArray(this.get_curr_vao());
			DidBind = true;
		}
		return DidBind;
	}

	BindSpecificBuffer(buffer)
	{
		let DidBind = false;
		if (this.get_vaos().includes(buffer))
		{
			gl.bindVertexArray(buffer);
			DidBind = true;
		}
		return DidBind;
	}

	UnbindBuffer()
	{
		/*
		for (let idx = 0; idx < Object.keys(this.attribs).length; idx++)
		{
			this.DisableVertexAttrib(this.attribs[idx]);
		}
		*/
	}

	VertexAttribPtr(attrib_idx, size_per_pair, type, normalized, stride, data_start_ptr)
	{
		gl.vertexAttribPointer(attrib_idx, size_per_pair, type, normalized, stride, data_start_ptr);
	}

	EnableVertexAttrib(attrib_idx)
	{
		gl.enableVertexAttribArray(attrib_idx);
	}

	DisableVertexAttrib(attrib_idx)
	{
		gl.disableVertexAttribArray(attrib_idx);
	}

	AddAttrib(key_name, attrib_idx)
	{
		this.attribs[key_name] = attrib_idx;
	}
}