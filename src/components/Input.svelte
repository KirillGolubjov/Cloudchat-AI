<script>
export let placeholder;
export let id;
export let cssProps;
</script>

<input
  type="text"
  id={id}
  placeholder={placeholder}
  class="w-full h-auto rounded-full {cssProps}"
/>
