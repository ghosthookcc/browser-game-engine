import { Mat4x4 } from "./types/mat4x4.type.js";
import { Mat3x3 } from "./types/mat3x3.type.js";
import { Mat2x2 } from "./types/mat2x2.type.js";

import { Vec4 } from "./types/vec4.type.js";
import { Vec3 } from "./types/vec3.type.js";
import { Vec2 } from "./types/vec2.type.js";

import { Quaternion } from "./types/quaternion.type.js";

export class Math
{
	constructor()
	{
		this._mat4x4 = new Mat4x4();
		this._mat3x3 = new Mat3x3();
		this._mat2x2 = new Mat2x2();
	}

	Mat4x4(identity)
	{
		return this._mat4x4.create(identity);
	}

	Mat3x3(identity)
	{
		return this._mat3x3.create(identity);
	}

	Mat2x2(identity)
	{
		return this._mat2x2.create(identity);
	}

	Vec4(x, y, z, w)
	{
		return new Vec4(x, y, z, w);
	}

	Vec3(x, y, z)
	{
		return new Vec3(x, y, z);
	}

	Vec2(x, y)
	{
		return new Vec2(x, y);
	}

	Quaternion(x, y, z, w)
	{
		return new Quaternion(x, y, z, w);
	}
}

export default { Math };