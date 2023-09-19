export default function DashboardLayout({children}: LayoutProps) {
  return (
    <section className="flex flex-col justify-center items-center w-full p-10">
      {children}
    </section>
  )
}