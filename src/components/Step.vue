<template>
  <div :class="['step', classes]">
    <input
      :id="id"
      class="input__step-hidden"
      type="radio"
      :checked="active"
      :name="computedName"
      @change="handleChanged"
    />
    <label class="label" :for="id">
      <p>{{ value }}</p>
    </label>
  </div>
</template>

<script>
import uuid from "uuid/v4";

export default {
  name: "Step",
  props: {
    index: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      require: true,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    },
    visited: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id() {
      return `step-${uuid()}-${this.index}`;
    },
    computedName() {
      return this.name || this.id;
    },
    classes() {
      return {
        "is-active": this.active,
        "is-visited": this.visited,
        "is-disabled": this.disabled
      };
    },
    link() {
      return {
        name: this.value
      };
    }
  },
  methods: {
    handleChanged() {
      this.$emit("change", this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_colours";

.step {
  position: relative;
  flex: 1;
  background-color: $app-colour-smoky-white;

  &::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::after {
    opacity: 1;
  }

  &.is-active,
  &.is-visited {
    .label {
      cursor: pointer;
    }
  }

  &.is-active {
    background-color: $app-colour-dark;
    opacity: 1;
  }

  &.is-disabled {
    pointer-events: none;
  }
}

.input__step-hidden {
  display: none;
}

.label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
