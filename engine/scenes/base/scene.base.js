export class Scene
{
	constructor()
	{
		this.rerender = true;
		this._scene_objs = new Array(); 
		this._scene_cameras = new Array();
	}

	addSceneObject(scene_obj)
	{
		this._scene_objs.push(scene_obj);
	}
	addSceneCamera(scene_camera)
	{
		this._scene_cameras.push(scene_camera);
	}

	getSceneObjs()
	{
		return this._scene_objs;
	}
	getSceneCameras()
	{
		return this._scene_cameras;
	}
	
	_shouldRerender()
	{
		return this.rerender;
	}
}