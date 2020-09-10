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
import { reactive, onMounted } from 'vue'
import { checkLogin } from '@/api/user'

export default {
  setup () {
    const { t } = useI18n()
    const state = reactive({
    })

    onMounted(() => {
      checkLogin()
    })
    return { t, state }
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
