import { gl, ShaderObj } from "../globals.js";

import { Entity } from "./base/entity.base.js";

import { BasicMesh } from "../geometry/mesh/basic.mesh.js"

export class BasicEntity extends Entity
{
	constructor(mesh = new BasicMesh())
	{
		super(mesh);
		this.isBasicEntity = true;

		this.mesh = mesh;

		this.position = mesh.position;
		this.rotation = mesh.rotation;
	}

	update()
	{
		if (this.mesh.get_translation_status()) 
		{ 
			this.mesh.translate();
			this.mesh.set_translation_status(false); 
		}
		if (this.mesh.get_rotation_status()) 
		{ 
			this.mesh.rotate();
			this.mesh.set_rotation_status(false); 
		}
		
		ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("modelMatrix"), false, 
          	    	    	       this.mesh.getModViewMat());
	}

	draw()
	{
		gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
	}
}