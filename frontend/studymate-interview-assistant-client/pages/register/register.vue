<template>
	<view class="page">
		<SmHeader title="创建账号" back />
		<view class="page-body">
			<view class="intro">
				<text class="section-title">注册 StudyMate</text>
				<text class="intro__desc">保存你的知识库、文件处理结果和历史会话。</text>
			</view>
			<view class="form card">
				<view class="field">
					<text class="field__label">用户名</text>
					<input class="field__input" v-model="form.username" />
				</view>
				<view class="field">
					<text class="field__label">昵称</text>
					<input class="field__input" v-model="form.nickname" />
				</view>
				<view class="field">
					<text class="field__label">密码</text>
					<input class="field__input" v-model="form.password" password />
				</view>
				<SmButton text="确认注册" block @click="submit" />
				<SmButton text="返回登录" type="text" block @click="backLogin" />
			</view>
		</view>
	</view>
</template>

<script>
import SmButton from '@/components/SmButton.vue'
import SmHeader from '@/components/SmHeader.vue'

export default {
	components: { SmButton, SmHeader },
	data() {
		return {
			form: {
				username: 'backend_dev',
				nickname: '小赵',
				password: '12345678'
			}
		}
	},
	methods: {
		submit() {
			uni.showToast({ title: '注册成功', icon: 'success' })
			setTimeout(() => uni.redirectTo({ url: '/pages/login/login' }), 500)
		},
		backLogin() {
			uni.navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.intro {
	display: flex;
	flex-direction: column;
	gap: 12rpx;
	margin: 28rpx 0;
}

.intro__desc {
	color: $sm-color-text-secondary;
	font-size: $sm-font-size-body;
}

.form {
	padding: 32rpx;
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
	height: 88rpx;
	padding: 0 24rpx;
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border;
	border-radius: $sm-radius-sm;
	font-size: $sm-font-size-body;
}
</style>
