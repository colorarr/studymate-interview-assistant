export const currentUser = {
	username: 'backend_dev',
	nickname: '小赵'
}

export const knowledgeBases = [
	{
		id: 1,
		name: 'Java 基础八股',
		description: '集合、并发、JVM、Spring 常见题。',
		status: 'ready',
		statusText: '可问答',
		files: 12,
		chunks: 1284,
		updatedAt: '今天 15:20'
	},
	{
		id: 2,
		name: 'Redis 高频题',
		description: '缓存穿透、雪崩、持久化、集群。',
		status: 'processing',
		statusText: '建立索引中',
		files: 5,
		chunks: 638,
		progress: 68,
		updatedAt: '今天 11:08'
	},
	{
		id: 3,
		name: '消息队列专题',
		description: 'Kafka、RabbitMQ、RocketMQ 对比。',
		status: 'failed',
		statusText: '处理失败',
		files: 3,
		chunks: 214,
		updatedAt: '昨天 20:40'
	}
]

export const files = [
	{
		id: 1,
		name: 'Redis设计与实现.pdf',
		type: 'pdf',
		size: '5.1 MB',
		meta: '解析成功',
		status: 'success',
		statusText: '成功'
	},
	{
		id: 2,
		name: 'Redis面试题.docx',
		type: 'doc',
		size: '2.7 MB',
		meta: '正在建立索引',
		status: 'processing',
		statusText: '处理中',
		progress: 72
	},
	{
		id: 3,
		name: '老笔记.txt',
		type: 'txt',
		size: '126 KB',
		meta: '编码解析失败',
		status: 'failed',
		statusText: '失败'
	}
]

export const uploadQueue = [
	{
		id: 1,
		name: 'MySQL索引专题.pdf',
		type: 'pdf',
		size: '8.4 MB',
		meta: '上传中 46%',
		status: 'processing',
		statusText: '上传中',
		progress: 46
	},
	{
		id: 2,
		name: '事务隔离级别.md',
		type: 'md',
		size: '320 KB',
		meta: '等待上传',
		status: 'default',
		statusText: '待上传'
	},
	{
		id: 3,
		name: '老笔记.txt',
		type: 'txt',
		size: '126 KB',
		meta: '编码解析失败',
		status: 'failed',
		statusText: '失败'
	}
]

export const chatMessages = [
	{
		id: 1,
		role: 'user',
		content: 'HashMap 为什么线程不安全？面试里怎么答比较完整？'
	},
	{
		id: 2,
		role: 'ai',
		content: '可以从三个层次回答：数据结构、并发写入风险和实际替代方案。HashMap 在扩容、put 覆盖等过程中没有同步保护，多线程同时写入可能导致数据覆盖、结构异常或读取到不一致状态。',
		code: 'Map<String, Object> map = new ConcurrentHashMap<>();',
		sources: [
			{
				title: 'Java并发编程核心.pdf',
				summary: 'HashMap 的 put 和 resize 过程都不是原子操作。'
			},
			{
				title: '集合框架面试题.md',
				summary: 'ConcurrentHashMap 通过更细粒度的并发控制提升吞吐。'
			}
		]
	},
	{
		id: 3,
		role: 'ai',
		content: 'JDK 1.8 中 ConcurrentHashMap 取消了 Segment 分段锁...',
		streaming: true
	},
	{
		id: 4,
		role: 'ai',
		content: '网络异常，已保留你的问题。',
		failed: true
	}
]

export const conversations = [
	{
		id: 1,
		title: 'HashMap 扩容机制',
		knowledgeName: 'Java 基础八股',
		summary: 'JDK 1.8 中 ConcurrentHashMap...',
		updatedAt: '10 分钟前'
	},
	{
		id: 2,
		title: 'Redis 缓存穿透怎么解决',
		knowledgeName: 'Redis 高频题',
		summary: '布隆过滤器适合在请求入口...',
		updatedAt: '昨天'
	},
	{
		id: 3,
		title: 'MySQL 索引失效场景',
		knowledgeName: 'MySQL 面试专题',
		summary: 'like 前缀通配符、函数计算...',
		updatedAt: '周一'
	}
]
