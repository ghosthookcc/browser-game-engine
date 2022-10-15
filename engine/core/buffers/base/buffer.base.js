import { gl } from "../../globals.js";

export class GLBuffer 
{
	constructor()
	{
		this.vbo_buffers = new Array();
		this.curr_vbo = -1;  
		
		this.vao_buffers = new Array();
		this.curr_vao = -1;
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
}