<template>
	<view class="sheet-page">
		<view class="sheet-mask"></view>
		<view class="sheet card">
			<view class="sheet__handle"></view>
			<text class="section-title">创建知识库</text>
			<text class="sheet__desc">为一个面试主题建立资料空间。</text>
			<view class="field">
				<text class="field__label">知识库名称</text>
				<input class="field__input" v-model="form.name" />
			</view>
			<view class="field">
				<text class="field__label">描述</text>
				<textarea class="field__textarea" v-model="form.description" />
			</view>
			<SmButton text="创建知识库" block @click="create" />
		</view>
	</view>
</template>

<script>
import SmButton from '@/components/SmButton.vue'

export default {
	components: { SmButton },
	data() {
		return {
			form: {
				name: 'Spring Boot 高频题',
				description: '自动配置、Bean 生命周期、事务传播。'
			}
		}
	},
	methods: {
		create() {
			uni.showToast({ title: '创建成功', icon: 'success' })
			setTimeout(() => uni.navigateTo({ url: '/pages/knowledge/detail?id=4' }), 500)
		}
	}
}
</script>

<style lang="scss" scoped>
.sheet-page {
	position: relative;
	display: flex;
	align-items: flex-end;
	min-height: 100vh;
	background: $sm-color-bg;
}

.sheet-mask {
	position: absolute;
	inset: 0;
	background: rgba(23, 32, 38, 0.28);
}

.sheet {
	position: relative;
	width: 100%;
	padding: 24rpx 32rpx calc(40rpx + env(safe-area-inset-bottom));
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	box-shadow: $sm-shadow-modal;
}

.sheet__handle {
	width: 80rpx;
	height: 8rpx;
	margin: 0 auto 32rpx;
	background: $sm-color-border;
	border-radius: $sm-radius-full;
}

.sheet__desc {
	display: block;
	margin: 12rpx 0 28rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-body;
}

.field {
	margin-bottom: 24rpx;
}

.field__label {
	display: block;
	margin-bottom: 12rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-caption;
	font-weight: 700;
}

.field__input,
.field__textarea {
	width: 100%;
	padding: 0 24rpx;
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border;
	border-radius: $sm-radius-sm;
	font-size: $sm-font-size-body;
}

.field__input {
	height: 88rpx;
}

.field__textarea {
	height: 156rpx;
	padding-top: 20rpx;
}
</style>
