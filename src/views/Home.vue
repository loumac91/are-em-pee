<template>
  <div class="container container__100vh flex-container__justify-centre">
    <div class="container flex-container__justify-centre">
      <div class="wrapper">
        <Stepper v-model="currentStep" :steps="steps" />
        <router-view :name="currentStep"></router-view>
        <div class="flex-container__justify-right">
          <PcButton :message="'Cancel'" @click="handleCancel" />
          <PcButton v-if="!isFirstStep" :message="'Back'" @click="handleBack" />
          <PcButton v-if="!isLastStep" :message="'Continue'" @click="this.handleContinue" />
          <PcButton v-if="isLastStep" :message="'Send'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from "@/components/Stepper";
import PcButton from "@/components/PcButton";

export default {
  name: "Home",
  components: {
    Stepper,
    PcButton
  },
  data() {
    return {
      steps: ["Who", "When", "What"],
      currentStep: "Who"
    };
  },
  computed: {
    isFirstStep() {
      const index = this.steps.indexOf(this.currentStep);
      return index === 0;
    },
    isLastStep() {
      const index = this.steps.indexOf(this.currentStep);
      return index === (this.steps.length - 1);
    }
  },
  watch: {
    currentStep(newValue, oldValue) {
      console.log("oldValuexxx", oldValue);
      console.log("newValuexxx", newValue);
      return newValue;
    }
  },
  methods: {
    handleCancel() {

    },
    handleBack() {
      const index = this.steps.indexOf(this.currentStep);
      const newIndex = index - 1;
      this.currentStep = this.steps[newIndex];
    },
    handleContinue() {
      const index = this.steps.indexOf(this.currentStep);
      const newIndex = index + 1;
      this.currentStep = this.steps[newIndex];
    },
    handleLastStep() {

    }
  }
};
</script>

<style lang="scss" scoped>
//CONTAINERS
.container {
  position: relative;

  // Container take full height of viewport
  &__100vh {
    height: 100vh;
  }

  &__min100vh {
    min-height: 100vh;
  }
}

.flex-container {
  position: relative;
  display: flex;

  &__justify-centre {
    align-items: center;
    justify-content: center;
  }

  &__justify-right {
    align-items: flex-end;
    justify-content: flex-end;
  }
}

.wrapper {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 0 10px 0;

  // ORDER MATTERS HERE
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}
</style>
