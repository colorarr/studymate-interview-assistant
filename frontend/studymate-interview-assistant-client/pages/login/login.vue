<template>
	<view class="auth-page">
		<view class="auth-hero">
			<view class="brand-block">
				<image class="brand-block__logo" :src="icons.logo" mode="aspectFit" />
				<text class="brand-block__title">面试资料知识库</text>
				<text class="brand-block__desc">上传资料，围绕自己的内容进行 AI 问答</text>
			</view>
		</view>
		<view class="auth-form">
			<view class="auth-form__head">
				<text class="auth-form__title">登录账号</text>
				<text class="auth-form__desc">继续管理你的面试知识库</text>
			</view>
			<view class="field">
				<text class="field__label">用户名</text>
				<input class="field__input" v-model="form.username" placeholder="请输入用户名" />
			</view>
			<view class="field">
				<text class="field__label">密码</text>
				<input class="field__input" v-model="form.password" password placeholder="请输入密码" />
			</view>
			<SmButton text="登录" block @click="login" />
			<SmButton text="没有账号？去注册" type="text" block @click="goRegister" />
		</view>
	</view>
</template>

<script>
import SmButton from '@/components/SmButton.vue'
import { icons } from '@/utils/assets.js'

export default {
	components: { SmButton },
	data() {
		return {
			icons,
			form: {
				username: 'java_interview',
				password: '12345678'
			}
		}
	},
	methods: {
		login() {
			uni.switchTab({ url: '/pages/knowledge/index' })
		},
		goRegister() {
			uni.navigateTo({ url: '/pages/register/register' })
		}
	}
}
</script>

<style lang="scss" scoped>
.auth-page {
	min-height: 100vh;
	padding: calc(104rpx + env(safe-area-inset-top)) 40rpx 48rpx;
	background: $sm-color-bg;
}

.auth-hero {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 48rpx;
}

.brand-block {
	display: flex;
	flex-direction: column;
	min-width: 0;
}

.brand-block__logo {
	width: 88rpx;
	height: 88rpx;
}

.brand-block__title {
	display: block;
	margin-top: 40rpx;
	color: $sm-color-text;
	font-size: 44rpx;
	font-weight: 800;
	line-height: 1.2;
	letter-spacing: 0;
}

.brand-block__desc {
	display: block;
	margin-top: 12rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-body;
}

.auth-form {
	padding: 40rpx 32rpx 28rpx;
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border-subtle;
	border-radius: 20rpx;
}

.auth-form__head {
	margin-bottom: 28rpx;
}

.auth-form__title,
.auth-form__desc {
	display: block;
}

.auth-form__title {
	color: $sm-color-text;
	font-size: $sm-font-size-title;
	font-weight: 800;
}

.auth-form__desc {
	margin-top: 6rpx;
	color: $sm-color-text-muted;
	font-size: $sm-font-size-caption;
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

.field__input {
	width: 100%;
	height: 88rpx;
	padding: 0 24rpx;
	background: $sm-color-bg;
	border: 2rpx solid transparent;
	border-radius: $sm-radius-sm;
	font-size: $sm-font-size-body;
}

.field__input:focus {
	background: $sm-color-surface;
	border-color: rgba(37, 109, 133, 0.28);
}

.auth-form :deep(.sm-button.primary) {
	margin-top: 8rpx;
	border-color: transparent;
}

.auth-form :deep(.sm-button.text) {
	margin-top: 8rpx;
	border-top: 2rpx solid $sm-color-border-subtle;
	border-radius: 0;
	color: $sm-color-primary;
}

@media screen and (max-height: 680px) {
	.auth-page {
		padding-top: calc(40rpx + env(safe-area-inset-top));
	}

	.auth-hero {
		margin-bottom: 24rpx;
	}

	.brand-block__title {
		margin-top: 24rpx;
	}
}
</style>
