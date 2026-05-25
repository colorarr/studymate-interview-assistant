<template>
	<view class="page">
		<SmHeader title="历史会话" />
		<view class="page-body safe-bottom">
			<view class="search">
				<image :src="icons.search" mode="aspectFit" />
				<input v-model="keyword" placeholder="搜索问题、知识库或摘要" />
			</view>
			<view class="history-list">
				<view v-for="item in filteredList" :key="item.id" class="history-card card">
					<view class="history-card__icon">
						<image :src="icons.chat" mode="aspectFit" />
					</view>
					<view class="history-card__content">
						<text class="history-card__title">{{ item.title }}</text>
						<text class="history-card__meta">{{ item.knowledgeName }} · {{ item.updatedAt }}</text>
						<text class="history-card__summary">{{ item.summary }}</text>
					</view>
					<SmButton
						:text="item.id === 3 ? '删除' : '继续追问'"
						:type="item.id === 3 ? 'danger' : 'secondary'"
						@click="openChat(item)"
					/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import SmButton from '@/components/SmButton.vue'
import SmHeader from '@/components/SmHeader.vue'
import { icons } from '@/utils/assets.js'
import { conversations } from '@/utils/mockData.js'

export default {
	components: { SmButton, SmHeader },
	data() {
		return {
			icons,
			keyword: '',
			list: conversations
		}
	},
	computed: {
		filteredList() {
			const keyword = this.keyword.trim().toLowerCase()
			if (!keyword) return this.list
			return this.list.filter(item => `${item.title}${item.knowledgeName}${item.summary}`.toLowerCase().includes(keyword))
		}
	},
	methods: {
		openChat(item) {
			if (item.id === 3) {
				uni.showModal({
					title: '删除会话？',
					content: `确认删除「${item.title}」吗？`,
					confirmText: '删除',
					confirmColor: '#DC2626'
				})
				return
			}
			uni.navigateTo({ url: `/pages/chat/chat?conversationId=${item.id}` })
		}
	}
}
</script>

<style lang="scss" scoped>
.search {
	display: flex;
	align-items: center;
	gap: 12rpx;
	height: 84rpx;
	padding: 0 20rpx;
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border;
	border-radius: $sm-radius-sm;
}

.search image {
	width: 34rpx;
	height: 34rpx;
}

.search input {
	flex: 1;
	font-size: $sm-font-size-body;
}

.history-list {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
	margin-top: 24rpx;
}

.history-card {
	display: grid;
	grid-template-columns: 76rpx 1fr;
	gap: 20rpx;
	padding: 24rpx;
}

.history-card__icon {
	display: grid;
	place-items: center;
	width: 76rpx;
	height: 76rpx;
	background: $sm-color-primary-soft;
	border-radius: $sm-radius-sm;
}

.history-card__icon image {
	width: 44rpx;
	height: 44rpx;
}

.history-card__content {
	display: flex;
	flex-direction: column;
	min-width: 0;
}

.history-card__title {
	overflow: hidden;
	color: $sm-color-text;
	font-size: $sm-font-size-body;
	font-weight: 800;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.history-card__meta,
.history-card__summary {
	margin-top: 6rpx;
	overflow: hidden;
	color: $sm-color-text-muted;
	font-size: $sm-font-size-caption;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.history-card :deep(.sm-button) {
	grid-column: 2;
	justify-self: end;
	min-height: 60rpx;
	margin-top: 8rpx;
	padding: 0 20rpx;
	font-size: $sm-font-size-caption;
}
</style>
