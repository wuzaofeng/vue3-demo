<template>
  <div class="persional">
    <van-button type="primary" @click="changeLang('zh_CN')">简体</van-button>
    <van-button type="primary" @click="changeLang('zh_HK')">繁体</van-button>
    <van-button type="primary" @click="changeLang('en_US')">英文</van-button>
    <van-button type="primary" @click="showHandle">显示</van-button>
    <van-calendar v-model:show="state.show" />
    {{ state.show }}
    {{ t('home') }}
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { setLang, i18n } from '@/lang'
import { reactive } from 'vue'

export default {
  setup () {
    const { t } = useI18n()
    const state = reactive({
      show: false
    })

    const showHandle = () => {
      console.log(state.show)
      state.show = true
    }

    const changeLang = (lang) => {
      setLang(lang)
      console.log(i18n.global.locale.value)
    }
    return { t, state, showHandle, changeLang }
  }
}
</script>
