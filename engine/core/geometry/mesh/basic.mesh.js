import { Mesh } from "./base/mesh.base.js";

export class BasicMesh extends Mesh
{
	constructor()
	{
		super();
		BasicMesh.prototype.Geometry = null;
	}
}