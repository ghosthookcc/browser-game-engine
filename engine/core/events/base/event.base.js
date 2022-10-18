export class Event 
{
	constructor(event_name)
	{
		Event.prototype.isEvent = true;

		const new_event = new CustomEvent(event_name, { "detail": "Example of an event" });

		this.event = new_event;
		this.event_name = event_name;
	}
}