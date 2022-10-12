import { gl } from "../globals.js";

import { Renderer } from "./base/renderer.base.js";

export class WebGL2Renderer extends Renderer
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