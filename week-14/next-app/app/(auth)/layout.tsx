export default function ({ children }:
    Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <div>
            <div className="p-4 boder-b">
                20% off limited time only
            </div>
            { children }
        </div>
    );
}