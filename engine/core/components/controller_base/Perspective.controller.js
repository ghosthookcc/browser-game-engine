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
			case "q":
				this.MoveUpY();
				break;
			case "e":
				this.MoveDownY();
				break;
			case "ArrowUp":
				this.RotateUpX();
				break;
			case "ArrowLeft":
				this.RotateLeftY();
				break;
			case "ArrowRight":
				this.RotateRightY();
				break;
			case "ArrowDown":
				this.RotateDownY();
				break;
			case ",":
				this.RotateLeftZ();
				break;
			case ".":
				this.RotateRightZ();
				break;
			default:
				break;
		}
	}
	
	MoveForwardZ()
	{
		this.entity.position.z += 0.2;
	}
	MoveBackwardsZ()
	{
		this.entity.position.z -= 0.2;
	}
	MoveLeftX()
	{
		this.entity.position.x = this.entity.position.vec.add(math.Vec3(0.0, 0.0, -1.0)
														 .cross(math.Vec3(0.0, 1.0, 0.0))
														 .normalize()).x;
	}
	MoveRightX()
	{
		this.entity.position.x = this.entity.position.vec.subtract(math.Vec3(0.0, 0.0, -1.0)
													     .cross(math.Vec3(0.0, 1.0, 0.0))
													     .normalize()).x;
	}
	MoveUpY()
	{
		this.entity.position.y -= 0.2;
	}
	MoveDownY()
	{
		this.entity.position.y += 0.2;
	}

	RotateUpX()
	{
		this.entity.rotation.x += math.DegToRad(1.0);
	}
	RotateLeftY()
	{
		this.entity.rotation.y += math.DegToRad(1.0);
	}
	RotateRightY()
	{
		this.entity.rotation.y -= math.DegToRad(1.0);
	}
	RotateDownY()
	{
		this.entity.rotation.x -= math.DegToRad(1.0);
	}
	RotateLeftZ()
	{
		this.entity.rotation.z += math.DegToRad(1.0);
	}
	RotateRightZ()
	{
		this.entity.rotation.z -= math.DegToRad(1.0);
	}
}