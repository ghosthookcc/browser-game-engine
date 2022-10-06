import { gl } from "../core/globals.js";
import { normal_vert_source, normal_frag_source } from "./shaders/normal.shader.js"; 

export const SHADERSOURCES = Object.freeze(
{
	normal: [normal_vert_source, normal_frag_source]
});

export class Shader
{	
	vert_shader = undefined;
	frag_shader = undefined;
	
	_programs = [];
	_curr_program = undefined 
	constructor(shader_source = SHADERSOURCES.normal)
	{
		let new_program = this._newProgram();
		this._programs.push(new_program);
		this._curr_program = new_program;
		this.loadShader(shader_source);
		gl.useProgram(this._curr_program);
	}

	loadShader(shader_source)
	{
		this.vert_shader = gl.createShader(gl.VERTEX_SHADER) ?? undefined;
		gl.shaderSource(this.vert_shader, shader_source[0]);
		gl.compileShader(this.vert_shader);
		this._checkShaderErrors(this.vert_shader, gl.COMPILE_STATUS);

		this.frag_shader = gl.createShader(gl.FRAGMENT_SHADER) ?? undefined;
		gl.shaderSource(this.frag_shader, shader_source[1]);
		gl.compileShader(this.frag_shader);
		this._checkShaderErrors(this.frag_shader, gl.COMPILE_STATUS);

		gl.attachShader(this._curr_program, this.vert_shader);
		gl.attachShader(this._curr_program, this.frag_shader);

		gl.linkProgram(this._curr_program);
		this._checkShaderErrors(this._curr_program, gl.LINK_STATUS);
	}

	getProgram()
	{
		return this._curr_program;
	}

	getUniformLoc(uniform_name)
	{
		return gl.getUniformLocation(this._curr_program, uniform_name);
	}

	setUniformMat4fv(uniform_loc, transpose, mat4)
	{
		gl.uniformMatrix4fv(uniform_loc, transpose, mat4);
	}

	_checkShaderErrors(shader_obj, type)
	{
		let error = undefined;
		if (type === gl.COMPILE_STATUS)
		{
			if (!gl.getShaderParameter(shader_obj, type)) 
			{
   				error = type;
    			alert(`An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader_obj)}`);
			}
		}
		else if (type === gl.LINK_STATUS)
		{
			if (!gl.getProgramParameter(shader_obj, type)) 
  			{
  				error = type;
    			alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(shader_obj)}`);
  			}
		}

		if (error != undefined)
		{
			gl.deleteShader(this.vert_shader);
			gl.deleteShader(this.frag_shader);
    		this.loadShader(SHADERSOURCES.normal);
		}
	}

	_newProgram()
	{
		return gl.createProgram();
	}
}