<template>
	<view class="page">
		<SmHeader title="我的" />
		<view class="page-body safe-bottom">
			<view class="profile-card card">
				<view class="avatar">
					<text>{{ currentUser.nickname.slice(0, 1) }}</text>
				</view>
				<view>
					<text class="profile-card__name">{{ currentUser.nickname }}</text>
					<text class="profile-card__username">{{ currentUser.username }}</text>
				</view>
			</view>
			<view class="stats">
				<view class="stat card">
					<text>知识库数量</text>
					<strong>6</strong>
				</view>
				<view class="stat card">
					<text>历史会话</text>
					<strong>42</strong>
				</view>
				<view class="stat card">
					<text>已处理文件</text>
					<strong>28</strong>
				</view>
			</view>
			<SmButton text="退出登录" type="danger" block @click="logout" />
		</view>
	</view>
</template>

<script>
import SmButton from '@/components/SmButton.vue'
import SmHeader from '@/components/SmHeader.vue'
import { currentUser } from '@/utils/mockData.js'

export default {
	components: { SmButton, SmHeader },
	data() {
		return { currentUser }
	},
	methods: {
		logout() {
			uni.reLaunch({ url: '/pages/login/login' })
		}
	}
}
</script>

<style lang="scss" scoped>
.profile-card {
	display: flex;
	align-items: center;
	gap: 24rpx;
	padding: 32rpx;
}

.avatar {
	display: grid;
	place-items: center;
	width: 96rpx;
	height: 96rpx;
	color: $sm-color-text-inverse;
	background: $sm-color-primary;
	border-radius: $sm-radius-full;
	font-size: $sm-font-size-title;
	font-weight: 800;
}

.profile-card__name,
.profile-card__username {
	display: block;
}

.profile-card__name {
	color: $sm-color-text;
	font-size: $sm-font-size-title;
	font-weight: 800;
}

.profile-card__username {
	margin-top: 4rpx;
	color: $sm-color-text-muted;
	font-size: $sm-font-size-body;
}

.stats {
	display: flex;
	flex-direction: column;
	gap: 20rpx;
	margin: 24rpx 0 40rpx;
}

.stat {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 108rpx;
	padding: 0 28rpx;
}

.stat text {
	color: $sm-color-text;
	font-size: $sm-font-size-body;
	font-weight: 700;
}

.stat strong {
	color: $sm-color-primary;
	font-size: $sm-font-size-title;
}
</style>
