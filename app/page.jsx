import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Disseminate
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Power AI with human Prompts
        </span>
      </h1>
      <p className="desc text-center">
        PromptIT: A Modern-Day Muse for Prompt Discovery, Creation, and Sharing!
      </p>
      <Feed />
    </section>
  );
}

export default Home;
