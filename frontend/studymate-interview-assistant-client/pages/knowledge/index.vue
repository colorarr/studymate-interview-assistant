<template>
	<view class="page">
		<SmHeader title="知识库" :right-icon="icons.plus" @right-click="goCreate" />
		<view class="page-body safe-bottom">
			<view class="search">
				<image :src="icons.search" mode="aspectFit" />
				<input v-model="keyword" placeholder="搜索 Redis / JVM / MQ" />
			</view>
			<view v-if="filteredList.length" class="knowledge-list">
				<KnowledgeCard
					v-for="item in filteredList"
					:key="item.id"
					:item="item"
					@open="goDetail"
					@chat="goChat"
				/>
			</view>
			<EmptyState
				v-else
				title="还没有知识库"
				desc="先创建一个面试主题，再上传资料开始问答。"
				action-text="创建知识库"
				@action="goCreate"
			/>
		</view>
	</view>
</template>

<script>
import EmptyState from '@/components/EmptyState.vue'
import KnowledgeCard from '@/components/KnowledgeCard.vue'
import SmHeader from '@/components/SmHeader.vue'
import { icons } from '@/utils/assets.js'
import { knowledgeBases } from '@/utils/mockData.js'

export default {
	components: { EmptyState, KnowledgeCard, SmHeader },
	data() {
		return {
			icons,
			keyword: '',
			list: knowledgeBases
		}
	},
	computed: {
		filteredList() {
			const keyword = this.keyword.trim().toLowerCase()
			if (!keyword) return this.list
			return this.list.filter(item => `${item.name}${item.description}`.toLowerCase().includes(keyword))
		}
	},
	methods: {
		goCreate() {
			uni.navigateTo({ url: '/pages/knowledge/create' })
		},
		goDetail(item) {
			uni.navigateTo({ url: `/pages/knowledge/detail?id=${item.id}` })
		},
		goChat(item) {
			uni.navigateTo({ url: `/pages/chat/chat?id=${item.id}` })
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

.knowledge-list {
	display: flex;
	flex-direction: column;
	gap: 24rpx;
	margin-top: 24rpx;
}
</style>
