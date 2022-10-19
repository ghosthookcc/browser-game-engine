import { BasicMesh } from "../mesh/basic.mesh.js";

export class Geometry
{
	constructor()
	{
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
}