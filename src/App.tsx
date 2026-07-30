import {MyForm} from "./MyForm"
import {NotificationSettings} from "./NotificationSettings"
import {SimpleSlider} from "@/SimpleSlider.tsx";
import {RangeSliderExample} from "@/RangeSliderExample.tsx";
import {DiscreteSlider} from "@/DiscreteSlider.tsx";

function App() {
  return (
    <>
    <MyForm />
      <NotificationSettings />
      <SimpleSlider />
      <RangeSliderExample />
      <DiscreteSlider />
        </>
  );
}

export default App;
