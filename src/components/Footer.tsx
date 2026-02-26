import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 lg:px-0 pb-6 pt-2 server-footer">
      <section className="flex flex-col items-center gap-1 server-footer-name">
        <p className="text-[13px] italic tracking-wide text-neutral-500/60 dark:text-neutral-400/50">Made with ♥️ with SF.</p>
        <p className="text-[11px] tracking-widest uppercase text-neutral-400/50 dark:text-neutral-500/40">Powered by OwO Network, LLC</p>
      </section>
    </footer>
  )
}

export default Footer
