import { gl } from "../../globals.js";

import { BasicMesh } from "../mesh/basic.mesh.js";

export class Geometry extends BasicMesh 
{
	constructor()
	{
		super();
		Geometry.prototype.verts = null;
		Geometry.prototype.colors = null;
		Geometry.prototype.indcs = null;
	}

	set_mesh()
	{
		BasicMesh.prototype.Geometry = { 
									   	 verts: new Float32Array(Geometry.prototype.verts),
										 colors: new Float32Array(Geometry.prototype.colors),
										 indcs: new Uint16Array(Geometry.prototype.indcs) 
									   };	
	}
}