import { Component } from "../all_base/component.base.js";

export class PerspectiveController extends Component
{
	constructor(entity)
	{
		super();
		this.event_name = "MovePerspective";
		return this;
	}
}