import { gl } from "../globals.js";

import { Renderer } from "./base/renderer.base.js";

export class WebGLRenderer extends Renderer
{
	constructor()
	{
		super();
	}

	draw()
	{
		super.PREP_CANVAS();
	}
}