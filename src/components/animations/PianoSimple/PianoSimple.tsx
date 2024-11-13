import {
  useRive,
  Layout,
  Fit,
  Alignment,
  EventType,
  RiveEventType,
} from "@rive-app/react-canvas";
import { useEffect } from "react";
import { useInputStore, UserInputKeys } from "@/store/input";
export const PianoSimple = () => {
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "animations/piano_r1_v1.riv",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: "State Machine 1",
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  const onRiveEventReceived = (riveEvent) => {
    const { input, setInput } = useInputStore.getState();

    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    if (eventData.type === RiveEventType.General) {
      if (eventData.name.includes("White-Event")) {
        const keyName = eventData.name.replace("White-Event-", "");
        const keyWithOctave = `${keyName}4` as UserInputKeys;
        console.log("Key Pressed", keyWithOctave);
        setInput(keyWithOctave, !input[keyWithOctave]);
      }
    }
  };

  // Wait until the rive object is instantiated before adding the Rive
  // event listener
  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

  return <RiveComponent />;
};
export default PianoSimple;
