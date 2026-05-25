<template>
	<view class="chat-bubble" :class="[message.role, { failed: message.failed }]">
		<StatusTag v-if="message.streaming" text="AI 正在生成" type="warning" />
		<StatusTag v-if="message.failed" text="回答失败" type="danger" />
		<text class="chat-bubble__content">{{ message.content }}</text>
		<view v-if="message.code" class="chat-bubble__code">
			<text>{{ message.code }}</text>
		</view>
		<view v-if="message.sources && message.sources.length" class="chat-bubble__sources">
			<SourceCard v-for="(source, index) in message.sources" :key="source.title" :source="source" :index="index" />
		</view>
		<SmButton v-if="message.failed" text="重试发送" type="secondary" />
	</view>
</template>

<script>
import SmButton from './SmButton.vue'
import SourceCard from './SourceCard.vue'
import StatusTag from './StatusTag.vue'

export default {
	name: 'ChatBubble',
	components: { SmButton, SourceCard, StatusTag },
	props: {
		message: { type: Object, required: true }
	}
}
</script>

<style lang="scss" scoped>
.chat-bubble {
	display: flex;
	flex-direction: column;
	gap: 16rpx;
	max-width: 92%;
	padding: 22rpx 24rpx;
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border;
	border-radius: $sm-radius-md;

	&.user {
		align-self: flex-end;
		max-width: 78%;
		color: $sm-color-text-inverse;
		background: $sm-color-primary;
		border-color: $sm-color-primary;
	}

	&.failed {
		background: $sm-color-danger-soft;
		border-color: #f5c8c8;
	}
}

.chat-bubble__content {
	color: inherit;
	font-size: $sm-font-size-body;
	line-height: 1.7;
}

.chat-bubble.ai .chat-bubble__content,
.chat-bubble.failed .chat-bubble__content {
	color: $sm-color-text;
}

.chat-bubble__code {
	padding: 18rpx;
	background: $sm-color-surface-muted;
	border: 2rpx solid $sm-color-border-subtle;
	border-radius: $sm-radius-sm;
}

.chat-bubble__code text {
	color: $sm-color-text;
	font-family: Consolas, monospace;
	font-size: $sm-font-size-code;
}

.chat-bubble__sources {
	display: flex;
	flex-direction: column;
	gap: 12rpx;
}
</style>
