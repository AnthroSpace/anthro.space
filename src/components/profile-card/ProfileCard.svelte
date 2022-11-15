<script lang="ts">
	import "./style.scss";

	import type { DJ } from "$lib/events/db";

	export let djs: DJ[];
</script>

{#each djs as dj}
	<div class="profile-card">
		<div class="profile" style="background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)),url('/events/profile-photos/{dj.id}.jpg');">
			<h1>{dj.name}</h1>
		</div>
        <ul>
            {#each dj.links as link}
            <li><a href={link.url}>{link.name}</a></li>
            {/each}
        </ul>
	</div>
{/each}
