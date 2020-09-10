<template>
  <div class="persional">
    <van-cell :title="t('persional.personalInfo')" is-link />
    <van-cell :title="t('persional.contactWay')" is-link />
    <van-cell :title="t('persional.addressInfo')" is-link />
    <van-cell :title="t('persional.jobInfo')" is-link />
    <van-cell :title="t('persional.financeInfo')" is-link />
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

<style lang="less" scoped>
.test {
  font-size: 14px;
  display: flex;
  flex: 1;
}
</style>
