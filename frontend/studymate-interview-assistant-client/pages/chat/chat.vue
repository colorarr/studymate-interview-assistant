<template>
	<view class="page chat-page">
		<SmHeader title="Java 基础八股" subtitle="HashMap 扩容机制" back :right-icon="icons.menu" />
		<scroll-view class="messages" scroll-y>
			<ChatBubble v-for="message in messages" :key="message.id" :message="message" />
		</scroll-view>
		<view class="composer">
			<input class="composer__input" v-model="question" placeholder="继续追问源码细节" />
			<button class="composer__send" @click="send">
				<image :src="icons.send" mode="aspectFit" />
			</button>
		</view>
	</view>
</template>

<script>
import ChatBubble from '@/components/ChatBubble.vue'
import SmHeader from '@/components/SmHeader.vue'
import { icons } from '@/utils/assets.js'
import { chatMessages } from '@/utils/mockData.js'

export default {
	components: { ChatBubble, SmHeader },
	data() {
		return {
			icons,
			question: '继续追问源码细节',
			messages: chatMessages
		}
	},
	methods: {
		send() {
			if (!this.question.trim()) return
			this.messages.push({
				id: Date.now(),
				role: 'user',
				content: this.question
			})
			this.question = ''
		}
	}
}
</script>

<style lang="scss" scoped>
.chat-page {
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.messages {
	flex: 1;
	min-height: 0;
	padding: 24rpx 32rpx;
}

.messages :deep(.chat-bubble) {
	margin-bottom: 24rpx;
}

.composer {
	display: grid;
	grid-template-columns: 1fr 88rpx;
	gap: 16rpx;
	padding: 20rpx 32rpx calc(20rpx + env(safe-area-inset-bottom));
	background: $sm-color-surface;
	border-top: 2rpx solid $sm-color-border;
	box-shadow: $sm-shadow-input-bar;
}

.composer__input {
	height: 88rpx;
	padding: 0 24rpx;
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border;
	border-radius: $sm-radius-sm;
	font-size: $sm-font-size-body;
}

.composer__send {
	display: grid;
	place-items: center;
	width: 88rpx;
	height: 88rpx;
	background: $sm-color-primary;
	border-radius: $sm-radius-sm;
}

.composer__send image {
	width: 42rpx;
	height: 42rpx;
}
</style>
