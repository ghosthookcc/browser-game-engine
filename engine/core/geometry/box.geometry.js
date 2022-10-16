import { gl, math, PerspectiveObj, ShaderObj } from "../globals.js";

import { Geometry } from "./base/geometry.base.js";

import { VAO } from "../buffers/vertexArray.buffer.js";
import { VBO } from "../buffers/vertex.buffer.js";

export class Box extends Geometry
{
	constructor(sizeX, sizeY, sizeZ)
	{
		super();

		this.VBO_OBJ = new VBO();
		this.VAO_OBJ = new VAO();

		this.VBO_OBJ.Buffer(gl.ARRAY_BUFFER, true);
		this.pos_attrib_loc = ShaderObj.getAttribLoc("in_position");
		this.VAO_OBJ.AddAttrib("in_position", this.pos_attrib_loc);

		this.VAO_OBJ.Buffer(true);
		this.VAO_OBJ.BindBuffer();
		
		this.VAO_OBJ.VertexAttribPtr(this.pos_attrib_loc, 3, gl.FLOAT, false, 0, 0);
		this.VAO_OBJ.EnableVertexAttrib(this.pos_attrib_loc);
		
		this.verts = 
		[
    		// Front face
    		-sizeX, -sizeY,  sizeZ,
    		 sizeX, -sizeY,  sizeZ,
    		 sizeX,  sizeY,  sizeZ,
    		-sizeX,  sizeY,  sizeZ,

    		// Back face
    		-sizeX, -sizeY, -sizeZ,
    		-sizeX,  sizeY, -sizeZ,
    		 sizeX,  sizeY, -sizeZ,
    		 sizeX, -sizeY, -sizeZ,

    		// Top face
    		-sizeX,  sizeY, -sizeZ,
    		-sizeX,  sizeY,  sizeZ,
    		 sizeX,  sizeY,  sizeZ,
    		 sizeX,  sizeY, -sizeZ,

    		// Bottom face
    		-sizeX, -sizeY, -sizeZ,
    		 sizeX, -sizeY, -sizeZ,
    		 sizeX, -sizeY,  sizeZ,
    		-sizeX, -sizeY,  sizeZ,

    		// Right face
    		sizeX, -sizeY, -sizeZ,
    		sizeX,  sizeY, -sizeZ,
    		sizeX,  sizeY,  sizeZ,
    		sizeX, -sizeY,  sizeZ,

   	 		// Left face
    		-sizeX, -sizeY, -sizeZ,
    		-sizeX, -sizeY,  sizeZ,
    		-sizeX,  sizeY,  sizeZ,
    		-sizeX,  sizeY, -sizeZ,
		];
		this.VBO_OBJ.BufferData(gl.ARRAY_BUFFER, new Float32Array(this.verts)); 

		this.VBO_OBJ.Buffer(gl.ARRAY_BUFFER, true);
		this.color_attrib_loc = ShaderObj.getAttribLoc("in_color");
		this.VAO_OBJ.AddAttrib("in_color", this.color_attrib_loc);

		this.VAO_OBJ.VertexAttribPtr(this.color_attrib_loc, 3, gl.FLOAT, false, 0, 0);
		this.VAO_OBJ.EnableVertexAttrib(this.color_attrib_loc);

		const base_colors = 
		[
    		[1.0,  1.0,  0.0, 1.0],    // Front face: red_green_mix
    		[0.6,  0.0,  0.0, 0.0],    // Back face: dark_red
    		[0.0,  0.8,  0.0, 1.0],    // Top face: light_green
    		[0.0,  0.0,  1.0, 1.0],    // Bottom face: blue
    		[0.4,  0.8,  0.2, 1.0],    // Right face: some_rgb_value
    		[1.0,  0.0,  1.0, 1.0],    // Left face: purple
		];

		this.colors = [];
		var temp = [];
		for (var j = 0; j < base_colors.length; j++) 
		{
    		const c = base_colors[j];
 			this.colors = this.colors.concat(c, c, c, c);
		}
		this.VBO_OBJ.BufferData(gl.ARRAY_BUFFER, new Float32Array(this.colors));   

		this.VBO_OBJ.Buffer(gl.ELEMENT_ARRAY_BUFFER, true);
		Geometry.prototype.indcs = 
		[
    		0,  1,  2,    0,  2,  3,    // Front face
    		4,  5,  6,    4,  6,  7,    // Back face
    		8,  9,  10,   8,  10, 11,   // Top face
    		12, 13, 14,   12, 14, 15,   // Bottom face
    		16, 17, 18,   16, 18, 19,   // Right face
    		20, 21, 22,   20, 22, 23,   // Left face
		];
		this.VBO_OBJ.BufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(Geometry.prototype.indcs));  

		super.set_vertices(this.verts);
		super.set_mesh();
	}

	update()
	{
		if (super.get_translation_status()) 
		{ 
			super.translate();
			super.set_translation_status(false); 
		}
		if (super.get_rotation_status()) 
		{ 
			super.rotate();
			super.set_rotation_status(false); 
		}
	    ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("modelMatrix"), false, 
           	        	           super.getModViewMat());
	}

	draw()
	{
		gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
	}
}