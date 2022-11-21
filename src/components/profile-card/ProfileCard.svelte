<script lang="ts">
	import "./style.scss";

	import type { DJ } from "$lib/events/db";

	export let djs: DJ[];
</script>

{#each djs as dj}
	<div class="profile-card">
		<div
			class="header"
			style="background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)),url('/img/profile-photos/{dj.id}.jpg');"
		>
			<h1>{dj.name}</h1>
		</div>
		<div class="body">
			<!-- <p class="bio">lit</p> -->
			<ul>
				{#each dj.links as link}
					<li><a href={link.url}>{link.name}</a></li>
				{/each}
			</ul>
		</div>
	</div>
{/each}
