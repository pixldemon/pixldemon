<template>
	<div class="button-wrapper">
		<button :style="cssVars" @click="$emit('click')">{{ label }}</button>
	</div>
</template>

<script>
export default {
	props: ["label"],
	computed: {
		cssVars() {
			return {
				"--button-label": `'${this.label}'` || "'Click Me'"
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import "../styles/_variables.scss";

button, button::after {
	font-size: 1.4rem;
	padding: 1rem 2rem;
	user-select: none;
	font-weight: 400;
	font-family: inherit;
}
button {
	border: 2px solid $accent-color-1;
	outline: none;
	background: none;
	color: $accent-color-1;
	position: relative;
	cursor: pointer;

	transition: box-shadow .2s;
	transition: transform .4s;
	&:hover {
		box-shadow: 0px 2px 7px 0px rgba(206, 34, 154, 0.5);
		transform: translateY(1px);
	}

	&::after {
		box-sizing: border-box;
		content: var(--button-label);

		color: white;
		background-color: $accent-color-1;
		
		overflow: hidden;
		white-space: nowrap;

		position: absolute;
		top: 0;
		left: 0;
		clip-path: inset(-1px 100% -1px -1px);
		transition: clip-path .2s;
	}
	&:hover::after, &:active::after {
		clip-path: inset(-1px -1px -1px -1px);
	}
}
</style>