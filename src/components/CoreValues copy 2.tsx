import "./CoreValues.css";

export default function CoreValues({ dict }: { dict: any }) {
    const values = [
        {
            title: dict.core_values.v1_title,
            desc: dict.core_values.v1_desc,
            number: "30",
            unit: dict.core_values.v1_unit,
            icon: "👥",
        },
        {
            title: dict.core_values.v2_title,
            desc: dict.core_values.v2_desc,
            number: "200+",
            unit: dict.core_values.v2_unit,
            icon: "🤝",
        },
        {
            title: dict.core_values.v3_title,
            desc: dict.core_values.v3_desc,
            number: "100+",
            unit: dict.core_values.v3_unit,
            icon: "🌍",
        },
    ];

    return (
        <section className="section core-values-section bg-dark" id="gia-tri">
            <div className="container">
                <div className="text-center section-header">
                    <h2 className="text-red">{dict.core_values.section_title}</h2>
                    <p className="subtitle">{dict.core_values.section_subtitle}</p>
                </div>

                <div className="core-values-grid">
                    {values.map((val, idx) => (
                        <div className="value-card animate-fade-in" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
                            <div className="value-icon">{val.icon}</div>
                            <h3 className="value-title">{val.title}</h3>
                            <p className="value-desc">{val.desc}</p>
                            <div className="value-stat">
                                <span className="stat-num text-red">{val.number}</span>
                                <span className="stat-unit">{val.unit}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
