<template>
	<view class="page upload-page">
		<SmHeader title="上传资料" back />
		<view class="page-body">
			<view class="upload-zone">
				<image :src="icons.upload" mode="aspectFit" />
				<text class="upload-zone__title">选择 PDF / Word / MD / TXT</text>
				<text class="upload-zone__desc">单个文件建议小于 50 MB</text>
				<SmButton text="选择文件" @click="chooseFile" />
			</view>
			<view class="queue">
				<FileListItem v-for="item in queue" :key="item.id" :item="item" />
			</view>
		</view>
		<view class="bottom-actions">
			<SmButton text="返回知识库详情" block @click="backDetail" />
		</view>
	</view>
</template>

<script>
import FileListItem from '@/components/FileListItem.vue'
import SmButton from '@/components/SmButton.vue'
import SmHeader from '@/components/SmHeader.vue'
import { icons } from '@/utils/assets.js'
import { uploadQueue } from '@/utils/mockData.js'

export default {
	components: { FileListItem, SmButton, SmHeader },
	data() {
		return {
			icons,
			queue: uploadQueue
		}
	},
	methods: {
		chooseFile() {
			uni.showToast({ title: '选择文件入口', icon: 'none' })
		},
		backDetail() {
			uni.navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.upload-page {
	padding-bottom: 132rpx;
}

.upload-zone {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 332rpx;
	padding: 36rpx 24rpx;
	text-align: center;
	background: $sm-color-primary-soft;
	border: 2rpx dashed $sm-color-primary;
	border-radius: $sm-radius-md;
}

.upload-zone image {
	width: 92rpx;
	height: 92rpx;
}

.upload-zone__title {
	margin-top: 16rpx;
	color: $sm-color-text;
	font-size: $sm-font-size-subtitle;
	font-weight: 800;
}

.upload-zone__desc {
	margin: 8rpx 0 20rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-caption;
}

.queue {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
	margin-top: 24rpx;
}

.bottom-actions {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 20rpx 32rpx calc(20rpx + env(safe-area-inset-bottom));
	background: $sm-color-surface;
	border-top: 2rpx solid $sm-color-border;
	box-shadow: $sm-shadow-input-bar;
}
</style>
