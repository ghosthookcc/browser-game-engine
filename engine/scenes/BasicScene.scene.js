import { Scene } from "./base/scene.base.js";

import { AllEvents } from "../core/events/all.events.js";

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
  			document.dispatchEvent(AllEvents.Render);
			const scene_objs = super.getSceneObjs();
			const scene_cameras = super.getSceneCameras();
			scene_objs.forEach(scene_obj => 
			{	
				let vao_idx = 0;
				scene_obj.VAO_OBJ.get_vaos().forEach(vao => 
				{
					scene_obj.VAO_OBJ.BindSpecificBuffer(vao);
					scene_obj.update();		
					scene_obj.draw();
					vao_idx += 1;
				});
			});
			scene_cameras.forEach(scene_camera => 
			{
				scene_camera.Update();
			});
		}
	}

	addObject(scene_obj)
	{
		super.addSceneObject(scene_obj);
	}
	addCamera(scene_camera)
	{
		super.addSceneCamera(scene_camera);	
	}
}