<template>
	<view class="status-tag" :class="type">
		<text>{{ text }}</text>
	</view>
</template>

<script>
export default {
	name: 'StatusTag',
	props: {
		text: { type: String, required: true },
		type: { type: String, default: 'default' }
	}
}
</script>

<style lang="scss" scoped>
.status-tag {
	display: inline-flex;
	align-items: center;
	min-height: 48rpx;
	padding: 4rpx 16rpx;
	color: $sm-color-primary;
	background: $sm-color-primary-soft;
	border: 2rpx solid #d2ebef;
	border-radius: $sm-radius-xs;
	font-size: $sm-font-size-caption;
	font-weight: 700;

	&.success {
		color: $sm-color-success;
		background: $sm-color-success-soft;
		border-color: #ccefd8;
	}

	&.processing,
	&.warning {
		color: $sm-color-warning;
		background: $sm-color-warning-soft;
		border-color: #ffe0aa;
	}

	&.failed,
	&.danger {
		color: $sm-color-danger;
		background: $sm-color-danger-soft;
		border-color: #f5c8c8;
	}
}
</style>
