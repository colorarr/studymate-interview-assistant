<template>
	<button class="sm-button" :class="[type, { block, disabled }]" :disabled="disabled" @click="$emit('click', $event)">
		<image v-if="icon" class="sm-button__icon" :src="icon" mode="aspectFit" />
		<text>{{ text }}</text>
	</button>
</template>

<script>
export default {
	name: 'SmButton',
	props: {
		text: { type: String, required: true },
		type: { type: String, default: 'primary' },
		icon: { type: String, default: '' },
		block: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false }
	},
	emits: ['click']
}
</script>

<style lang="scss" scoped>
.sm-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 12rpx;
	min-height: 88rpx;
	padding: 0 28rpx;
	color: $sm-color-text;
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border;
	border-radius: $sm-radius-sm;
	font-size: $sm-font-size-body;
	font-weight: 700;
	transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease, opacity 180ms ease;

	&.primary {
		color: $sm-color-text-inverse;
		background: $sm-color-primary;
		border-color: $sm-color-primary;
	}

	&.danger {
		color: $sm-color-danger;
		background: $sm-color-danger-soft;
		border-color: #f5c8c8;
	}

	&.text {
		min-height: 64rpx;
		padding: 0;
		color: $sm-color-primary;
		background: transparent;
		border-color: transparent;
	}

	&.block {
		width: 100%;
	}

	&.disabled {
		opacity: 0.48;
	}
}

.sm-button:active {
	transform: translateY(2rpx) scale(0.99);
}

.sm-button.primary:active {
	box-shadow: 0 10rpx 20rpx rgba(37, 109, 133, 0.18);
}

.sm-button__icon {
	width: 32rpx;
	height: 32rpx;
}

@media (prefers-reduced-motion: reduce) {
	.sm-button {
		transition: none;
	}
}
</style>
