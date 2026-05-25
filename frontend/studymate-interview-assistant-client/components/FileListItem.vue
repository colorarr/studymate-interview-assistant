<template>
	<view class="file-item card">
		<image class="file-item__icon" :src="fileIcon(item.type)" mode="aspectFit" />
		<view class="file-item__content">
			<text class="file-item__name">{{ item.name }}</text>
			<text class="file-item__meta">{{ item.size }} · {{ item.meta }}</text>
			<view v-if="item.progress" class="progress">
				<view class="progress__bar" :style="{ width: item.progress + '%' }"></view>
			</view>
		</view>
		<StatusTag :text="item.statusText" :type="item.status" />
	</view>
</template>

<script>
import StatusTag from './StatusTag.vue'
import { fileIcon } from '@/utils/assets.js'

export default {
	name: 'FileListItem',
	components: { StatusTag },
	props: {
		item: { type: Object, required: true }
	},
	methods: {
		fileIcon
	}
}
</script>

<style lang="scss" scoped>
.file-item {
	display: flex;
	align-items: center;
	gap: 20rpx;
	padding: 20rpx;
}

.file-item__icon {
	flex: 0 0 auto;
	width: 76rpx;
	height: 76rpx;
}

.file-item__content {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
}

.file-item__name {
	overflow: hidden;
	color: $sm-color-text;
	font-size: $sm-font-size-body;
	font-weight: 700;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.file-item__meta {
	margin-top: 6rpx;
	color: $sm-color-text-muted;
	font-size: $sm-font-size-caption;
}

.progress {
	height: 10rpx;
	margin-top: 12rpx;
	overflow: hidden;
	background: $sm-color-surface-muted;
	border-radius: $sm-radius-full;
}

.progress__bar {
	height: 100%;
	background: $sm-color-primary;
}
</style>
