import { createContext, useContext, useState, type ReactNode } from 'react'

interface TabsContextValue {
  active: string
  setActive: (id: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('Tabs.* components must be used inside <Tabs>')
  return ctx
}

interface TabsProps {
  defaultTab: string
  className?: string
  children: ReactNode
}

export function Tabs({ defaultTab, className, children }: TabsProps) {
  const [active, setActive] = useState(defaultTab)
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

interface TabButtonProps {
  id: string
  className?: string
  children: ReactNode
}

export function TabButton({ id, className, children }: TabButtonProps) {
  const { active, setActive } = useTabsContext()
  const isActive = active === id
  return (
    <button
      type="button"
      data-tab={id}
      className={`${className ?? ''} ${isActive ? 'active' : ''}`.trim()}
      onClick={() => setActive(id)}
    >
      {children}
    </button>
  )
}

interface TabPanelProps {
  id: string
  className?: string
  children: ReactNode
}

export function TabPanel({ id, className, children }: TabPanelProps) {
  const { active } = useTabsContext()
  const isActive = active === id
  return (
    <div id={id} className={`${className ?? ''} ${isActive ? 'active' : ''}`.trim()}>
      {children}
    </div>
  )
}
