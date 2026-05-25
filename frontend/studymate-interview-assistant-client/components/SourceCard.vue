<template>
	<view class="source-card">
		<view class="source-card__head">
			<image :src="icons.source" mode="aspectFit" />
			<text>[{{ index + 1 }}] {{ source.title }}</text>
		</view>
		<text class="source-card__summary">{{ source.summary }}</text>
	</view>
</template>

<script>
import { icons } from '@/utils/assets.js'

export default {
	name: 'SourceCard',
	props: {
		source: { type: Object, required: true },
		index: { type: Number, default: 0 }
	},
	data() {
		return { icons }
	}
}
</script>

<style lang="scss" scoped>
.source-card {
	padding: 18rpx;
	background: $sm-color-primary-soft;
	border: 2rpx solid #d2ebef;
	border-radius: $sm-radius-sm;
}

.source-card__head {
	display: flex;
	align-items: center;
	gap: 10rpx;
	color: $sm-color-primary;
	font-size: $sm-font-size-caption;
	font-weight: 800;
}

.source-card__head image {
	width: 28rpx;
	height: 28rpx;
}

.source-card__summary {
	display: block;
	margin-top: 8rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-caption;
}
</style>
