<script>
  import "../app.css";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let inputEl;
  let input = "";
  let history = [];
  onMount(() => {
    window.scrollTo(0, document.body.scrollHeight), inputEl.focus();
  });

  if (browser && localStorage.getItem("history")) {
    history = localStorage.getItem("history").split(",");
  }
  const addChat = (newItem) => {
    if (newItem === "") return;
    history = [...history, newItem];
    localStorage.setItem("history", history);
    window.scrollTo(0, document.body.scrollHeight);
    input = "";
  };
</script>

<svelte:head>
  <title>GhostGPT</title>
</svelte:head>

<main class="max-w-2xl px-4 mx-auto min-h-screen flex flex-col gap-4 pb-32">
  <nav
    class="navbar bg-base-100/80 border-b border-b-base-content/5 backdrop-blur gap-6 sticky top-0 z-10"
  >
    <div class="flex-1 grow-0">
      <span class="text-xl font-bold font-mono">GhostGPT</span>
    </div>
    <div class="flex-none text-base-content/60 text-sm font-mono">
      Get ghosted by AI
    </div>
  </nav>

  <div class="grow">
    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-info">
        Hello, I am GhostGPT. <br />I am a GPT-4 powered chatbot. Ask me
        anything.
      </div>
    </div>

    {#each history as item}
      <div class="chat chat-end">
        <div class="chat-bubble">{item}</div>
        <div class="chat-footer opacity-30 text-xs">Delivered</div>
      </div>
    {/each}
  </div>
  <div class="form-control mt-4">
    <form class="input-group" onsubmit="return false">
      <input
        type="text"
        placeholder="Search…"
        class="input input-bordered grow"
        bind:value={input}
        bind:this={inputEl}
      />
      <button class="btn btn-square" on:click={addChat(input)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  </div>
</main>
