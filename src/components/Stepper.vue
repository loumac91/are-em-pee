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
  watch: {
    value(newValue, oldValue) {
      const index = this.getIndex(newValue);
      this.changeStep(index);
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

      return arr;
    },
    handleChanged() {
      console.log("handle changed", arguments);
      this.changeStep.apply(this, arguments);
    },
    changeStep(index) {
      console.log("index", index);
      const value = this.steps[index];
      this.setStep(index, "visited", true);
      this.emitValue(value);
    },
    setStep(index, prop, value) {
      console.log("before", this.stepsArray[index]);
      this.$set(this.stepsArray[index], prop, value);
      console.log("after", this.stepsArray[index]);
    },
    emitValue(value) {
      this.$emit("input", value);
    },
    getIndex(value) {
      return this.stepsArray.map(step => step.value).indexOf(value);
    },
    offset(offset) {
      const index = this.index + offset;
      this.handleChanged(index);
    },
    next() {
      this.offset(1);
    },
    previous() {
      this.offset(-1);
    },
    reset() {
      this.stepsArray = this.getSteps();
      this.index = 0;
      this.$emit("reset");
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
