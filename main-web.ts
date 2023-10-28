import "./my-element";

import { LitElement, css, html } from "lit";

import { customElement } from "lit/decorators.js";

@customElement("main-web")
export class MainWeb extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
		`
	];

	render() {
		return html` <my-element dsa="!23"></my-element> `;
	}
}
