export default function ResultPanel({recipe}){
    if (!recipe){
        return(
            <section className="result empty">
                <p>No recipe yet. FIll the form and click Generate.</p>
            </section>
        );
    }
    const {
        title,
        summary,
        servings,
        total_time_min,
        ingredients = [],
        steps = [],
        warnings = [],
    } = recipe;

    return (
        <section className="result-card">
            <header className="result-header">
                <h2 className="result-title">
                    {title || "Untitled recipe"}
                </h2>
                <div className="result-meta">
                    {Number.isFinite(servings) && <span>{servings} servings</span>}
                    {Number.isFinite(total_time_min) && (
                        <span>{total_time_min} mins total</span>
                    )}
                </div>
                {summary && <p className="result-summary">{summary}</p>}
            </header>
            <div className="result-section">
                <h3>Ingredients</h3>
                {ingredients.length === 0 ? (
                    <p className="muted">No ingredients listed.</p>
                ) : (
                    <ul className="ingredients-list">
                        {ingredients.map((ing, idx) => {
                            const qty = ing.qty ?? "";
                            const unit = ing.unit ?? "";
                            const name = ing.name ?? "";
                            const notes = ing.notes ? `- ${ing.notes}` : "";
                            const line = [qty, unit, name].filter(Boolean).join(" ");
                            return <li key={idx}>{line}{notes}</li>;
                        })}
                    </ul>
                )}
            </div>
            <div className="result-section">
                <h3>Steps</h3>
                {steps.length === 0 ? (
                    <p className="muted">No steps provided.</p>
                ) : (
                    <ol className="steps-list">
                        {steps.map((s) => (
                            <li key={s.no ?? Math.random()}>
                                <div className="step-line">
                                    <span className="step-text">{s.text}</span>
                                    {Number.isFinite(s.time_min) && (
                                        <span className="step-time">{s.time_min} min</span>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
            {warnings.length > 0 && (
                <div className="result-section warnings">
                    <h3>Notes & Warnings</h3>
                    <ul>
                    {warnings.map((w, i) => (
                        <li key={i}>{w}</li>
                    ))}
                    </ul>
                </div>
            )}
        </section>
    )
}