<template>
	<view class="empty-state card">
		<image class="empty-state__image" :src="image" mode="aspectFit" />
		<text class="empty-state__title">{{ title }}</text>
		<text class="empty-state__desc">{{ desc }}</text>
		<SmButton v-if="actionText" :text="actionText" @click="$emit('action')" />
	</view>
</template>

<script>
import SmButton from './SmButton.vue'
import { backgrounds } from '@/utils/assets.js'

export default {
	name: 'EmptyState',
	components: { SmButton },
	props: {
		title: { type: String, required: true },
		desc: { type: String, required: true },
		actionText: { type: String, default: '' },
		image: { type: String, default: backgrounds.emptyKnowledge }
	},
	emits: ['action']
}
</script>

<style lang="scss" scoped>
.empty-state {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 520rpx;
	padding: 40rpx 32rpx;
	text-align: center;
}

.empty-state__image {
	width: 360rpx;
	height: 200rpx;
	margin-bottom: 16rpx;
}

.empty-state__title {
	color: $sm-color-text;
	font-size: $sm-font-size-subtitle;
	font-weight: 800;
}

.empty-state__desc {
	margin: 12rpx 0 28rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-body;
}
</style>
