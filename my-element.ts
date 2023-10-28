import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @event my-event - Fired when the my-element is clicked
 */
@customElement("my-element")
export class MyElement extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
		`
	];
	@property() myprop = "";

	render() {
		return html`${this.myprop}`;
	}
}
