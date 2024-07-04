<script>
export let label = "";
export let forId = "";
</script>

<div class="w-full flex gap-[10px]">
  <label for={forId} class="sr-only">{label}</label>
  <slot></slot>
</div>


