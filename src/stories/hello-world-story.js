import { storiesOf } from "@storybook/vue";
import HelloWorld from "../components/HelloWorld";
import store from "../store/index.js";

storiesOf("HelloWorld", module).add(
  "HelloWorld",
  () => ({
    store,
    components: { HelloWorld },
    template: `
            <div>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            </div>
        `
  }),
  { options: { showPanel: true } }
);
