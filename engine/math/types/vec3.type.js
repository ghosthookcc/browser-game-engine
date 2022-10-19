import { VEC } from "./base/vec.base.js";

export class Vec3 extends VEC
{
	constructor(x, y, z)
	{
		super();
		this.x = x;
		this.y = y;
		this.z = z; 
	
		this.ToArray  = () => { return new Array(this.x, this.y, this.z); }
		
    	this.normalize = () => 
    	{
   			const len = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
   			return new Vec3(this.x / len, this.y / len, this.z / len);
   		}

   		this.cross = (vec3B) =>
		{
    		let new_vec3 = new Vec3(0.0, 0.0, 0.0);

   		 	new_vec3.x = this.y * vec3B.z - this.z * vec3B.y;
    		new_vec3.y = this.z * vec3B.x - this.x * vec3B.z;
    		new_vec3.z = this.x * vec3B.y - this.y * vec3B.x;

    		return(new_vec3);
		}

		this.add = (vec3B) => 
		{
			let new_vec3 = new Vec3(this.x, this.y, this.z);
			new_vec3.x += vec3B.x;
			new_vec3.y += vec3B.y;
			new_vec3.z += vec3B.z;
			return new_vec3;
		}

		this.subtract = (vec3B) => 
		{
			let new_vec3 = new Vec3(this.x, this.y, this.z);
			new_vec3.x -= vec3B.x;
			new_vec3.y -= vec3B.y;
			new_vec3.z -= vec3B.z;
			return new_vec3;
		}

		return this;
	}
}