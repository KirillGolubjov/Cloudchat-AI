<script>
import Form from "./Form.svelte";
import FormRow from "./FormRow.svelte";
import Input from "./Input.svelte";
import ProfileContainer from "./ProfileContainer.svelte";
</script>

<header
  class="mb-[22px] ml-[33px] mr-[1px] mt-[27px] flex items-center justify-between"
>
  <h1>Chat UI</h1>
  <ProfileContainer>
    <div class="relative">
    <Form>
      <FormRow label="Search" forId="search-input" >
        <Input
          id="search-input"
          placeholder="Search"
          cssProps="bg-300 px-[42px] pb-[11px] pt-[10px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormRow>
    </Form>
    
      <img
        src="./search.svg"
        alt="search-icon"
        class="absolute left-5 top-1/2 -translate-y-1/2 transform"
      />
    </div>
      <button>
        <img src="./moon.svg" alt="moon" class="h-6 w-6" />
      </button>
    <img src='./avatar.jpg' alt="avatar" class="h-10 w-10 rounded-full" />
  </ProfileContainer>
</header>
