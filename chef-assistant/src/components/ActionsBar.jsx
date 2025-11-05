export default function ActionsBar( {
    onReset,
    onRegenerate,
    onCopy,
    onPrint,
    hasResult = false,
    canRegnerate = false,
}) {
    return (
        <div className="actions-bar">
            <button 
            className="btn" 
            type="button" 
            onClick={onReset}>
                Reset
            </button>
            <button 
            className="btn"
            type="button"
            onClick={onRegenerate}
            disabled={!canRegnerate}
            title={!canRegnerate ? "Generate once before regnerating" : ""}>
                Regenerate
            </button>
            <button 
            className="btn"
            type="button"
            onClick={onCopy}
            disabled={!hasResult}
            title={!hasResult ? "No recipe to copy yet" : ""}>
                Copy
            </button>
            <button 
            className="btn"
            type="button"
            onClick={onPrint}
            disabled={!hasResult}
            title={!hasResult ? "No recipe to print yet" : ""}>
                Print
            </button>
        </div>
    )
}