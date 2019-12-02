<template>
  <button class="pc-btn" v-on="$listeners">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: "PcButton",
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.pc-btn {
  flex: 0 1 auto;
  position: relative;
  display: inline-block;
  border-radius: 20px;
  border: 1px solid #266abd;
  text-align: center;
  font-weight: 500;
  padding: 0 16px;
  height: 40px;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.29;
  color: #fff;
  background-color: #266abd;
  -webkit-transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease,
    -webkit-box-shadow 0.5s cubic-bezier(0.64, 0.04, 0.35, 1);
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease,
    -webkit-box-shadow 0.5s cubic-bezier(0.64, 0.04, 0.35, 1);
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease, box-shadow 0.5s cubic-bezier(0.64, 0.04, 0.35, 1);
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease, box-shadow 0.5s cubic-bezier(0.64, 0.04, 0.35, 1),
    -webkit-box-shadow 0.5s cubic-bezier(0.64, 0.04, 0.35, 1);
  font-family: Ubuntu;
  min-width: 112px;
}
</style>
