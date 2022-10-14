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
		this._game_time = new GameTime();
		this._game_loop = callback; 
		this._game_objs = new Array();
		window.onload = () => callback();
	}

	add(game_obj)
	{
		this._game_objs.push(game_obj);
	}

	async render()
	{
		if (state === engine_states.STOPPED) return 0;

		this.DeltaTime = this._game_time.DeltaTime();

		if (state != engine_states.PAUSED)
    	{
			super.PREP_CANVAS();
			this._game_objs.forEach(game_obj =>
			{
				game_obj.update();
				game_obj.draw();
			});
		}

		let fps = Math.round(1.0 / this.DeltaTime);
    	GUI.set_fps(fps);

		let frame_time = await this._game_time.next_frame(this._game_loop);
    	GUI.set_frame_time(frame_time);
	}
}