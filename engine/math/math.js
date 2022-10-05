import { MATRIX } from "./types/base/matrix.base.type.js";

import { Mat4x4 } from "./types/mat4x4.type.js";
import { Mat3x3 } from "./types/mat3x3.type.js";
import { Mat2x2 } from "./types/mat2x2.type.js";

import { VEC } from "./types/base/vec.base.type.js";

import { Vec4 } from "./types/vec4.type.js";
import { Vec3 } from "./types/vec3.type.js";
import { Vec2 } from "./types/vec2.type.js";

import { QUATERNION } from "./types/base/quaternion.base.type.js";

import { Quaternion } from "./types/quaternion.type.js";

export class Math
{
	constructor()
	{
		this.MATRIX     = new MATRIX();
		this.VEC        = new VEC(); 
		this.QUATERNION = new QUATERNION();
	}

	Mat4x4(identity)
	{
		return new Mat4x4(identity);
	}

	Mat3x3(identity)
	{
		return new Mat3x3(identity);
	}

	Mat2x2(identity)
	{
		return new Mat2x2(identity);
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