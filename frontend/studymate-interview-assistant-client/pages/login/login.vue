<template>
	<view class="auth-page">
		<view class="auth-shell">
			<view class="brand-block">
				<view class="brand-block__mark">
					<image class="brand-block__logo" :src="icons.logo" mode="aspectFit" />
				</view>
				<text class="brand-block__title">登录账号</text>
				<text class="brand-block__desc">继续使用你的面试资料知识库</text>
			</view>
			<view class="auth-form">
				<view class="auth-form__head">
					<text class="auth-form__title">欢迎回来</text>
					<text class="auth-form__desc">输入账号和密码后继续</text>
				</view>
				<view class="field">
					<text class="field__label">用户名</text>
					<input class="field__input" v-model="form.username" placeholder="请输入用户名" />
				</view>
				<view class="field">
					<text class="field__label">密码</text>
					<input class="field__input" v-model="form.password" password placeholder="请输入密码" />
				</view>
				<SmButton text="登录并继续" block @click="login" />
				<SmButton text="没有账号，去注册" type="text" block @click="goRegister" />
			</view>
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
	position: relative;
	min-height: 100vh;
	padding: calc(40rpx + env(safe-area-inset-top)) 32rpx calc(40rpx + env(safe-area-inset-bottom));
	background:
		radial-gradient(circle at top left, rgba(37, 109, 133, 0.16), transparent 38%),
		radial-gradient(circle at right 18% top 24%, rgba(245, 158, 11, 0.10), transparent 24%),
		linear-gradient(180deg, #f7fbfc 0%, #f3f7f9 52%, #edf3f6 100%);
	overflow: hidden;
}

.auth-page::before,
.auth-page::after {
	content: '';
	position: absolute;
	border-radius: 50%;
	filter: blur(8rpx);
	pointer-events: none;
}

.auth-page::before {
	top: 120rpx;
	right: -88rpx;
	width: 280rpx;
	height: 280rpx;
	background: rgba(37, 109, 133, 0.10);
}

.auth-page::after {
	left: -72rpx;
	bottom: 240rpx;
	width: 220rpx;
	height: 220rpx;
	background: rgba(245, 158, 11, 0.08);
}

.auth-shell {
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 32rpx;
	width: 100%;
	max-width: 520rpx;
	margin: 0 auto;
	padding-top: 120rpx;
}

.brand-block {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 18rpx;
	min-width: 0;
	text-align: center;
}

.brand-block__mark {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 104rpx;
	height: 104rpx;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.72));
	border: 2rpx solid rgba(255, 255, 255, 0.72);
	border-radius: 28rpx;
	box-shadow: 0 24rpx 48rpx rgba(37, 109, 133, 0.12);
	backdrop-filter: blur(14rpx);
}

.brand-block__logo {
	width: 64rpx;
	height: 64rpx;
}

.brand-block__title {
	display: block;
	color: $sm-color-text;
	font-size: 52rpx;
	font-weight: 700;
	line-height: 1.2;
}

.brand-block__desc {
	display: block;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-body;
	line-height: 1.6;
}

.auth-form {
	position: relative;
	padding: 36rpx 28rpx 28rpx;
	background: rgba(255, 255, 255, 0.92);
	border: 2rpx solid rgba(255, 255, 255, 0.72);
	border-radius: 28rpx;
	box-shadow: 0 28rpx 64rpx rgba(23, 32, 38, 0.08);
	backdrop-filter: blur(18rpx);
}

.auth-form__head {
	margin-bottom: 28rpx;
}

.auth-form__title {
	display: block;
	color: $sm-color-text;
	font-size: 40rpx;
	font-weight: 700;
	line-height: 1.3;
}

.auth-form__desc {
	display: block;
	margin-top: 12rpx;
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-caption;
	line-height: 1.6;
}

.field {
	margin-bottom: 20rpx;
}

.field__label {
	display: block;
	margin-bottom: 12rpx;
	color: $sm-color-text;
	font-size: $sm-font-size-caption;
	font-weight: 600;
}

.field__input {
	width: 100%;
	height: 96rpx;
	padding: 0 28rpx;
	background: rgba(241, 245, 248, 0.92);
	border: 2rpx solid rgba(37, 109, 133, 0.08);
	border-radius: 20rpx;
	font-size: $sm-font-size-body;
	transition: border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.field__input:focus {
	background: $sm-color-surface;
	border-color: rgba(37, 109, 133, 0.32);
	box-shadow: 0 0 0 8rpx rgba(37, 109, 133, 0.08);
	transform: translateY(-1rpx);
}

.auth-form :deep(.sm-button.primary) {
	margin-top: 8rpx;
	border-color: transparent;
	box-shadow: 0 18rpx 36rpx rgba(37, 109, 133, 0.22);
}

.auth-form :deep(.sm-button.text) {
	margin-top: 16rpx;
	background: rgba(255, 255, 255, 0.72);
	border-color: rgba(37, 109, 133, 0.12);
	border-radius: 20rpx;
	color: $sm-color-primary;
}

@media screen and (min-width: 960px) {
	.auth-page {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 48rpx;
		padding-right: 48rpx;
	}

	.auth-shell {
		padding-top: 0;
	}
}

@media screen and (max-width: 420px) {
	.auth-page {
		padding-left: 24rpx;
		padding-right: 24rpx;
	}

	.brand-block__title {
		font-size: 48rpx;
	}
}

@media screen and (max-height: 720px) {
	.auth-page {
		padding-top: calc(24rpx + env(safe-area-inset-top));
	}

	.auth-shell {
		gap: 20rpx;
		padding-top: 48rpx;
	}
}

@media (prefers-reduced-motion: reduce) {
	.field__input,
	.auth-form :deep(.sm-button) {
		transition: none;
	}
}
</style>
