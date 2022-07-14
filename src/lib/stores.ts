import { readable } from "svelte/store";

const members = [
	{
		name: "Szop",
		title: "Event Director, Communications, Graphic Design",
		twitter: "//twitter.com/fxSzop"
	},
	{
		name: "Tetra",
		title: "Frontend Development, Backend Development, Graphic Design, Systems Engineer",
		twitter: "//twitter.com/etra_t"
	},
	{
		name: "Aurora",
		title: "Infrastructure, Systems Engineer",
		twitter: "//twitter.com/HelixVexium"
	},
	{ name: "Facade", title: "Techno Producer, Fortnite Player, a suport", twitter: "" }
];

export const team = readable(members);
