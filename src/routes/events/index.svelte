<script context="module" lang="ts">
	// // import fs from "fs";
    
	// /** @type {import('./__types/[name]').Load} */
	// export async function load({ url, params, fetch, session, stuff }) {
	// 	// try {
	// 	const events = [];
	// 	// get all files in lib/events/
	// 	const files = fs.readdirSync(`../../lib/events/`);
	// 	files.forEach((file) => {
	// 		// read each file into json
	// 		const event = JSON.parse(fs.readFileSync(`${__dirname}/../../lib/events/${file}`, "utf8"));
	// 		events.push({
	// 			name: event.name,
	// 			url: `${url}/${event.name}`
	// 		});
	// 	});

	// 	return {
	// 		status: 200,
	// 		props: {
	// 			body: JSON.stringify(event)
	// 		}
	// 	};
	// 	// } catch (e) {
	// 	// 	return { status: 404 };
	// 	// }
	// }
</script>

<script lang="ts">
	export let body;
</script>
<h1>events page idk</h1>
<!-- 
{#each events as event}
	<a href={event.url}>{event.name}</a>
{/each} -->
