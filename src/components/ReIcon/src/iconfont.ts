import { h, defineComponent } from "vue";

export default defineComponent({
  name: "FontIcon",
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  render() {
    const attrs = this.$attrs;
    if (Object.keys(attrs).includes("uni") || attrs?.iconType === "uni") {
      return h(
        "i",
        {
          class: "iconfont",
          ...attrs
        },
        this.icon
      );
    } else if (
      Object.keys(attrs).includes("svg") ||
      attrs?.iconType === "svg"
    ) {
      return h(
        "svg",
        {
          class: "icon-svg",
          "aria-hidden": true
        },
        {
          default: () => [
            h("use", {
              "xlink:href": `#${this.icon}`
            })
          ]
        }
      );
    } else {
      return h("i", {
        class: `iconfont ${this.icon}`,
        ...attrs
      });
    }
  }
});
