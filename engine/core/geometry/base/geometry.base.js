import { gl } from "../../globals.js";

export class Geometry 
{
	constructor()
	{
		Geometry.prototype.verts = new Float32Array();
		Geometry.prototype.indcs = new Uint16Array();
	}
}