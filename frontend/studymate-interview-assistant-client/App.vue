<script>
export default {
	onLaunch() {
		console.log('StudyMate launch')
	}
}
</script>

<style lang="scss">
page {
	min-height: 100%;
	background: $sm-color-bg;
	color: $sm-color-text;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
	font-size: $sm-font-size-body;
	line-height: 1.6;
}

view,
text,
input,
textarea,
button,
image {
	box-sizing: border-box;
}

button {
	margin: 0;
	padding: 0;
	background: transparent;
	border: 0;
	line-height: 1.2;
}

button::after {
	border: 0;
}

input,
textarea {
	color: $sm-color-text;
}

.page {
	min-height: 100vh;
	background: $sm-color-bg;
}

.page-body {
	padding: 24rpx 32rpx 32rpx;
}

.safe-bottom {
	padding-bottom: calc(32rpx + env(safe-area-inset-bottom));
}

.muted {
	color: $sm-color-text-muted;
}

.secondary {
	color: $sm-color-text-secondary;
}

.card {
	background: $sm-color-surface;
	border: 2rpx solid $sm-color-border;
	border-radius: $sm-radius-md;
}

.section-title {
	color: $sm-color-text;
	font-size: $sm-font-size-title;
	font-weight: 700;
	line-height: 1.3;
}

.caption {
	color: $sm-color-text-muted;
	font-size: $sm-font-size-caption;
}
</style>
