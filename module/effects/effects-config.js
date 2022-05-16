import { DND4EBETA } from "../config.js";

export default class ActiveEffectConfig4e extends ActiveEffectConfig {

	/** @override */
	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["sheet", "active-effect-sheet"],
			template: "systems/dnd-mashup/templates/sheets/active-effect-config.html",
			width: 560,
			height: "auto",
			tabs: [{navSelector: ".tabs", contentSelector: "form", initial: "details"}]
		});
	}

	/** @override */
	getData(options) {
		let data = super.getData(options);

		data.config = CONFIG.DND4EBETA;
		data.powerParent = (this.object.parent.type === "power");

		return data;
	}
}
