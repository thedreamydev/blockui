export default function XLink() {
  return (
    <div className="mb-12 flex justify-center items-center flex-wrap gap-1">
      <div className=" flex items-center justify-center gap-1 text-sm">
        <span className="text-zinc-500">Crafted by</span>
        <a
          className="font-medium"
          href="https://x.com/intent/follow?screen_name=thedreamydev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @thedreamydev
        </a>
      </div>
      <span className="text-zinc-500 hidden sm:block">•</span>
      <div className="flex items-center justify-center gap-1 text-sm">
        <span className="text-zinc-500">Inspired by the design of</span>
        <a
          className="font-medium"
          href="https://originui.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Origin UI
        </a>
      </div>
    </div>
  );
}
