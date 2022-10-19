import { gl, math, PerspectiveObj, ShaderObj } from "../globals.js";

import { Geometry } from "./base/geometry.base.js";

import { BasicMesh } from "./mesh/basic.mesh.js";

export class Box extends Geometry
{
	constructor(sizeX, sizeY, sizeZ)
	{
		super();
		
		let mesh = new BasicMesh(); 

		mesh.VBO_OBJ.Buffer(gl.ARRAY_BUFFER, true);
		const pos_attrib_loc = ShaderObj.getAttribLoc("in_position");
		mesh.VAO_OBJ.AddAttrib("in_position", pos_attrib_loc);

		mesh.VAO_OBJ.Buffer(true);
		mesh.VAO_OBJ.BindBuffer();
		
		mesh.VAO_OBJ.VertexAttribPtr(pos_attrib_loc, 3, gl.FLOAT, false, 0, 0);
		mesh.VAO_OBJ.EnableVertexAttrib(pos_attrib_loc);
		
		const verts = 
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
		mesh.VBO_OBJ.BufferData(gl.ARRAY_BUFFER, new Float32Array(verts)); 

		mesh.VBO_OBJ.Buffer(gl.ARRAY_BUFFER, true);
		const color_attrib_loc = ShaderObj.getAttribLoc("in_color");
		mesh.VAO_OBJ.AddAttrib("in_color", color_attrib_loc);

		mesh.VAO_OBJ.VertexAttribPtr(color_attrib_loc, 3, gl.FLOAT, false, 0, 0);
		mesh.VAO_OBJ.EnableVertexAttrib(color_attrib_loc);

		const base_colors = 
		[
    		[1.0,  1.0,  0.0, 1.0],    // Front face: red_green_mix
    		[0.6,  0.0,  0.0, 0.0],    // Back face: dark_red
    		[0.0,  0.8,  0.0, 1.0],    // Top face: light_green
    		[0.0,  0.0,  1.0, 1.0],    // Bottom face: blue
    		[0.4,  0.8,  0.2, 1.0],    // Right face: some_rgb_value
    		[1.0,  0.0,  1.0, 1.0],    // Left face: purple
		];

		let colors = [];
		let temp = [];
		for (var j = 0; j < base_colors.length; j++) 
		{
    		const c = base_colors[j];
 			colors = colors.concat(c, c, c, c);
		}
		mesh.VBO_OBJ.BufferData(gl.ARRAY_BUFFER, new Float32Array(colors));   

		mesh.VBO_OBJ.Buffer(gl.ELEMENT_ARRAY_BUFFER, true);
		Geometry.prototype.indcs = 
		[
    		0,  1,  2,    0,  2,  3,    // Front face
    		4,  5,  6,    4,  6,  7,    // Back face
    		8,  9,  10,   8,  10, 11,   // Top face
    		12, 13, 14,   12, 14, 15,   // Bottom face
    		16, 17, 18,   16, 18, 19,   // Right face
    		20, 21, 22,   20, 22, 23,   // Left face
		];
		mesh.VBO_OBJ.BufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(Geometry.prototype.indcs));  

		super.set_vertices(verts);
		return mesh;
	}
}