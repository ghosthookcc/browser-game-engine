export class Scene
{
	constructor()
	{
		this.rerender = true;
		this._scene_objs = new Array(); 
	}

	addSceneObj(scene_obj)
	{
		this._scene_objs.push(scene_obj);
	}

	getSceneObjs()
	{
		return this._scene_objs;
	}

	_shouldRerender()
	{
		return this.rerender;
	}
}