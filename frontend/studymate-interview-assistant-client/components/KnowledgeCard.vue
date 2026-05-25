<template>
	<view class="knowledge-card card" @click="$emit('open', item)">
		<view class="knowledge-card__head">
			<view class="knowledge-card__title-wrap">
				<text class="knowledge-card__title">{{ item.name }}</text>
				<text class="knowledge-card__desc">{{ item.description }}</text>
			</view>
			<StatusTag :text="item.statusText" :type="item.status" />
		</view>
		<view v-if="item.progress" class="progress">
			<view class="progress__bar" :style="{ width: item.progress + '%' }"></view>
		</view>
		<view class="knowledge-card__meta">
			<text>文件 {{ item.files }}</text>
			<text>分片 {{ item.chunks }}</text>
			<text>{{ item.updatedAt }}</text>
		</view>
		<SmButton v-if="item.status === 'ready'" text="开始问答" @click.stop="$emit('chat', item)" />
		<SmButton v-else text="查看详情" type="secondary" @click.stop="$emit('open', item)" />
	</view>
</template>

<script>
import SmButton from './SmButton.vue'
import StatusTag from './StatusTag.vue'

export default {
	name: 'KnowledgeCard',
	components: { SmButton, StatusTag },
	props: {
		item: { type: Object, required: true }
	},
	emits: ['open', 'chat']
}
</script>

<style lang="scss" scoped>
.knowledge-card {
	padding: 28rpx;
}

.knowledge-card__head {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 18rpx;
}

.knowledge-card__title-wrap {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
}

.knowledge-card__title {
	overflow: hidden;
	color: $sm-color-text;
	font-size: $sm-font-size-subtitle;
	font-weight: 800;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.knowledge-card__desc {
	margin-top: 8rpx;
	overflow: hidden;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-caption;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.knowledge-card__meta {
	display: flex;
	flex-wrap: wrap;
	gap: 16rpx;
	margin: 20rpx 0;
	color: $sm-color-text-muted;
	font-size: $sm-font-size-caption;
}

.progress {
	height: 12rpx;
	margin-top: 24rpx;
	overflow: hidden;
	background: $sm-color-surface-muted;
	border-radius: $sm-radius-full;
}

.progress__bar {
	height: 100%;
	background: $sm-color-primary;
	border-radius: $sm-radius-full;
}
</style>
