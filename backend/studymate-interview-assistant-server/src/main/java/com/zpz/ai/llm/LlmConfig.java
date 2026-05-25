package com.zpz.ai.llm;


import com.alibaba.cloud.ai.dashscope.api.DashScopeApi;
import com.alibaba.cloud.ai.dashscope.chat.DashScopeChatModel;
import com.alibaba.cloud.ai.dashscope.chat.DashScopeChatOptions;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LlmConfig {


    /**
     * dashScope模型
     * @return
     */
    @Bean
    public DashScopeChatModel myDashModel(){
        DashScopeChatModel dashScopeChatModel = DashScopeChatModel.builder()
                .dashScopeApi(DashScopeApi.builder()
                        .apiKey("sk-f74a9ae9721b49c4a69434373ce36475")
                        .build())
                .defaultOptions(DashScopeChatOptions.builder()
                        .model("qwen3.7-max")
                        .stream(true)
                        .build())
                .build();

        return dashScopeChatModel;
    }


    /**
     * 小米大模型
     * @return
     */
    public OpenAiChatModel myMimoChatModel(){
        OpenAiChatModel mimoModel = OpenAiChatModel.builder()
                .openAiApi(OpenAiApi.builder()
                        .baseUrl("https://api.xiaomimimo.com")
                        .apiKey("sk-cpu3ymjqtup1kxn69hv7lycrmo3o7n8q58w7g8dxg2ds56h2")
                        .build()
                )
                .defaultOptions(OpenAiChatOptions.builder()
                        .model("mimo-v2.5-pro")
                        .streamUsage(true)
                        .build())
                .build();

        return mimoModel;
    }

}
