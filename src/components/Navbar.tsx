const NAV_ITEMS = ['关于我', '核心技能', '最近在玩', '兴趣爱好', '联系']

export function Navbar() {
  const hrefFor = (label: string) => {
    switch (label) {
      case '关于我': return '#about'
      case '核心技能': return '#skills'
      case '最近在玩': return '#now'
      case '兴趣爱好': return '#hobbies'
      case '联系': return '#contact'
      default: return '#'
    }
  }

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-30 px-3 max-w-full">
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-3 py-2 sm:px-5 md:px-8 flex items-center gap-3 sm:gap-5 md:gap-10 lg:gap-14 whitespace-nowrap">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={hrefFor(item)}
            className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
            style={{ color: 'rgba(225, 224, 204, 0.8)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')
            }
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
