# StudyMate Interview Assistant

`StudyMate Interview Assistant` 是一个面向面试八股场景的 AI 知识库问答项目，目标是基于 `Spring AI Alibaba` 构建一套支持资料上传、知识库管理、RAG 检索增强和流式问答的练手项目。

## 项目定位

- 面向 Java 后端 / 中间件 / 数据库 / Redis / MQ 等面试资料场景
- 支持上传 `PDF`、`Word`、`Markdown`、`TXT` 等资料
- 基于知识库实现问答、引用来源返回和会话管理
- 前端采用 `Vue3 + uni-app`
- 后端采用 `Spring Boot + Spring AI Alibaba`

## 目录结构

```text
studymate-interview-assistant/
├─ frontend/   # 前端项目目录（Vue3 + uni-app）
└─ backend/    # 后端项目目录（Spring Boot）
```

## 计划中的核心能力

- 用户注册与登录
- 知识库创建、分页查询、删除与维护
- 文件上传、解析、切片、向量化入库
- 基于向量检索的 RAG 问答
- SSE 流式输出回答
- 聊天会话与消息记录管理
- 引用来源展示

## 技术栈规划

### 前端

- Vue3
- uni-app
- axios 风格请求封装

### 后端

- Spring Boot
- Spring AI Alibaba
- MyBatis-Plus
- MySQL 8.0
- Milvus
- JWT
- SSE

## API 文档

OpenAPI 文档位于：

- `../studymate-ai-server/docs/apifox/studymate-ai-openapi.yaml`

后续可将稳定版本复制到当前仓库的 `docs/apifox/` 目录下统一维护。

## 开发约定

- 所有状态字段统一使用数字类型表示
- 普通接口统一返回 `Result<T>`
- 分页接口统一返回 `Result<PageResult<T>>`
- AI 流式接口返回 `Flux<ServerSentEvent<String>>`
- 数据表字段避免使用数据库枚举类型

## 初始化建议

### frontend

- 建议项目名：`studymate-interview-assistant-uniapp`

### backend

- 建议项目名：`studymate-interview-assistant-server`

## 仓库初始化后的下一步

1. 在 `frontend` 下创建 uni-app 项目骨架
2. 在 `backend` 下创建 Spring Boot 项目骨架
3. 补充数据库设计文档与建表 SQL
4. 实现登录、知识库、文件上传、问答接口
5. 对接 Milvus 和大模型能力
