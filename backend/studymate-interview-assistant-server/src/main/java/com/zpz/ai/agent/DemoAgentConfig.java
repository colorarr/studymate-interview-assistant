package com.zpz.ai.agent;


import com.alibaba.cloud.ai.graph.agent.ReactAgent;
import com.alibaba.cloud.ai.graph.checkpoint.savers.MemorySaver;
import com.zpz.ai.llm.LlmConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DemoAgentConfig {



    @Autowired
    private LlmConfig llmConfig;


    /**
     * 测试Agent
     * @return
     */
    @Bean
    public ReactAgent demoReactAgent(){
        ReactAgent agent = ReactAgent.builder()
                .model(llmConfig.myDashModel())
//                .model(llmConfig.myMimoChatModel())
                .name("测试智能体")
                .systemPrompt("你是一个有用的助手")
                .saver(new MemorySaver())
                .build();
        return agent;
    }
}
