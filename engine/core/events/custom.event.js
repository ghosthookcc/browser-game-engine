import { Event } from "./base/event.base.js";

export class CustomEvent extends Event
{
	constructor(event_name)
	{
		super(event_name);
	}
}