import { Scene } from "./base/scene.base.js";

export class BasicScene extends Scene
{
	constructor()
	{
		super();
	}

	Render()
	{
		if (super._shouldRerender())
		{
			const scene_objs = super.getSceneObjs();
			scene_objs.forEach(scene_obj => 
			{
				let vao_idx = 0;
				scene_obj.VAO_OBJ.get_vaos().forEach(vao => 
				{
					scene_obj.VAO_OBJ.BindSpecificBuffer(vao);
					scene_obj.update();
					scene_obj.draw();
					scene_obj.VAO_OBJ.UnbindBuffer(vao);
					vao_idx += 1;
				});
			});
		}
	}

	add(scene_obj)
	{
		super.addSceneObj(scene_obj);
	}
}