<script>
import Button from "./Button.svelte";
import Switcher from "./Switcher.svelte";
import FormRow from "./FormRow.svelte";
import Input from "./Input.svelte";
import {
  INFO_TEXT,
  INFO_LINK,
  CHAT_GPT_LINK,
} from "../common/consts";
    import Form from "./Form.svelte";
  
let activeBtnIndex = 0;

function handleSwitch(index) {
  if (activeBtnIndex === index) {
    activeBtnIndex = null;
  } else {
    activeBtnIndex = index;
  }
}

</script>

<main class="relative h-full">
  <!-- Background Image -->
  <div class="absolute inset-0 flex items-center justify-center">
    <img src="./bg.svg" alt="bg" />
  </div>

  <!-- Main Content -->
  <div
    class="relative z-10 flex h-full flex-col items-center justify-between pb-[75px]"
  >
    <div class="flex flex-col items-center">
      <div class="flex">
        <Switcher
          img="./stars.svg"
          text="GPT-3.5"
          isActive={activeBtnIndex === 0}
          toggleButton={() => handleSwitch(0)}
        />
        <Switcher
          img="./bolt.svg"
          text="GPT-4"
          isActive={activeBtnIndex === 1}
          toggleButton={() => handleSwitch(1)}
        />
      </div>
      <button
        class="mt-[26px] flex items-center gap-[6.35px] font-medium leading-[26px] text-500"
      >
        No plugins enabled
        <img src="./arrow-down.svg" alt="arrow-down" />
      </button>
    </div>

    <div class="flex w-full max-w-[940px] flex-col gap-5">
      <Form>
        <FormRow label="Send a message" forId="message-input" >
          <Input
            id="message-input"
            placeholder="Send a message"
            cssProps="border border-100 px-[20px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button text="Submit"/>
        </FormRow>
      </Form>

      <span class="flex self-center text-xs leading-3 text-500">
        {INFO_TEXT}
        <a href={CHAT_GPT_LINK} class="text-600 underline">{INFO_LINK} </a>
      </span>
    </div>
  </div>
</main>
