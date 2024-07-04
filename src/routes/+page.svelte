<script>
import Chat from "../components/Chat.svelte";
    import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";
import Sidebar from "../components/Sidebar.svelte";
</script>

<div class="grid h-screen gap-5 px-5 py-[30px] custom:grid-cols-[310px_6fr] min-h-[1000px]">
  <div class="hidden custom:block">
    <Sidebar />
  </div>
  <div class="relative flex flex-col">
    <Header />
    <Chat />
    <Footer />
  </div>
</div>
