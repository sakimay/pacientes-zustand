
export default function Error({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-red-500 p-3 font-bold text-sm">{children}</p>
    )
}
