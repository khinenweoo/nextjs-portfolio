import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-3xl p-[1.5px] focus:outline-none w-52 md:mt-2" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl
        bg-gradient-to-br from-darkpurple to-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button> 
  )
}

export default MagicButton