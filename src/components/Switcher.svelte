<script>
export let img;
export let text;
export let isActive;
export let toggleButton;

function handleClick() {
  toggleButton();
}
</script>

<button
  class="flex items-center space-x-2 py-[15.5px] pl-[25px] pr-6 {isActive
    ? 'active rounded-2xl bg-white opacity-100 shadow-black-300'
    : 'opacity-20'}"
  on:click={handleClick}
>
  <span
    class="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-blue-200 p-[11.7px]"
  >
    <img src={img} alt="icon-{text}" />
  </span>
  <span class="text-[18px] font-bold">{text}</span>
</button>
