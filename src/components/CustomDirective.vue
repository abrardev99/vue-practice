<template>
  <div>
    <h3 v-success>New Directive Successfully registered</h3>

    <h3 v-change-color="'blue'">Change color by passing value to custom directive</h3>

    <h3
      v-arg-color:bg="'red'"
    >Change color by passing argument to custom directive. passing bg argument to change bg color</h3>

    <h3
      v-arg-color="'yellow'"
    >Change color by passing argument to custom directive. default is changing color</h3>

    <!-- multiple modifiers -->
    <!-- passing object -->
    <h3 v-changer:color.b.u="{passedColor: 'red'}">{{ text }}</h3>
    <br />
    <br />
    <!-- passing multiple values a object -->
    <h3 v-blink="{firstColor: 'yellow', secondColor: 'green' }">Blink Directive</h3>
  </div>
</template>
<script>
export default {
  // registering directive locally
  directives: {
    changer: {
      bind(el, binding, vNode) {
        setTimeout(() => {
          if (binding.modifiers["u"]) {
            el.style.textDecoration = "underline";
          }

          // binding arg receving arguement, can say modofiers
          // receving values passing to directive
          if (binding.arg == "bg") {
            if (binding.modifiers["b"]) {
              el.style.backgroundColor = binding.value.passedColor;
              el.style.fontWeight = "bold";
            } else {
              el.style.backgroundColor = binding.value.passedColor;
            }
          } else if (binding.arg == "color") {
            if (binding.modifiers["b"]) {
              el.style.color = binding.value.passedColor;
              el.style.fontWeight = "bold";
            } else {
              el.style.color = binding.value.passedColor;
            }
          }
        }, 3000);
      }
    },

    // receiving multiple values
    blink: {
      bind(el, binding) {
        var firstColor = binding.value.firstColor;
        var secondColor = binding.value.secondColor;

        var currentColor = firstColor;
        setInterval(() => {
          if (currentColor == firstColor) {
            el.style.color = currentColor;
            currentColor = secondColor;
          } else {
            el.style.color = currentColor;
            currentColor = firstColor;
          }
        }, 500);
      }
    }
  },

  data() {
    return {
      text: "local directive:Changer"
    };
  }
};
</script>
<style scoped>
</style>