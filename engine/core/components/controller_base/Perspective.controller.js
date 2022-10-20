import { math, PerspectiveObj } from "../../globals.js";

import { Component } from "../all_base/component.base.js";

export class PerspectiveController
{
	constructor(entity)
	{
		this.isFrameComponent = false;

		this.component_name = "PerspectiveController";
		this.callback_func = this.move;

		this.entity = entity;
		if (this.entity.isBasicEntity) this.entity.position = this.entity.mesh.position;

		document.addEventListener("keydown", (event) =>
		{
			this.callback_func(event.key);	
		});
	}

	move(key_pressed)
	{
		switch (key_pressed)
		{
			case "w":
				this.MoveForwardZ();
				break;
			case "a":
				this.MoveLeftX();
				break;
			case "s":
				this.MoveBackwardsZ();
				break;
			case "d":
				this.MoveRightX();
				break;
			default:
				break;
		}
	}
	
	MoveForwardZ()
	{
		this.entity.position.z += 0.5;
		this.entity.position.translating = true;
	}
	MoveBackwardsZ()
	{
		this.entity.position.z -= 0.5;
		this.entity.position.translating = true;
	}

	MoveLeftX()
	{
		this.entity.position.x = this.entity.position.add(math.Vec3(0.0, 0.0, -1.0)
														 .cross(math.Vec3(0.0, 1.0, 0.0))
														 .normalize()).x;
		this.entity.position.translating = true;
	}
	MoveRightX()
	{
		this.entity.position.x = this.entity.position.subtract(math.Vec3(0.0, 0.0, -1.0)
															  .cross(math.Vec3(0.0, 1.0, 0.0))
															  .normalize()).x;
		this.entity.position.translating = true;
	}

	MoveUpY()
	{
		this.entity.position.translating = true;
	}
	MoveDownY()
	{
		this.entity.position.translating = true;
	}
}