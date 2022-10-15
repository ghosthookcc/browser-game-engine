import { gl } from "../globals.js";

import { Renderer } from "./base/renderer.base.js";

import { Box } from "../geometry/box.geometry.js";

import * as GUI from "../../GUI/gui.js";
import { state, engine_states } from "../engine.state.js";
import { GameTime } from "../time/game.time.js";

export class WebGLRenderer extends Renderer
{
	DeltaTime = 0.0;
	constructor(callback)
	{
		super();
		this._renderer_time = new GameTime();
		this._renderer_loop = callback; 
		this._renderer_scenes = new Array();
		window.onload = () => callback();
	}

	add(renderer_scene)
	{
		this._renderer_scenes.push(renderer_scene);
	}

	async render()
	{
		if (state === engine_states.STOPPED) return 0;

		this.DeltaTime = this._renderer_time.DeltaTime();

		if (state != engine_states.PAUSED)
    	{
			super.PREP_CANVAS();
			this._renderer_scenes.forEach(renderer_scene => 
			{
				renderer_scene.Render();
			});
		}

		const fps = Math.round(1.0 / this.DeltaTime);
    	GUI.set_fps(fps);
    	GUI.set_frame_time(1000.0 / fps);
		await this._renderer_time.next_frame(this._renderer_loop);
	}
}