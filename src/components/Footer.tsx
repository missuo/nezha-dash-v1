import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 lg:px-0 pb-6 pt-2 server-footer">
      <section className="flex flex-col items-center gap-1 server-footer-name">
        <p className="text-[13px] text-neutral-500/60 dark:text-neutral-400/50">Made with ♥️ in SF.</p>
        <p className="text-[11px] text-neutral-400/50 dark:text-neutral-500/40">Powered by OwO Network, LLC</p>
      </section>
    </footer>
  )
}

export default Footer
