import { InvisibleEntity } from "../../entities/invisible.entity.js";

import { BasicMesh } from "../../geometry/mesh/basic.mesh.js";

export class Camera extends InvisibleEntity
{
	constructor(mesh, start_pos, start_rot)
	{
		super(mesh);
	}
}