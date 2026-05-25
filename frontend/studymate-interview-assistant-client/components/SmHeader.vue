<template>
	<view class="sm-header">
		<button v-if="back" class="sm-header__icon" @click="goBack">
			<image :src="icons.left" mode="aspectFit" />
		</button>
		<view v-else class="sm-header__space"></view>
		<view class="sm-header__title">
			<text class="sm-header__main">{{ title }}</text>
			<text v-if="subtitle" class="sm-header__sub">{{ subtitle }}</text>
		</view>
		<button v-if="rightIcon" class="sm-header__icon" @click="$emit('right-click')">
			<image :src="rightIcon" mode="aspectFit" />
		</button>
		<view v-else class="sm-header__space"></view>
	</view>
</template>

<script>
import { icons } from '@/utils/assets.js'

export default {
	name: 'SmHeader',
	props: {
		title: { type: String, required: true },
		subtitle: { type: String, default: '' },
		back: { type: Boolean, default: false },
		rightIcon: { type: String, default: '' }
	},
	emits: ['right-click'],
	data() {
		return { icons }
	},
	methods: {
		goBack() {
			uni.navigateBack({
				fail: () => uni.switchTab({ url: '/pages/knowledge/index' })
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.sm-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16rpx;
	min-height: 108rpx;
	padding: calc(16rpx + env(safe-area-inset-top)) 32rpx 16rpx;
	background: $sm-color-surface;
	border-bottom: 2rpx solid $sm-color-border-subtle;
}

.sm-header__title {
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	min-width: 0;
}

.sm-header__main {
	max-width: 420rpx;
	overflow: hidden;
	color: $sm-color-text;
	font-size: $sm-font-size-title;
	font-weight: 800;
	line-height: 1.3;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.sm-header__sub {
	max-width: 420rpx;
	overflow: hidden;
	color: $sm-color-text-muted;
	font-size: $sm-font-size-caption;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.sm-header__icon,
.sm-header__space {
	display: grid;
	place-items: center;
	width: 68rpx;
	height: 68rpx;
}

.sm-header__icon image {
	width: 36rpx;
	height: 36rpx;
}
</style>
