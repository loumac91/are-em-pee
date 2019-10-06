<template>
  <div class="stepper">
    <div class="stepper-root">
      <Step
        v-for="(step, $index) in stepsArray"
        :key="$index"
        :index="$index"
        :name="id"
        :value="step.value"
        :active="step.index === getIndex(value)"
        :visited="step.visited"
        :disabled="step.disabled"
        @change="handleChanged"
      >
      </Step>
    </div>
  </div>
</template>

<script>
import Step from "./Step";
import uuid from "uuid/v4";

export default {
  name: "Stepper",
  components: {
    Step
  },
  props: {
    value: {
      type: String,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      stepsArray: this.getSteps()
    };
  },
  computed: {
    id() {
      return `stepper-${uuid()}`;
    }
  },
  methods: {
    getSteps() {
      const arr = this.steps.map((step, index) => {
        const value = step;
        const isFirst = index === 0;
        const visited = isFirst || false;
        const disabled = !isFirst || false; // May need to amend

        return { index, value, visited, disabled };
      });
      console.log("arr", arr);
      return arr;
    },
    handleChanged() {
      this.changeStep.apply(this, arguments);
    },
    changeStep(index) {
      const value = this.steps[index];
      this.setStep(index, "visited", true);
      this.emitValue(value);
      console.log("value", value);
    },
    setStep(index, prop, value) {
      this.$set(this.stepsArray[index], prop, value);
    },
    emitValue(value) {
      this.$emit("input", value);
    },
    getIndex(value) {
      return this.stepsArray.map(step => step.value).indexOf(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.stepper {
}

.stepper-root {
  display: flex;
  width: inherit;
  user-select: none;
  box-sizing: border-box;
  justify-content: space-between;

  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
