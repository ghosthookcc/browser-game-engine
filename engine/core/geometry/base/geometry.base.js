import { gl } from "../../globals.js";

import { BasicMesh } from "../mesh/basic.mesh.js";

export class Geometry extends BasicMesh 
{
	constructor()
	{
		super();
		this.verts = null;
		this.colors = null;
		Geometry.prototype.indcs = null;
	}

	set_vertices(vertices)
	{
		this.verts = vertices;
	}

	set_colors(colors)
	{
		this.colors = colors;
	}

	set_mesh()
	{
		super.set_geometry({ 
								verts: new Float32Array(this.verts),
						    	colors: new Float32Array(Geometry.prototype.colors),
								indcs: new Uint16Array(Geometry.prototype.indcs) 
						   });	
	}
}