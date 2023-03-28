<!--
 * @Author: zd
 * @Date: 2023-03-26 21:14:54
 * @LastEditors: zd
 * @LastEditTime: 2023-03-26 21:19:46
 * @Description: 对话页面
-->
<template>
  <div></div>
</template>

<script>
import { Configuration, OpenAIApi } from 'openai'

export default {
  name: 'PromptPage',

  mounted () {
    this.initPage()
  },

  methods: {
    async initPage () {
      const configuration = new Configuration({
        organization: 'org-A4f8xCzalLlIt8LeMZJNvSWW',
        apiKey: process.env.OPENAI_API_KEY
      })
      const openai = new OpenAIApi(configuration)
      const response = await openai.listEngines()
      console.log(response)
    }
  }
}
</script>
