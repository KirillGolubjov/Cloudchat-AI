<script>
    import { NAV_LINKS } from "../common/consts";
</script>

 <div class="absolute bottom-0 right-0 mr-[30px] z-20">
    <ul class="flex items-center gap-[35px]">
      {#each NAV_LINKS as link}
        <li>
          <a href="/" class="text-sm leading-6 text-500 cursor-pointer">{link}</a>
        </li>
      {/each}
    </ul>
  </div>