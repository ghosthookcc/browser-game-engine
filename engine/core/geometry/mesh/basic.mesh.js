import { Mesh } from "./base/mesh.base.js";

export class BasicMesh extends Mesh
{
	constructor()
	{
		super();
		this.Geometry = null;
	}

	set_geometry(geometry)
	{
		this.Geometry = geometry;
	}
}