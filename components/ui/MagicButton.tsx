import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-14 overflow-hidden rounded-3xl p-[1.5px] shadow-2xl focus:outline-none w-52 md:mt-2 bg-violet-300 dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" onClick={handleClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] " />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl
        bg-orange-100 dark:bg-gradient-to-br dark:from-darkpurple dark:to-slate-950 px-2 text-sm font-medium text-neutral-600 dark:text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button> 
  )
}

export default MagicButton