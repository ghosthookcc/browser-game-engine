import { gl } from "../globals.js";

import { GLBuffer } from "./base/buffer.base.js";

export class VAO extends GLBuffer
{
	constructor()
	{
		super();
		this.attribs = {};
	}

	Buffer(buffer_type, bind_new)
	{
		super.set_curr_vao(gl.createVertexArray());
		let vaos = super.get_vaos();
		vaos.push(super.get_curr_vao());
		if (bind_new) this.BindBuffer(buffer_type);
	}

	BindBuffer()
	{
		let DidBind = false;
		if (super.get_curr_vao() != -1)
		{
			gl.bindVertexArray(super.get_curr_vao());
			DidBind = true;
		}
		return DidBind;
	}

	BindSpecificBuffer(buffer)
	{
		let DidBind = false;
		if (super.get_vaos().includes(buffer))
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