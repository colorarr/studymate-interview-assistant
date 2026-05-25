<template>
	<view class="page detail-page">
		<SmHeader title="Redis 高频题" back :right-icon="icons.more" />
		<view class="page-body detail-body">
			<view class="summary card">
				<view class="summary__head">
					<view>
						<text class="summary__title">Redis 高频题</text>
						<text class="summary__desc">缓存穿透、雪崩、持久化、集群。</text>
					</view>
					<StatusTag text="处理中" type="warning" />
				</view>
				<view class="progress">
					<view class="progress__bar" style="width: 68%"></view>
				</view>
				<text class="caption">正在生成知识切片</text>
			</view>
			<view class="file-list">
				<FileListItem v-for="item in files" :key="item.id" :item="item" />
			</view>
		</view>
		<view class="bottom-actions">
			<SmButton text="上传文件" type="secondary" @click="goUpload" />
			<SmButton text="开始问答" @click="goChat" />
		</view>
	</view>
</template>

<script>
import FileListItem from '@/components/FileListItem.vue'
import SmButton from '@/components/SmButton.vue'
import SmHeader from '@/components/SmHeader.vue'
import StatusTag from '@/components/StatusTag.vue'
import { icons } from '@/utils/assets.js'
import { files } from '@/utils/mockData.js'

export default {
	components: { FileListItem, SmButton, SmHeader, StatusTag },
	data() {
		return {
			icons,
			files
		}
	},
	methods: {
		goUpload() {
			uni.navigateTo({ url: '/pages/upload/upload' })
		},
		goChat() {
			uni.navigateTo({ url: '/pages/chat/chat?id=2' })
		}
	}
}
</script>

<style lang="scss" scoped>
.detail-page {
	padding-bottom: 132rpx;
}

.summary {
	padding: 28rpx;
}

.summary__head {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 16rpx;
}

.summary__title,
.summary__desc {
	display: block;
}

.summary__title {
	color: $sm-color-text;
	font-size: $sm-font-size-title;
	font-weight: 800;
}

.summary__desc {
	margin-top: 8rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-caption;
}

.progress {
	height: 12rpx;
	margin: 28rpx 0 14rpx;
	overflow: hidden;
	background: $sm-color-surface-muted;
	border-radius: $sm-radius-full;
}

.progress__bar {
	height: 100%;
	background: $sm-color-primary;
}

.file-list {
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20rpx;
	padding: 20rpx 32rpx calc(20rpx + env(safe-area-inset-bottom));
	background: $sm-color-surface;
	border-top: 2rpx solid $sm-color-border;
	box-shadow: $sm-shadow-input-bar;
}
</style>
