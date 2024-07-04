<script>
import Logo from "./Logo.svelte";

import { OTHER_PAGES, ADMIN_PAGES } from "../common/consts";
import ProfileContainer from "./ProfileContainer.svelte";
</script>

<aside
  class="flex h-full flex-col justify-between rounded-[20px] shadow-black-200"
>
  <div>
    <div
      class="h-[118px] border-b border-400 pb-[40px] pl-[59px] pr-[58px] pt-[52px]"
    >
      <Logo />
    </div>

    <nav class="ml-[35px] mt-10 flex flex-col gap-[27px]">
      <div>
        <a href="/" class="flex items-center gap-[13px]">
          <img src="./stars.svg" alt="stars" />
          <span class="text-base font-bold">Chat UI</span>
        </a>
      </div>

      <div>
        <a href="/" class="flex items-center gap-[13px]">
          <img src="./list.svg" alt="list" />
          <span class="text-base font-bold">Other Pages</span>
        </a>
        <ul class="ml-[33px] mt-4 flex flex-col gap-[22px]">
          {#each OTHER_PAGES as page}
            <li>
              <a href="/" class="text-500">{page}</a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="relative">
        <div class="opacity-35">
          <a href="/" class="flex items-center gap-[13px]">
            <img src="./lock.svg" alt="list" />
            <span class="text-base">Admin Pages</span>
          </a>
          <ul class="ml-[33px] mt-4 flex flex-col gap-[22px]">
            {#each ADMIN_PAGES as page}
              <li>
                <a href="/" class="text-500">{page}</a>
              </li>
            {/each}
          </ul>
        </div>
        <span
          class="absolute right-[30px] top-0 ml-[49px] flex h-[22px] w-[50px] items-center justify-center rounded-full bg-200 font-bold uppercase text-blue-300"
        >
          pro
        </span>
      </div>
    </nav>
  </div>

  <div class="px-[27px] py-[26px]">
    <ProfileContainer>
      <div class="flex items-center gap-2.5 font-bold">
        <img
        src="./avatar.jpg"
        alt='Avatar of Name Surname'
        class="h-[41px] w-[41px]"
      />
        Name Surname
      </div>
      <button class="rounded-full border border-400 p-[10.46px]">
        <img src="./exit.svg" alt="exit" />
      </button>
    </ProfileContainer>
  </div>
</aside>
